with hubspot_deals as (
    select
        'hubspot' as source_system,
        cast(d.deal_id as {{ dbt.type_string() }}) as transaction_id,
        d.deal_name as transaction_description,
        d.amount as revenue_amount,
        d.currency_code,
        cast(d.notes_last_updated_at as timestamp) as transaction_date,
        c.email as customer_email
    from {{ ref('stg_hubspot__deals') }} d
    left join {{ ref('stg_hubspot__contacts__deals') }} cd on d.deal_id = cd.deal_id
    left join {{ ref('stg_hubspot__contacts') }} c on cd.contact_id = c.contact_id
    where d.amount > 0
),

xero_invoices as (
    select
        'xero' as source_system,
        xi.invoice_id as transaction_id,
        xi.invoice_number as transaction_description,
        xi.total_amount as revenue_amount,
        xi.currency_code,
        cast(xi.invoice_date as timestamp) as transaction_date,
        xc.email as customer_email
    from {{ ref('stg_xero__invoices') }} xi
    left join {{ ref('stg_xero__contacts') }} xc on xi.contact_id = xc.contact_id
    where xi.invoice_status in ('PAID', 'AUTHORISED')
)

select * from hubspot_deals
union all
select * from xero_invoices
