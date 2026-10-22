"""Export BigQuery dbt data marts into a compact, in-memory DuckDB database for AI Copilot."""

import os
import sys
import time
from decimal import Decimal

# Add root directory to sys.path
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

import duckdb
import pandas as pd
from deploy.gcp.chat_proxy.bq_executor import get_bigquery_client, PROJECT_ID, DATASET_ID

TABLES = [
    "fct_executive_cockpit",
    "fct_pipeline",
    "fct_revenue",
    "dim_projects",
    "dim_products",
    "dim_customers",
    "seed_xero_invoices",
    "seed_dim_business_units",
    "seed_dim_regions"
]

OUTPUT_PATH = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "deploy", "gcp", "chat_proxy", "copilot_warehouse.duckdb"
)

def export_to_duckdb(output_file: str = OUTPUT_PATH) -> None:
    print(f"Connecting to BigQuery dataset: {PROJECT_ID}.{DATASET_ID}...")
    bq_client = get_bigquery_client()

    os.makedirs(os.path.dirname(output_file), exist_ok=True)
    temp_file = output_file + ".tmp"
    if os.path.exists(temp_file):
        os.remove(temp_file)

    conn = duckdb.connect(temp_file)
    total_rows = 0

    print(f"Exporting tables to DuckDB file: {output_file}")
    t0 = time.time()

    for table in TABLES:
        try:
            sql = f"SELECT * FROM `{PROJECT_ID}.{DATASET_ID}.{table}`"
            job = bq_client.query(sql)
            records = [dict(row) for row in job]
            df = pd.DataFrame(records)

            if not df.empty:
                for col in df.columns:
                    sample = df[col].dropna()
                    if not sample.empty:
                        first_val = sample.iloc[0]
                        if isinstance(first_val, Decimal):
                            df[col] = df[col].astype(float)

                if table == "fct_executive_cockpit" and "month_date" in df.columns:
                    dates = pd.to_datetime(df["month_date"])
                    df["cal_year"] = dates.dt.year.astype("int64")
                    df["month_num"] = dates.dt.month.astype("int64")

            row_count = len(df)
            total_rows += row_count

            conn.register("temp_df", df)
            conn.execute(f"CREATE OR REPLACE TABLE {table} AS SELECT * FROM temp_df")
            conn.unregister("temp_df")

            print(f"  ✓ {table}: {row_count} rows")
        except Exception as exc:
            print(f"  ⚠️ Warning: failed to export {table}: {exc}")

    # Register BigQuery compatibility macros
    try:
        conn.execute("CREATE OR REPLACE MACRO safe_divide(a, b) AS CASE WHEN b = 0 THEN NULL ELSE a / b END")
        conn.execute("CREATE OR REPLACE MACRO ifnull(a, b) AS COALESCE(a, b)")
        print("  ✓ Registered BigQuery compatibility macros (safe_divide, ifnull)")
    except Exception as e:
        print(f"  ⚠️ Warning: failed to create macros: {e}")

    conn.close()

    if os.path.exists(output_file):
        os.remove(output_file)
    os.rename(temp_file, output_file)

    size_kb = os.path.getsize(output_file) / 1024
    elapsed = time.time() - t0
    print(f"Successfully generated {output_file} ({size_kb:.1f} KB, {total_rows} total rows) in {elapsed:.2f}s")

if __name__ == "__main__":
    export_to_duckdb()
