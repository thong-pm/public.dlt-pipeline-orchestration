#!/usr/bin/env bash
set -euo pipefail

# Navigate to project root automatically
cd "$(dirname "$0")/.."

# Helper to read configurations from .dlt/secrets.toml
get_toml_val() {
  local key="$1"
  local py_cmd="import tomlkit; print(tomlkit.load(open('.dlt/secrets.toml')).get('gcp', {}).get('$key', ''))"
  if [ -f .venv/bin/python ]; then
    .venv/bin/python -c "$py_cmd" 2>/dev/null || echo ""
  else
    python3 -c "$py_cmd" 2>/dev/null || python -c "$py_cmd" 2>/dev/null || echo ""
  fi
}

PROJECT=$(get_toml_val "project_id")
REGION=$(get_toml_val "region")
BUCKET=$(get_toml_val "token_bucket")
JOB=$(get_toml_val "cloud_run_job")
GCLOUD_CUSTOM=$(get_toml_val "gcloud_bin")

# Set defaults & validate
GCLOUD="${GCLOUD_CUSTOM:-gcloud}"
REGION="${REGION:-us-central1}"
JOB="${JOB:-dlt-pipeline-job}"

if [ -z "$PROJECT" ] || [ -z "$BUCKET" ] || [ "$PROJECT" = "<your-gcp-project-id>" ] || [ "$BUCKET" = "<your-gcs-bucket-for-tokens>" ]; then
  echo "❌ Error: GCP configuration missing or contains default placeholders in .dlt/secrets.toml."
  echo "Please configure the [gcp] section in your .dlt/secrets.toml first."
  exit 1
fi

echo "======================================================="
echo " TRIGGERING PRODUCTION PIPELINE (PROD ENV -> GCP/BIGQUERY)"
echo "======================================================="
echo ""
echo "Executing Cloud Run Job: $JOB (project: $PROJECT, region: $REGION)..."
echo "This will: download secrets → extract from APIs → load to BigQuery → run dbt → upload rotated tokens"
echo ""

$GCLOUD run jobs execute "$JOB" \
  --region "$REGION" \
  --project "$PROJECT" \
  --wait

echo ""
echo "=== Cloud Run Job execution COMPLETE ==="
