with source as (
    {{ get_source_data('hubspot', 'deals', 'seed_hubspot_deals', {
        'hs_object_id': dbt.type_bigint(),
        'dealname': dbt.type_string(),
        'dealstage': dbt.type_string(),
        'amount': dbt.type_numeric(),
        'deal_currency_code': dbt.type_string(),
        'hubspot_owner_id': dbt.type_bigint(),
        'num_notes': dbt.type_int(),
        'notes_last_updated': dbt.type_string(),
        'closed_won_reason': dbt.type_string()
    }) }}
),

renamed as (
    select
        cast(hs_object_id as {{ dbt.type_bigint() }}) as deal_id,
        dealname as deal_name,
        dealstage as deal_stage,
        cast(amount as {{ dbt.type_numeric() }}) as amount,
        deal_currency_code as currency_code,
        hubspot_owner_id as owner_id,
        cast(num_notes as {{ dbt.type_int() }}) as num_notes,
        notes_last_updated as notes_last_updated_at,
        closed_won_reason
    from source
)

select * from renamed
