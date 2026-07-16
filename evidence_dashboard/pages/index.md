---
title: "Business Performance Dashboard"
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

<!-- SQL Queries to pull the data from dbt marts -->

```sql delivery_lag
select
    coalesce(avg(date_diff('day', d.notes_last_updated_at::timestamp, i.transaction_date::timestamp)), 0) as avg_lag_days
from postgres.fct_pipeline d
join postgres.fct_revenue i on d.customer_key = i.customer_key
where d.deal_stage = 'closedwon'
  and i.source_system = 'xero'
  and date_trunc('month', d.notes_last_updated_at::timestamp) = date_trunc('month', i.transaction_date::timestamp)
  and d.notes_last_updated_at >= case
      when '${inputs.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
      when '${inputs.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
      when '${inputs.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
      else '1970-01-01'::date
  end
  and d.notes_last_updated_at <= '2026-06-15'::date
```

```sql pipeline_coverage
select
    coalesce(sum(d.amount) / nullif(1000000.0 - (select sum(revenue_amount) from postgres.fct_revenue where source_system = 'xero' and transaction_date >= case
        when '${inputs.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
        when '${inputs.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
        when '${inputs.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
        else '1970-01-01'::date
    end and transaction_date <= '2026-06-15'::date), 0), 0) as coverage_ratio
from postgres.fct_pipeline d
where d.deal_stage not in ('closedwon', 'closedlost')
```


```sql kpi_revenue
with current_revenue as (
    select coalesce(sum(revenue_amount), 0) as rev
    from postgres.fct_revenue
    where source_system = 'xero'
      and transaction_date >= case
          when '${inputs.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
          when '${inputs.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
          when '${inputs.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
          else '1970-01-01'::date
      end
      and transaction_date <= '2026-06-15'::date
),
prior_revenue as (
    select coalesce(sum(revenue_amount), 0) as rev
    from postgres.fct_revenue
    where source_system = 'xero'
      and transaction_date >= case
          when '${inputs.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date) - interval '1 month'
          when '${inputs.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date) - interval '3 months'
          when '${inputs.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date) - interval '1 year'
          else '1970-01-01'::date
      end
      and transaction_date <= case
          when '${inputs.time_filter}' = 'mtd' then '2026-06-15'::date - interval '1 month'
          when '${inputs.time_filter}' = 'qtd' then '2026-06-15'::date - interval '3 months'
          when '${inputs.time_filter}' = 'ytd' then '2026-06-15'::date - interval '1 year'
          else '1970-01-01'::date
      end
)
select 
    c.rev as total_revenue,
    p.rev as prior_revenue,
    c.rev / 1000000.0 as target_progress,
    case 
        when '${inputs.time_filter}' = 'all' then null
        else (c.rev - p.rev) / nullif(p.rev, 0)
    end as pct_change,
    case 
        when '${inputs.time_filter}' = 'mtd' then 'vs last month'
        when '${inputs.time_filter}' = 'qtd' then 'vs last quarter'
        when '${inputs.time_filter}' = 'ytd' then 'vs last year'
        else ''
    end as trend_label
from current_revenue c, prior_revenue p
```

```sql kpi_pipeline
select 
    coalesce(sum(amount), 0) as pipeline_value,
    coalesce(sum(forecast_amount), 0) as weighted_value,
    750000.0 as target_value,
    coalesce(sum(amount), 0) / 750000.0 as target_progress
from postgres.fct_pipeline 
where deal_stage not in ('closedwon', 'closedlost')
```

```sql kpi_projects_metrics
with project_stats as (
    select
        count(distinct case when is_active = true then project_id end) as active_projects,
        count(distinct case when is_active = false then project_id end) as completed_projects
    from postgres.dim_projects
    where created_at >= case
        when '${inputs.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
        when '${inputs.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
        when '${inputs.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
        else '1970-01-01'::date
    end
    and created_at <= '2026-06-15'::date
)
select
    active_projects as total_projects,
    completed_projects,
    coalesce(completed_projects * 1.0 / nullif(active_projects + completed_projects, 0), 0) as completion_rate
from project_stats
```

```sql kpi_products_metrics
select 
    count(distinct product_id) as total_products,
    count(*) as total_variants,
    coalesce(avg(price), 0) as average_price
from postgres.dim_products
where created_at >= case
    when '${inputs.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${inputs.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${inputs.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-15'::date
```

```sql revenue_bookings_billing
select
    date_trunc('month', transaction_date) as month_date,
    sum(case when source_system = 'xero' then revenue_amount else 0 end) as billed_revenue,
    sum(case when source_system = 'hubspot' then revenue_amount else 0 end) as booked_revenue
from postgres.fct_revenue
where transaction_date >= case
    when '${inputs.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${inputs.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${inputs.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and transaction_date <= '2026-06-15'::date
group by date_trunc('month', transaction_date)
order by month_date
```

```sql pipeline_funnel
select
    case 
        when deal_stage = 'appointmentscheduled' then '1. Scheduled'
        when deal_stage = 'presentationsubmitted' then '2. Presentation'
        when deal_stage = 'presentationscheduled' then '2. Presentation'
        when deal_stage = 'contractsent' then '3. Contract Sent'
        when deal_stage = 'closedwon' then '4. Closed Won'
        when deal_stage = 'closedlost' then '5. Closed Lost'
        else deal_stage
    end as deal_stage,
    sum(amount) as pipeline_value
from postgres.fct_pipeline
where notes_last_updated_at >= case
    when '${inputs.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${inputs.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${inputs.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and notes_last_updated_at <= '2026-06-15'::date
group by all
order by deal_stage asc
```

```sql project_summary
select
    case 
        when company_name = 'Modern Office Group' then 'Modern Office Group'
        when company_name = 'Eco Joinery Co' then 'Eco Joinery Co'
        else company_name
    end as company_name,
    case when is_active = true then 'Active' else 'Completed' end as project_status,
    count(distinct project_id) as project_count
from postgres.dim_projects
where created_at >= case
    when '${inputs.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${inputs.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${inputs.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-15'::date
group by all
order by project_count desc
```

```sql catalog_summary
select
    vendor,
    count(*) as total_variants,
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
order by total_variants desc
```

<div class="flex gap-1.5 border-b border-gray-200 pb-1.5 mb-2.5 mt-0.5">
  <button on:click={() => goto(addBasePath(`/?time_filter=${activeFilter}`))} class="px-3 py-1 rounded bg-[#264773] text-white text-[10px] font-bold shadow-sm transition-all">Overview Cockpit</button>
  <button on:click={() => goto(addBasePath(`/sales?time_filter=${activeFilter}`))} class="px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all">Sales & Win-Loss</button>
  <button on:click={() => goto(addBasePath(`/operations?time_filter=${activeFilter}`))} class="px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all">Operations & Vendors</button>
</div>

<div class="flex flex-col md:flex-row justify-between items-start gap-4 mb-3.5">
  <!-- Left Side: Title & Filter Controls -->
  <div class="flex flex-col gap-2">
    <div class="text-base font-extrabold text-[#264773]">Business Performance Cockpit</div>
    
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

  <!-- Right Side: Alerts Card (Locked height to prevent page layout push) -->
  <div class="flex flex-col items-end self-stretch md:self-auto">
    <div class="bg-white rounded-xl shadow-sm border-t-4 border-[#B45309] px-3.5 py-2 w-full md:w-[320px] h-[75px] flex flex-col justify-between overflow-hidden text-[9px]">
      <div class="font-bold uppercase tracking-wider text-gray-500 text-[8px] flex items-center gap-1">
        <span>💡</span> Operational Insights
      </div>
      <div class="flex flex-col gap-0.5 text-gray-500 leading-tight">
        {#if pipeline_coverage[0]?.coverage_ratio && pipeline_coverage[0]?.coverage_ratio < 3.0}
          <div class="flex items-start gap-1">
            <span class="text-amber-600 font-bold">✦</span>
            <span>Pipeline Coverage is low (<Value data={pipeline_coverage} column=coverage_ratio fmt="0.0" />x vs 3.0x target)</span>
          </div>
        {:else}
          <div class="flex items-start gap-1">
            <span class="text-teal-600 font-bold">✦</span>
            <span>Pipeline Coverage is healthy (<Value data={pipeline_coverage} column=coverage_ratio fmt="0.0" />x)</span>
          </div>
        {/if}
        {#if delivery_lag[0]?.avg_lag_days && delivery_lag[0]?.avg_lag_days > 2}
          <div class="flex items-start gap-1">
            <span class="text-amber-600 font-bold">✦</span>
            <span>Billing delivery lag is <Value data={delivery_lag} column=avg_lag_days fmt="num0" /> days</span>
          </div>
        {:else}
          <div class="flex items-start gap-1">
            <span class="text-teal-600 font-bold">✦</span>
            <span>Billing delivery lag is on track</span>
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>

<!-- Row 1: Executive KPI Cards (Grid Width: 3/12 each) -->
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 mb-3.5">
  
  <!-- KPI 1: Billed Revenue -->
  <a href={addBasePath(`/sales?time_filter=${activeFilter}`)} class="bg-white rounded-xl shadow-sm border-t-4 border-[#1D5F60] py-3 px-3.5 flex flex-col justify-between h-[120px] transition-all hover:scale-[1.01] hover:shadow-md cursor-pointer no-underline text-inherit">
    <div>
      <div class="flex justify-between items-center">
        <span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Total Billed Revenue</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-[#1D5F60]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h2 class="text-xl font-extrabold mt-0.5 text-gray-800">
        <Value data={kpi_revenue} column=total_revenue fmt=usd />
      </h2>
      <div class="flex items-center flex-wrap gap-1.5 mt-0.5 text-[9px] font-semibold text-gray-500">
        <span>🎯 <Value data={kpi_revenue} column=target_progress fmt="pct0" /> of Target ($1.0M)</span>
        {#if kpi_revenue[0]?.pct_change !== null && kpi_revenue[0]?.pct_change !== undefined}
          <span class="text-[8px] font-bold px-1.5 py-0.2 rounded bg-teal-50 text-[#1D5F60] border border-teal-100">
            {kpi_revenue[0].pct_change >= 0 ? '↑' : '↓'} <Value data={kpi_revenue} column=pct_change fmt="pct0" /> {kpi_revenue[0].trend_label}
          </span>
        {/if}
      </div>
    </div>
    <div class="flex justify-between items-center text-[9px] text-gray-400 mt-0.5 border-t border-gray-100 pt-1">
      <span>Actual invoices billed via Xero</span>
      <span class="font-extrabold text-[#1D5F60] bg-[#1D5F60]/10 px-1.5 py-0.5 rounded">⚡ <Value data={delivery_lag} column=avg_lag_days fmt="num0" />d Lag</span>
    </div>
  </a>

  <!-- KPI 2: Active Sales Pipeline -->
  <a href={addBasePath(`/sales?time_filter=${activeFilter}`)} class="bg-white rounded-xl shadow-sm border-t-4 border-[#264773] py-3 px-3.5 flex flex-col justify-between h-[120px] transition-all hover:scale-[1.01] hover:shadow-md cursor-pointer no-underline text-inherit">
    <div>
      <div class="flex justify-between items-center">
        <span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Active Pipeline Value</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-[#264773]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      </div>
      <h2 class="text-xl font-extrabold mt-0.5 text-gray-800">
        <Value data={kpi_pipeline} column=pipeline_value fmt=usd />
      </h2>
      <div class="flex items-center flex-wrap gap-1.5 mt-0.5 text-[9px] font-semibold text-[#264773]">
        <span>🎯 <Value data={kpi_pipeline} column=target_progress fmt="pct0" /> of Target ($750K)</span>
        <span class="text-[8px] font-bold px-1.5 py-0.2 rounded bg-blue-50 text-[#264773] border border-blue-100">
          💼 Weighted: <Value data={kpi_pipeline} column=weighted_value fmt=usd0 />
        </span>
      </div>
    </div>
    <div class="flex justify-between items-center text-[9px] text-gray-400 mt-0.5 border-t border-gray-100 pt-1">
      <span>Open opportunities in HubSpot CRM</span>
      <span class="font-extrabold text-[#264773] bg-[#264773]/10 px-1.5 py-0.5 rounded">📊 <Value data={pipeline_coverage} column=coverage_ratio fmt="0.0" />x Cover</span>
    </div>
  </a>

  <!-- KPI 3: Active Operations Projects -->
  <a href={addBasePath(`/operations?time_filter=${activeFilter}`)} class="bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-3 px-3.5 flex flex-col justify-between h-[120px] transition-all hover:scale-[1.01] hover:shadow-md cursor-pointer no-underline text-inherit">
    <div>
      <div class="flex justify-between items-center">
        <span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Active Projects</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-[#7B8DA6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      </div>
      <h2 class="text-xl font-extrabold mt-0.5 text-gray-800">
        <Value data={kpi_projects_metrics} column=total_projects />
      </h2>
      <div class="flex items-center flex-wrap gap-1.5 mt-0.5 text-[9px] font-semibold text-gray-500">
        <span>✅ <Value data={kpi_projects_metrics} column=completed_projects /> Completed (YTD)</span>
        <span class="text-[8px] font-bold px-1.5 py-0.2 rounded bg-gray-50 text-gray-600 border border-gray-200">
          Ratio: <Value data={kpi_projects_metrics} column=completion_rate fmt="pct0" />
        </span>
      </div>
    </div>
    <div class="flex justify-between items-center text-[9px] text-gray-400 mt-0.5 border-t border-gray-100 pt-1">
      <span>Ongoing jobs managed in Procore</span>
    </div>
  </a>

  <!-- KPI 4: Catalog Size -->
  <a href={addBasePath(`/operations?time_filter=${activeFilter}`)} class="bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-3 px-3.5 flex flex-col justify-between h-[120px] transition-all hover:scale-[1.01] hover:shadow-md cursor-pointer no-underline text-inherit">
    <div>
      <div class="flex justify-between items-center">
        <span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Shopify Products</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-[#7B8DA6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      </div>
      <h2 class="text-xl font-extrabold mt-0.5 text-gray-800">
        <Value data={kpi_products_metrics} column=total_products />
      </h2>
      <div class="flex items-center flex-wrap gap-1.5 mt-0.5 text-[9px] font-semibold text-gray-500">
        <span>📦 <Value data={kpi_products_metrics} column=total_variants /> Variants</span>
        <span class="text-[8px] font-bold px-1.5 py-0.2 rounded bg-gray-50 text-gray-600 border border-gray-200">
          Avg Price: <Value data={kpi_products_metrics} column=average_price fmt=usd />
        </span>
      </div>
    </div>
    <div class="flex justify-between items-center text-[9px] text-gray-400 mt-0.5 border-t border-gray-100 pt-1">
      <span>Unique items in active catalog</span>
    </div>
  </a>

</div>

<!-- Row 2: Sales & Financial Performance (Two Column Grid) -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5">
  <div class="bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden">
    <div class="flex items-center gap-1.5 mb-1">
      <span class="font-bold text-gray-700 text-xs">Monthly Cash Flow Billed vs. Booked Contracts</span>
      <Info description="Compares actual invoices sent in Xero (realized cash flow) against contracts signed in HubSpot (committed bookings) to track operational delivery speed." />
    </div>
    <Chart
        data={revenue_bookings_billing}
        x=month_date
        yFmt="[>=1000000]$#,##0.00,,\M;[>=1000]$#,##0.00,\K;$#,##0"
        colorPalette={['#1D5F60', '#7B8DA6']}
        height={175}
        legend=true
        echartsOptions={{
            grid: { top: 35, bottom: 35, left: 40, right: 15 },
            xAxis: {
                type: 'time',
                axisLabel: {
                    formatter: (value, index) => {
                        const d = new Date(value);
                        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                        const m = months[d.getUTCMonth()];
                        const y = d.getUTCFullYear();
                        if (d.getUTCMonth() === 0 || index === 0) {
                            return m + '\n' + y;
                        }
                        return m;
                    }
                }
            },
            yAxis: {
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
    >
      <Bar y=billed_revenue name="Billed Cash Flow (Xero)" />
      <Line y=booked_revenue name="Booked Contracts (HubSpot)" />
    </Chart>
  </div>
  <div class="bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden">
    <div class="flex items-center gap-1.5 mb-1">
      <span class="font-bold text-gray-700 text-xs">Sales Outcomes (YTD Won vs. Lost)</span>
      <Info description="Displays the total value of closed won and closed lost opportunities in HubSpot CRM for the selected time filter." />
    </div>
    <BarChart
        data={pipeline_funnel}
        x=deal_stage
        y=pipeline_value
        swapXY=true
        fillOpacity=0.9
        yFmt="[>=1000000]$#,##0.00,,\M;[>=1000]$#,##0.00,\K;$#,##0"
        labels={true}
        labelFmt="[>=1000000]$#,##0,,\M;[>=1000]$#,##0,\K;$#,##0"
        labelColor="#383D40"
        labelPosition="outside"
        colorPalette={['#264773']}
        sort=false
        height={175}
        echartsOptions={{
            grid: { top: 25, bottom: 10, left: 40, right: 45 },
            xAxis: {
                splitNumber: 3,
                axisLabel: {
                    formatter: (value) => {
                        if (value >= 1000000) return '$' + (value / 1000000) + 'M';
                        if (value >= 1000) return '$' + (value / 1000) + 'K';
                        return '$' + value;
                    }
                },
                offset: 10
            },
            series: [{
                itemStyle: {
                    color: (params) => {
                        if (params.name && params.name.includes('Closed Won')) {
                            return '#1D5F60';
                        }
                        if (params.name && params.name.includes('Closed Lost')) {
                            return '#7B8DA6';
                        }
                        return '#264773';
                    }
                }
            }]
        }}
    />
  </div>
</div>

<!-- Row 3: Operations & Catalog Analytics (Two Column Grid) -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5">
  <div class="bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden">
    <div class="flex items-center gap-1.5 mb-1.5">
      <span class="font-bold text-gray-700 text-xs">Procore Project Portfolio Status</span>
      <Info description="Tracks the count of active versus completed projects for each client corporate parent group managed in Procore." />
    </div>
    <BarChart
        data={project_summary}
        x=company_name
        y=project_count
        series=project_status
        swapXY=true
        fillOpacity=0.9
        labels={true}
        labelColor="#FFFFFF"
        labelPosition="inside"
        colorPalette={['#264773', '#7B8DA6']}
        seriesOrder={['Active', 'Completed']}
        height={175}
        legend=true
        echartsOptions={{
            xAxis: { minInterval: 1, splitNumber: 3 },
            grid: { top: 35, bottom: 25, left: 40, right: 30 }
        }}
    />
  </div>
  <div class="bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden">
    <div class="flex items-center gap-1.5 mb-1.5">
      <span class="font-bold text-gray-700 text-xs">Shopify Product Catalog Summary</span>
      <Info description="Computes the average catalog price of all product variants registered under each Shopify vendor brand." />
    </div>
    <DataTable data={catalog_summary} search={false} rows={5} rowNumbers={false}>
      <Column id="vendor" label="Vendor Brand" />
      <Column id="total_variants" label="Variants Count" align="center" contentType="bar" barColor="#7B8DA6" />
      <Column id="average_price" label="Average Price" align="right" fmt="usd" contentType="bar" barColor="#7B8DA6" />
    </DataTable>
  </div>
</div>

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
