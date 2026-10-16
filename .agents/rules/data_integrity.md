# Repository Agent Rules: Data Modeling & Demo Integrity

## Core Context
This repository is an end-to-end multi-SaaS ELT and BI pipeline integrating HubSpot, Xero, Procore, and Shopify into Google BigQuery (cloud target) and PostgreSQL (local target) via dlt, dbt Core, and Evidence.dev.
Because vendor sandbox accounts provide sparse point-in-time data, data augmentation is required to provide a complete 4-year time series (2023 to 2026) for BI demonstration.

## Data Modeling Rules

### 1. Mandatory Schema & Entity Anchoring
* Never generate disconnected mathematical CTEs (such as standalone sine/cosine curves or arbitrary multipliers) that bypass raw and staging tables.
* Every mart model must be relationally anchored to the real schemas, entity IDs, and DAG lineage originating from dlt staging views (`stg_*`) and intermediate models (`int_*`).
* All backfilled or simulated records must use the exact client names, project numbers, business unit IDs, and region IDs mapped in `seed_project_mapping.csv`.

### 2. Time-Series Backfill Pattern (Anchored Backfill)
* When backfilling historical months to satisfy BI date slicers (MTD, QTD, YTD, multi-year trends):
  * For the current snapshot period, metrics must directly aggregate real extracted records from Xero invoices, HubSpot deals, and Procore projects.
  * For historical periods where sandbox records do not exist, scale back deterministically from the real client baselines rather than generating random numbers.
  * Follow the pattern established in `fct_pipeline.sql`: preserve exact identical column schemas, types, and foreign keys.

### 3. No Orphaned Pipelines
* Never construct staging and intermediate models (such as `int_all_revenue.sql`, `fct_revenue.sql`, and `dim_customers.sql`) and then bypass them on the dashboard.
* If a model is built to unify revenue or deduplicate contacts, downstream marts and dashboard pages must query that model.

### 4. Technical Honesty & Documentation Standards
* Keep documentation and README descriptions concise, direct, and factual.
* State clearly which entities are extracted via live APIs and which historical slices are anchored backfills. Never make false claims about 100% production volume when data augmentation is in use.
* Avoid marketing fluff ("enterprise-grade", "production-ready", "zero-latency").

### 5. Repository Code & Writing Style
* Avoid using icons and emoji in backend code, SQL, data models, or code comments.
* Dashboards (e.g., Evidence.dev pages and UI components) are safe to use icons as long as they help clarify and enhance visuals.
* Never use em dashes ("—") in writing. Use standard hyphens, colons, or parentheses instead.

### 6. Provenance
* Every `int_*` and `fct_*` model that unions real and backfilled rows must carry a `data_origin` column with accepted values:
  * `api_native`: Raw records extracted directly from vendor read APIs (e.g., Xero live demo tenant, Shopify catalog).
  * `api_loaded_csv`: Records pushed into sandbox accounts via vendor write APIs by `scripts/seed_data/cross_saas/seed.py` and extracted back.
  * `backfill`: Deterministic historical extensions generated in dbt for periods preceding the sandbox snapshot date.
* Dashboard pages in `evidence_dashboard/pages/` must display the share of backfilled data and the start date of real extracted data (e.g., via a provenance badge or KPI pill).

### 7. Backfill Mechanics
* Backfill rows are generated only for entity-periods with no real record (anti-join). Real extracted data always takes precedence.
* Backfill parameters (growth, seasonality, noise amplitude, baseline window) must live in `dbt_transform/seeds/seed_backfill_params.csv`, never hardcoded in SQL CTEs.
* Pseudo-noise must use a deterministic hash of entity ID and period via a cross-database macro compatible with both PostgreSQL and Google BigQuery. Do not use `random()` or `current_date()`. Use the `as_of_date` dbt variable.
* Backfill may only extend history for entities already listed in `seed_project_mapping.csv`. It must never fabricate new client entities or business units.
* All backfilled record IDs must use the prefix `BF-` (e.g., `BF-INV-1001`, `BF-DEAL-202401`).
* Backfilled volume per entity-period must not exceed documented multiples of the real baseline.
* Raw `dlt` tables and vendor accounts must never be modified by backfill. All backfill logic must be isolated in `dbt_transform/models/intermediate/int_*_backfill.sql` models.

### 8. Cross-System Consistency
* Backfilled deals (HubSpot), projects (Procore), and invoices (Xero) must all derive from a single dimensional spine built from `seed_project_mapping.csv`.
* dbt tests must reconcile invoiced totals against project contract values and deal amounts within documented tolerances.

### 9. Enforcement
* dbt data tests in `dbt_transform/models/marts/schema.yml` must validate:
  * No overlap between real and backfilled records (anti-join verification).
  * Exact schema parity between real and backfilled CTEs.
  * Accepted values test on the `data_origin` column.
  * Non-negative amounts on all financial and volume measures.
  * Cross-system reconciliation between billing and contract values.
* CI and deployment checks must fail if a model in `dbt_transform/models/marts/` is not referenced by any query in `evidence_dashboard/pages/` or `evidence_dashboard/sources/analytics/`.
