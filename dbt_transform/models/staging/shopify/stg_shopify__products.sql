with source as (
    {{ get_source_data('shopify', 'products', 'seed_shopify_products', {
        'id': dbt.type_bigint(),
        'title': dbt.type_string(),
        'vendor': dbt.type_string(),
        'product_type': dbt.type_string(),
        'status': dbt.type_string(),
        'created_at': dbt.type_string(),
        'updated_at': dbt.type_string()
    }) }}
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
