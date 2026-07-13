with projects as (
    select * from {{ ref('stg_procore__projects') }}
)

select
    {{ generate_surrogate_key(['project_id']) }} as project_key,
    project_id,
    project_name,
    is_active,
    project_number,
    company_id,
    company__name as company_name,
    created_at,
    updated_at
from projects
