with source as (
    select * from {{ source('xero', 'contacts') }}
),

renamed as (
    select
        contact_id,
        name as contact_name,
        first_name,
        last_name,
        email_address as email,
        contact_status,
        is_customer,
        is_supplier
    from source
)

select * from renamed
