with source as (
    select * from {{ source('procore', 'users') }}
),

renamed as (
    select
        cast(id as bigint) as user_id,
        name as user_name,
        first_name,
        last_name,
        email_address as email,
        is_active,
        job_title
    from source
)

select * from renamed
