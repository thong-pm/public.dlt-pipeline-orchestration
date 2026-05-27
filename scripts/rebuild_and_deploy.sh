#!/usr/bin/env bash
set -euo pipefail

GCLOUD=/home/phamthong99/google-cloud-sdk/google-cloud-sdk/bin/gcloud
PROJECT=gcp-etl-497002
REGION=us-central1
IMAGE="${REGION}-docker.pkg.dev/${PROJECT}/dlt-pipeline/pipeline"
JOB=dlt-pipeline-job

cd /home/phamthong99/projects/dlt-pipeline-testing

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
  --project "$PROJECT"

echo ""
echo "=== Build & Deploy DONE ==="
