"""BigQuery analytical query executor with safety guardrails."""

import json
import os
import re
from typing import Any, Dict, List, Optional
from google.cloud import bigquery
from google.oauth2 import service_account

PROJECT_ID = os.environ.get("GCP_PROJECT_ID", "gcp-etl-497002")
DATASET_ID = os.environ.get("BIGQUERY_DATASET", "dbt_prod")

try:
    import sqlglot
    from sqlglot import exp
    HAS_SQLGLOT = True
except ImportError:
    HAS_SQLGLOT = False

FORBIDDEN_KEYWORDS = [
    r"\bINSERT\b", r"\bUPDATE\b", r"\bDELETE\b", r"\bDROP\b",
    r"\bALTER\b", r"\bCREATE\b", r"\bTRUNCATE\b", r"\bMERGE\b",
    r"\bGRANT\b", r"\bREVOKE\b", r"\bEXEC\b"
]

_bq_client: Optional[bigquery.Client] = None

def get_bigquery_client() -> bigquery.Client:
    """Initialize BigQuery client with service account or default credentials (cached singleton)."""
    global _bq_client
    if _bq_client is not None:
        return _bq_client

    possible_cred_paths = [
        os.path.join(os.path.dirname(__file__), "..", "..", "..", "gcp-credentials.json"),
        os.path.join(os.getcwd(), "gcp-credentials.json"),
        os.environ.get("GOOGLE_APPLICATION_CREDENTIALS", "")
    ]
    for path in possible_cred_paths:
        if path and os.path.exists(path):
            credentials = service_account.Credentials.from_service_account_file(path)
            _bq_client = bigquery.Client(project=PROJECT_ID, credentials=credentials)
            return _bq_client
    # Default environment credentials (e.g., inside GCP Cloud Run or Cloud Functions)
    _bq_client = bigquery.Client(project=PROJECT_ID)
    return _bq_client

def sanitize_and_qualify_query(sql: str) -> str:
    """Validate query is read-only and qualify table references using AST analysis."""
    clean_sql = sql.strip().rstrip(";")

    known_tables = {
        "fct_executive_cockpit", "fct_pipeline", "fct_revenue",
        "dim_projects", "dim_customers", "dim_products",
        "seed_dim_business_units", "seed_dim_regions", "seed_xero_invoices"
    }

    if HAS_SQLGLOT:
        try:
            statements = sqlglot.parse(clean_sql, read="bigquery")
            if not statements:
                raise ValueError("Empty or invalid SQL statement.")
            if len(statements) > 1:
                raise ValueError("Multiple SQL statements detected. Only a single SELECT query is permitted.")

            parsed = statements[0]
            if not isinstance(parsed, (exp.Select, exp.Union)):
                raise ValueError("Query must start with SELECT or WITH.")

            forbidden_ast_nodes = (
                exp.Insert, exp.Update, exp.Delete, exp.Drop, exp.Alter,
                exp.Create, exp.Merge, exp.Command, exp.Transaction
            )
            for node in parsed.walk():
                if isinstance(node, forbidden_ast_nodes):
                    raise ValueError(f"Mutation statement detected ({type(node).__name__}). Only read-only SELECT queries are permitted.")
                if isinstance(node, exp.Table):
                    tbl = (node.name or "").lower()
                    if any(f in tbl for f in ["information_schema", "sqlite_", "pg_", "duckdb_"]):
                        raise ValueError("Exploratory metadata queries on system tables are forbidden.")

            for table in parsed.find_all(exp.Table):
                t_name = (table.name or "").lower()
                if t_name in known_tables:
                    table.set("db", DATASET_ID)
                    table.set("catalog", PROJECT_ID)

            if not parsed.args.get("limit"):
                parsed = parsed.limit(50)

            return parsed.sql(dialect="bigquery")
        except ValueError:
            raise
        except Exception as err:
            print(f"[AST Parser] Notice: sqlglot parse exception ({err}), falling back to regex sanitizer.")

    for pattern in FORBIDDEN_KEYWORDS:
        if re.search(pattern, clean_sql, re.IGNORECASE):
            raise ValueError(f"Mutation statement detected. Only read-only SELECT queries are permitted.")

    if not (clean_sql.upper().startswith("SELECT") or clean_sql.upper().startswith("WITH")):
        raise ValueError("Query must start with SELECT or WITH.")

    # Qualify unqualified table names after FROM or JOIN, avoiding string literals in quotes
    for table in known_tables:
        pattern = rf"\b(FROM|JOIN)\s+(`?){table}(`?)\b"
        replacement = rf"\1 `{PROJECT_ID}.{DATASET_ID}.{table}`"
        clean_sql = re.sub(pattern, replacement, clean_sql, flags=re.IGNORECASE)

    # Ensure row count safeguard limit
    if not re.search(r"\bLIMIT\b", clean_sql, re.IGNORECASE):
        clean_sql += " LIMIT 50"

    return clean_sql

def run_analytical_query(sql_query: str) -> str:
    """
    Executes a read-only BigQuery query and returns results formatted as a JSON string.
    Safeguarded with maximum bytes billed limit (50 MB).
    """
    try:
        sanitized_sql = sanitize_and_qualify_query(sql_query)
        client = get_bigquery_client()

        job_config = bigquery.QueryJobConfig(
            maximum_bytes_billed=50 * 1024 * 1024,
            use_query_cache=True,
            default_dataset=f"{PROJECT_ID}.{DATASET_ID}"
        )

        query_job = client.query(sanitized_sql, job_config=job_config)
        rows = list(query_job.result())

        formatted_rows: List[Dict[str, Any]] = []
        for row in rows:
            record: Dict[str, Any] = {}
            for key, val in row.items():
                if hasattr(val, "isoformat"):
                    record[key] = val.isoformat()
                else:
                    record[key] = val
            formatted_rows.append(record)

        if not formatted_rows:
            return json.dumps({"status": "no_results", "message": "Query executed successfully but returned 0 rows."})

        return json.dumps(formatted_rows, default=str)

    except Exception as exc:
        return json.dumps({"status": "error", "message": str(exc)})

if __name__ == "__main__":
    test_query = "SELECT business_unit, region, sum(total_billed_revenue) as rev FROM fct_executive_cockpit GROUP BY 1, 2"
    print("Testing BigQuery query:")
    print(run_analytical_query(test_query))
