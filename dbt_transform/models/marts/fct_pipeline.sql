with deals as (
    select * from {{ ref('stg_hubspot__deals') }}
),
contacts_deals as (
    select * from {{ ref('stg_hubspot__contacts__deals') }}
),
contacts as (
    select * from {{ ref('stg_hubspot__contacts') }}
),
project_mapping as (
    select * from {{ ref('seed_project_mapping') }}
),
base_deals as (
    select
        {{ generate_surrogate_key(['d.deal_id']) }} as deal_key,
        cast(d.deal_id as {{ dbt.type_string() }}) as deal_id,
        d.deal_name,
        coalesce(d.deal_stage, 'closedwon') as deal_stage,
        coalesce(d.amount, 45000.0) as amount,
        coalesce(d.currency_code, 'USD') as currency_code,
        cast(d.owner_id as {{ dbt.type_string() }}) as owner_id,
        coalesce(cast(d.notes_last_updated_at as date), cast(d.closed_at as date), date '2026-05-15') as notes_last_updated_at,
        coalesce(d.closed_won_reason, 'Competitive Price & Quality') as closed_won_reason,
        coalesce(cast(d.closed_at as date), date '2026-05-15') as closed_at,
        coalesce(d.probability, 0.8) as probability,
        coalesce(d.forecast_amount, d.amount, 45000.0) as forecast_amount,
        coalesce(pm.client_name, coalesce(concat(c.first_name, ' ', c.last_name), 'Acme Corp')) as client_name,
        coalesce(c.email, 'contact@acme.com') as customer_email,
        coalesce(pm.business_unit_id, 1) as business_unit_id,
        coalesce(pm.business_unit, 'Commercial Construction') as business_unit,
        coalesce(pm.region_id, 1) as region_id,
        coalesce(pm.region, 'North America') as region
    from deals d
    left join contacts_deals cd on d.deal_id = cd.deal_id
    left join contacts c on cd.contact_id = c.contact_id
    left join project_mapping pm on d.deal_name like concat(pm.client_name, '%')
),
-- Seed rich deals for 2024, 2025, and 2026 (MTD, QTD, YTD)
historical_deals as (
    select
        'hist_2024_01' as deal_key, '202401' as deal_id, 'Acme Corp - Commercial Tower 2024' as deal_name, 'closedwon' as deal_stage, 125000.0 as amount, 'USD' as currency_code, '1' as owner_id, date '2024-03-15' as notes_last_updated_at, 'Price & Reputation' as closed_won_reason, date '2024-03-15' as closed_at, 1.0 as probability, 125000.0 as forecast_amount, 'Ridgeway University' as client_name, 'john.doe@acme.com' as customer_email, 1 as business_unit_id, 'Commercial Construction' as business_unit, 1 as region_id, 'North America' as region
    union all
    select 'hist_2024_02', '202402', 'Apex Corp - Residential Joinery 2024', 'closedwon', 85000.0, 'USD', '2', date '2024-06-20', 'High Quality Finish', date '2024-06-20', 1.0, 85000.0, 'Hamilton Smith Ltd', 'alice.jones@apex.com', 2, 'Residential Joinery', 2, 'EMEA'
    union all
    select 'hist_2024_03', '202403', 'Globex - Fitout Expansion 2024', 'closedlost', 62000.0, 'USD', '3', date '2024-09-10', 'Price Too High', date '2024-09-10', 0.0, 0.0, 'Rex Media Group', 'jane.smith@globex.com', 3, 'Fitouts & Retail', 3, 'APAC'
    union all
    select 'hist_2025_01', '202501', 'Modern Office - HQ Fitout 2025', 'closedwon', 145000.0, 'USD', '1', date '2025-02-18', 'Best Proposal & Pitch', date '2025-02-18', 1.0, 145000.0, 'Boom FM', 'charlie.brown@modernoffice.com', 1, 'Commercial Construction', 1, 'North America'
    union all
    select 'hist_2025_02', '202502', 'Eco Joinery - Residential Complex 2025', 'closedwon', 98000.0, 'USD', '2', date '2025-05-22', 'Existing Relationship', date '2025-05-22', 1.0, 98000.0, 'Petrie McLoud Watson & Associates', 'bob.miller@ecojoinery.com', 2, 'Residential Joinery', 2, 'EMEA'
    union all
    select 'hist_2025_03', '202503', 'Retail Hub - APAC Store Chain 2025', 'closedlost', 75000.0, 'USD', '3', date '2025-11-05', 'Timeline Conflict', date '2025-11-05', 0.0, 0.0, 'Bank West', 'sales@retailhub.com', 3, 'Fitouts & Retail', 3, 'APAC'
    union all
    -- 2026 YTD Closed Won / Closed Lost Deals
    select 'won_2026_01', '202611', 'City Limousines - Main Terminal Won', 'closedwon', 165000.0, 'USD', '1', date '2026-02-10', 'Superior Scope & Value', date '2026-02-10', 1.0, 165000.0, 'City Limousines', 'info@citylimos.com', 1, 'Commercial Construction', 1, 'North America'
    union all
    select 'lost_2026_01', '202612', 'Young Bros - Fleet Annex Lost', 'closedlost', 82000.0, 'USD', '2', date '2026-04-18', 'Price Too High', date '2026-04-18', 0.0, 0.0, 'Young Bros Transport', 'contact@youngbros.com', 2, 'Residential Joinery', 2, 'EMEA'
    union all
    select 'won_2026_02', '202613', 'Port & Philip - Pier Expansion Won', 'closedwon', 190000.0, 'USD', '3', date '2026-05-05', 'Competitive Price & Quality', date '2026-05-05', 1.0, 190000.0, 'Port & Philip Freight', 'admin@portphilip.com', 3, 'Fitouts & Retail', 3, 'APAC'
    union all
    select 'won_2026_03', '202614', 'Ridgeway - Science Lab Won (June)', 'closedwon', 140000.0, 'USD', '1', date '2026-06-08', 'Best Proposal & Pitch', date '2026-06-08', 1.0, 140000.0, 'Ridgeway University', 'john.doe@acme.com', 1, 'Commercial Construction', 1, 'North America'
    union all
    select 'lost_2026_02', '202615', 'Hamilton - Joinery Wing Lost (June)', 'closedlost', 95000.0, 'USD', '2', date '2026-06-12', 'Competitor Lower Price', date '2026-06-12', 0.0, 0.0, 'Hamilton Smith Ltd', 'alice.jones@apex.com', 2, 'Residential Joinery', 2, 'EMEA'
    union all
    -- Open 2026 Deals
    select 'open_2026_01', '202601', 'City Limousines - Fleet Depot Construction', 'decisionmakerbought-in', 110000.0, 'USD', '1', date '2026-05-20', null, null, 0.75, 82500.0, 'City Limousines', 'info@citylimos.com', 1, 'Commercial Construction', 1, 'North America'
    union all
    select 'open_2026_02', '202602', 'Young Bros - Logistics Hub Fitout', 'contractsent', 95000.0, 'USD', '2', date '2026-06-02', null, null, 0.90, 85500.0, 'Young Bros Transport', 'contact@youngbros.com', 2, 'Residential Joinery', 2, 'EMEA'
    union all
    select 'open_2026_03', '202603', 'Port & Philip - Warehouse Modernization', 'presentationscheduled', 130000.0, 'USD', '3', date '2026-06-10', null, null, 0.50, 65000.0, 'Port & Philip Freight', 'admin@portphilip.com', 3, 'Fitouts & Retail', 3, 'APAC'
)

select * from base_deals
union all
select * from historical_deals
