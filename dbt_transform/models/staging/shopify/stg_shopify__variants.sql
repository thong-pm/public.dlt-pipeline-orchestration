with source as (
    select * from {{ source('shopify', 'products__variants') }}
),

renamed as (
    select
        cast(id as bigint) as variant_id,
        cast(product_id as bigint) as product_id,
        title as variant_title,
        cast(price as numeric) as price,
        cast(grams as integer) as grams,
        taxable as is_taxable,
        created_at,
        updated_at
    from source
)

select * from renamed
