with source as (
    select * from {{ source('shopify', 'products') }}
),

renamed as (
    select
        cast(id as bigint) as product_id,
        title as product_title,
        vendor,
        product_type,
        status,
        created_at,
        updated_at
    from source
)

select * from renamed
