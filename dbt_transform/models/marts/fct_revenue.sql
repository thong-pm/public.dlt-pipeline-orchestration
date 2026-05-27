with revenue_source as (
    select * from {{ ref('int_all_revenue') }}
)

select
    {{ generate_surrogate_key(['source_system', 'transaction_id']) }} as revenue_key,
    source_system,
    transaction_id,
    transaction_description,
    revenue_amount,
    currency_code,
    transaction_date,
    extract(year from transaction_date) as transaction_year,
    extract(month from transaction_date) as transaction_month,
    extract(quarter from transaction_date) as transaction_quarter
from revenue_source
