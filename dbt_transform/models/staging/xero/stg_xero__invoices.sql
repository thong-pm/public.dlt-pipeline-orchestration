with source as (
    select * from {{ source('xero', 'invoices') }}
),

renamed as (
    select
        invoice_id,
        invoice_number,
        status as invoice_status,
        type as invoice_type,
        cast(total as numeric) as total_amount,
        cast(sub_total as numeric) as sub_total_amount,
        cast(total_tax as numeric) as tax_amount,
        cast(amount_due as numeric) as amount_due,
        cast(amount_paid as numeric) as amount_paid,
        currency_code,
        date_string as invoice_date,
        due_date_string as due_date,
        contact__contact_id as contact_id,
        contact__name as contact_name
    from source
)

select * from renamed
