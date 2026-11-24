#!/usr/bin/env python3
"""Gate 1 security hygiene and loopback server binding verifier."""

import json
import os
import re
import sys
from pathlib import Path
from typing import List

PROJECT_ROOT = Path(__file__).resolve().parent.parent
EXCLUDED_DIRS = {
    "target",
    "logs",
    "__pycache__",
    "dbt_packages",
    "node_modules",
    ".evidence",
    "build",
    ".git",
    ".venv",
    ".dagster_home",
}
BINARY_EXTS = {".duckdb", ".png", ".jpg", ".jpeg", ".gif", ".ico", ".pyc", ".parquet", ".wasm"}

WILDCARD_IPV4_RE = re.compile(r"\b0\.0\.0\.0\b")
WILDCARD_IPV6_RE = re.compile(r"(?<![0-9a-fA-F:])::(?![0-9a-fA-F:])")
UNSAFE_HOST_FLAG_RE = re.compile(
    r"--host(?!(?:=|\s+)(?:127\.0\.0\.1|localhost|::1)(?:\s|$|['\"]))(?:\s|$|=)"
)
HTTP_SERVER_RE = re.compile(r"-m\s+http\.server\b")
HTTP_SERVER_LOOPBACK_RE = re.compile(r"(?:--bind|-b)(?:=|\s+)(?:127\.0\.0\.1|localhost|::1)\b")
NPX_SERVE_RE = re.compile(r"\bnpx\s+(?:--yes\s+|-y\s+)?serve\b")
SERVE_LOOPBACK_RE = re.compile(r"(?:-l|--listen)(?:=|\s+)tcp://(?:127\.0\.0\.1|localhost):")
DOCKER_PUBLISH_RE = re.compile(r"\bdocker\s+run\b.*?\s-p\s+(?!(?:127\.0\.0\.1|localhost):)")
LITERAL_GCP_SA_RE = re.compile(r"[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.iam\.gserviceaccount\.com")


def check_command_binding(cmd: str, source_label: str) -> List[str]:
    issues: List[str] = []
    if WILDCARD_IPV4_RE.search(cmd):
        issues.append(f"{source_label}: wildcard IPv4 bind detected")
    if WILDCARD_IPV6_RE.search(cmd):
        issues.append(f"{source_label}: wildcard IPv6 bind detected")
    if UNSAFE_HOST_FLAG_RE.search(cmd):
        issues.append(f"{source_label}: --host flag missing explicit loopback address")
    if HTTP_SERVER_RE.search(cmd) and not HTTP_SERVER_LOOPBACK_RE.search(cmd):
        issues.append(f"{source_label}: http.server missing --bind 127.0.0.1")
    if NPX_SERVE_RE.search(cmd) and not SERVE_LOOPBACK_RE.search(cmd):
        issues.append(f"{source_label}: serve command missing -l tcp://127.0.0.1:<port>")
    if DOCKER_PUBLISH_RE.search(cmd):
        issues.append(f"{source_label}: docker run -p missing 127.0.0.1: prefix")
    return issues


def load_local_secrets() -> List[str]:
    patterns: List[str] = []
    env_proj = os.environ.get("GCP_PROJECT_ID", "").strip()
    if env_proj and env_proj not in ("<configure_me>", "your-gcp-project-id"):
        patterns.append(env_proj)

    secrets_path = PROJECT_ROOT / ".dlt" / "secrets.toml"
    if not secrets_path.exists():
        return patterns
    try:
        import tomlkit

        with open(secrets_path, "r", encoding="utf-8") as f:
            data = tomlkit.load(f)
        proj = data.get("gcp", {}).get("project_id", "")
        if proj and proj != "<configure_me>" and str(proj) not in patterns:
            patterns.append(str(proj))
        pg_pass = data.get("destination", {}).get("postgres", {}).get("credentials", {}).get("password", "")
        if pg_pass and pg_pass != "<configure_me>":
            patterns.append(str(pg_pass))
    except Exception:
        pass
    return patterns


def scan_secrets() -> List[str]:
    issues: List[str] = []
    secret_literals = load_local_secrets()
    scan_targets = [
        PROJECT_ROOT / "infra",
        PROJECT_ROOT / "dbt_transform",
        PROJECT_ROOT / "orchestration",
        PROJECT_ROOT / ".github" / "workflows",
        PROJECT_ROOT / "deploy",
        PROJECT_ROOT / "pipeline.sh",
    ]
    self_path = Path(__file__).resolve()

    def inspect_file(file_path: Path) -> None:
        if file_path.resolve() == self_path or file_path.suffix.lower() in BINARY_EXTS:
            return
        try:
            text = file_path.read_text(encoding="utf-8")
        except Exception:
            return
        rel = file_path.relative_to(PROJECT_ROOT)
        for line_no, line in enumerate(text.splitlines(), 1):
            for secret in secret_literals:
                if secret in line:
                    issues.append(f"{rel}:{line_no}: hardcoded local secret/project identifier detected")
            if LITERAL_GCP_SA_RE.search(line) and "${" not in line:
                issues.append(f"{rel}:{line_no}: hardcoded GCP service account email detected")

    for target in scan_targets:
        if target.is_file():
            inspect_file(target)
        elif target.is_dir():
            for root, dirs, files in os.walk(target):
                dirs[:] = [d for d in dirs if d not in EXCLUDED_DIRS]
                for fname in files:
                    inspect_file(Path(root) / fname)
    return issues


def scan_server_bindings() -> List[str]:
    issues: List[str] = []

    pkg_path = PROJECT_ROOT / "evidence_dashboard" / "package.json"
    if pkg_path.exists():
        pkg = json.loads(pkg_path.read_text(encoding="utf-8"))
        for script_name, script_cmd in pkg.get("scripts", {}).items():
            if isinstance(script_cmd, str):
                issues.extend(check_command_binding(script_cmd, f"evidence_dashboard/package.json[scripts.{script_name}]"))

    server_files = [
        PROJECT_ROOT / "pipeline.sh",
        PROJECT_ROOT / "deploy" / "deploy_all.sh",
        PROJECT_ROOT / "deploy" / "gcp" / "chat_proxy" / "server.py",
    ]
    for fpath in server_files:
        if not fpath.exists():
            continue
        rel = fpath.relative_to(PROJECT_ROOT)
        for line_no, raw_line in enumerate(fpath.read_text(encoding="utf-8").splitlines(), 1):
            stripped = raw_line.strip()
            if not stripped or stripped.startswith("#"):
                continue
            issues.extend(check_command_binding(stripped, f"{rel}:{line_no}"))

    return issues


def run_self_tests() -> None:
    assert check_command_binding("evidence dev --host 127.0.0.1 --open /", "t") == []
    assert check_command_binding("evidence dev --host ::1 --open /", "t") == []
    assert check_command_binding("python3 -m http.server 3000 --bind 127.0.0.1 --directory build", "t") == []
    assert check_command_binding("npx serve build -l tcp://127.0.0.1:3000", "t") == []
    assert check_command_binding("from http.server import BaseHTTPRequestHandler, HTTPServer", "t") == []

    assert check_command_binding("evidence dev --host", "t") != []
    assert check_command_binding("evidence dev --host --open /", "t") != []
    assert check_command_binding("evidence dev --host true", "t") != []
    assert check_command_binding("evidence dev --host $HOST", "t") != []
    assert check_command_binding("dagster dev -h 0.0.0.0 -p 3001", "t") != []
    assert check_command_binding("dagster dev -h :: -p 3001", "t") != []
    assert check_command_binding("python3 -m http.server 4173 --directory /tmp", "t") != []
    assert check_command_binding("npx serve build", "t") != []
    assert check_command_binding("docker run -p 3000:3000 app", "t") != []
    print("OK: verify_security.py self-tests passed.")


def main() -> int:
    if "--self-test" in sys.argv:
        run_self_tests()
        return 0

    issues = scan_secrets() + scan_server_bindings()
    if issues:
        for item in issues:
            print(f"FAIL: {item}")
        return 1

    print("✓ Gate 1 Passed: Zero hardcoded secrets, cloud IDs, or non-loopback server bindings.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
