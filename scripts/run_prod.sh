#!/usr/bin/env bash
set -euo pipefail

GCLOUD=/home/phamthong99/google-cloud-sdk/google-cloud-sdk/bin/gcloud
PROJECT=gcp-etl-497002
REGION=us-central1
JOB=dlt-pipeline-job

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
