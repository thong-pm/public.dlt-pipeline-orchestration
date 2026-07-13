with products as (
    select * from {{ ref('stg_shopify__products') }}
),
variants as (
    select * from {{ ref('stg_shopify__variants') }}
)

select
    {{ generate_surrogate_key(['p.product_id', 'v.variant_id']) }} as product_variant_key,
    p.product_id,
    v.variant_id,
    p.product_title,
    v.variant_title,
    p.vendor,
    p.product_type,
    v.price,
    v.grams,
    v.is_taxable,
    v.created_at,
    v.updated_at
from variants v
left join products p on v.product_id = p.product_id
