with source as (
    select * from {{ source('procore', 'companies') }}
),

renamed as (
    select
        cast(id as bigint) as company_id,
        name as company_name,
        is_active,
        my_company as is_my_company
    from source
)

select * from renamed
