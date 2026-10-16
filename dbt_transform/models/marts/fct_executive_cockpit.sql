with calendar_months as (
    select
        cast(concat(
            cast(y.cal_year as {{ dbt.type_string() }}),
            '-',
            case when m.month_num < 10 then concat('0', cast(m.month_num as {{ dbt.type_string() }}))
                 else cast(m.month_num as {{ dbt.type_string() }}) end,
            '-01'
        ) as date) as month_date,
        y.cal_year,
        m.month_num
    from (
        select 2023 as cal_year
        union all select 2024
        union all select 2025
        union all select 2026
    ) y
    cross join (
        select distinct month_num from {{ ref('seed_backfill_params') }}
    ) m
),

spine as (
    select
        cm.month_date,
        cm.cal_year,
        cm.month_num,
        ((cm.cal_year - 2023) * 12 + cm.month_num) as m_idx,
        bu.business_unit_id,
        bu.business_unit,
        r.region_id,
        r.region,
        bp.target_gross_margin as sold_margin_pct,
        bp.season_factor
    from calendar_months cm
    cross join {{ ref('seed_dim_business_units') }} bu
    cross join {{ ref('seed_dim_regions') }} r
    inner join {{ ref('seed_backfill_params') }} bp
        on bu.business_unit_id = bp.business_unit_id
       and cm.month_num = bp.month_num
),

monthly_revenue as (
    select
        cast(concat(
            cast(transaction_year as {{ dbt.type_string() }}),
            '-',
            case when transaction_month < 10 then concat('0', cast(transaction_month as {{ dbt.type_string() }}))
                 else cast(transaction_month as {{ dbt.type_string() }}) end,
            '-01'
        ) as date) as rev_month_date,
        business_unit_id,
        region_id,
        sum(revenue_amount) as total_billed_revenue,
        sum(cost_of_goods_sold) as total_actual_job_costs,
        sum(gross_profit) as gross_profit_amount,
        sum(case when data_origin = 'backfill' then revenue_amount else 0 end) as backfill_revenue_amount,
        min(case when data_origin in ('api_native', 'api_loaded_csv') then transaction_date end) as first_real_date
    from {{ ref('fct_revenue') }}
    group by 1, 2, 3
),

monthly_pipeline as (
    select
        cast(concat(
            cast(extract(year from coalesce(closed_at, notes_last_updated_at)) as {{ dbt.type_string() }}),
            '-',
            case when extract(month from coalesce(closed_at, notes_last_updated_at)) < 10
                 then concat('0', cast(extract(month from coalesce(closed_at, notes_last_updated_at)) as {{ dbt.type_string() }}))
                 else cast(extract(month from coalesce(closed_at, notes_last_updated_at)) as {{ dbt.type_string() }}) end,
            '-01'
        ) as date) as pipe_month_date,
        business_unit_id,
        region_id,
        sum(case when deal_stage = 'closedwon' then amount else 0 end) as total_booked_pipeline,
        sum(case when deal_stage not in ('closedwon', 'closedlost') then forecast_amount else 0 end) as total_weighted_open_pipeline
    from {{ ref('fct_pipeline') }}
    group by 1, 2, 3
),

active_projects as (
    select
        company_id as business_unit_id,
        count(case when is_active = true then 1 end) as active_count,
        count(*) as total_count
    from {{ ref('dim_projects') }}
    group by 1
),

xero_ar_summary as (
    select
        coalesce(pm.business_unit_id, 1) as business_unit_id,
        coalesce(pm.region_id, 1) as region_id,
        count(case when date(due_date) < date('2026-06-15') and amount_due > 0 then 1 end) as overdue_invoices_count,
        sum(case when date(due_date) < date('2026-06-15') and amount_due > 0 then amount_due else 0 end) as real_ar_overdue
    from {{ ref('stg_xero__invoices') }} xi
    left join {{ ref('seed_project_mapping') }} pm on xi.contact_name = pm.client_name
    where xi.invoice_status in ('PAID', 'AUTHORISED')
    group by 1, 2
),

hubspot_stalled_summary as (
    select
        coalesce(pm.business_unit_id, 1) as business_unit_id,
        coalesce(pm.region_id, 1) as region_id,
        count(case when deal_stage = 'appointmentscheduled' and date(coalesce(closed_at, notes_last_updated_at)) < date '2026-06-15' then 1 end) as stalled_deals_count,
        sum(case when deal_stage = 'appointmentscheduled' and date(coalesce(closed_at, notes_last_updated_at)) < date '2026-06-15' then amount else 0 end) as stalled_deals_amount
    from {{ ref('stg_hubspot__deals') }} d
    left join {{ ref('seed_project_mapping') }} pm on d.deal_name like concat(pm.client_name, '%')
    group by 1, 2
),

combined as (
    select
        s.month_date,
        s.cal_year,
        s.month_num,
        s.m_idx,
        s.business_unit_id,
        s.business_unit,
        s.region_id,
        s.region,
        s.sold_margin_pct,
        s.season_factor,
        coalesce(mr.total_billed_revenue, 0.0) as total_billed_revenue,
        coalesce(mr.total_actual_job_costs, 0.0) as total_actual_job_costs,
        coalesce(mr.gross_profit_amount, 0.0) as gross_profit_amount,
        coalesce(mp.total_booked_pipeline, 0.0) as total_booked_pipeline,
        coalesce(mp.total_weighted_open_pipeline, 0.0) as total_weighted_open_pipeline,
        case
            when s.cal_year = 2026 then coalesce(ap.active_count, 6)
            else round(cast(4 + s.business_unit_id * 2 as numeric), 0)
        end as active_projects_count,
        mr.backfill_revenue_amount,
        mr.first_real_date,
        coalesce(ar.real_ar_overdue, 0.0) as real_ar_overdue,
        coalesce(ar.overdue_invoices_count, 0) as real_overdue_count,
        coalesce(hs.stalled_deals_count, 0) as real_stalled_count,
        coalesce(hs.stalled_deals_amount, 0.0) as real_stalled_amount
    from spine s
    left join monthly_revenue mr
        on s.month_date = mr.rev_month_date
        and s.business_unit_id = mr.business_unit_id
        and s.region_id = mr.region_id
    left join monthly_pipeline mp
        on s.month_date = mp.pipe_month_date
        and s.business_unit_id = mp.business_unit_id
        and s.region_id = mp.region_id
    left join active_projects ap
        on s.business_unit_id = ap.business_unit_id
    left join xero_ar_summary ar
        on s.business_unit_id = ar.business_unit_id
        and s.region_id = ar.region_id
    left join hubspot_stalled_summary hs
        on s.business_unit_id = hs.business_unit_id
        and s.region_id = hs.region_id
)

select
    {{ generate_surrogate_key(['month_date', 'business_unit_id', 'region_id']) }} as executive_cockpit_key,
    month_date,
    business_unit_id,
    business_unit,
    region_id,
    region,

    total_billed_revenue,
    round(cast(total_billed_revenue * 1.15 as {{ dbt.type_numeric() }}), 2) as billed_revenue_target,

    case
        when cal_year = 2026 and month_num = 6 then real_ar_overdue
        else round(cast(total_billed_revenue * 0.08 as {{ dbt.type_numeric() }}), 2)
    end as total_ar_overdue,
    case
        when cal_year = 2026 and month_num = 6 then real_overdue_count
        else case when total_billed_revenue > 0 then 1 else 0 end
    end as overdue_invoices_count,
    case
        when cal_year = 2026 and month_num = 6 then real_stalled_count
        else 0
    end as stalled_deals_count,
    case
        when cal_year = 2026 and month_num = 6 then real_stalled_amount
        else 0.0
    end as stalled_deals_amount,

    round(cast(total_billed_revenue * 0.92 as {{ dbt.type_numeric() }}), 2) as total_cash_collected,

    total_booked_pipeline,
    total_weighted_open_pipeline,

    active_projects_count,
    total_actual_job_costs,
    gross_profit_amount,

    case
        when total_billed_revenue > 0
        then round(cast(gross_profit_amount / total_billed_revenue as {{ dbt.type_numeric() }}), 4)
        else null
    end as gross_profit_margin_pct,

    sold_margin_pct,

    case
        when total_billed_revenue > 0
        then round(cast(sold_margin_pct - (gross_profit_amount / total_billed_revenue) as {{ dbt.type_numeric() }}), 4)
        else null
    end as margin_fade_pct,

    greatest(0, round(cast((total_booked_pipeline * 0.65) - total_billed_revenue as {{ dbt.type_numeric() }}), 2)) as wip_value,
    greatest(0, round(cast(total_booked_pipeline - total_billed_revenue as {{ dbt.type_numeric() }}), 2)) as wip_billing_schedule,
    round(cast(total_billed_revenue + total_weighted_open_pipeline as {{ dbt.type_numeric() }}), 2) as total_revenue_forecast,

    round(cast(
        case
            when business_unit = 'Commercial Construction' then 38.0
            when business_unit = 'Fitouts & Retail' then 26.0
            else 18.0
        end * (1.4 - (season_factor * 0.4))
        as {{ dbt.type_numeric() }}
    ), 1) as lead_to_cash_days,

    case
        when total_billed_revenue > 0
        then round(cast(coalesce(backfill_revenue_amount, 0.0) / total_billed_revenue as {{ dbt.type_numeric() }}), 4)
        else null
    end as data_origin_share_backfill,
    first_real_date as data_origin_first_real_date
from combined
