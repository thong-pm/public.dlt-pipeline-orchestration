with source as (
    select * from {{ source('procore', 'projects') }}
),

renamed as (
    select
        cast(id as bigint) as project_id,
        name as project_name,
        active as is_active,
        project_number,
        cast(company__id as bigint) as company_id,
        company__name,
        created_at,
        updated_at
    from source
)

select * from renamed
