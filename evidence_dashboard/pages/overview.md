---
title: "Executive Cockpit Dashboard"
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

      // Click chart area (bar/line) to copy the visible tooltip text
      document.addEventListener('click', (e) => {
        const canvas = e.target.closest('canvas');
        if (!canvas) return;
        const chartContainer = canvas.closest('div');
        if (!chartContainer) return;
        // Find the visible tooltip div rendered by ECharts (sibling of canvas parent)
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
    --surface-color: #ffffff;
    --text-color: #2d3748;
    --text-secondary: #718096;
    --primary-color: #0d9488;
    --accent-color: #fbbf24;
    --border-color: #e2e8f0;
  }

  :global(header) { display: none !important; }
  :global(aside) { display: none !important; }
  :global(footer) { display: none !important; }
  :global(h1) { display: none !important; }
  :global(main > :first-child) { display: none !important; }
  :global(.breadcrumbs), :global(.breadcrumb) { display: none !important; }

  :global(body) { 
    background-color: #05070b !important; 
    overflow-y: hidden !important; 
  }

  :global(main) { 
    background-color: #05070b !important; 
    max-width: 1280px !important; 
    margin: 0 auto !important;
    padding: 0.75rem 1.5rem 1.25rem 1.5rem !important; 
  }

  :global(.text-\[\#264773\]) {
    color: #0d9488 !important;
  }

  :global(button.bg-\[\#264773\]) {
    background-color: #0d9488 !important;
    color: #ffffff !important;
  }

  :global(.bg-white) {
    outline: 1px solid rgba(255, 255, 255, 0.35) !important;
  }

  /* Make ECharts tooltips clickable & show copy cursor */
  :global(div[style*="pointer-events"]) {
    cursor: copy !important;
    user-select: text !important;
  }

  :global(h1), :global(h2), :global(h3), :global(h4), :global(h5), :global(h6), :global(button) {
    font-family: 'Outfit', sans-serif !important;
  }

  :global(body), :global(main), :global(div), :global(span), :global(p), :global(td), :global(th) {
    font-family: 'Inter', sans-serif !important;
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

  :global(button[role="combobox"] *),
  :global(.relative > button *),
  :global(div[class*="dropdown"] *) {
    color: #2d3748 !important;
    white-space: nowrap !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    font-size: 10px !important;
  }

  :global(button[role="combobox"]:hover),
  :global(.relative > button:hover),
  :global(select:hover) {
    background-color: #ffffff !important;
    background: #ffffff !important;
    border-color: #0d9488 !important;
  }

  :global(button[role="combobox"]:focus),
  :global(.relative > button:focus),
  :global(select:focus) {
    background-color: #ffffff !important;
    background: #ffffff !important;
    outline: none !important;
    border-color: #0d9488 !important;
    box-shadow: 0 0 0 2px rgba(13, 148, 136, 0.2) !important;
  }

  /* When dropdown opens, allow text to wrap normally inside listbox */
  :global(ul[role="listbox"]),
  :global(div[role="listbox"]),
  :global(.dropdown-menu),
  :global(option) {
    width: auto !important;
    min-width: 220px !important;
    max-width: 360px !important;
    white-space: normal !important;
    word-break: break-word !important;
    background-color: #ffffff !important;
    color: #2d3748 !important;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
    border: 1px solid #e2e8f0 !important;
    border-radius: 6px !important;
    padding: 0.25rem 0 !important;
    z-index: 50 !important;
  }
</style>

<!-- Dynamic SQL Queries for Slicers -->

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

```sql cockpit_summary
select
    coalesce(sum(total_billed_revenue), 0) as total_billed_revenue,
    coalesce(sum(billed_revenue_target), 0) as billed_revenue_target,
    coalesce(sum(total_actual_job_costs), 0) as total_actual_job_costs,
    coalesce(sum(gross_profit_amount), 0) as gross_profit_amount,
    case 
        when sum(total_billed_revenue) > 0 
        then (sum(total_billed_revenue) - sum(total_actual_job_costs)) / sum(total_billed_revenue)
        else 0.0
    end as gross_profit_margin_pct,
    case 
        when sum(total_billed_revenue) > 0 
        then coalesce(avg(sold_margin_pct), 0.45) - ((sum(total_billed_revenue) - sum(total_actual_job_costs)) / sum(total_billed_revenue))
        else 0.0
    end as margin_fade_pct,
    coalesce(sum(wip_value), 0) as wip_value,
    coalesce(sum(total_ar_overdue), 0) as total_ar_overdue,
    coalesce(sum(total_booked_pipeline), 0) as total_booked_pipeline,
    coalesce(sum(total_weighted_open_pipeline), 0) as total_weighted_open_pipeline,
    coalesce(sum(total_revenue_forecast), 0) as total_revenue_forecast,
    coalesce(avg(lead_to_cash_days), 29.0) as lead_to_cash_days
from analytics.fct_executive_cockpit
where month_date >= case
    when '${inputs.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${inputs.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${inputs.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and month_date <= '2026-06-15'::date
and ('%' in ${inputs.business_unit.value} or (select null where 0) in ${inputs.business_unit.value} or cast(business_unit_id as text) in ${inputs.business_unit.value})
and ('%' in ${inputs.region.value} or (select null where 0) in ${inputs.region.value} or cast(region_id as text) in ${inputs.region.value})
```

```sql monthly_cash_flow
select
    min(cast(month_date as date)) as raw_date,
    strftime(month_date, '%b %Y') as month_date,
    sum(total_billed_revenue) as billed_revenue,
    sum(total_actual_job_costs) as job_costs,
    sum(total_booked_pipeline) as booked_contracts
from analytics.fct_executive_cockpit
where month_date >= case
    when '${inputs.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${inputs.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${inputs.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and date_trunc('month', month_date) <= '2026-06-01'::date
and ('%' in ${inputs.business_unit.value} or (select null where 0) in ${inputs.business_unit.value} or cast(business_unit_id as text) in ${inputs.business_unit.value})
and ('%' in ${inputs.region.value} or (select null where 0) in ${inputs.region.value} or cast(region_id as text) in ${inputs.region.value})
group by 2
order by raw_date asc
```

```sql margin_fade_trend
select
    min(cast(month_date as date)) as raw_date,
    strftime(month_date, '%b %Y') as month_date,
    avg(sold_margin_pct) as sold_margin_pct,
    case 
        when sum(total_billed_revenue) > 0 
        then (sum(total_billed_revenue) - sum(total_actual_job_costs)) / sum(total_billed_revenue)
        else 0.0
    end as actual_margin_pct
from analytics.fct_executive_cockpit
where month_date >= case
    when '${inputs.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${inputs.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${inputs.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and date_trunc('month', month_date) <= '2026-06-01'::date
and ('%' in ${inputs.business_unit.value} or (select null where 0) in ${inputs.business_unit.value} or cast(business_unit_id as text) in ${inputs.business_unit.value})
and ('%' in ${inputs.region.value} or (select null where 0) in ${inputs.region.value} or cast(region_id as text) in ${inputs.region.value})
group by 2
order by raw_date asc
```

```sql revenue_forecast_chart
select
    min(cast(month_date as date)) as raw_date,
    strftime(month_date, '%b %Y') as month_date,
    sum(total_weighted_open_pipeline) as weighted_pipeline,
    sum(wip_billing_schedule) as wip_billing_schedule
from analytics.fct_executive_cockpit
where month_date >= '2026-06-01'::date
and date_trunc('month', month_date) <= '2026-12-01'::date
and ('%' in ${inputs.business_unit.value} or (select null where 0) in ${inputs.business_unit.value} or cast(business_unit_id as text) in ${inputs.business_unit.value})
and ('%' in ${inputs.region.value} or (select null where 0) in ${inputs.region.value} or cast(region_id as text) in ${inputs.region.value})
group by 2
order by raw_date asc
```

```sql lead_to_cash_chart
select
    business_unit,
    round(avg(lead_to_cash_days), 1) as avg_days
from analytics.fct_executive_cockpit
where month_date >= case
    when '${inputs.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${inputs.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${inputs.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and ('%' in ${inputs.business_unit.value} or (select null where 0) in ${inputs.business_unit.value} or cast(business_unit_id as text) in ${inputs.business_unit.value})
and ('%' in ${inputs.region.value} or (select null where 0) in ${inputs.region.value} or cast(region_id as text) in ${inputs.region.value})
group by business_unit
order by avg_days desc
```

<!-- Header Navigation Bar -->
<div class="flex gap-1.5 border-b border-gray-200 pb-1.5 mb-2.5 mt-0.5">
  <button on:click={() => goto(buildNavUrl('/overview'))} class="px-3 py-1 rounded bg-[#264773] text-white text-[10px] font-bold shadow-sm transition-all cursor-pointer">Overview Cockpit</button>
  <button on:click={() => goto(buildNavUrl('/sales'))} class="px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all cursor-pointer">Sales & Win-Loss</button>
  <button on:click={() => goto(buildNavUrl('/operations'))} class="px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all cursor-pointer">Operations & Vendors</button>
</div>

<div class="flex flex-col md:flex-row justify-between items-start gap-4 mb-3.5">
  <!-- Left Side: Title & Slicers -->
  <div class="flex flex-col gap-2">
    <div class="text-base font-extrabold text-[#264773]">Executive Cockpit Dashboard</div>
    
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

  <!-- Right Side: Cross-System Profitability & Cash Flow Alert Card -->
  <div class="flex flex-col items-end self-stretch md:self-auto">
    <div class="bg-white rounded-xl shadow-sm border-t-4 border-[#B45309] px-3.5 py-2 w-full md:w-[340px] min-h-[75px] flex flex-col justify-between text-[9px]">
      <div class="font-bold uppercase tracking-wider text-gray-500 text-[8px] flex items-center gap-1">
        <span>💡</span> Executive Cross-System Insights
      </div>
      <div class="flex flex-col gap-1 text-gray-600 leading-tight">
        {#if cockpit_summary[0]?.total_ar_overdue && cockpit_summary[0]?.total_ar_overdue > 0}
          <div class="flex items-start gap-1">
            <span class="text-amber-600 font-bold">⚠️</span>
            <span>Overdue Accounts Receivable: <Value data={cockpit_summary} column=total_ar_overdue fmt=usd /> in Xero pending collection.</span>
          </div>
        {:else}
          <div class="flex items-start gap-1">
            <span class="text-teal-600 font-bold">✓</span>
            <span>Accounts Receivable collection is healthy with zero overdue balances.</span>
          </div>
        {/if}
        {#if cockpit_summary[0]?.margin_fade_pct && cockpit_summary[0]?.margin_fade_pct > 0.03}
          <div class="flex items-start gap-1">
            <span class="text-amber-600 font-bold">⚠️</span>
            <span>Margin Fade Warning: Net margin is <Value data={cockpit_summary} column=margin_fade_pct fmt="pct1" /> below sold contract estimate.</span>
          </div>
        {:else}
          <div class="flex items-start gap-1">
            <span class="text-teal-600 font-bold">✓</span>
            <span>Gross Profit Margin is performing on target vs sold estimates.</span>
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>

<!-- Row 1: Executive KPI Cards (4 Cards) -->
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 mb-3.5">
  
  <!-- Card 1: Total Billed Revenue -->
  <div class="bg-white rounded-xl shadow-sm border-t-4 border-[#1D5F60] py-3 px-3.5 flex flex-col justify-between h-[120px]">
    <div>
      <div class="flex justify-between items-center">
        <span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Total Billed Revenue</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#1D5F60]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h2 class="text-xl font-extrabold mt-0.5 text-gray-800">
        <Value data={cockpit_summary} column=total_billed_revenue fmt=usd />
      </h2>
      <div class="flex items-center flex-wrap gap-1.5 mt-0.5 text-[9px] font-semibold text-gray-500">
        <span>🎯 Target: <Value data={cockpit_summary} column=billed_revenue_target fmt=usd0 /></span>
      </div>
    </div>
    <div class="flex justify-between items-center text-[9px] text-gray-400 mt-0.5 border-t border-gray-100 pt-1">
      <span>Actual invoices billed (Xero)</span>
      <span class="font-extrabold text-[#1D5F60] bg-[#1D5F60]/10 px-1.5 py-0.5 rounded">Xero Finance</span>
    </div>
  </div>

  <!-- Card 2: Gross Profit Margin -->
  <div class="bg-white rounded-xl shadow-sm border-t-4 border-[#264773] py-3 px-3.5 flex flex-col justify-between h-[120px]">
    <div>
      <div class="flex justify-between items-center">
        <span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Gross Profit Margin</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#264773]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </div>
      <h2 class="text-xl font-extrabold mt-0.5 text-gray-800">
        <Value data={cockpit_summary} column=gross_profit_margin_pct fmt="pct1" />
      </h2>
      <div class="flex items-center flex-wrap gap-1.5 mt-0.5 text-[9px] font-semibold text-[#264773]">
        <span>Profit: <Value data={cockpit_summary} column=gross_profit_amount fmt=usd0 /></span>
      </div>
    </div>
    <div class="flex justify-between items-center text-[9px] text-gray-400 mt-0.5 border-t border-gray-100 pt-1">
      <span>Billed (Xero) minus Job Costs (Procore)</span>
      <span class="font-extrabold text-[#264773] bg-[#264773]/10 px-1.5 py-0.5 rounded">Cross-SaaS</span>
    </div>
  </div>

  <!-- Card 3: WIP Value (Unbilled Work) -->
  <div class="bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-3 px-3.5 flex flex-col justify-between h-[120px]">
    <div>
      <div class="flex justify-between items-center">
        <span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">WIP Value (Unbilled)</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#7B8DA6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      </div>
      <h2 class="text-xl font-extrabold mt-0.5 text-gray-800">
        <Value data={cockpit_summary} column=wip_value fmt=usd />
      </h2>
      <div class="flex items-center flex-wrap gap-1.5 mt-0.5 text-[9px] font-semibold text-gray-500">
        <span>Work completed pending billing</span>
      </div>
    </div>
    <div class="flex justify-between items-center text-[9px] text-gray-400 mt-0.5 border-t border-gray-100 pt-1">
      <span>Completion % (Procore) & Contract (HubSpot)</span>
      <span class="font-extrabold text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded">Procore/HubSpot</span>
    </div>
  </div>

  <!-- Card 4: Total AR Aging -->
  <div class="bg-white rounded-xl shadow-sm border-t-4 border-[#B45309] py-3 px-3.5 flex flex-col justify-between h-[120px]">
    <div>
      <div class="flex justify-between items-center">
        <span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Total AR Aging</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#B45309]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h2 class="text-xl font-extrabold mt-0.5 text-gray-800">
        <Value data={cockpit_summary} column=total_ar_overdue fmt=usd />
      </h2>
      <div class="flex items-center flex-wrap gap-1.5 mt-0.5 text-[9px] font-semibold text-amber-700">
        <span>Overdue Accounts Receivable</span>
      </div>
    </div>
    <div class="flex justify-between items-center text-[9px] text-gray-400 mt-0.5 border-t border-gray-100 pt-1">
      <span>Overdue invoice balance in Xero</span>
      <span class="font-extrabold text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded">Xero AR</span>
    </div>
  </div>

</div>

<!-- Row 2: 4 Core Graphs (2x2 Grid) -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5">
  
  <!-- Graph 1: Monthly Cash Flow -->
  <div class="bg-white p-3.5 rounded-xl shadow-sm h-[260px] overflow-hidden">
    <div class="flex items-center gap-1.5 mb-1">
      <span class="font-bold text-gray-700 text-xs">1. Monthly Cash Flow (Billed vs. Costs vs. Contracts)</span>
      <Info description="Compares actual invoices billed (Xero), job costs (Procore), and booked contracts (HubSpot)." />
    </div>
    <Chart
        data={monthly_cash_flow}
        x=month_date
        sort=false
        xType=category
        yFmt="[>=1000000]$#,##0.0,,\M;[>=1000]$#,##0,\K;$#,##0"
        colorPalette={['#1D5F60', '#B45309', '#7B8DA6']}
        height={185}
        legend=true
        echartsOptions={{
            grid: { left: 40, right: 20, top: 25, bottom: 25, containLabel: true },
            series: [
                { stack: 'group_billed' },
                { stack: 'group_costs' }
            ],
            xAxis: [{ axisLabel: {
                fontSize: 9,
                width: 200,
                overflow: 'none',
                formatter: (value, index) => {
                    const n = monthly_cash_flow.length;
                    let label = value;
                    if (n > 6 && typeof value === 'string') {
                        const m = { Jan: '1', Feb: '2', Mar: '3', Apr: '4', May: '5', Jun: '6', Jul: '7', Aug: '8', Sep: '9', Oct: '10', Nov: '11', Dec: '12' };
                        const p = value.split(' ');
                        if (p.length === 2 && m[p[0]]) label = m[p[0]] + '-' + p[1].slice(-2);
                    }
                    const step = n > 24 ? 5 : n > 12 ? 3 : n >= 6 ? 2 : 1;
                    return index % step === 0 ? label : '';
                }
            }}]
        }}
    >
      <Bar y=billed_revenue name="Billed Revenue (Xero)" />
      <Bar y=job_costs name="Job Costs (Procore)" />
      <Line y=booked_contracts name="Booked Contracts (HubSpot)" />
    </Chart>
  </div>

  <!-- Graph 2: Margin Fade -->
  <div class="bg-white p-3.5 rounded-xl shadow-sm h-[260px] overflow-hidden">
    <div class="flex items-center gap-1.5 mb-1">
      <span class="font-bold text-gray-700 text-xs">2. Margin Fade (Sold vs. Actual Margin)</span>
      <Info description="Measures sold contract margin % (HubSpot) vs actual realized margin % (Procore & Xero)." />
    </div>
    <Chart
        data={margin_fade_trend}
        x=month_date
        sort=false
        xType=category
        yMin={0.25}
        yMax={0.60}
        yFmt="pct1"
        colorPalette={['#7B8DA6', '#1D5F60']}
        height={185}
        legend=true
        echartsOptions={{
            grid: { left: 40, right: 20, top: 25, bottom: 25, containLabel: true },
            xAxis: [{ axisLabel: {
                fontSize: 9,
                width: 200,
                overflow: 'none',
                formatter: (value, index) => {
                    const n = margin_fade_trend.length;
                    let label = value;
                    if (n > 6 && typeof value === 'string') {
                        const m = { Jan: '1', Feb: '2', Mar: '3', Apr: '4', May: '5', Jun: '6', Jul: '7', Aug: '8', Sep: '9', Oct: '10', Nov: '11', Dec: '12' };
                        const p = value.split(' ');
                        if (p.length === 2 && m[p[0]]) label = m[p[0]] + '-' + p[1].slice(-2);
                    }
                    const step = n > 24 ? 5 : n > 12 ? 3 : n >= 6 ? 2 : 1;
                    return index % step === 0 ? label : '';
                }
            }}]
        }}
    >
      <Line y=sold_margin_pct name="Sold Margin Target" />
      <Line y=actual_margin_pct name="Actual Gross Margin %" />
    </Chart>
  </div>

  <!-- Graph 3: Revenue Forecast -->
  <div class="bg-white p-3.5 rounded-xl shadow-sm h-[260px] overflow-hidden">
    <div class="flex items-center gap-1.5 mb-1">
      <span class="font-bold text-gray-700 text-xs">3. Revenue Forecast (Pipeline + WIP Schedule)</span>
      <Info description="Combines HubSpot weighted open pipeline with Procore active WIP billing schedules." />
    </div>
    <Chart
        data={revenue_forecast_chart}
        x=month_date
        sort=false
        xType=category
        yFmt="[>=1000000]$#,##0.0,,\M;[>=1000]$#,##0,\K;$#,##0"
        colorPalette={['#1D5F60', '#7B8DA6']}
        height={185}
        legend=true
        echartsOptions={{
            tooltip: { enterable: true, extraCssText: 'cursor: copy;' },
            grid: { left: 40, right: 20, top: 25, bottom: 25, containLabel: true },
            xAxis: [{ axisLabel: {
                fontSize: 9,
                width: 200,
                overflow: 'none',
                formatter: (value, index) => {
                    const n = revenue_forecast_chart.length;
                    let label = value;
                    if (n > 6 && typeof value === 'string') {
                        const m = { Jan: '1', Feb: '2', Mar: '3', Apr: '4', May: '5', Jun: '6', Jul: '7', Aug: '8', Sep: '9', Oct: '10', Nov: '11', Dec: '12' };
                        const p = value.split(' ');
                        if (p.length === 2 && m[p[0]]) label = m[p[0]] + '-' + p[1].slice(-2);
                    }
                    const step = n > 24 ? 5 : n > 12 ? 3 : n >= 6 ? 2 : 1;
                    return index % step === 0 ? label : '';
                }
            }}]
        }}
    >
      <Bar y=weighted_pipeline name="Weighted Pipeline (HubSpot)" stack="forecast" />
      <Bar y=wip_billing_schedule name="WIP Billing Schedule (Procore)" stack="forecast" />
    </Chart>
  </div>

  <!-- Graph 4: Lead to Cash Cycle Time -->
  <div class="bg-white p-3.5 rounded-xl shadow-sm h-[260px] overflow-hidden">
    <div class="flex items-center gap-1.5 mb-1">
      <span class="font-bold text-gray-700 text-xs">4. Lead to Cash Cycle Time (Days)</span>
      <Info description="Average days elapsed from HubSpot lead creation to final Xero invoice payment." />
    </div>
    <BarChart
        data={lead_to_cash_chart}
        x=business_unit
        y=avg_days
        swapXY=true
        fillOpacity=0.9
        labels={true}
        labelFmt="num0"
        labelColor="#383D40"
        labelPosition="outside"
        colorPalette={['#264773']}
        height={185}
        echartsOptions={{
            tooltip: { enterable: true, extraCssText: 'cursor: copy;' },
            grid: { left: 40, right: 35, top: 15, bottom: 25, containLabel: true },
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
                        small: { fontSize: 9, color: '#4b5563' },
                        medium: { fontSize: 9.5, color: '#4b5563' }
                    }
                }
            }
        }}
    />
  </div>

</div>
