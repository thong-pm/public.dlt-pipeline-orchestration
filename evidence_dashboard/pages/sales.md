---
title: "Sales & Win-Loss Analysis"
---

<script>
  import { goto } from '$app/navigation';
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

  let activeFilter = 'ytd';
  $: activeFilter = inputs?.time_filter || 'ytd';
  $: dateRangeText = getFormattedDateRange(activeFilter, DASHBOARD_DAY);

  function buildNavUrl(path) {
    if (!browser) return path;
    const cleanPath = path.endsWith('/') ? path : path + '/';
    const params = new URLSearchParams(window.location.search);
    const searchStr = params.toString().replace(/%2C/g, ',');
    const query = searchStr ? `?${searchStr}` : '';
    const basePath = typeof addBasePath === 'function' ? addBasePath(cleanPath) : cleanPath;
    return basePath + query;
  }

  onMount(() => {
    if (browser) {
      localStorage.setItem('evidence-theme', 'light');
      document.documentElement.setAttribute('data-theme', 'light');

      document.addEventListener('click', (e) => {
        const canvas = e.target.closest('canvas');
        if (!canvas) return;
        const chartContainer = canvas.closest('div');
        if (!chartContainer) return;
        const root = chartContainer.parentElement || chartContainer;
        const tooltips = root.querySelectorAll('div[style*="position"][style*="pointer-events"]');
        for (const tt of tooltips) {
          const text = (tt.innerText || tt.textContent || '').trim();
          if (text && tt.offsetWidth > 0) {
            navigator.clipboard.writeText(text).then(() => {
              tt.style.transition = 'opacity 0.15s';
              tt.style.opacity = '0.4';
              setTimeout(() => { tt.style.opacity = '1'; }, 350);
            });
            break;
          }
        }
      });
    }
  });
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@500;600;700;800&display=swap');

  :global(:root) {
    --bg-color: #05070b;
    --surface-color: #ffffff; /* Reverted to white */
    --text-color: #2d3748; /* Reverted to dark */
    --text-secondary: #718096; /* Reverted to gray */
    --primary-color: #0d9488;
    --accent-color: #fbbf24;
    --border-color: #e2e8f0; /* Reverted to light border */
  }

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
    background-color: #05070b !important; 
    overflow-y: auto !important; 
  }

  @media (min-width: 1024px) {
    :global(body) {
      overflow-y: hidden !important;
    }
  }
  
  /* Expand the main content to fill the screen width up to a limit and center vertically */
  :global(main) { 
    background-color: #05070b !important; 
    max-width: 1280px !important; /* Virtual Width Target */
    margin: 0 auto !important;
    padding: 0.75rem 1.5rem 1.25rem 1.5rem !important; /* Top: 12px, Bottom: 20px buffer */
  }

  /* Title text color override so it is readable on deep background */
  :global(.text-\[\#264773\]) {
    color: #0d9488 !important;
  }

  /* Active Tab button styling matching teal accent */
  :global(button.bg-\[\#264773\]) {
    background-color: #0d9488 !important;
    color: #ffffff !important;
  }

  /* Thin white border outline for all cards */
  :global(.bg-white) {
    outline: 1px solid rgba(255, 255, 255, 0.35) !important;
  }

  /* Apply Outfit font to headings, big metrics, and buttons */
  :global(h1), :global(h2), :global(h3), :global(h4), :global(h5), :global(h6), :global(button) {
    font-family: 'Outfit', sans-serif !important;
  }

  /* Apply Inter font to body elements, tables, values, and paragraphs */
  :global(body), :global(main), :global(div), :global(span), :global(p), :global(td), :global(th) {
    font-family: 'Inter', sans-serif !important;
  }

  /* Apply monospace font for code snippets */
  :global(code), :global(pre) {
    font-family: ui-monospace, SFMono-Regular, Consolas, monospace !important;
  }

  /* Style Dropdown slicer controls to ALWAYS have solid WHITE background, fixed width & text truncation */
  :global(div.dropdown-container),
  :global(.evidence-dropdown),
  :global(div[class*="dropdown"]),
  :global(button[role="combobox"]),
  :global(.relative > button),
  :global(select) {
    background-color: #ffffff !important;
    background: #ffffff !important;
    color: #2d3748 !important;
    border: 1px solid #cbd5e1 !important;
    border-radius: 4px !important;
    font-family: 'Outfit', sans-serif !important;
    font-size: 10px !important;
    font-weight: 600 !important;
    height: 26px !important;
    width: 210px !important;
    min-width: 190px !important;
    max-width: 260px !important;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05) !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: space-between !important;
    padding: 0 0.5rem !important;
    box-sizing: border-box !important;
    white-space: nowrap !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    cursor: pointer !important;
  }
</style>

<!-- SQL Queries -->

```sql bu_list
select distinct
    cast(business_unit_id as text) as business_unit_id,
    business_unit
from analytics.fct_executive_cockpit
where ('%' in ${inputs.region.value} or (select null where 0) in ${inputs.region.value} or cast(region_id as text) in ${inputs.region.value})
order by cast(business_unit_id as int)
```

```sql region_list
select distinct
    cast(region_id as text) as region_id,
    region
from analytics.fct_executive_cockpit
where ('%' in ${inputs.business_unit.value} or (select null where 0) in ${inputs.business_unit.value} or cast(business_unit_id as text) in ${inputs.business_unit.value})
order by cast(region_id as int)
```

```sql kpi_win_rate
select
    coalesce(sum(case when deal_stage = 'closedwon' then 1 else 0 end) * 1.0 / nullif(count(case when deal_stage in ('closedwon', 'closedlost') then 1 end), 0), 0) as win_rate
from analytics.fct_pipeline
where notes_last_updated_at >= case
    when '${inputs.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${inputs.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${inputs.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and notes_last_updated_at <= '2026-06-15'::date
and ('%' in ${inputs.business_unit.value} or (select null where 0) in ${inputs.business_unit.value} or cast(business_unit_id as text) in ${inputs.business_unit.value})
and ('%' in ${inputs.region.value} or (select null where 0) in ${inputs.region.value} or cast(region_id as text) in ${inputs.region.value})
```

```sql kpi_lost_value
select
    coalesce(sum(amount), 0) as lost_value
from analytics.fct_pipeline
where deal_stage = 'closedlost'
  and notes_last_updated_at >= case
      when '${inputs.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
      when '${inputs.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
      when '${inputs.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
      else '1970-01-01'::date
  end
  and notes_last_updated_at <= '2026-06-15'::date
  and ('%' in ${inputs.business_unit.value} or (select null where 0) in ${inputs.business_unit.value} or cast(business_unit_id as text) in ${inputs.business_unit.value})
  and ('%' in ${inputs.region.value} or (select null where 0) in ${inputs.region.value} or cast(region_id as text) in ${inputs.region.value})
```

```sql kpi_open_deals
select
    count(distinct deal_id) as open_deals_count
from analytics.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')
  and ('%' in ${inputs.business_unit.value} or (select null where 0) in ${inputs.business_unit.value} or cast(business_unit_id as text) in ${inputs.business_unit.value})
  and ('%' in ${inputs.region.value} or (select null where 0) in ${inputs.region.value} or cast(region_id as text) in ${inputs.region.value})
```

```sql kpi_top_client_concentration
with client_shares as (
    select
        client_name,
        sum(amount) as client_amount,
        sum(amount) * 1.0 / (select nullif(sum(amount), 0) from analytics.fct_pipeline where deal_stage not in ('closedwon', 'closedlost')) as share
    from analytics.fct_pipeline
    where deal_stage not in ('closedwon', 'closedlost')
      and ('%' in ${inputs.business_unit.value} or (select null where 0) in ${inputs.business_unit.value} or cast(business_unit_id as text) in ${inputs.business_unit.value})
      and ('%' in ${inputs.region.value} or (select null where 0) in ${inputs.region.value} or cast(region_id as text) in ${inputs.region.value})
    group by client_name
)
select coalesce(max(share), 0) as max_concentration
from client_shares
```

```sql win_loss_reasons
with reason_ranks as (
    select
        coalesce(closed_won_reason, 'Reason Undefined') as reason,
        case when deal_stage = 'closedwon' then 'Closed Won' else 'Closed Lost' end as status,
        sum(amount) as total_value,
        row_number() over (order by sum(amount) desc) as rn
    from analytics.fct_pipeline
    where deal_stage in ('closedwon', 'closedlost')
      and closed_won_reason is not null
      and notes_last_updated_at >= case
          when '${inputs.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
          when '${inputs.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
          when '${inputs.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
          else '1970-01-01'::date
      end
      and notes_last_updated_at <= '2026-06-15'::date
      and ('%' in ${inputs.business_unit.value} or (select null where 0) in ${inputs.business_unit.value} or cast(business_unit_id as text) in ${inputs.business_unit.value})
      and ('%' in ${inputs.region.value} or (select null where 0) in ${inputs.region.value} or cast(region_id as text) in ${inputs.region.value})
    group by all
)
select
    case when rn <= 5 then reason else 'Other Reasons' end as reason,
    status,
    sum(total_value) as total_value
from reason_ranks
group by 1, 2
order by total_value desc
```

```sql client_pipeline_share
select
    client_name,
    sum(amount) as pipeline_value
from analytics.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')
  and ('%' in ${inputs.business_unit.value} or (select null where 0) in ${inputs.business_unit.value} or cast(business_unit_id as text) in ${inputs.business_unit.value})
  and ('%' in ${inputs.region.value} or (select null where 0) in ${inputs.region.value} or cast(region_id as text) in ${inputs.region.value})
group by 1
order by pipeline_value desc
```

<!-- UI Layout -->

<div class="flex gap-1.5 border-b border-gray-200 pb-1.5 mb-2.5 mt-0.5">
  <button on:click={() => goto(buildNavUrl('/overview'))} class="px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all cursor-pointer">Overview Cockpit</button>
  <button on:click={() => goto(buildNavUrl('/sales'))} class="px-3 py-1 rounded bg-[#264773] text-white text-[10px] font-bold shadow-sm transition-all cursor-pointer">Sales & Win-Loss</button>
  <button on:click={() => goto(buildNavUrl('/operations'))} class="px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all cursor-pointer">Operations & Vendors</button>
</div>

<div class="flex flex-col md:flex-row justify-between items-start gap-4 mb-3.5">
  <!-- Left Side: Title & Filter Controls -->
  <div class="flex flex-col gap-2">
    <div class="text-base font-extrabold text-[#264773]">Sales Pipeline Deep-Dive</div>
    
    <!-- Dynamic 3 Slicers: Date Range, Business Unit, Region -->
    <div class="flex flex-wrap items-start gap-3">
      <!-- Date Slicer Column: ButtonGroup + Date Range Display ALWAYS BELOW -->
      <div class="flex flex-col gap-1">
        <GlobalSingleSelect name="time_filter" defaultValue="ytd" />

        <div class="text-[9px] text-gray-500 font-semibold bg-white shadow-sm border border-gray-200 px-2 py-0.5 rounded flex items-center gap-1.5 w-max">
          <span class="text-gray-400">📅</span> {dateRangeText}
        </div>
      </div>
      
      <!-- Bound dynamically to SQL queries bu_list and region_list -->
      <div class="flex items-center gap-2">
        <GlobalMultiSelect name="business_unit" title="Business Unit" data={bu_list} valueColumn="business_unit_id" labelColumn="business_unit" />
        <GlobalMultiSelect name="region" title="Region" data={region_list} valueColumn="region_id" labelColumn="region" />
      </div>
    </div>
    
    <div style="color: #ffffff;" class="text-[8px] font-semibold bg-white/10 border border-white/20 px-2 py-0.5 rounded self-start">
      Date snapshotted at June 2026
    </div>
  </div>

  <!-- Right Side: Sales Insights Card (Locked height to prevent layout push) -->
  <div class="flex flex-col items-end self-stretch md:self-auto">
    <div class="bg-white rounded-xl shadow-sm border-t-4 border-[#B45309] px-3.5 py-2 w-full md:w-[320px] h-[75px] flex flex-col justify-between overflow-hidden text-[9px]">
      <div class="font-bold uppercase tracking-wider text-gray-500 text-[8px] flex items-center gap-1">
        <span>💡</span> Sales Insights
      </div>
      <div class="flex flex-col gap-0.5 text-gray-500 leading-tight">
        {#if kpi_win_rate[0]?.win_rate && kpi_win_rate[0]?.win_rate < 0.25}
          <div class="flex items-start gap-1">
            <span class="text-amber-600 font-bold">✦</span>
            <span>Win rate is low (<Value data={kpi_win_rate} column=win_rate fmt="pct0" /> vs 25% target)</span>
          </div>
        {:else}
          <div class="flex items-start gap-1">
            <span class="text-teal-600 font-bold">✦</span>
            <span>Win rate is healthy (<Value data={kpi_win_rate} column=win_rate fmt="pct0" />)</span>
          </div>
        {/if}
        {#if kpi_top_client_concentration[0]?.max_concentration && kpi_top_client_concentration[0]?.max_concentration > 0.50}
          <div class="flex items-start gap-1">
            <span class="text-amber-600 font-bold">✦</span>
            <span>High concentration (<Value data={kpi_top_client_concentration} column=max_concentration fmt="pct0" /> of pipeline)</span>
          </div>
        {:else}
          <div class="flex items-start gap-1">
            <span class="text-teal-600 font-bold">✦</span>
            <span>Client concentration is balanced</span>
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>

<!-- Row 1: Sales KPIs -->
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 mb-3.5">
  
  <!-- KPI 1: Win Rate -->
  <a href={buildNavUrl('/overview')} class="bg-white rounded-xl shadow-sm border-t-4 border-[#1D5F60] py-3 px-3.5 flex flex-col justify-between h-[120px] transition-all hover:scale-[1.01] hover:shadow-md cursor-pointer no-underline text-inherit">
    <div>
      <div class="flex justify-between items-center">
        <span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Pipeline Win Rate</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#1D5F60]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h2 class="text-xl font-extrabold mt-0.5 text-gray-800">
        <Value data={kpi_win_rate} column=win_rate fmt="pct1" />
      </h2>
    </div>
    <div class="text-[9px] text-gray-400 mt-0.5 border-t border-gray-100 pt-1">Closed Won vs. Closed Lost count</div>
  </a>

  <!-- KPI 2: Lost Opportunity Value -->
  <a href={buildNavUrl('/overview')} class="bg-white rounded-xl shadow-sm border-t-4 border-[#264773] py-3 px-3.5 flex flex-col justify-between h-[120px] transition-all hover:scale-[1.01] hover:shadow-md cursor-pointer no-underline text-inherit">
    <div>
      <div class="flex justify-between items-center">
        <span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Lost Opportunity Value</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#264773]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h2 class="text-xl font-extrabold mt-0.5 text-gray-800">
        <Value data={kpi_lost_value} column=lost_value fmt=usd />
      </h2>
    </div>
    <div class="text-[9px] text-gray-400 mt-0.5 border-t border-gray-100 pt-1">Sum of HubSpot deal amounts marked as 'Closed Lost'</div>
  </a>

  <!-- KPI 3: Open Deals in Funnel -->
  <a href={buildNavUrl('/overview')} class="bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-3 px-3.5 flex flex-col justify-between h-[120px] transition-all hover:scale-[1.01] hover:shadow-md cursor-pointer no-underline text-inherit">
    <div>
      <div class="flex justify-between items-center">
        <span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Open Deals in Funnel</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#7B8DA6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
      <h2 class="text-xl font-extrabold mt-0.5 text-gray-800">
        <Value data={kpi_open_deals} column=open_deals_count />
      </h2>
    </div>
    <div class="text-[9px] text-gray-400 mt-0.5 border-t border-gray-100 pt-1">Active prospects in pipeline</div>
  </a>

  <!-- KPI 4: Top Customer Concentration -->
  <a href={buildNavUrl('/overview')} class="bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-3 px-3.5 flex flex-col justify-between h-[120px] transition-all hover:scale-[1.01] hover:shadow-md cursor-pointer no-underline text-inherit">
    <div>
      <div class="flex justify-between items-center">
        <span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Max Client Concentration</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#7B8DA6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <h2 class="text-xl font-extrabold mt-0.5 text-gray-800">
        <Value data={kpi_top_client_concentration} column=max_concentration fmt="pct0" />
      </h2>
    </div>
    <div class="text-[9px] text-gray-400 mt-0.5 border-t border-gray-100 pt-1">Largest client's share of pipeline</div>
  </a>

</div>

<!-- Row 2: Sales Charts -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5">
  
  <div class="bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden">
    <div class="flex items-center gap-1.5 mb-1">
      <span class="font-bold text-gray-700 text-xs">CRM Closed Won/Lost Reason Breakdown</span>
      <Info description="Compares reasons for deals won or lost to understand competitor performance and pricing issues." />
    </div>
    <BarChart
        data={win_loss_reasons}
        x=reason
        y=total_value
        series=status
        swapXY=true
        fillOpacity=0.9
        yFmt="[>=1000000]$#,##0.0,,\M;[>=1000]$#,##0,\K;$#,##0"
        labels={true}
        labelFmt="[>=1000000]$#,##0,,\M;[>=1000]$#,##0,\K;$#,##0"
        labelColor="#FFFFFF"
        labelPosition="inside"
        colorPalette={['#1D5F60', '#7B8DA6']}
        seriesOrder={['Closed Won', 'Closed Lost']}
        height={175}
        legend=true
        echartsOptions={{
            grid: { top: 38, bottom: 20, left: 40, right: 40, containLabel: true },
            legend: { top: 0, itemGap: 15 },
            xAxis: {
                splitNumber: 3,
                axisLabel: {
                    formatter: (value) => {
                        if (value >= 1000000) return '$' + (value / 1000000) + 'M';
                        if (value >= 1000) return '$' + (value / 1000) + 'K';
                        return '$' + value;
                    }
                }
            }
        }}
    />
  </div>

  <div class="bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden">
    <div class="flex items-center gap-1.5 mb-1">
      <span class="font-bold text-gray-700 text-xs">Open Pipeline Value by Corporate Client</span>
      <Info description="Breakdown of open pipeline amounts by customer to identify key account values." />
    </div>
    <BarChart
        data={client_pipeline_share}
        x=client_name
        y=pipeline_value
        swapXY=true
        fillOpacity=0.9
        yFmt="[>=1000000]$#,##0.0,,\M;[>=1000]$#,##0,\K;$#,##0"
        labels={true}
        labelFmt="[>=1000000]$#,##0,,\M;[>=1000]$#,##0,\K;$#,##0"
        labelColor="#383D40"
        labelPosition="outside"
        colorPalette={['#264773']}
        height={175}
        echartsOptions={{
            tooltip: { enterable: true, extraCssText: 'cursor: copy;' },
            grid: { top: 15, bottom: 25, left: 35, right: 45, containLabel: true },
            xAxis: {
                splitNumber: 3,
                axisLabel: {
                    formatter: (value) => {
                        if (value >= 1000000) return '$' + (value / 1000000) + 'M';
                        if (value >= 1000) return '$' + (value / 1000) + 'K';
                        return '$' + value;
                    }
                }
            },
            yAxis: {
                axisLabel: {
                    interval: 0,
                    formatter: (value) => {
                        const str = String(value || '');
                        if (str.length > 28) return '{xsmall|' + str + '}';
                        if (str.length > 20) return '{small|' + str + '}';
                        if (str.length > 14) return '{medium|' + str + '}';
                        return str;
                    },
                    rich: {
                        xsmall: { fontSize: 7, color: '#4b5563' },
                        small: { fontSize: 8.5, color: '#4b5563' },
                        medium: { fontSize: 9.5, color: '#4b5563' }
                    }
                }
            }
        }}
    />
  </div>

</div>
