{% macro generate_surrogate_key(field_list) %}
    {%- set cast_type = 'string' if target.type == 'bigquery' else 'varchar' -%}
    {%- set concat_fields = [] -%}
    {%- for field in field_list -%}
        {%- do concat_fields.append("coalesce(cast(" ~ field ~ " as " ~ cast_type ~ "), '')") -%}
    {%- endfor -%}
    
    {%- if target.type == 'bigquery' -%}
        {# BigQuery returns BYTES for md5, so we convert to hex string #}
        to_hex(md5(concat({{ concat_fields | join(", '||', ") }})))
    {%- else -%}
        {# Postgres returns TEXT hex string for md5 #}
        md5(concat({{ concat_fields | join(", '||', ") }}))
    {%- endif -%}
{% endmacro %}
