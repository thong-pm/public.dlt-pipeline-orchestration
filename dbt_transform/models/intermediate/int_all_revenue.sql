with hubspot_deals as (
    select
        'hubspot' as source_system,
        cast(deal_id as {{ dbt.type_string() }}) as transaction_id,
        deal_name as transaction_description,
        amount as revenue_amount,
        currency_code,
        cast(notes_last_updated_at as timestamp) as transaction_date
    from {{ ref('stg_hubspot__deals') }}
    where amount > 0
),

xero_invoices as (
    select
        'xero' as source_system,
        invoice_id as transaction_id,
        invoice_number as transaction_description,
        total_amount as revenue_amount,
        currency_code,
        cast(invoice_date as timestamp) as transaction_date
    from {{ ref('stg_xero__invoices') }}
    where invoice_status in ('PAID', 'AUTHORISED')
)

select * from hubspot_deals
union all
select * from xero_invoices
