with source as (
    {{ get_source_data('xero', 'invoices', 'seed_xero_invoices', {
        'invoice_id': dbt.type_string(),
        'invoice_number': dbt.type_string(),
        'status': dbt.type_string(),
        'type': dbt.type_string(),
        'total': dbt.type_numeric(),
        'sub_total': dbt.type_numeric(),
        'total_tax': dbt.type_numeric(),
        'amount_due': dbt.type_numeric(),
        'amount_paid': dbt.type_numeric(),
        'currency_code': dbt.type_string(),
        'date_string': dbt.type_string(),
        'due_date_string': dbt.type_string(),
        'contact__contact_id': dbt.type_string(),
        'contact__name': dbt.type_string()
    }) }}
),

renamed as (
    select
        invoice_id,
        invoice_number,
        status as invoice_status,
        type as invoice_type,
        cast(total as numeric) as total_amount,
        cast(sub_total as numeric) as sub_total_amount,
        cast(total_tax as numeric) as tax_amount,
        cast(amount_due as numeric) as amount_due,
        cast(amount_paid as numeric) as amount_paid,
        currency_code,
        date_string as invoice_date,
        due_date_string as due_date,
        contact__contact_id as contact_id,
        contact__name as contact_name
    from source
)

select * from renamed
