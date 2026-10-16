{% macro hash_pseudo_noise(entity_id, period) %}
    {%- if target.type == 'bigquery' -%}
        ((mod(abs(farm_fingerprint(concat(cast({{ entity_id }} as string), ':', cast({{ period }} as string)))), 2000) - 1000) / 1000.0)
    {%- else -%}
        ((('x' || substr(md5(concat(cast({{ entity_id }} as varchar), ':', cast({{ period }} as varchar))), 1, 8))::bit(32)::bigint % 2000 - 1000) / 1000.0)
    {%- endif -%}
{% endmacro %}
