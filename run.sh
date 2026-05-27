#!/bin/bash
set -euo pipefail

# Determine target for dbt run (dev or prod) based on PIPELINE__DESTINATION environment variable
DBT_TARGET="dev"
if [ "${PIPELINE__DESTINATION:-postgres}" = "bigquery" ]; then
    DBT_TARGET="prod"
fi

echo "=== [1/3] Running Extract & Load (dlt) ==="
python -m runners.run_all

echo "=== [2/3] Installing dbt Packages ==="
cd /app/dbt_transform
dbt deps --profiles-dir .

echo "=== [3/3] Running and Testing dbt Models (Target: $DBT_TARGET) ==="
dbt run --profiles-dir . --target "$DBT_TARGET"
dbt test --profiles-dir . --target "$DBT_TARGET"

echo "=== Pipeline Execution Completed Successfully ==="
