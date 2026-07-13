with source as (
    {{ get_source_data('shopify', 'products__variants', 'seed_shopify_variants', {
        'id': dbt.type_bigint(),
        'product_id': dbt.type_bigint(),
        'title': dbt.type_string(),
        'price': dbt.type_numeric(),
        'grams': dbt.type_int(),
        'taxable': dbt.type_string(),
        'created_at': dbt.type_string(),
        'updated_at': dbt.type_string()
    }) }}
),

renamed as (
    select
        cast(id as bigint) as variant_id,
        cast(product_id as bigint) as product_id,
        title as variant_title,
        cast(price as numeric) as price,
        cast(grams as integer) as grams,
        cast(taxable as {{ dbt.type_boolean() }}) as is_taxable,
        created_at,
        updated_at
    from source
)

select * from renamed
