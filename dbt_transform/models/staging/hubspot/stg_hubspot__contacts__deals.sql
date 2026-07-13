with source as (
    {{ get_source_data('hubspot', 'contacts__deals', 'seed_hubspot_contacts_deals', {
        'value': dbt.type_string(),
        'deals_id': dbt.type_string()
    }) }}
),

renamed as (
    select
        cast(deals_id as {{ dbt.type_bigint() }}) as deal_id,
        cast(value as {{ dbt.type_bigint() }}) as contact_id
    from source
    where deals_id is not null and value is not null
)

select * from renamed
