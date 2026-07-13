{% macro get_source_data(source_name, table_name, seed_name, columns_dict=none) %}
    {% if var('use_demo_data', default=true) %}
        select * from {{ ref(seed_name) }}
    {% else %}
        {% if columns_dict is not none %}
            {{ get_source_or_empty(source_name, table_name, columns_dict) }}
        {% else %}
            select * from {{ source(source_name, table_name) }}
        {% endif %}
    {% endif %}
{% endmacro %}
