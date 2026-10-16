with project_mapping as (
    select * from {{ ref('seed_project_mapping') }}
),


xero_invoices as (
    select
        'xero' as source_system,
        xi.invoice_id as transaction_id,
        xi.invoice_number as transaction_description,
        xi.total_amount as revenue_amount,
        xi.currency_code,
        cast(xi.invoice_date as timestamp) as transaction_date,
        xc.email as customer_email,
        'api_native' as data_origin,
        round(cast(xi.total_amount * 0.55 as {{ dbt.type_numeric() }}), 2) as cost_of_goods_sold,
        coalesce(pm.business_unit_id, 1) as business_unit_id,
        coalesce(pm.business_unit, 'Commercial Construction') as business_unit,
        coalesce(pm.region_id, 1) as region_id,
        coalesce(pm.region, 'North America') as region
    from {{ ref('stg_xero__invoices') }} xi
    left join {{ ref('stg_xero__contacts') }} xc on xi.contact_id = xc.contact_id
    left join project_mapping pm on xi.contact_name = pm.client_name
    where xi.invoice_status in ('PAID', 'AUTHORISED')
),

shopify_orders as (
    select
        'shopify' as source_system,
        cast(so.order_id as {{ dbt.type_string() }}) as transaction_id,
        concat('Shopify Order #', so.order_number) as transaction_description,
        so.total_amount as revenue_amount,
        so.currency_code,
        so.order_date as transaction_date,
        cast(null as {{ dbt.type_string() }}) as customer_email,
        'api_native' as data_origin,
        round(cast(so.total_amount * 0.55 as {{ dbt.type_numeric() }}), 2) as cost_of_goods_sold,
        3 as business_unit_id,
        'Fitouts & Retail' as business_unit,
        1 as region_id,
        'North America' as region
    from {{ ref('stg_shopify__orders') }} so
    where so.total_amount > 0
),

backfill_revenue as (
    select
        source_system,
        transaction_id,
        transaction_description,
        revenue_amount,
        currency_code,
        transaction_date,
        customer_email,
        data_origin,
        estimated_job_cost as cost_of_goods_sold,
        business_unit_id,
        business_unit,
        region_id,
        region
    from {{ ref('int_revenue_backfill') }}
)

select * from xero_invoices
union all
select * from shopify_orders
union all
select * from backfill_revenue
