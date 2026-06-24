#!/usr/bin/env bash
set -euo pipefail

# Force local destination to postgres
export PIPELINE__DESTINATION="postgres"

# Enable GCS secrets synchronization locally
export GCS_TOKEN_BUCKET="gcp-etl-497002-tokens"
export FORCE_DOWNLOAD_SECRETS="true"

# Ensure we are in the project root
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_ROOT"

# Determine path to python and dbt
# Fallback to global/poetry if .venv doesn't exist
if [ -d "$PROJECT_ROOT/.venv" ]; then
    RUN_CMD="$PROJECT_ROOT/.venv/bin/python"
    DBT_CMD="$PROJECT_ROOT/.venv/bin/dbt"
else
    RUN_CMD="poetry run python"
    DBT_CMD="poetry run dbt"
fi

echo "======================================================="
echo " RUNNING LOCAL PIPELINE (DEV ENV -> POSTGRES)"
echo "======================================================="
echo ""

# 1. Run dlt pipelines
echo "=== Step 1: Running Extract & Load (dlt) ==="
$RUN_CMD -m runners.run_all

# 2. Run dbt transformation
echo ""
echo "=== Step 2: Running dbt Transform & Test ==="
cd "$PROJECT_ROOT/dbt_transform"
$DBT_CMD deps --profiles-dir .
$DBT_CMD run --profiles-dir . --target dev
$DBT_CMD test --profiles-dir . --target dev

echo ""
echo "======================================================="
echo " LOCAL DEV PIPELINE COMPLETED SUCCESSFULLY"
echo "======================================================="
