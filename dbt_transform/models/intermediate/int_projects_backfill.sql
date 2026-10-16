with project_mapping as (
    select * from {{ ref('seed_project_mapping') }}
),

years as (
    select 2023 as cal_year
    union all select 2024
    union all select 2025
)

select
    concat('BF-', pm.project_number, '-', cast(y.cal_year as {{ dbt.type_string() }})) as project_id,
    concat(pm.client_name, ' - Completed Installation ', cast(y.cal_year as {{ dbt.type_string() }})) as project_name,
    false as is_active,
    pm.project_number,
    pm.business_unit_id as company_id,
    pm.business_unit as company__name,
    cast(concat(cast(y.cal_year as {{ dbt.type_string() }}), '-02-01 08:00:00') as timestamp) as created_at,
    cast(concat(cast(y.cal_year as {{ dbt.type_string() }}), '-11-30 17:00:00') as timestamp) as updated_at,
    'backfill' as data_origin
from project_mapping pm
cross join years y
