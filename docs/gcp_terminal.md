# GCP Terminal Code Book

This manual contains useful gcloud and CLI commands for managing your ETL pipeline in Google Cloud Platform (GCP).

## 1. Authentication & Setup

Run these commands when setting up your terminal or switching accounts:

```bash
# Log in to your Google Cloud account via browser
gcloud auth login

# Set the active project for all subsequent commands
gcloud config set project gcp-etl-497002
```

---

## 2. Cloud Run Jobs (ETL Run & Logs)

Use these commands to trigger executions manually or inspect logs:

```bash
# Trigger the pipeline to run immediately in the cloud
gcloud run jobs execute dlt-pipeline-job --region=us-central1

# List the last 5 pipeline executions (shows execution names, runtimes, and status)
gcloud run jobs executions list --job=dlt-pipeline-job --region=us-central1 --limit=5

# View the details of a specific execution
gcloud run jobs executions describe [EXECUTION_NAME] --region=us-central1
# Example: gcloud run jobs executions describe dlt-pipeline-job-nj94l --region=us-central1

# Fetch the execution logs directly from your terminal
gcloud logging read "resource.type=\"cloud_run_job\" AND labels.\"run.googleapis.com/execution_name\"=\"[EXECUTION_NAME]\"" \
  --project=gcp-etl-497002 \
  --limit=100
```

---

## 3. Cloud Scheduler (Daily Trigger)

Manage the Daily Cron schedule (`0 6 * * *` UTC):

```bash
# List active schedulers in the project
gcloud scheduler jobs list --location=us-central1

# Verify the details and see the last run result status (empty status {} is success)
gcloud scheduler jobs describe dlt-daily-run --location=us-central1

# Force trigger the scheduler run manually (simulates daily scheduler activation)
gcloud scheduler jobs run dlt-daily-run --location=us-central1
```

---

## 4. Secret Manager (API Credentials)

View or verify configuration secrets:

```bash
# View the current values of your secrets.toml file
gcloud secrets versions access latest --secret=dlt-secrets-toml
```

---

## 5. BigQuery (Querying Data)

Query raw and modeled datasets using the `bq` CLI tool:

```bash
# List all active datasets
bq ls --project_id=gcp-etl-497002

# List tables inside the dbt transformed output dataset
bq ls gcp-etl-497002:dbt_prod

# Run a query to verify model outputs (surrogate keys, deduped emails, etc)
bq query --use_legacy_sql=false \
  "SELECT email, golden_source, golden_source_id FROM dbt_prod.dim_customers LIMIT 5"
```

---

## 6. Deployment (Rebuild & Push Container)

Trigger Cloud Build manually to compile and push your code updates:

```bash
# Compile and build the container image, then push to GCP Artifact Registry
gcloud builds submit \
  --tag us-central1-docker.pkg.dev/gcp-etl-497002/dlt-pipeline/pipeline \
  --project gcp-etl-497002 \
  --timeout=600
```

---

## 7. Troubleshooting & Debugging

Use these commands to debug permissions issues, verify IAM policies, and test scripts:

### A. Diagnosing Permission & IAM Gaps
If Cloud Scheduler or Cloud Run runs fail with `PERMISSION_DENIED` or auth issues:

```bash
# List all IAM role bindings for a specific service account email
gcloud projects get-iam-policy gcp-etl-497002 \
  --filter="bindings.members:dlt-pipeline-sa@gcp-etl-497002.iam.gserviceaccount.com" \
  --format=json

# Fix permission gaps by adding roles (e.g. Cloud Run Invoker)
gcloud projects add-iam-policy-binding gcp-etl-497002 \
  --member="serviceAccount:dlt-pipeline-sa@gcp-etl-497002.iam.gserviceaccount.com" \
  --role="roles/run.invoker"
```

### B. Testing Pipeline Secrets Locally (WSL)
Before deploying code changes to GCP, verify your secret-loading logic locally:

```bash
# Verify you can access Secret Manager versions via python CLI inside virtualenv
GCP_PROJECT_ID=gcp-etl-497002 \
GOOGLE_APPLICATION_CREDENTIALS=gcp-credentials.json \
python3 -c "
from utils.secret_manager import download_secrets
download_secrets()
print('Secrets loaded locally successfully.')
"
```

### C. Reading Cloud Run Container Logs (Non-UI Option)
To view the output of python and dbt errors from failed jobs without using the GCP Console:

```bash
# Get the full stack trace of a failed execution by querying GCP logs
gcloud logging read "resource.type=\"cloud_run_job\" AND labels.\"run.googleapis.com/execution_name\"=\"[EXECUTION_ID]\"" \
  --project=gcp-etl-497002 \
  --format="table(timestamp, textPayload, jsonPayload.message)" \
  --limit=200
```

