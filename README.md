# DLT Pipeline: Multi-Tenant SaaS Orchestration

A production-ready, parallel orchestration system for HubSpot, Xero, Shopify, and Procore data pipelines using dlt and dbt Core.

![DLT Pipeline Architecture](dtl-pipeline-multi-saas.png)

### Core Capabilities
* **Parallel ELT Ingestion**: Concurrently loads data from HubSpot, Xero, Shopify, and Procore via `dlt` with schema evolution support.
* **OAuth Token Self-Rotation**: Automatically refreshes and persists Xero and Procore OAuth tokens to local secrets or GCP Secret Manager.
* **Preflight Connection Resilience**: Validates credentials before running, gracefully skipping failing sources to keep other ingestions online.
* **In-Database SQL Transformations**: Orchestrates post-load `dbt Core` builds to clean raw data and populate downstream reporting marts.
* **Slack & Email Observability**: Extracts ingestion metrics and dbt results to send Slack summaries and critical failure alerts.
* **GCP Serverless Architecture**: Packaged as a Docker container executed on Cloud Run Jobs, triggered daily by Cloud Scheduler, and targeted to BigQuery.

## Project Structure

```text
.
├── .dlt/
│   ├── config.toml      # Master Control Panel (environments, resources, toggles)
│   └── secrets.toml     # Sensitive credentials (API keys, rotated tokens)
├── dbt_transform/       # dbt models for SQL staging, intermediate, and marts layers
├── docs/                # Developer manual and notes
├── runners/             # Python execution scripts
│   └── run_all.py       # Orchestrates all active pipelines in parallel
├── scripts/             # Utility scripts for local running and GCP deployments
├── sources/             # API extraction logic
└── utils/               # Core pipeline helpers
```

## Execution

### 1. Setup

**Initialize the Environment**:
```bash
python3 -m venv .venv
source .venv/bin/activate
pip install poetry
poetry install
cp .dlt/secrets.toml.example .dlt/secrets.toml
```

### 2. Local Development (PostgreSQL)

To run the pipeline and build your dbt models locally:

1. Configure `.dlt/config.toml` with `destination = "postgres"`.
2. Execute the python runners:
   ```bash
   poetry run python -m runners.run_all
   ```
3. Run and test dbt models locally:
   ```bash
   bash scripts/run_dbt_dev.sh
   ```

### 3. Production Deployment (GCP Cloud Run & BigQuery)

Production runs execute on GCP Cloud Run Jobs and write directly to BigQuery.

GCP Services Used:
* Cloud Run Jobs: Runs the pipeline execution container.
* BigQuery: Stores raw loaded tables and dbt transformed reporting tables.
* Secret Manager: Stores credentials and rotated OAuth tokens in secrets.toml.
* Cloud Scheduler: Triggers the daily execution run.
* Artifact Registry: Stores built Docker container images.
* Cloud Build: Compiles and pushes container images from the repository.

To run the pipeline on GCP:

1. Configure `.dlt/config.toml` with `destination = "bigquery"`.
2. Build and deploy the container image:
   ```bash
   bash scripts/rebuild_and_deploy.sh
   ```
3. Trigger a job execution manually:
   ```bash
   bash scripts/trigger_cloud_run.sh
   ```

---

## Source Authorization Setup

Each source requires a one-time setup to authorize the connection.

### HubSpot
* Create a Private App in HubSpot and copy the Access Token.
* Add to `[sources.hubspot]` in `.dlt/secrets.toml`.

### Xero
* Create an app at developers.xero.com.
* Set the Redirect URI to `http://localhost:8080/callback`.
* Run `poetry run python sources/xero/auth.py` once to perform the OAuth handshake.
* The pipeline handles token rotation automatically thereafter.

### Procore
* Create an app at developers.procore.com.
* Set the Redirect URI to `http://localhost:8080/callback`.
* Install the app in your Procore Company Admin under App Management.
* Run `poetry run python sources/procore/auth.py` once.
* Tokens are persisted and rotated automatically in `.dlt/secrets.toml`.
