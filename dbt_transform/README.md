# dbt_transform

dbt transformation layer for the multi-tenant SaaS ELT pipeline.

Reads from raw schemas loaded by `dlt` and builds a clean, tested analytical layer consumed by Looker Studio and Power BI.

## Layer Architecture

```
dlt (extract + load)
  └── raw schemas (hubspot_data / hubspot_raw, etc.)
        └── staging/    → views  (clean, rename, cast)
              └── intermediate/  → views  (union, deduplicate, enrich)
                    └── marts/   → tables (fct_revenue, dim_customers)
```

## Running Locally

```bash
./run_dbt_dev.sh
```

This runs `dbt debug → compile → run → test` against local Postgres (`wsltest_db`).

## Switching to BigQuery (prod)

In `.dlt/config.toml` set `destination = "bigquery"`, then:

```bash
cd dbt_transform
../.venv/bin/dbt run --profiles-dir . --target prod
```

## Model Inventory

| Layer        | Model                     | Description                                      |
|--------------|---------------------------|--------------------------------------------------|
| staging      | stg_hubspot__contacts     | HubSpot contacts, cast IDs                       |
| staging      | stg_hubspot__companies    | HubSpot companies, lifecycle stage               |
| staging      | stg_hubspot__deals        | HubSpot deals, cast amount                       |
| staging      | stg_procore__projects     | Procore projects per company                     |
| staging      | stg_procore__companies    | Procore company list                             |
| staging      | stg_procore__users        | Procore users                                    |
| staging      | stg_shopify__products     | Shopify product catalogue                        |
| staging      | stg_shopify__variants     | Shopify variants, cast price to numeric          |
| staging      | stg_xero__invoices        | Xero invoices, amounts and status                |
| staging      | stg_xero__line_items      | Xero invoice line items                          |
| staging      | stg_xero__contacts        | Xero billing contacts                            |
| intermediate | int_all_revenue           | Union of HubSpot deals + Xero invoices           |
| intermediate | int_contacts_deduped      | Golden contact record across CRM + ERP           |
| marts        | fct_revenue               | Grain-level revenue fact table with calendar cols|
| marts        | dim_customers             | Deduplicated customer dimension with surrogate key|
