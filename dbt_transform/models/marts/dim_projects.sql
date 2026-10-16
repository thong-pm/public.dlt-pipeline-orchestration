with project_mapping as (
    select * from {{ ref('seed_project_mapping') }}
),

real_projects as (
    select
        cast(p.project_id as {{ dbt.type_string() }}) as project_id,
        p.project_name,
        p.is_active,
        p.project_number,
        coalesce(pm.business_unit_id, 1) as company_id,
        coalesce(pm.business_unit, p.company__name) as company_name,
        cast(p.created_at as timestamp) as created_at,
        cast(p.updated_at as timestamp) as updated_at,
        'api_loaded_csv' as data_origin
    from {{ ref('stg_procore__projects') }} p
    left join project_mapping pm
        on p.project_number = pm.project_number
),

backfill_projects as (
    select
        project_id,
        project_name,
        is_active,
        project_number,
        company_id,
        company__name as company_name,
        created_at,
        updated_at,
        data_origin
    from {{ ref('int_projects_backfill') }}
),

all_projects as (
    select * from real_projects
    union all
    select * from backfill_projects
)

select
    {{ generate_surrogate_key(['project_id']) }} as project_key,
    project_id,
    project_name,
    is_active,
    project_number,
    company_id,
    company_name,
    created_at,
    updated_at,
    data_origin
from all_projects
