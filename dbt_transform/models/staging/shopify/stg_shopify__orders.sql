with source as (
    {{ get_source_data('shopify', 'orders', 'seed_shopify_orders', {
        'id': dbt.type_bigint(),
        'order_number': dbt.type_string(),
        'created_at': dbt.type_string(),
        'total_price': dbt.type_numeric(),
        'subtotal_price': dbt.type_numeric(),
        'total_tax': dbt.type_numeric(),
        'currency': dbt.type_string(),
        'financial_status': dbt.type_string(),
        'fulfillment_status': dbt.type_string(),
        'customer__id': dbt.type_bigint()
    }) }}
),

renamed as (
    select
        cast(id as {{ dbt.type_bigint() }}) as order_id,
        cast(order_number as {{ dbt.type_string() }}) as order_number,
        cast(created_at as timestamp) as order_date,
        cast(total_price as numeric) as total_amount,
        cast(subtotal_price as numeric) as subtotal_amount,
        cast(total_tax as numeric) as tax_amount,
        currency as currency_code,
        financial_status,
        fulfillment_status,
        cast(customer__id as {{ dbt.type_bigint() }}) as customer_id
    from source
)

select * from renamed
