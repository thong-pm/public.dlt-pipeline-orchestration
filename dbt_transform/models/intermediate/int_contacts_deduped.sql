with combined_contacts as (
    select
        'hubspot' as source,
        cast(contact_id as {{ dbt.type_string() }}) as source_id,
        email,
        first_name,
        last_name,
        null as contact_status
    from {{ ref('stg_hubspot__contacts') }}
    where email is not null and email != ''

    union all

    select
        'xero' as source,
        contact_id as source_id,
        email,
        first_name,
        last_name,
        contact_status
    from {{ ref('stg_xero__contacts') }}
    where email is not null and email != ''
),

ranked as (
    select
        source,
        source_id,
        email,
        first_name,
        last_name,
        contact_status,
        row_number() over (
            partition by lower(email)
            order by
                case when source = 'xero' then 1 else 2 end,  -- Prioritize Xero (financial system) contact details
                source_id desc
        ) as rank_priority
    from combined_contacts
)

select
    lower(email) as email,
    first_name,
    last_name,
    contact_status,
    source as golden_source,
    source_id as golden_source_id
from ranked
where rank_priority = 1
