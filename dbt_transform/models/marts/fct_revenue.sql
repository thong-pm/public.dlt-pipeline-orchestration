with revenue_source as (
    select * from {{ ref('int_all_revenue') }}
)

select
    {{ generate_surrogate_key(['source_system', 'transaction_id']) }} as revenue_key,
    source_system,
    transaction_id,
    transaction_description,
    revenue_amount,
    cost_of_goods_sold,
    round(cast(revenue_amount - cost_of_goods_sold as {{ dbt.type_numeric() }}), 2) as gross_profit,
    data_origin,
    business_unit_id,
    business_unit,
    region_id,
    region,
    currency_code,
    transaction_date,
    extract(year from transaction_date) as transaction_year,
    extract(month from transaction_date) as transaction_month,
    extract(quarter from transaction_date) as transaction_quarter,
    customer_email,
    {{ generate_surrogate_key(['customer_email']) }} as customer_key
from revenue_source
