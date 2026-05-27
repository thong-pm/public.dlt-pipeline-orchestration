#!/bin/bash
set -e

# Make sure we are in the scripts directory, then move up to access dbt_transform
cd "$(dirname "$0")"/../dbt_transform

echo "1. Running dbt debug (verifying connection)..."
../.venv/bin/dbt debug --profiles-dir .

echo "2. Running dbt compile (checking SQL syntax)..."
../.venv/bin/dbt compile --profiles-dir .

echo "3. Running dbt run (materializing models in local Postgres)..."
../.venv/bin/dbt run --profiles-dir .

echo "4. Running dbt test (validating schema constraints)..."
../.venv/bin/dbt test --profiles-dir .

echo "All local dbt steps executed successfully!"
