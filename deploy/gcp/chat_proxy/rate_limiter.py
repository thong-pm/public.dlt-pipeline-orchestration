"""Rate limiter with sliding window enforcement and distributed store support."""

import json
import os
import time
import urllib.request
import urllib.error
from collections import deque
from datetime import datetime, timezone
from typing import Any, Dict, Optional, Tuple

class DistributedStore:
    """Pluggable key-value store supporting REST Redis, file persistence, and in-memory cache."""

    def __init__(self) -> None:
        self.redis_url = os.environ.get("REDIS_REST_URL") or os.environ.get("UPSTASH_REDIS_REST_URL")
        self.redis_token = os.environ.get("REDIS_REST_TOKEN") or os.environ.get("UPSTASH_REDIS_REST_TOKEN")
        self.file_path = os.environ.get("RATE_LIMIT_STORAGE_FILE")
        self.memory_store: Dict[str, Tuple[float, Any]] = {}

    def _redis_command(self, *command_parts: str) -> Optional[Any]:
        if not self.redis_url or not self.redis_token:
            return None
        url = self.redis_url.rstrip("/") + "/" + "/".join(command_parts)
        req = urllib.request.Request(
            url,
            headers={"Authorization": f"Bearer {self.redis_token}"}
        )
        try:
            with urllib.request.urlopen(req, timeout=1.0) as resp:
                data = json.loads(resp.read().decode("utf-8"))
                return data.get("result")
        except Exception:
            return None

    def get(self, key: str) -> Optional[Any]:
        if self.redis_url and self.redis_token:
            res = self._redis_command("get", key)
            if res is not None:
                try:
                    return json.loads(res)
                except Exception:
                    return res
        if key in self.memory_store:
            expiry, val = self.memory_store[key]
            if expiry == 0 or time.time() < expiry:
                return val
            del self.memory_store[key]
        return None

    def set(self, key: str, value: Any, ttl_seconds: int = 0) -> None:
        val_str = json.dumps(value) if not isinstance(value, (int, str)) else str(value)
        if self.redis_url and self.redis_token:
            if ttl_seconds > 0:
                self._redis_command("setex", key, str(ttl_seconds), val_str)
            else:
                self._redis_command("set", key, val_str)
        expiry = time.time() + ttl_seconds if ttl_seconds > 0 else 0
        self.memory_store[key] = (expiry, value)

    def incr(self, key: str, ttl_seconds: int = 86400) -> int:
        if self.redis_url and self.redis_token:
            res = self._redis_command("incr", key)
            if isinstance(res, int):
                self._redis_command("expire", key, str(ttl_seconds))
                return res
        curr = self.get(key)
        new_val = (int(curr) if curr is not None else 0) + 1
        self.set(key, new_val, ttl_seconds=ttl_seconds)
        return new_val


class RateLimiter:
    def __init__(
        self,
        max_requests_per_minute: int = 10,
        max_requests_per_day: int = 1000,
        max_per_ip_per_minute: int = 5,
        max_per_ip_per_day: int = 20
    ) -> None:
        self.max_rpm = max_requests_per_minute
        self.max_rpd = max_requests_per_day
        self.max_ip_rpm = max_per_ip_per_minute
        self.max_ip_rpd = max_per_ip_per_day

        self.store = DistributedStore()
        self.global_requests: deque = deque()
        self.ip_requests: Dict[str, deque] = {}
        self.ip_daily_count: Dict[str, int] = {}
        self.daily_count: int = 0
        self.current_day: str = datetime.now(timezone.utc).strftime("%Y-%m-%d")

    def _reset_daily_if_needed(self) -> None:
        today = datetime.now(timezone.utc).strftime("%Y-%m-%d")
        if today != self.current_day:
            self.current_day = today
            self.daily_count = 0
            self.ip_daily_count.clear()
            self.ip_requests.clear()

    def check(self, client_ip: str) -> Tuple[bool, str, int]:
        """
        Evaluate if a request from client_ip is permitted.
        Returns: (is_allowed, error_message, user_session_remaining)
        """
        now = time.time()
        one_minute_ago = now - 60.0

        self._reset_daily_if_needed()
        today = self.current_day

        # Check external distributed counter if configured
        ip_day_key = f"copilot:ratelimit:ip:{client_ip}:{today}"
        global_day_key = f"copilot:ratelimit:global:{today}"

        dist_ip_count = self.store.get(ip_day_key)
        current_ip_count = int(dist_ip_count) if dist_ip_count is not None else self.ip_daily_count.get(client_ip, 0)
        session_remaining = max(0, self.max_ip_rpd - current_ip_count)

        if current_ip_count >= self.max_ip_rpd:
            return (
                False,
                f"Session query limit reached ({self.max_ip_rpd} queries per session). Resets at 00:00 UTC.",
                0
            )

        dist_global_count = self.store.get(global_day_key)
        curr_global_count = int(dist_global_count) if dist_global_count is not None else self.daily_count
        if curr_global_count >= self.max_rpd:
            return (
                False,
                "Analytical query capacity temporarily reached for today. Resets at 00:00 UTC.",
                0
            )

        # In-memory sliding window for short-term RPM
        while self.global_requests and self.global_requests[0] < one_minute_ago:
            self.global_requests.popleft()

        if len(self.global_requests) >= self.max_rpm:
            earliest = self.global_requests[0]
            wait_time = int(max(1.0, 60.0 - (now - earliest)))
            return (
                False,
                f"Global request concurrency reached. Please wait {wait_time}s.",
                session_remaining
            )

        ip_queue = self.ip_requests.setdefault(client_ip, deque())
        while ip_queue and ip_queue[0] < one_minute_ago:
            ip_queue.popleft()

        if len(ip_queue) >= self.max_ip_rpm:
            earliest = ip_queue[0]
            wait_time = int(max(1.0, 60.0 - (now - earliest)))
            return (
                False,
                f"Rate limit exceeded ({self.max_ip_rpm} queries/min). Please retry in {wait_time}s.",
                session_remaining
            )

        # Record request locally and in distributed store
        self.global_requests.append(now)
        ip_queue.append(now)
        self.daily_count += 1
        self.ip_daily_count[client_ip] = current_ip_count + 1

        new_count = self.store.incr(ip_day_key, ttl_seconds=86400)
        self.store.incr(global_day_key, ttl_seconds=86400)

        new_session_remaining = max(0, self.max_ip_rpd - new_count)
        return (True, "", new_session_remaining)
