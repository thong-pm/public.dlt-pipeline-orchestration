# Multi-Source SaaS ELT Pipeline & BI Dashboard

A code-first data pipeline integrating **HubSpot**, **Xero**, **Shopify**, and **Procore** into **Google BigQuery** (Cloud) and **PostgreSQL** (Local), orchestrated with `Dagster`, modeled with `dbt Core`, defined in `Terraform`, and visualized using `Evidence.dev`.

![Pipeline Architecture](docs/assets/pipeline_architecture.png)

---

## Operational Context

### The Business Scenario
A modular storage, millwork, and outdoor-structures manufacturer that sells kits online through Shopify, sells to builders and dealers through HubSpot, and installs larger orders on site.

### System Roles
* **Shopify**: Direct-to-consumer (D2C) e-commerce storefront for modular storage and joinery kits.
* **HubSpot CRM**: Inbound pipeline, quotes, and contract management for regional builders and dealer networks.
* **Procore (Field Delivery & Transition to Wrike)**: 
  Originally adopted to manage onsite installation delivery. Because Procore is built for general contractors, it is heavy for a company whose real work is production, marketing launches, and install scheduling. The company is actively migrating project operations to Wrike.
  * **Why active data remains in Procore**: Active install jobs stay in Procore until closeout because moving in-flight RFIs, submittals, and change orders mid-project introduces operational risk.
  * **Closed projects**: Remain in Procore as the historical system of record for warranty claims and audit trails.
  * **New projects**: Scheduled and launched in Wrike.
* **Xero**: Financial system of record for progress billings, accounts receivable aging, and invoice payment collections.

### Customer and Project Mapping
Because SaaS tools generate independent primary keys, `seed_project_mapping.csv` functions as a lookup table:
It maps the real customer accounts extracted from Xero (such as *Ridgeway University* and *Hamilton Smith Ltd*) to their corresponding Procore installation codes (*PRJ-1000*, *PRJ-1001*) and operational business units.

```text
HubSpot Deal (Contract Booking)
       │
       ▼
Procore Project (Field Delivery & Milestones)
       │
       ▼
Xero Invoices (Progress Billings & Cash Collection)
       │
       ▼
Shopify Orders (Parallel D2C Channel)
```

### Data Sources & Coverage

| System | Role in Business | Extracted Entities | Data Origin |
| :--- | :--- | :--- | :--- |
| **HubSpot CRM** | Inbound leads, contracts & pipeline | Deals, Companies, Contacts | Live API + Backfill |
| **Procore** | Construction & project delivery | Projects, Companies, Users | Live API + Backfill |
| **Xero** | Progress billings & receivables | Invoices, Contacts, Line Items | Live API + Backfill |
| **Shopify** | Online modular storage & joinery kits | Products, Variants | Live API |

* **Data Coverage**: Live SaaS API records are combined with historical backfill rows anchored to `seed_project_mapping.csv`.

---

## Repository Structure

```text
.
├── .agents/             # Agent rules and coding guidelines
├── .dlt/                # Pipeline toggles and credentials (git-ignored)
├── dbt_transform/       # dbt models, macros, seeds, and schema tests
│   └── models/
│       ├── staging/     # Raw source cleaning & typecasting (hubspot, xero, shopify, procore)
│       ├── intermediate/# Cross-source deduplication & unified revenue streams
│       └── marts/       # Analytical facts & dimensions for BI reporting
├── deploy/              # Cloud deployment configs (AI Copilot proxy & alert policies)
├── docs/                # Architecture docs, runbooks, and diagrams
├── evidence_dashboard/  # Evidence.dev dashboard (pages, components, queries)
├── infra/               # Terraform IaC (BigQuery datasets w/ 7-day dev TTL, Cloud Run, IAM, GCS)
├── orchestration/       # Dagster asset graph & job definitions
├── runners/             # Python execution orchestrators (parallel run_all.py)
├── scripts/             # Helper scripts (verify_security.py, Copilot DuckDB export, OAuth fix)
├── sources/             # dlt source extractors (HubSpot, Xero, Shopify, Procore)
├── utils/               # Shared helpers (retry handler, logger, secret manager, Slack notifier)
├── Dockerfile           # Container specification for local Docker or Cloud Run execution
├── pipeline.sh          # Unified entrypoint CLI
└── README.md            # Repository documentation
```

---

## Quick Start & Usage

### 1. Environment Setup

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install poetry
poetry install
cp .dlt/secrets.toml.example .dlt/secrets.toml
```

### 2. Unified Pipeline CLI (`pipeline.sh`)

Run `bash pipeline.sh help` for all commands. The two most used day-to-day commands:

```bash
bash pipeline.sh verify                                # Run all 6 pre-push gates against BigQuery dbt_dev + launch preview
bash pipeline.sh dashboard prod --build --skip-sources # Fast UI-only build & local preview without re-querying BigQuery
```

---

## CI/CD & Daily Refresh Flow

```text
Push to `dev` / PR -> Gitleaks + verify_security -> dbt clone (dbt_dev) -> URL tests + Evidence -> /staging/overview/
Merge to `main`    -> Path-scoped deploys (Docker/Cloud Run, dbt_prod, Copilot GCS/Function)   -> /overview/
Daily Cron (GCP)   -> Cloud Scheduler -> Cloud Run (Dagster `prod_pipeline_job`) -> BigQuery + GCS -> Slack
```

---

## Analytical Marts Inventory

| Model | Layer | Description |
| :--- | :--- | :--- |
| `fct_executive_cockpit` | Mart | Monthly cash flow, realized gross profit, margin fade, cycle time, and diagnostic health flags |
| `fct_revenue` | Mart | Granular billing transactions with calendar dimensions and data origin tracking |
| `fct_pipeline` | Mart | CRM deal stages, pipeline amounts, and win/loss reasons |
| `dim_projects` | Mart | Unified project directory across active Procore jobs and historical phases |
| `dim_customers` | Mart | Customer records deduplicated across CRM and accounting |
| `dim_products` | Mart | Shopify product catalog, variants, and pricing |

---

## Executive BI Dashboard (`Evidence.dev`)

Live dashboard: **[Open Executive Cockpit](https://thong-pm.github.io/public.dlt-pipeline-orchestration/overview/)**

* **[Executive Cockpit (`/overview`)](https://thong-pm.github.io/public.dlt-pipeline-orchestration/overview/)**: Monthly cash flow, margin fade, forward demand vs. WIP backlog, lead-to-cash cycle time, and an AI Copilot card (DuckDB + Gemini).
* **[Sales & Win-Loss (`/sales`)](https://thong-pm.github.io/public.dlt-pipeline-orchestration/sales/)**: Deal stage conversion, win/loss drivers, and top client concentration.
* **[Operations & Delivery (`/operations`)](https://thong-pm.github.io/public.dlt-pipeline-orchestration/operations/)**: Procore project completion, active unbilled WIP, and Shopify catalog pricing.

---

## Known Limitations
* **Monolithic Secret File in Object Storage**: Static credentials (API keys, database passwords) and dynamic rotating OAuth tokens (Xero, Procore) are stored together in a single file (`.dlt/secrets.toml`) and synced via a GCS bucket (`GCS_TOKEN_BUCKET`).
  * *Operational Rationale*: Chosen to avoid GCP Secret Manager version accumulation and cost on rolling tokens without maintaining a dedicated database for intermittent batch runs.
  * *Blast Radius*: Read access to the GCS file grants access to all system credentials simultaneously rather than isolating secrets by IAM role.
  * *No Distributed Locking*: GCS object storage does not provide row-level locks or leases. Concurrency is limited to process-level thread locks (`threading.Lock()`) and single-task Cloud Run Job scheduling. Overlapping runs risk OAuth token replay invalidation.
  * *Abrupt Termination Risk*: If a container terminates abruptly (`SIGKILL`) after receiving a rotated OAuth token but before completing the GCS upload, the new token is lost and the stored token is invalidated by the provider, requiring manual developer re-authentication (`pipeline.sh auth`).
* **CI Authentication via Static Service Account Key**: GitHub Actions currently authenticates to GCP using an encrypted JSON key (`secrets.GCP_SA_KEY`) rather than short-lived OIDC tokens via Workload Identity Federation (WIF).

### Roadmap
- [x] **Automated CI/CD**: Path-scoped GitHub Actions workflow with `gitleaks`, `verify_security.py`, `dbt clone` Slim CI, automated URL routing tests, and Cloud Run job image updates on `main`.
- [x] **Python Orchestrator**: Unified `dlt`, `dbt`, AI Copilot cache sync, and Evidence builds under Dagster (`orchestration/definitions.py`).
- [ ] **Infrastructure as Code (Apply)**: Terraform definitions authored in `infra/` (BigQuery datasets with 7-day `dbt_dev` TTL, Cloud Run v2 Job, Cloud Scheduler, Artifact Registry, IAM, GCS); `terraform import` and `apply` pending against live GCP.
- [ ] **Repository Push Protection**: Enable GitHub Secret Scanning with Push Protection in repository settings (`Settings -> Code security`) alongside CI `gitleaks`.
- [ ] **Keyless CI Authentication (Workload Identity Federation)**: Replace `secrets.GCP_SA_KEY` in GitHub Actions with GCP Workload Identity Federation and separate read-only vs. write service accounts.
- [ ] **Local Pre-Commit Hooks**: Add `.pre-commit-config.yaml` with `gitleaks`, `ruff`, and `sqlfluff` for fast pre-commit feedback.
- [ ] **Decoupled Secret & Token Storage**: Move static credentials to GCP Secret Manager environment variables and isolate dynamic OAuth tokens in a transactional store (e.g. Cloud SQL or Firestore) with row-level locks.
- [ ] **Automated Metric Reconciliation**: Implement dbt singular audit tests (e.g. `tests/assert_revenue_reconciliation.sql`) asserting `SUM(revenue)` in reporting marts matches raw staging totals within a $0.01 tolerance to flag join drift before dashboard refreshes.
