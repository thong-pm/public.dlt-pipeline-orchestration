with months_seq as (
{% if target.type == 'bigquery' %}
    select m from unnest(generate_date_array(date '2023-01-01', date '2026-12-01', interval 1 month)) as m
{% else %}
    select generate_series('2023-01-01'::date, '2026-12-01'::date, '1 month'::interval)::date as m
{% endif %}
),

bu_meta as (
    select 1 as business_unit_id, 'Commercial Construction' as business_unit, 1.40 as bu_weight, 0.47 as base_sold_margin union all
    select 2, 'Residential Joinery', 0.85, 0.43 union all
    select 3, 'Fitouts & Retail', 1.10, 0.45
),

region_meta as (
    select 1 as region_id, 'North America' as region, 1.45 as r_weight union all
    select 2, 'EMEA', 1.05 union all
    select 3, 'APAC', 0.75
),

-- Master monthly series with rich, realistic, fluctuating business dynamics
monthly_simulation as (
    select
        m.m as month_date,
        bu.business_unit_id,
        bu.business_unit,
        r.region_id,
        r.region,
        -- Continuous month index (1 in Jan 2023 to 48 in Dec 2026)
        ((extract(year from m.m) - 2023) * 12 + extract(month from m.m)) as m_idx,
        extract(month from m.m) as m_num,
        extract(year from m.m) as y_num,
        bu.bu_weight,
        bu.base_sold_margin,
        r.r_weight,
        
        -- Yearly growth: 2023 base, +16% in 2024, +35% in 2025, +55% in 2026
        (1.0 + (extract(year from m.m) - 2023) * 0.16 + ((extract(month from m.m) - 1) * 0.012)) as growth_factor,
        
        -- Construction seasonal factor (Jan/Feb winter low, Apr-Jun spring rush, Aug lull, Sep-Nov fall push, Dec slow)
        case extract(month from m.m)
            when 1 then 0.78
            when 2 then 0.82
            when 3 then 1.15
            when 4 then 1.25
            when 5 then 1.30
            when 6 then 1.35
            when 7 then 1.10
            when 8 then 0.88
            when 9 then 1.22
            when 10 then 1.28
            when 11 then 1.18
            else 0.85
        end as season_factor,

        -- Lumpy contract award multiplier for booked pipeline
        (0.85 + 0.35 * sin(((extract(year from m.m) - 2023) * 12 + extract(month from m.m)) * 0.42 + bu.business_unit_id * 1.3)) as deal_lumpiness
    from months_seq m
    cross join bu_meta bu
    cross join region_meta r
),

calculated_metrics as (
    select
        s.month_date,
        s.business_unit_id,
        s.business_unit,
        s.region_id,
        s.region,
        s.m_idx,
        
        -- Billed Revenue (Historical actuals up to 2026-06-15)
        case 
            when s.month_date > date '2026-06-15' then 0.0
            else round(cast(greatest(12000.0,
                38000.0 * s.bu_weight * s.r_weight * s.growth_factor * s.season_factor * 
                (0.90 + 0.22 * sin(s.m_idx * 0.48 + s.region_id * 0.8) + 0.12 * cos(s.m_idx * 0.85 + s.business_unit_id))
            ) as numeric), 2)
        end as total_billed_revenue,

        -- Dynamic Project Realized Margin % (Real-life swings: 32% to 52% actual margin)
        greatest(0.31, least(0.53, round(cast(
            0.43 + 0.075 * sin(s.m_idx * 0.28 + s.business_unit_id * 0.7) + 0.040 * cos(s.m_idx * 0.65 + s.region_id * 0.5)
        as numeric), 4))) as realized_margin_pct,

        -- Dynamic Sold Margin Target % (Bid target: 41% to 51%)
        round(cast(
            s.base_sold_margin + 0.035 * sin(s.m_idx * 0.22 + s.region_id * 0.4) + 0.015 * cos(s.m_idx * 0.55 + s.business_unit_id)
        as numeric), 4) as sold_margin_pct,

        -- Booked Contracts Pipeline (Lumpy real-world deal awards)
        round(cast(greatest(15000.0,
            42000.0 * s.bu_weight * s.r_weight * s.growth_factor * s.deal_lumpiness * 
            (0.92 + 0.16 * cos(s.m_idx * 0.72 + s.region_id))
        ) as numeric), 2) as total_booked_pipeline,

        -- Weighted Open Pipeline for future forecast
        case 
            when s.month_date >= date '2026-06-01' then round(cast((48000.0 * s.r_weight * s.bu_weight + 24000.0 * sin(s.m_idx * 1.2 + s.business_unit_id)) as numeric), 2)
            else round(cast(22000.0 * s.r_weight * s.bu_weight + 12000.0 * abs(sin(s.m_idx)) as numeric), 2)
        end as total_weighted_open_pipeline,

        -- WIP billing schedule for future forecast
        case 
            when s.month_date >= date '2026-06-01' then round(cast((55000.0 * s.r_weight * s.bu_weight + 28000.0 * cos(s.m_idx * 0.95 + s.business_unit_id)) as numeric), 2)
            else 0.0 
        end as future_wip_schedule
    from monthly_simulation s
)

select
    {{ generate_surrogate_key(['cm.month_date', 'cm.business_unit_id', 'cm.region_id']) }} as executive_cockpit_key,
    cm.month_date,
    cm.business_unit_id,
    cm.business_unit,
    cm.region_id,
    cm.region,
    
    -- Actual Billed Revenue
    cm.total_billed_revenue,
    round(cast(cm.total_billed_revenue * 1.20 as numeric), 2) as billed_revenue_target,
    
    -- Overdue AR (realistic 8-15% of revenue)
    case when cm.total_billed_revenue > 0 then round(cast(cm.total_billed_revenue * (0.08 + 0.05 * sin(cm.m_idx)) as numeric), 2) else 0.0 end as total_ar_overdue,
    
    -- Cash Collected (85-95% of revenue)
    case when cm.total_billed_revenue > 0 then round(cast(cm.total_billed_revenue * (0.88 + 0.06 * cos(cm.m_idx)) as numeric), 2) else 0.0 end as total_cash_collected,
    
    -- Booked Pipeline
    cm.total_booked_pipeline,
    cm.total_weighted_open_pipeline,
    
    -- Active Projects Count
    round(cast(8 + cm.business_unit_id * 4 + 3 * sin(cm.m_idx * 0.5) as numeric), 0) as active_projects_count,
    
    -- Actual Job Costs = Billed Revenue * (1 - realized_margin_pct)
    case 
        when cm.total_billed_revenue > 0 then round(cast(cm.total_billed_revenue * (1.0 - cm.realized_margin_pct) as numeric), 2)
        else 0.0
    end as total_actual_job_costs,

    -- Gross Profit Amount
    case 
        when cm.total_billed_revenue > 0 then round(cast(cm.total_billed_revenue * cm.realized_margin_pct as numeric), 2)
        else 0.0
    end as gross_profit_amount,
    
    -- Gross Profit Margin %
    case 
        when cm.total_billed_revenue > 0 then cm.realized_margin_pct
        else 0.0
    end as gross_profit_margin_pct,

    -- Dynamic Sold Margin Target %
    cm.sold_margin_pct,
    
    -- Margin Fade % (Sold - Realized)
    case 
        when cm.total_billed_revenue > 0 then round(cast(cm.sold_margin_pct - cm.realized_margin_pct as numeric), 4)
        else 0.0
    end as margin_fade_pct,

    -- WIP Unbilled Work
    greatest(0, round(cast((cm.total_booked_pipeline * 0.65) - cm.total_billed_revenue as numeric), 2)) as wip_value,

    -- Remaining WIP billing schedule (Includes H2 2026 future WIP)
    greatest(0, round(cast(cm.future_wip_schedule + greatest(0, cm.total_booked_pipeline - cm.total_billed_revenue) as numeric), 2)) as wip_billing_schedule,

    -- Revenue Forecast: Weighted Pipeline + WIP Billing Schedule
    round(cast(cm.total_weighted_open_pipeline + cm.future_wip_schedule as numeric), 2) as total_revenue_forecast,

    -- Lead to Cash Cycle Time (Dynamic per business unit & seasonality)
    case 
        when cm.business_unit = 'Commercial Construction' then round(cast(38.0 + 8.0 * sin(cm.m_idx * 0.4) as numeric), 1)
        when cm.business_unit = 'Fitouts & Retail' then round(cast(26.0 + 5.0 * cos(cm.m_idx * 0.5) as numeric), 1)
        else round(cast(18.0 + 4.0 * sin(cm.m_idx * 0.6) as numeric), 1)
    end as lead_to_cash_days
from calculated_metrics cm
