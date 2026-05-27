with contacts as (
    select * from {{ ref('int_contacts_deduped') }}
)

select
    {{ generate_surrogate_key(['email']) }} as customer_key,
    email,
    first_name,
    last_name,
    contact_status,
    golden_source,
    golden_source_id
from contacts
