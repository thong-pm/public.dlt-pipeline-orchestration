with source as (
    {{ get_source_data('procore', 'projects', 'seed_procore_projects', {
        'id': dbt.type_bigint(),
        'name': dbt.type_string(),
        'active': dbt.type_string(),
        'project_number': dbt.type_string(),
        'company__id': dbt.type_bigint(),
        'company__name': dbt.type_string(),
        'created_at': dbt.type_string(),
        'updated_at': dbt.type_string()
    }) }}
),

renamed as (
    select
        cast(id as bigint) as project_id,
        name as project_name,
        cast(active as {{ dbt.type_boolean() }}) as is_active,
        project_number,
        cast(company__id as bigint) as company_id,
        company__name,
        created_at,
        updated_at
    from source
)

select * from renamed
