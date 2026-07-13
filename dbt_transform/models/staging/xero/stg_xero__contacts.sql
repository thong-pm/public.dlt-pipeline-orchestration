with source as (
    {{ get_source_data('xero', 'contacts', 'seed_xero_contacts', {
        'contact_id': dbt.type_string(),
        'name': dbt.type_string(),
        'first_name': dbt.type_string(),
        'last_name': dbt.type_string(),
        'email_address': dbt.type_string(),
        'contact_status': dbt.type_string(),
        'is_customer': dbt.type_string(),
        'is_supplier': dbt.type_string()
    }) }}
),

renamed as (
    select
        contact_id,
        name as contact_name,
        first_name,
        last_name,
        email_address as email,
        contact_status,
        cast(is_customer as {{ dbt.type_boolean() }}) as is_customer,
        cast(is_supplier as {{ dbt.type_boolean() }}) as is_supplier
    from source
)

select * from renamed
