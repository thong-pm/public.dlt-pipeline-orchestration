---
title: "Operations & Catalog Analytics"
---

<script>
  import { goto } from '$app/navigation';

  let activeFilter = 'ytd';
  $: activeFilter = inputs?.time_filter || 'ytd';

  const DASHBOARD_DAY = '2026-06-15';

  function formatDate(date) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  }

  function getFormattedDateRange(filter, refStr) {
    const ref = new Date(refStr + 'T00:00:00');
    const endText = formatDate(ref);

    if (filter === 'mtd') {
      const start = new Date(ref.getFullYear(), ref.getMonth(), 1);
      return `${formatDate(start)} - ${endText}`;
    }
    if (filter === 'qtd') {
      const quarterMonth = Math.floor(ref.getMonth() / 3) * 3;
      const start = new Date(ref.getFullYear(), quarterMonth, 1);
      return `${formatDate(start)} - ${endText}`;
    }
    if (filter === 'ytd') {
      const start = new Date(ref.getFullYear(), 0, 1);
      return `${formatDate(start)} - ${endText}`;
    }
    return `All Time - ${endText}`;
  }

  let dateRangeText = '';
  $: dateRangeText = getFormattedDateRange(activeFilter, DASHBOARD_DAY);

  onMount(() => {
    if (browser) {
      localStorage.setItem('evidence-theme', 'light');
      document.documentElement.setAttribute('data-theme', 'light');
      if (inputs) {
        const param = $page.url.searchParams.get('time_filter');
        inputs.time_filter = param || 'ytd';
      }
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
  /* Hide the top navigation bar (which contains the Evidence logo) */
  :global(header) { display: none !important; }
  
  /* Hide the left sidebar navigation completely */
  :global(aside) { display: none !important; }
  
  /* Hide the "Built with Evidence" footer */
  :global(footer) { display: none !important; }
  
  /* Hide the default page title header to save vertical space */
  :global(h1) { display: none !important; }
  
  /* Hide the default Svelte breadcrumbs / Home link at the top of the page */
  :global(main > :first-child) { display: none !important; }
  :global(.breadcrumbs), :global(.breadcrumb) { display: none !important; }
  
  /* Set global background and text colors */
  :global(body) { 
    background-color: #F2F2F2 !important; 
    color: #383D40 !important; 
    overflow-y: hidden !important; /* Lock vertical scroll on dashboard screen */
  }
  
  /* Expand the main content to fill the screen width up to a limit and center vertically */
  :global(main) { 
    background-color: #F2F2F2 !important; 
    max-width: 1920px !important; 
    margin: 0 auto !important;
    padding: 0.75rem 1.5rem 1.25rem 1.5rem !important; /* Top: 12px, Bottom: 20px buffer */
  }
</style>

<!-- SQL Queries -->

```sql kpi_active_projects
select count(distinct project_id) as active_projects
from postgres.dim_projects
where is_active = true
```

```sql kpi_completion_rate
select
    coalesce(count(case when is_active = false then 1 end) * 1.0 / nullif(count(*), 0), 0) as completion_rate
from postgres.dim_projects
where created_at >= case
    when '${inputs.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${inputs.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${inputs.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-15'::date
```

```sql kpi_total_catalog_value
select avg(price) as avg_price
from postgres.dim_products
```

```sql kpi_total_variants
select count(*) as total_variants
from postgres.dim_products
```

```sql detailed_projects
select
    project_number,
    project_name,
    company_name,
    case when is_active = true then '🟢 Active' else '⚪ Completed' end as status
from postgres.dim_projects
where created_at >= case
    when '${inputs.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${inputs.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${inputs.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-15'::date
order by status asc, project_name asc
```

```sql vendor_matrix
select
    vendor,
    avg(price) as average_price
from postgres.dim_products
where created_at >= case
    when '${inputs.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${inputs.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${inputs.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-15'::date
group by all
order by average_price desc
```

<!-- UI Layout -->

<div class="flex gap-1.5 border-b border-gray-200 pb-1.5 mb-2.5 mt-0.5">
  <button on:click={() => goto(addBasePath(`/?time_filter=${activeFilter}`))} class="px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all">Overview Cockpit</button>
  <button on:click={() => goto(addBasePath(`/sales?time_filter=${activeFilter}`))} class="px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all">Sales & Win-Loss</button>
  <button on:click={() => goto(addBasePath(`/operations?time_filter=${activeFilter}`))} class="px-3 py-1 rounded bg-[#264773] text-white text-[10px] font-bold shadow-sm transition-all">Operations & Vendors</button>
</div>

<div class="flex justify-between items-center mb-1.5 mt-0.5">
  <div class="text-base font-extrabold text-[#264773]">Operations & Product Catalog</div>
  <div class="flex flex-col items-end">
    <div class="text-[9px] text-gray-500 font-semibold bg-white shadow-sm border border-gray-200 px-2 py-0.5 rounded">{dateRangeText}</div>
    <div class="text-[8px] text-gray-400 font-medium mt-0.5">Date snapshotted at June 2026</div>
  </div>
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
  <div class="bg-white rounded-xl shadow-sm border-t-4 border-[#264773] py-3 px-3.5 flex flex-col justify-between h-[120px]">
    <div>
      <span style="color: #7B8DA6;" class="text-[9px] font-bold uppercase tracking-wider">🏗️ Ongoing Active Projects</span>
      <h2 style="color: #000000;" class="text-xl font-extrabold mt-0.5">
        <Value data={kpi_active_projects} column=active_projects />
      </h2>
    </div>
    <div style="color: #7B8DA6;" class="text-[9px] mt-0.5">Active builds tracked in Procore</div>
  </div>

  <!-- KPI 2: Project Completion Rate -->
  <div class="bg-white rounded-xl shadow-sm border-t-4 border-[#1D5F60] py-3 px-3.5 flex flex-col justify-between h-[120px]">
    <div>
      <span style="color: #7B8DA6;" class="text-[9px] font-bold uppercase tracking-wider">✅ Project Completion Rate</span>
      <h2 style="color: #000000;" class="text-xl font-extrabold mt-0.5">
        <Value data={kpi_completion_rate} column=completion_rate fmt="pct1" />
      </h2>
    </div>
    <div style="color: #7B8DA6;" class="text-[9px] mt-0.5">Ratio of completed jobs in date range</div>
  </div>

  <!-- KPI 3: Average Variant Catalog Price -->
  <div class="bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-3 px-3.5 flex flex-col justify-between h-[120px]">
    <div>
      <span style="color: #7B8DA6;" class="text-[9px] font-bold uppercase tracking-wider">🛍️ Avg Variant Pricing</span>
      <h2 style="color: #000000;" class="text-xl font-extrabold mt-0.5">
        <Value data={kpi_total_catalog_value} column=avg_price fmt=usd />
      </h2>
    </div>
    <div style="color: #7B8DA6;" class="text-[9px] mt-0.5">Mean price of Shopify variants</div>
  </div>

  <!-- KPI 4: Total Variants Registered -->
  <div class="bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-3 px-3.5 flex flex-col justify-between h-[120px]">
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
