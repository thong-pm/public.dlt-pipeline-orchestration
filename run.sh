#!/bin/bash
set -uo pipefail

# Determine target for dbt run (dev or prod) based on PIPELINE__DESTINATION environment variable
DBT_TARGET="dev"
if [ "${PIPELINE__DESTINATION:-postgres}" = "bigquery" ]; then
    DBT_TARGET="prod"
fi

# Create a temporary log file to store the execution logs
LOG_FILE="/tmp/pipeline_run.log"
echo "" > "$LOG_FILE"

echo "=== [1/3] Running Extract & Load (dlt) ===" | tee -a "$LOG_FILE"
python -m runners.run_all 2>&1 | tee -a "$LOG_FILE"
DLT_EXIT_CODE=${PIPESTATUS[0]}

echo "=== [2/3] Installing dbt Packages ===" | tee -a "$LOG_FILE"
cd dbt_transform
dbt deps --profiles-dir . 2>&1 | tee -a "$LOG_FILE"
DEPS_EXIT_CODE=${PIPESTATUS[0]}

echo "=== [3/3] Running and Testing dbt Models (Target: $DBT_TARGET) ===" | tee -a "$LOG_FILE"
dbt seed --profiles-dir . --target "$DBT_TARGET" 2>&1 | tee -a "$LOG_FILE"
dbt run --profiles-dir . --target "$DBT_TARGET" 2>&1 | tee -a "$LOG_FILE"
DBT_RUN_EXIT_CODE=${PIPESTATUS[0]}

dbt test --profiles-dir . --target "$DBT_TARGET" 2>&1 | tee -a "$LOG_FILE"
DBT_TEST_EXIT_CODE=${PIPESTATUS[0]}

# Return to project root to run notifier
cd ..

# Run the Slack notification script
python -m utils.slack_notifier \
  --dlt-code "$DLT_EXIT_CODE" \
  --dbt-code "$DBT_RUN_EXIT_CODE" \
  --test-code "$DBT_TEST_EXIT_CODE" \
  --log-file "$LOG_FILE"

# Exit with status code of the runs so Cloud Run Job registers failure if anything failed
if [ $DLT_EXIT_CODE -ne 0 ] || [ $DBT_RUN_EXIT_CODE -ne 0 ] || [ $DBT_TEST_EXIT_CODE -ne 0 ]; then
    echo "=== Pipeline Execution Completed with Errors ==="
    exit 1
else
    echo "=== Pipeline Execution Completed Successfully ==="
    exit 0
fi
