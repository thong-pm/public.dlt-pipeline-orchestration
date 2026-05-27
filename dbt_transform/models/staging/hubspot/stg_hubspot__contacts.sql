with source as (
    {{ get_source_or_empty('hubspot', 'contacts', {
        'hs_object_id': dbt.type_bigint(),
        'email': dbt.type_string(),
        'firstname': dbt.type_string(),
        'lastname': dbt.type_string(),
        'closedate': dbt.type_string()
    }) }}
),

renamed as (
    select
        cast(hs_object_id as {{ dbt.type_bigint() }}) as contact_id,
        email,
        firstname as first_name,
        lastname as last_name,
        closedate as closed_at
    from source
)

select * from renamed
