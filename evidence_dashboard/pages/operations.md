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

<div class="flex flex-col md:flex-row justify-between items-start gap-4 mb-3.5">
  <!-- Left Side: Title & Filter Controls -->
  <div class="flex flex-col gap-2">
    <div class="text-base font-extrabold text-[#264773]">Operations & Product Catalog</div>
    
    <div class="flex items-center gap-3">
      {#key activeFilter}
        <ButtonGroup name="time_filter" defaultValue={activeFilter}>
          <ButtonGroupItem valueLabel="MTD" value="mtd" default={activeFilter === 'mtd'} />
          <ButtonGroupItem valueLabel="QTD" value="qtd" default={activeFilter === 'qtd'} />
          <ButtonGroupItem valueLabel="YTD" value="ytd" default={activeFilter === 'ytd'} />
          <ButtonGroupItem valueLabel="All Time" value="all" default={activeFilter === 'all'} />
        </ButtonGroup>
      {/key}
      <div class="text-[9px] text-gray-500 font-semibold bg-white shadow-sm border border-gray-200 px-2.5 py-1 rounded h-[26px] flex items-center gap-1.5">
        <span class="text-gray-400">📅</span> {dateRangeText}
      </div>
    </div>
    
    <div class="text-[8px] text-gray-400 font-semibold bg-white/50 border border-gray-200 px-2 py-0.5 rounded self-start">
      Date snapshotted at June 2026
    </div>
  </div>

  <!-- Right Side: Operations Insights Card (Locked height to prevent layout push) -->
  <div class="flex flex-col items-end self-stretch md:self-auto">
    <div class="bg-white rounded-xl shadow-sm border-t-4 border-[#B45309] px-3.5 py-2 w-full md:w-[320px] h-[75px] flex flex-col justify-between overflow-hidden text-[9px]">
      <div class="font-bold uppercase tracking-wider text-gray-500 text-[8px] flex items-center gap-1">
        <span>💡</span> Operations Insights
      </div>
      <div class="flex flex-col gap-0.5 text-gray-500 leading-tight">
        {#if kpi_completion_rate[0]?.completion_rate && kpi_completion_rate[0]?.completion_rate < 0.80}
          <div class="flex items-start gap-1">
            <span class="text-amber-600 font-bold">✦</span>
            <span>Completion rate is low (<Value data={kpi_completion_rate} column=completion_rate fmt="pct0" /> vs 80% target)</span>
          </div>
        {:else}
          <div class="flex items-start gap-1">
            <span class="text-teal-600 font-bold">✦</span>
            <span>Completion rate is healthy (<Value data={kpi_completion_rate} column=completion_rate fmt="pct0" />)</span>
          </div>
        {/if}
        {#if kpi_total_variants[0]?.total_variants && kpi_total_variants[0]?.total_variants < 10}
          <div class="flex items-start gap-1">
            <span class="text-amber-600 font-bold">✦</span>
            <span>Shopify catalog is small (<Value data={kpi_total_variants} column=total_variants /> variants registered)</span>
          </div>
        {:else}
          <div class="flex items-start gap-1">
            <span class="text-teal-600 font-bold">✦</span>
            <span>Shopify catalog is active (<Value data={kpi_total_variants} column=total_variants /> variants)</span>
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>

<!-- Row 1: Operations KPIs -->
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 mb-3.5">
  
  <!-- KPI 1: Project Completion Rate -->
  <a href={addBasePath(`/?time_filter=${activeFilter}`)} class="bg-white rounded-xl shadow-sm border-t-4 border-[#1D5F60] py-3 px-3.5 flex flex-col justify-between h-[120px] transition-all hover:scale-[1.01] hover:shadow-md cursor-pointer no-underline text-inherit">
    <div>
      <div class="flex justify-between items-center">
        <span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Project Completion Rate</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-[#1D5F60]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h2 class="text-xl font-extrabold mt-0.5 text-gray-800">
        <Value data={kpi_completion_rate} column=completion_rate fmt="pct1" />
      </h2>
    </div>
    <div class="text-[9px] text-gray-400 mt-0.5 border-t border-gray-100 pt-1">Ratio of completed jobs in date range</div>
  </a>

  <!-- KPI 2: Active Projects -->
  <a href={addBasePath(`/?time_filter=${activeFilter}`)} class="bg-white rounded-xl shadow-sm border-t-4 border-[#264773] py-3 px-3.5 flex flex-col justify-between h-[120px] transition-all hover:scale-[1.01] hover:shadow-md cursor-pointer no-underline text-inherit">
    <div>
      <div class="flex justify-between items-center">
        <span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Ongoing Active Projects</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-[#264773]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      </div>
      <h2 class="text-xl font-extrabold mt-0.5 text-gray-800">
        <Value data={kpi_active_projects} column=active_projects />
      </h2>
    </div>
    <div class="text-[9px] text-gray-400 mt-0.5 border-t border-gray-100 pt-1">Active builds tracked in Procore</div>
  </a>

  <!-- KPI 3: Average Variant Catalog Price -->
  <a href={addBasePath(`/?time_filter=${activeFilter}`)} class="bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-3 px-3.5 flex flex-col justify-between h-[120px] transition-all hover:scale-[1.01] hover:shadow-md cursor-pointer no-underline text-inherit">
    <div>
      <div class="flex justify-between items-center">
        <span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Avg Variant Pricing</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-[#7B8DA6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h2 class="text-xl font-extrabold mt-0.5 text-gray-800">
        <Value data={kpi_total_catalog_value} column=avg_price fmt=usd />
      </h2>
    </div>
    <div class="text-[9px] text-gray-400 mt-0.5 border-t border-gray-100 pt-1">Mean price of Shopify variants</div>
  </a>

  <!-- KPI 4: Total Variants Registered -->
  <a href={addBasePath(`/?time_filter=${activeFilter}`)} class="bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-3 px-3.5 flex flex-col justify-between h-[120px] transition-all hover:scale-[1.01] hover:shadow-md cursor-pointer no-underline text-inherit">
    <div>
      <div class="flex justify-between items-center">
        <span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Shopify Variant Count</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-[#7B8DA6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      </div>
      <h2 class="text-xl font-extrabold mt-0.5 text-gray-800">
        <Value data={kpi_total_variants} column=total_variants />
      </h2>
    </div>
    <div class="text-[9px] text-gray-400 mt-0.5 border-t border-gray-100 pt-1">Total unique variants registered</div>
  </a>

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
