"""In-memory rate limiter enforcing per-session allowances and protecting Gemini quotas."""

import time
from collections import deque
from datetime import datetime, timezone
from typing import Dict, Tuple

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

        current_ip_count = self.ip_daily_count.get(client_ip, 0)
        session_remaining = max(0, self.max_ip_rpd - current_ip_count)

        # 1. Check user per-session daily allowance (max 20)
        if current_ip_count >= self.max_ip_rpd:
            return (
                False,
                f"Session query limit reached ({self.max_ip_rpd} queries per session). Resets at 00:00 UTC.",
                0
            )

        # 2. Check internal global daily circuit breaker (1000)
        if self.daily_count >= self.max_rpd:
            return (
                False,
                "Analytical query capacity temporarily reached for today. Resets at 00:00 UTC.",
                0
            )

        # 3. Clean and check global RPM
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

        # 4. Clean and check per-IP RPM
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

        # 5. Record request
        self.global_requests.append(now)
        ip_queue.append(now)
        self.daily_count += 1
        self.ip_daily_count[client_ip] = current_ip_count + 1

        new_session_remaining = max(0, self.max_ip_rpd - self.ip_daily_count[client_ip])
        return (True, "", new_session_remaining)
