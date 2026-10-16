# Multi-SaaS BI Pipeline: Case Study & Architectural Specification

Operational context, system boundaries, and architectural specification for the HubSpot, Xero, Procore, and Shopify data pipeline (dlt, dbt Core, Evidence.dev).

---

## 1. Operational Context

### The Business
A modular storage, millwork, and outdoor-structures manufacturer that sells kits online, supplies commercial builders and dealer networks, and handles onsite installation for larger jobs.

### System Roles & Operational Flow
* **Shopify**: Direct-to-consumer (D2C) e-commerce storefront for modular storage and joinery kits.
* **HubSpot CRM**: Inbound pipeline, quotes, and contract management for regional builders and dealer networks.
* **Procore (Field Delivery & Transition to Wrike)**: 
  Originally adopted to manage onsite installation delivery. Because Procore is built for general contractors, it is heavy for a company focused on shop production, marketing launches, and install scheduling. The company is actively migrating project operations to Wrike.
  * **Why active data remains in Procore**: Active install jobs remain in Procore until closeout because moving in-flight RFIs, submittals, and change orders mid-project introduces high operational risk.
  * **Closed projects**: Remain in Procore as the historical system of record for warranty claims and audit trails.
  * **New projects**: Scheduled and launched in Wrike.
* **Xero**: Financial system of record for progress billings, accounts receivable aging, and invoice payment collections.

---

## 2. Customer and Project Mapping

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

### Data Modeling Rules
1. **Client Account Constriction**: All historical backfilled records must tie to the 14 client entities in `seed_project_mapping.csv`. No synthetic companies or business units are fabricated.
2. **Sequential Project Phasing**: The 14 mapped clients generate sequential historical project phases (`BF-PRJ-XXXX-YYYY`) across 2023 to 2025 to reflect multi-year client relationships.
3. **Anti-Join Precedence**: Real extracted API records always override backfilled periods.
4. **Data Origin Flags**: Every record carries a `data_origin` flag (`api_native`, `api_loaded_csv`, or `backfill`).
5. **Independent Cost Variance**: Backfilled direct job costs fluctuate independently from billed revenue, modeling realistic field labor and material variances rather than fixed margin percentages.

---

## 3. Executive Dashboard Specification

### Page 1: Overview ("Is the Business Healthy?")
* **Monthly Cash Flow**: Billed revenue (Xero) vs. job costs (Procore) vs. realized gross profit line.
* **Margin Fade**: Sold contract margin benchmark vs. actual realized gross margin with auto-scaled variance tracking.
* **Forward Demand & Backlog**: Side-by-side comparison of HubSpot open pipeline vs. Procore unbilled contract backlog, reactive to time filters.
* **Lead to Cash Cycle Time**: Dynamic cycle days by business unit modulated by seasonal throughput factors.
* **Diagnostic Health Flags**:
  * ⚠️ **Overdue Receivables**: Count and dollar volume of invoices past due date (Xero).
  * ⚠️ **Stalled Pipeline**: Deals stuck in pipeline past expected close date (HubSpot).
  * 📋 **Delivery Backlog**: Active projects with unbilled WIP delivery value (Procore).
* **Data Coverage Note**: Explicit date anchoring (Live API records active since June 2026; backfill prior).

### Page 2: Sales & Win-Loss ("Where Does Revenue Come From?")
* Pipeline volume by deal stage and conversion win rate (HubSpot).
* Revenue by channel: Commercial Construction, Residential Joinery, Fitouts & Retail, and Shopify D2C.
* Top clients deduplicated across CRM, accounting, and project delivery.

### Page 3: Operations & Delivery ("Are We Delivering Profitably?")
* Active vs. completed project delivery tracking (Procore).
* Invoiced progress vs. contracted project value (Procore vs. Xero unbilled WIP).
* Product catalog inventory levels and price distribution (Shopify).
