import os
import sys
import argparse
import requests
import tomlkit
import re

def send_slack_message(webhook_url, payload):
    try:
        res = requests.post(webhook_url, json=payload, timeout=10)
        res.raise_for_status()
        print("[Slack Notifier] Notification sent successfully.")
    except Exception as e:
        print(f"[Slack Notifier] Failed to send notification: {e}", file=sys.stderr)

def parse_logs(log_file_path):
    if not os.path.exists(log_file_path):
        return [], [], [], [], []

    with open(log_file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Strip ANSI color codes from log content
    ansi_escape = re.compile(r'\x1B(?:[@-Z\\-_]|\[[0-?]*[ -/]*[@-~])')
    clean_content = ansi_escape.sub('', content)

    dlt_summaries = []
    dbt_summaries = []
    errors = []
    skipped_sources = []
    disabled_sources = []

    # 1. Parse DLT Pipeline summaries
    matches = re.finditer(r'([A-Za-z0-9]+)\s+Pipeline Summary\s*={10,}\s*(.*?)\s*={10,}', clean_content, re.DOTALL)
    for m in matches:
        source_name = m.group(1)
        body = m.group(2).strip()
        body_lines = [line.strip() for line in body.splitlines() if not all(c in '─-=' for c in line.strip())]
        dlt_summaries.append(f"*{source_name} Pipeline Ingestion*:\n" + "\n".join(body_lines))

    # 2. Parse dbt Run summaries
    dbt_done_matches = re.findall(r'Done\.\s+PASS=\d+\s+WARN=\d+\s+ERROR=\d+.*', clean_content)
    if dbt_done_matches:
        for idx, m in enumerate(dbt_done_matches):
            label = "dbt run (models)" if idx == 0 else "dbt test (data tests)"
            dbt_summaries.append(f"{label}: `{m.strip()}`")

    # 3. Parse dbt completion timing/summary
    dbt_finish_matches = re.findall(r'Finished running \d+.*models in \d+.*', clean_content)
    if dbt_finish_matches:
        for m in dbt_finish_matches:
            dbt_summaries.append(m.strip())

    # 4. Extract errors if we failed
    if "FAILED:" in clean_content or "Traceback (most recent call last):" in clean_content:
        for line in clean_content.splitlines():
            if "FAILED:" in line or "Error:" in line or "ResourceExtractionError" in line:
                errors.append(line.strip())
        if not errors and "Traceback (most recent call last):" in clean_content:
            errors.append("Python execution encountered a Traceback exception. Check Cloud Logging for details.")

    # 5. Extract skipped sources
    skipped_match = re.search(r'Skipp(?:ing|ed) \((?:not authorized|no auth)\):\s*(.*)', clean_content)
    if skipped_match:
        skipped_str = skipped_match.group(1).strip()
        if skipped_str:
            skipped_sources = [s.strip() for s in skipped_str.split(",")]

    # 6. Extract disabled sources
    disabled_match = re.search(r'Disabled \((?:in config)\):\s*(.*)', clean_content)
    if disabled_match:
        disabled_str = disabled_match.group(1).strip()
        if disabled_str:
            disabled_sources = [s.strip() for s in disabled_str.split(",")]

    return dlt_summaries, dbt_summaries, errors, skipped_sources, disabled_sources


def main():
    parser = argparse.ArgumentParser(description="Send pipeline execution summaries to Slack")
    parser.add_argument("--dlt-code", type=int, required=True, help="DLT process exit code")
    parser.add_argument("--dbt-code", type=int, required=True, help="dbt build process exit code")
    parser.add_argument("--test-code", type=int, required=True, help="dbt test process exit code")
    parser.add_argument("--log-file", type=str, required=True, help="Path to execution log file")
    args = parser.parse_args()

    # Load Slack webhook url from environment or secrets.toml
    webhook_url = os.environ.get("SLACK_WEBHOOK_URL")
    if not webhook_url:
        try:
            with open(".dlt/secrets.toml", "r") as f:
                secrets = tomlkit.load(f)
            webhook_url = secrets.get("slack", {}).get("webhook_url")
        except Exception as e:
            print(f"[Slack Notifier] Error reading secrets.toml: {e}", file=sys.stderr)
            sys.exit(1)

    if not webhook_url or webhook_url == "<configure_me>" or "mock/webhook/url" in webhook_url:
        print("[Slack Notifier] Slack Webhook URL not configured. Skipping notification.")
        sys.exit(0)

    dlt_ok = args.dlt_code == 0
    dbt_ok = args.dbt_code == 0
    test_ok = args.test_code == 0
    full_success = dlt_ok and dbt_ok and test_ok

    dlt_sums, dbt_sums, errors, skipped_sources, disabled_sources = parse_logs(args.log_file)

    # Determine status color and emoji
    if skipped_sources and full_success:
        color = "#DAA038"  # Orange
        status_text = "Pipeline Completed with Skipped Sources"
        emoji = "⚠️"
    elif full_success:
        color = "#2EB886"  # Green
        status_text = "Pipeline Executed Successfully"
        emoji = "✅"
    elif not dlt_ok and not dbt_ok:
        color = "#A30200"  # Red
        status_text = "Pipeline Execution Failed (Critical)"
        emoji = "🚨"
    else:
        color = "#DAA038"  # Orange
        status_text = "Pipeline Completed with Warnings/Failures"
        emoji = "⚠️"

    blocks = [
        {
            "type": "header",
            "text": {
                "type": "plain_text",
                "text": f"{emoji} {status_text}",
                "emoji": True
            }
        },
        {
            "type": "section",
            "fields": [
                {"type": "mrkdwn", "text": f"*Ingestion (DLT)*: {'`PASS`' if dlt_ok else '`FAIL`'}"},
                {"type": "mrkdwn", "text": f"*Transformation (dbt)*: {'`PASS`' if dbt_ok else '`FAIL`'}"},
                {"type": "mrkdwn", "text": f"*Validation Tests*: {'`PASS`' if test_ok else '`FAIL`'}"}
            ]
        }
    ]

    # Add Skipped Sources Warning
    if skipped_sources:
        blocks.append({"type": "divider"})
        blocks.append({
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "⚠️ *Skipped Sources (Authentication Failed)*:\n" + "\n".join([f"• `{s}`" for s in skipped_sources])
            }
        })

    # Add Disabled Sources Warning
    if disabled_sources:
        blocks.append({"type": "divider"})
        blocks.append({
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "*Disabled Sources (Configured Off)*:\n" + "\n".join([f"• `{s}`" for s in disabled_sources])
            }
        })


    # Add Ingestion Details
    if dlt_sums:
        blocks.append({"type": "divider"})
        blocks.append({
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "*Ingestion Row Counts:*"
            }
        })
        for ds in dlt_sums:
            blocks.append({
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": ds
                }
            })

    # Add Transformation Details
    if dbt_sums:
        blocks.append({"type": "divider"})
        blocks.append({
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "*Transformation Results:*\n" + "\n".join([f"• {ds}" for ds in dbt_sums])
            }
        })

    # Add Errors section
    if errors:
        blocks.append({"type": "divider"})
        blocks.append({
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "*Error logs detected:*\n" + "\n".join([f"• `{err}`" for err in errors[:5]])
            }
        })

    payload = {
        "attachments": [
            {
                "color": color,
                "blocks": blocks
            }
        ]
    }

    send_slack_message(webhook_url, payload)

if __name__ == "__main__":
    main()
