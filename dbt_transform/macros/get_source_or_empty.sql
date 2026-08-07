{% macro get_source_or_empty(source_name, table_name, columns_dict) %}
    {% set source_relation = adapter.get_relation(
          database=source(source_name, table_name).database,
          schema=source(source_name, table_name).schema,
          identifier=source(source_name, table_name).identifier
    ) %}
    
    {% if source_relation is not none %}
        {% set existing_cols = adapter.get_columns_in_relation(source_relation) | map(attribute='name') | map('lower') | list %}
        select
            {% for col, col_type in columns_dict.items() %}
                {% if col|lower in existing_cols %}
                    {{ col }}
                {% else %}
                    cast(null as {{ col_type }}) as {{ col }}
                {% endif %}{% if not loop.last %},{% endif %}
            {% endfor %}
        from {{ source(source_name, table_name) }}
    {% else %}
        select
            {% for col, col_type in columns_dict.items() %}
                cast(null as {{ col_type }}) as {{ col }}{% if not loop.last %},{% endif %}
            {% endfor %}
        from (select 1 as dummy)
        where false
    {% endif %}
{% endmacro %}
