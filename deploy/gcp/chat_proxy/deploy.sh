#!/usr/bin/env bash
# Deploy Cockpit AI Chat Proxy to GCP Cloud Functions Gen 2
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "${SCRIPT_DIR}/../../.." && pwd)"

if [ -f "${ROOT_DIR}/.env" ]; then
    set -a
    source "${ROOT_DIR}/.env"
    set +a
fi

PROJECT_ID="${GCP_PROJECT_ID:-gcp-etl-497002}"
REGION="${GCP_REGION:-us-central1}"
FUNCTION_NAME="cockpit-ai-chat"
SERVICE_ACCOUNT="dlt-pipeline-sa@${PROJECT_ID}.iam.gserviceaccount.com"

if [ -z "${GEMINI_API_KEY:-}" ]; then
    echo "ERROR: GEMINI_API_KEY environment variable is required."
    exit 1
fi

if [ ! -f "${SCRIPT_DIR}/copilot_warehouse.duckdb" ] && [ -f "${ROOT_DIR}/scripts/export_copilot_duckdb.py" ]; then
    echo "DuckDB database missing. Exporting from BigQuery..."
    python3 "${ROOT_DIR}/scripts/export_copilot_duckdb.py"
fi

echo "Deploying Cloud Function '${FUNCTION_NAME}' to ${PROJECT_ID} (${REGION})..."

gcloud functions deploy "${FUNCTION_NAME}" \
    --gen2 \
    --project="${PROJECT_ID}" \
    --region="${REGION}" \
    --runtime=python311 \
    --source="${SCRIPT_DIR}" \
    --entry-point=chat_handler \
    --trigger-http \
    --allow-unauthenticated \
    --service-account="${SERVICE_ACCOUNT}" \
    --set-env-vars="GEMINI_API_KEY=${GEMINI_API_KEY},GCP_PROJECT_ID=${PROJECT_ID},BIGQUERY_DATASET=dbt_prod" \
    --memory=512Mi \
    --timeout=60s \
    --max-instances=5

echo "Deployment complete. Cloud Function URL:"
gcloud functions describe "${FUNCTION_NAME}" --gen2 --region="${REGION}" --project="${PROJECT_ID}" --format="value(serviceConfig.uri)"
