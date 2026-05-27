with source as (
    {{ get_source_or_empty('hubspot', 'companies', {
        'hs_object_id': dbt.type_bigint(),
        'name': dbt.type_string(),
        'lifecyclestage': dbt.type_string(),
        'total_revenue': dbt.type_numeric()
    }) }}
),

renamed as (
    select
        cast(hs_object_id as {{ dbt.type_bigint() }}) as company_id,
        name as company_name,
        lifecyclestage as lifecycle_stage,
        cast(total_revenue as {{ dbt.type_numeric() }}) as total_revenue
    from source
)

select * from renamed
