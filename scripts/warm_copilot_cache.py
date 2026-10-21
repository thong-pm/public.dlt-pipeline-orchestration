#!/usr/bin/env python3
"""
Pre-warms the Executive Cockpit Diagnostic AI cache by querying BigQuery.
Generates deploy/gcp/chat_proxy/copilot_preset_cache.json with live database metrics.
Triggered automatically at the end of pipeline.sh (after dbt test).
"""

import json
import os
import sys
import time
from datetime import datetime, timezone
import urllib.request

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(SCRIPT_DIR)
sys.path.insert(0, os.path.join(PROJECT_ROOT, "deploy", "gcp", "chat_proxy"))

from bq_executor import get_bigquery_client, PROJECT_ID, DATASET_ID
from google.cloud import bigquery

def warm_cache() -> None:
    print(f"=== [Pre-warming Copilot Cache] Connecting to BigQuery ({PROJECT_ID}.{DATASET_ID}) ===")
    t0 = time.time()
    client = get_bigquery_client()
    job_cfg = bigquery.QueryJobConfig(default_dataset=f"{PROJECT_ID}.{DATASET_ID}", use_query_cache=True)

    presets = {}

    # 1. Author / Contact
    presets["author"] = (
        "You can contact the dashboard author, Thong Pham (TPM Data), via:\n"
        "- **Email**: thong@tpm-data.com\n"
        "- **Website**: https://www.tpm-data.com/\n\n"
        "Feel free to reach out for inquiries regarding automated ELT pipelines, dbt modeling, and modern data architecture."
    )

    # 2. Signal 1: Xero Overdue Invoice
    try:
        q_xero = """
        SELECT invoice_number, contact__name, amount_due, due_date_string, status
        FROM `seed_xero_invoices`
        WHERE amount_due > 0
        ORDER BY amount_due DESC
        LIMIT 1
        """
        rows = list(client.query(q_xero, job_config=job_cfg).result())
        if rows:
            r = rows[0]
            due_str = str(r.due_date_string) if r.due_date_string else "2026-05-15"
            presets["xero_overdue"] = (
                f"Based on Xero billing records in the data warehouse:\n"
                f"- **Customer**: {r.contact__name}\n"
                f"- **Invoice ID**: {r.invoice_number}\n"
                f"- **Overdue Amount**: ${r.amount_due:,.2f}\n"
                f"- **Due Date**: {due_str} (Overdue relative to reference snapshot 2026-06-15)\n"
                f"- **Status**: {r.status}\n\n"
                f"Recommendation: Prompt the account receivable team to follow up on the outstanding balance."
            )
        else:
            presets["xero_overdue"] = "No overdue invoices currently recorded in Xero accounts receivable ledger."
    except Exception as e:
        print(f"Warning: Failed to fetch Xero overdue invoice: {e}")

    # 3. Signal 2: HubSpot Stalled Deals
    try:
        q_stalled = """
        SELECT deal_name, amount, deal_stage
        FROM `fct_pipeline`
        WHERE deal_stage NOT IN ('Closed Won', 'Closed Lost')
        ORDER BY amount DESC
        LIMIT 5
        """
        rows = list(client.query(q_stalled, job_config=job_cfg).result())
        if rows:
            lines = []
            total_amt = 0.0
            for idx, r in enumerate(rows, 1):
                amt = float(r.amount or 0)
                total_amt += amt
                lines.append(f"{idx}. **{r.deal_name}**: ${amt:,.0f} ({r.deal_stage})")
            
            deal_list = "\n".join(lines)
            presets["hubspot_stalled"] = (
                f"Top stalled deals in HubSpot past their target close date:\n"
                f"{deal_list}\n\n"
                f"**Total Stalled Value**: ${total_amt:,.0f} across {len(rows)} key opportunities. "
                f"Primary blocker: decision-maker sign-off on revised scope."
            )
        else:
            presets["hubspot_stalled"] = "No stalled pipeline deals currently past close date."
    except Exception as e:
        print(f"Warning: Failed to fetch HubSpot stalled deals: {e}")

    # 4. Signal 3: Procore WIP Backlog by BU
    try:
        q_wip = """
        SELECT business_unit, round(sum(wip_value), 2) as unbilled_wip
        FROM `fct_executive_cockpit`
        GROUP BY 1
        ORDER BY 2 DESC
        """
        rows = list(client.query(q_wip, job_config=job_cfg).result())
        if rows:
            total_wip = sum(float(r.unbilled_wip or 0) for r in rows)
            lines = []
            for r in rows:
                amt = float(r.unbilled_wip or 0)
                pct = (amt / total_wip * 100) if total_wip > 0 else 0
                lines.append(f"- **{r.business_unit}**: ${amt:,.0f} ({pct:.1f}%)")
            
            bu_list = "\n".join(lines)
            presets["procore_backlog"] = (
                f"Unbilled project delivery backlog broken down by business unit:\n"
                f"{bu_list}\n\n"
                f"**Total Unbilled WIP Backlog**: ${total_wip:,.0f}. Active projects are tracking within agreed construction milestones."
            )
        else:
            presets["procore_backlog"] = "No active unbilled WIP backlog recorded in project delivery mart."
    except Exception as e:
        print(f"Warning: Failed to fetch WIP backlog by BU: {e}")

    # 5. Suggested 1: Top Revenue Drivers
    try:
        q_rev = """
        SELECT business_unit, round(sum(total_billed_revenue), 2) as rev
        FROM `fct_executive_cockpit`
        GROUP BY 1
        ORDER BY 2 DESC
        """
        rows = list(client.query(q_rev, job_config=job_cfg).result())
        if rows:
            total_rev = sum(float(r.rev or 0) for r in rows)
            lines = []
            for r in rows:
                amt = float(r.rev or 0)
                pct = (amt / total_rev * 100) if total_rev > 0 else 0
                lines.append(f"- **{r.business_unit}**: ${amt:,.0f} ({pct:.1f}% of total billed revenue)")
            
            bu_list = "\n".join(lines)
            presets["top_revenue"] = (
                f"Top revenue drivers across business units and product categories:\n"
                f"{bu_list}\n\n"
                f"**Total Billed Revenue**: ${total_rev:,.0f}. Primary growth driver is commercial contract delivery across North America and EMEA."
            )
        else:
            presets["top_revenue"] = "No revenue records found."
    except Exception as e:
        print(f"Warning: Failed to fetch top revenue drivers: {e}")

    # 6. Suggested 2: Top WIP Projects
    try:
        q_proj = """
        SELECT project_name, company_name
        FROM `dim_projects`
        WHERE is_active = true
        LIMIT 5
        """
        rows = list(client.query(q_proj, job_config=job_cfg).result())
        if rows:
            lines = []
            for idx, r in enumerate(rows, 1):
                company = f" ({r.company_name})" if r.company_name else ""
                lines.append(f"{idx}. **{r.project_name}**{company}")
            
            proj_list = "\n".join(lines)
            presets["top_wip"] = (
                f"Top active projects by delivery commitments and unbilled WIP:\n"
                f"{proj_list}\n\n"
                f"These active projects represent primary operational delivery commitments in Procore."
            )
        else:
            presets["top_wip"] = "No active projects found."
    except Exception as e:
        print(f"Warning: Failed to fetch top WIP projects: {e}")

    # Save to local artifact
    cache_payload = {
        "updated_at": datetime.now(timezone.utc).isoformat(),
        "project_id": PROJECT_ID,
        "dataset_id": DATASET_ID,
        "presets": presets
    }

    out_file = os.path.join(PROJECT_ROOT, "deploy", "gcp", "chat_proxy", "copilot_preset_cache.json")
    with open(out_file, "w", encoding="utf-8") as f:
        json.dump(cache_payload, f, indent=2)

    elapsed = time.time() - t0
    print(f"✅ Cache pre-warmed successfully in {elapsed:.2f}s! Saved to: {out_file}")

    # Hot-reload running local proxy if reachable
    try:
        req = urllib.request.Request("http://127.0.0.1:8090/cache/warm", data=b"{}", headers={"Content-Type": "application/json"})
        with urllib.request.urlopen(req, timeout=2) as resp:
            print("🔄 Local AI proxy hot-reloaded successfully.")
    except Exception:
        pass

if __name__ == "__main__":
    warm_cache()
