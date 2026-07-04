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

IMAGE="${REGION}-docker.pkg.dev/${PROJECT}/dlt-pipeline/pipeline"


echo ""
echo "=== Step 1: Merging and Deploying secrets.toml to GCS ==="
.venv/bin/python scripts/deploy_secrets.py

echo ""
echo "=== Step 3: Build & Push image via Cloud Build ==="
$GCLOUD builds submit \
  --tag "$IMAGE" \
  --project "$PROJECT" \
  --timeout=600

echo ""
echo "=== Step 4: Update Cloud Run Job to latest image ==="
$GCLOUD run jobs update "$JOB" \
  --image "$IMAGE" \
  --region "$REGION" \
  --project "$PROJECT" \
  --update-env-vars "GCS_TOKEN_BUCKET=gcp-etl-497002-tokens"

echo ""
echo "=== Build & Deploy DONE ==="
