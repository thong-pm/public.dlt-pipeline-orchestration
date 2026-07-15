---
title: "Operations & Catalog Analytics"
---

<script>
  let activeFilter = 'ytd';
  $: activeFilter = inputs?.time_filter || 'ytd';

  onMount(() => {
    if (browser && inputs) {
      const param = $page.url.searchParams.get('time_filter');
      inputs.time_filter = param || 'ytd';
    }
  });

  $: if (browser && inputs && inputs.time_filter) {
    try {
      const url = new URL(window.location.href);
      if (url.searchParams.get('time_filter') !== inputs.time_filter) {
        url.searchParams.set('time_filter', inputs.time_filter);
        window.history.replaceState(null, '', url.pathname + url.search);
      }
    } catch (e) {
      // Safely ignore SSR initialization errors
    }
  }
</script>

<style>
  /* Lock page sizing for no-scroll cockpit */
  :global(body) {
    background-color: #F2F2F2 !important;
    overflow-y: hidden !important;
    max-height: 100vh !important;
  }
  :global(main) {
    background-color: #F2F2F2 !important;
    max-width: 1920px !important;
    margin: 0 auto !important;
    padding-top: 0.75rem !important;
    padding-bottom: 1.25rem !important;
    box-sizing: border-box !important;
  }
  /* Hide standard headers */
  :global(main > :first-child) {
    display: none !important;
  }
  :global(h1) {
    display: none !important;
  }
</style>

<!-- SQL Queries -->

```sql kpi_active_projects
select count(distinct project_id) as active_projects
from postgres.dim_projects
where is_active = true
  and created_at >= case
      when '${inputs.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${inputs.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${inputs.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end
```

```sql kpi_completion_rate
select
    coalesce(count(case when is_active = false then 1 end) * 1.0 / nullif(count(*), 0), 0) as completion_rate
from postgres.dim_projects
where created_at >= case
    when '${inputs.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${inputs.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${inputs.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end
```

```sql kpi_total_catalog_value
select avg(price) as avg_price
from postgres.dim_products
where created_at >= case
    when '${inputs.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${inputs.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${inputs.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end
```

```sql kpi_total_variants
select count(*) as total_variants
from postgres.dim_products
where created_at >= case
    when '${inputs.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${inputs.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${inputs.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end
```

```sql detailed_projects
select
    project_number,
    project_name,
    company_name,
    case when is_active = true then '🟢 Active' else '⚪ Completed' end as status
from postgres.dim_projects
where created_at >= case
    when '${inputs.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${inputs.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${inputs.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end
order by status asc, project_name asc
```

```sql vendor_matrix
select
    vendor,
    avg(price) as average_price
from postgres.dim_products
where created_at >= case
    when '${inputs.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${inputs.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${inputs.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end
group by all
order by average_price desc
```

<!-- UI Layout -->

<div class="flex gap-1.5 border-b border-gray-200 pb-1.5 mb-2.5 mt-0.5">
  <a href={browser ? "/?time_filter=" + activeFilter : "/"} class="px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all">Overview Cockpit</a>
  <a href={browser ? "/sales?time_filter=" + activeFilter : "/sales"} class="px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all">Sales & Win-Loss</a>
  <a href={browser ? "/operations?time_filter=" + activeFilter : "/operations"} class="px-3 py-1 rounded bg-[#264773] text-white text-[10px] font-bold shadow-sm transition-all">Operations & Vendors</a>
</div>

<div class="flex justify-between items-center mb-1.5 mt-0.5">
  <div class="text-base font-extrabold text-[#264773]">Operations & Product Catalog</div>
  <div class="text-[9px] text-gray-500 font-semibold bg-white shadow-sm border border-gray-200 px-2 py-0.5 rounded">Data Source: Procore & Shopify</div>
</div>

<div class="mb-2 flex justify-start">
  {#key activeFilter}
    <ButtonGroup name="time_filter" defaultValue={activeFilter}>
      <ButtonGroupItem valueLabel="MTD" value="mtd" default={activeFilter === 'mtd'} />
      <ButtonGroupItem valueLabel="QTD" value="qtd" default={activeFilter === 'qtd'} />
      <ButtonGroupItem valueLabel="YTD" value="ytd" default={activeFilter === 'ytd'} />
      <ButtonGroupItem valueLabel="All Time" value="all" default={activeFilter === 'all'} />
    </ButtonGroup>
  {/key}
</div>

<!-- Row 1: Operations KPIs -->
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 mb-3.5">
  
  <!-- KPI 1: Active Projects -->
  <div class="bg-white rounded-xl shadow-sm border-t-4 border-[#264773] py-2.5 px-3.5 flex flex-col justify-between h-[105px]">
    <div>
      <span style="color: #7B8DA6;" class="text-[9px] font-bold uppercase tracking-wider">🏗️ Ongoing Active Projects</span>
      <h2 style="color: #000000;" class="text-xl font-extrabold mt-0.5">
        <Value data={kpi_active_projects} column=active_projects />
      </h2>
    </div>
    <div style="color: #7B8DA6;" class="text-[9px] mt-0.5">Active builds tracked in Procore</div>
  </div>

  <!-- KPI 2: Project Completion Rate -->
  <div class="bg-white rounded-xl shadow-sm border-t-4 border-[#1D5F60] py-2.5 px-3.5 flex flex-col justify-between h-[105px]">
    <div>
      <span style="color: #7B8DA6;" class="text-[9px] font-bold uppercase tracking-wider">✅ Project Completion Rate</span>
      <h2 style="color: #000000;" class="text-xl font-extrabold mt-0.5">
        <Value data={kpi_completion_rate} column=completion_rate fmt="pct1" />
      </h2>
    </div>
    <div style="color: #7B8DA6;" class="text-[9px] mt-0.5">Ratio of completed jobs in date range</div>
  </div>

  <!-- KPI 3: Average Variant Catalog Price -->
  <div class="bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-2.5 px-3.5 flex flex-col justify-between h-[105px]">
    <div>
      <span style="color: #7B8DA6;" class="text-[9px] font-bold uppercase tracking-wider">🛍️ Avg Variant Pricing</span>
      <h2 style="color: #000000;" class="text-xl font-extrabold mt-0.5">
        <Value data={kpi_total_catalog_value} column=avg_price fmt=usd />
      </h2>
    </div>
    <div style="color: #7B8DA6;" class="text-[9px] mt-0.5">Mean price of Shopify variants</div>
  </div>

  <!-- KPI 4: Total Variants Registered -->
  <div class="bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-2.5 px-3.5 flex flex-col justify-between h-[105px]">
    <div>
      <span style="color: #7B8DA6;" class="text-[9px] font-bold uppercase tracking-wider">📦 Shopify Variant Count</span>
      <h2 style="color: #000000;" class="text-xl font-extrabold mt-0.5">
        <Value data={kpi_total_variants} column=total_variants />
      </h2>
    </div>
    <div style="color: #7B8DA6;" class="text-[9px] mt-0.5">Total unique variants registered</div>
  </div>

</div>

<!-- Row 2: Capacity & Catalog Charts -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5">
  
  <div class="bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden">
    <div class="flex items-center gap-1.5 mb-1.5">
      <span class="font-bold text-gray-700 text-xs">Detailed Procore Projects List</span>
      <Info description="Lists individual projects managed in Procore with their numbers, names, client names, and active status." />
    </div>
    <DataTable data={detailed_projects} search={false} rows={5} rowNumbers={false}>
      <Column id="project_number" label="Number" />
      <Column id="project_name" label="Project Name" />
      <Column id="company_name" label="Client" />
      <Column id="status" label="Status" />
    </DataTable>
  </div>

  <div class="bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden">
    <div class="flex items-center gap-1.5 mb-1.5">
      <span class="font-bold text-gray-700 text-xs">Shopify Average Variant Price by Vendor</span>
      <Info description="Computes the average catalog price of all product variants registered under each Shopify vendor brand." />
    </div>
    <BarChart
        data={vendor_matrix}
        x=vendor
        y=average_price
        swapXY=true
        fillOpacity=0.9
        yFmt="usd0"
        labels={true}
        labelFmt="usd0"
        labelColor="#383D40"
        labelPosition="outside"
        colorPalette={['#264773']}
        height={175}
        echartsOptions={{
            xAxis: { splitNumber: 3 },
            grid: { top: 25, bottom: 15, left: 40, right: 45 }
        }}
    />
  </div>

</div>
