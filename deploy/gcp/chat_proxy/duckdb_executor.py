"""Ultra-fast in-memory DuckDB query executor for Cockpit AI Copilot."""

import json
import os
import re
import time
from typing import Any, Dict, List, Optional
import duckdb

DUCKDB_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "copilot_warehouse.duckdb")

_duck_conn: Optional[duckdb.DuckDBPyConnection] = None

FORBIDDEN_KEYWORDS = [
    r"\bINSERT\b", r"\bUPDATE\b", r"\bDELETE\b", r"\bDROP\b",
    r"\bALTER\b", r"\bCREATE\b", r"\bTRUNCATE\b", r"\bMERGE\b",
    r"\bGRANT\b", r"\bREVOKE\b", r"\bEXEC\b"
]

FORBIDDEN_EXPLORATORY = [
    r"\binformation_schema\b",
    r"\bshow\s+tables\b",
    r"\bsqlite_\w+\b",
    r"\bpragma\b"
]

def get_duckdb_connection() -> Optional[duckdb.DuckDBPyConnection]:
    global _duck_conn
    if _duck_conn is not None:
        return _duck_conn

    possible_paths = [
        DUCKDB_PATH,
        os.path.join(os.getcwd(), "copilot_warehouse.duckdb"),
        os.path.join(os.getcwd(), "deploy", "gcp", "chat_proxy", "copilot_warehouse.duckdb")
    ]
    for path in possible_paths:
        if os.path.exists(path):
            try:
                _duck_conn = duckdb.connect(path, read_only=True)
                return _duck_conn
            except Exception as e:
                print(f"Warning: could not open DuckDB file at {path}: {e}")

    return None

def normalize_sql_for_duckdb(sql: str) -> str:
    """Strip BigQuery project/dataset prefixes so queries run cleanly on local DuckDB tables."""
    clean = sql.strip().rstrip(";")

    for pattern in FORBIDDEN_KEYWORDS:
        if re.search(pattern, clean, re.IGNORECASE):
            raise ValueError("Mutation statement detected. Only read-only SELECT queries are permitted.")

    for pattern in FORBIDDEN_EXPLORATORY:
        if re.search(pattern, clean, re.IGNORECASE):
            raise ValueError("Exploratory metadata queries on system tables or information_schema are forbidden. Refer exclusively to the schema catalog.")

    if not (clean.upper().startswith("SELECT") or clean.upper().startswith("WITH")):
        raise ValueError("Query must start with SELECT or WITH.")

    # Replace `gcp-etl-497002.dbt_prod.table` or gcp-etl-497002.dbt_prod.table or `dbt_prod`.`table` with `table`
    clean = re.sub(r"`?gcp-etl-497002`?\.`?dbt_prod`?\.`?([a-zA-Z0-9_]+)`?", r"\1", clean, flags=re.IGNORECASE)
    clean = re.sub(r"`?dbt_prod`?\.`?([a-zA-Z0-9_]+)`?", r"\1", clean, flags=re.IGNORECASE)

    # Convert EXTRACT(YEAR FROM col) or standard functions if needed (DuckDB natively supports EXTRACT, DATE_TRUNC, etc.)
    if not re.search(r"\bLIMIT\b", clean, re.IGNORECASE):
        clean += " LIMIT 50"

    return clean

def run_analytical_query(sql_query: str) -> str:
    """
    Executes a read-only query using in-memory DuckDB (< 1ms).
    Falls back to BigQuery executor if DuckDB database is unavailable.
    """
    t0 = time.time()
    conn = get_duckdb_connection()

    if conn is not None:
        try:
            clean_sql = normalize_sql_for_duckdb(sql_query)
            cursor = conn.cursor()
            cursor.execute(clean_sql)
            columns = [desc[0] for desc in cursor.description]
            raw_rows = cursor.fetchall()

            formatted_rows: List[Dict[str, Any]] = []
            for row in raw_rows:
                record = {}
                for idx, val in enumerate(row):
                    k = columns[idx]
                    if hasattr(val, "isoformat"):
                        record[k] = val.isoformat()
                    else:
                        record[k] = val
                formatted_rows.append(record)

            elapsed_ms = (time.time() - t0) * 1000
            if not formatted_rows:
                return json.dumps({"status": "no_results", "message": "Query executed successfully in DuckDB (0 rows).", "execution_time_ms": elapsed_ms})

            return json.dumps(formatted_rows, default=str)
        except ValueError as val_err:
            return json.dumps({"error": str(val_err), "status": "forbidden_query"})
        except Exception as duck_err:
            # Fall through to BigQuery on syntax error or missing function
            print(f"DuckDB execution exception ({duck_err}), falling back to BigQuery...")

    # Fallback to BigQuery
    from bq_executor import run_analytical_query as bq_run
    return bq_run(sql_query)

if __name__ == "__main__":
    test_sql = "SELECT business_unit, sum(total_billed_revenue) as rev FROM `gcp-etl-497002.dbt_prod.fct_executive_cockpit` GROUP BY 1"
    t0 = time.time()
    res = run_analytical_query(test_sql)
    dur = (time.time() - t0) * 1000
    print(f"DuckDB test query result ({dur:.2f}ms):")
    print(res)
