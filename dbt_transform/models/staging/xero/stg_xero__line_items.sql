with source as (
    select * from {{ source('xero', 'invoices__line_items') }}
),

renamed as (
    select
        line_item_id,
        _dlt_root_id as invoice_dlt_id,
        description,
        cast(unit_amount as numeric) as unit_price,
        cast(tax_amount as numeric) as tax_amount,
        cast(line_amount as numeric) as line_amount,
        cast(quantity as numeric) as quantity,
        account_code,
        item_code
    from source
)

select * from renamed
