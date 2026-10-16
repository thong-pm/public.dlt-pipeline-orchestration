with project_mapping as (
    select * from {{ ref('seed_project_mapping') }}
),

backfill_params as (
    select * from {{ ref('seed_backfill_params') }}
),

xero_invoices as (
    select * from {{ ref('stg_xero__invoices') }}
),

xero_contacts as (
    select * from {{ ref('stg_xero__contacts') }}
),

client_baselines as (
    select
        pm.client_name,
        pm.project_number,
        pm.business_unit_id,
        pm.business_unit,
        pm.region_id,
        pm.region,
        coalesce(avg(xi.total_amount), 1500.0) as baseline_monthly_revenue,
        coalesce(min(xc.email), lower(concat(replace(pm.client_name, ' ', '.'), '@example.com'))) as customer_email
    from project_mapping pm
    left join xero_invoices xi
        on pm.client_name = xi.contact_name
       and xi.invoice_status in ('PAID', 'AUTHORISED')
    left join xero_contacts xc
        on pm.client_name = xc.contact_name
       and xc.email is not null
       and xc.email != ''
    group by
        pm.client_name,
        pm.project_number,
        pm.business_unit_id,
        pm.business_unit,
        pm.region_id,
        pm.region
),

years as (
    select 2023 as cal_year
    union all select 2024
    union all select 2025
    union all select 2026
),

months as (
    select distinct month_num as cal_month from backfill_params
),

calendar_spine as (
    select
        y.cal_year,
        m.cal_month,
        cast(concat(
            cast(y.cal_year as {{ dbt.type_string() }}),
            '-',
            case when m.cal_month < 10 then concat('0', cast(m.cal_month as {{ dbt.type_string() }}))
                 else cast(m.cal_month as {{ dbt.type_string() }}) end,
            '-15'
        ) as timestamp) as transaction_date
    from years y
    cross join months m
),

real_invoiced_periods as (
    select distinct
        contact_name as client_name,
        extract(year from cast(invoice_date as timestamp)) as inv_year,
        extract(month from cast(invoice_date as timestamp)) as inv_month
    from xero_invoices
    where invoice_status in ('PAID', 'AUTHORISED')
      and contact_name is not null
),

backfill_grid as (
    select
        c.cal_year,
        c.cal_month,
        c.transaction_date,
        b.client_name,
        b.project_number,
        b.business_unit_id,
        b.business_unit,
        b.region_id,
        b.region,
        b.baseline_monthly_revenue,
        b.customer_email,
        bp.season_factor,
        bp.annual_growth_rate,
        bp.target_gross_margin,
        bp.bu_weight,
        bp.noise_amplitude
    from calendar_spine c
    cross join client_baselines b
    inner join backfill_params bp
        on b.business_unit_id = bp.business_unit_id
       and c.cal_month = bp.month_num
    left join real_invoiced_periods rip
        on b.client_name = rip.client_name
       and c.cal_year = rip.inv_year
       and c.cal_month = rip.inv_month
    where rip.client_name is null
      and c.transaction_date <= cast('2026-10-31' as timestamp)
),

calculated as (
    select
        'xero' as source_system,
        concat(
            'BF-INV-',
            project_number,
            '-',
            cast(cal_year as {{ dbt.type_string() }}),
            case when cal_month < 10 then concat('0', cast(cal_month as {{ dbt.type_string() }}))
                 else cast(cal_month as {{ dbt.type_string() }}) end
        ) as transaction_id,
        concat(client_name, ' - Historical Invoiced Services') as transaction_description,
        round(
            cast(
                baseline_monthly_revenue
                * season_factor
                * power(1.0 + annual_growth_rate, cal_year - 2026)
                * (1.0 + ({{ hash_pseudo_noise('project_number', 'transaction_date') }} * noise_amplitude))
                as {{ dbt.type_numeric() }}
            ),
            2
        ) as revenue_amount,
        'USD' as currency_code,
        transaction_date,
        customer_email,
        'backfill' as data_origin,
        target_gross_margin,
        round(
            cast(
                (baseline_monthly_revenue
                * season_factor
                * power(1.0 + annual_growth_rate, cal_year - 2026)
                * (1.0 - target_gross_margin))
                * (1.0 + ({{ hash_pseudo_noise('client_name', 'transaction_date') }} * (noise_amplitude * 0.85)))
                as {{ dbt.type_numeric() }}
            ),
            2
        ) as estimated_job_cost,
        business_unit_id,
        business_unit,
        region_id,
        region
    from backfill_grid
)

select * from calculated
