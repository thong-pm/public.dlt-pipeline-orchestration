with deals as (
    select * from {{ ref('stg_hubspot__deals') }}
),
contacts_deals as (
    select * from {{ ref('stg_hubspot__contacts__deals') }}
),
contacts as (
    select * from {{ ref('stg_hubspot__contacts') }}
)

select
    {{ generate_surrogate_key(['d.deal_id']) }} as deal_key,
    d.deal_id,
    d.deal_name,
    d.deal_stage,
    d.amount,
    d.currency_code,
    d.owner_id,
    d.notes_last_updated_at,
    d.closed_won_reason,
    d.closed_at,
    d.probability,
    d.forecast_amount,
    c.email as customer_email,
    {{ generate_surrogate_key(['c.email']) }} as customer_key
from deals d
left join contacts_deals cd on d.deal_id = cd.deal_id
left join contacts c on cd.contact_id = c.contact_id
