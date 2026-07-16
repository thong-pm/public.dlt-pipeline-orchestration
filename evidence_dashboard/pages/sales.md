---
title: "Sales & Win-Loss Analysis"
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

```sql kpi_win_rate
select
    coalesce(sum(case when deal_stage = 'closedwon' then 1 else 0 end) * 1.0 / nullif(count(case when deal_stage in ('closedwon', 'closedlost') then 1 end), 0), 0) as win_rate
from postgres.fct_pipeline
where notes_last_updated_at >= case
    when '${inputs.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${inputs.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${inputs.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and notes_last_updated_at <= '2026-06-15'::date
```

```sql kpi_lost_value
select
    coalesce(sum(amount), 0) as lost_value
from postgres.fct_pipeline
where deal_stage = 'closedlost'
  and notes_last_updated_at >= case
      when '${inputs.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
      when '${inputs.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
      when '${inputs.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
      else '1970-01-01'::date
  end
  and notes_last_updated_at <= '2026-06-15'::date
```

```sql kpi_open_deals
select
    count(distinct deal_id) as open_deals_count
from postgres.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')
```

```sql kpi_top_client_concentration
with client_shares as (
    select
        c.name as client_name,
        sum(d.amount) as client_amount,
        sum(d.amount) * 1.0 / (select nullif(sum(amount), 0) from postgres.fct_pipeline where deal_stage not in ('closedwon', 'closedlost')) as share
    from postgres.fct_pipeline d
    join postgres.seed_xero_contacts c on d.customer_email = c.email_address
    where d.deal_stage not in ('closedwon', 'closedlost')
    group by c.name
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
    from postgres.fct_pipeline
    where deal_stage in ('closedwon', 'closedlost')
      and closed_won_reason is not null
      and notes_last_updated_at >= case
          when '${inputs.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
          when '${inputs.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
          when '${inputs.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
          else '1970-01-01'::date
      end
      and notes_last_updated_at <= '2026-06-15'::date
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
    c.name as client_name,
    sum(d.amount) as pipeline_value
from postgres.fct_pipeline d
join postgres.seed_xero_contacts c on d.customer_email = c.email_address
where d.deal_stage not in ('closedwon', 'closedlost')
group by all
order by pipeline_value desc
```

<!-- UI Layout -->

<div class="flex gap-1.5 border-b border-gray-200 pb-1.5 mb-2.5 mt-0.5">
  <button on:click={() => goto(addBasePath(`/?time_filter=${activeFilter}`))} class="px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all">Overview Cockpit</button>
  <button on:click={() => goto(addBasePath(`/sales?time_filter=${activeFilter}`))} class="px-3 py-1 rounded bg-[#264773] text-white text-[10px] font-bold shadow-sm transition-all">Sales & Win-Loss</button>
  <button on:click={() => goto(addBasePath(`/operations?time_filter=${activeFilter}`))} class="px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all">Operations & Vendors</button>
</div>

<div class="flex justify-between items-center mb-1.5 mt-0.5">
  <div class="text-base font-extrabold text-[#264773]">Sales Pipeline Deep-Dive</div>
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

<!-- Row 1: Sales KPIs -->
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 mb-3.5">
  
  <!-- KPI 1: Win Rate -->
  <div class="bg-white rounded-xl shadow-sm border-t-4 border-[#1D5F60] py-3 px-3.5 flex flex-col justify-between h-[120px]">
    <div>
      <span style="color: #7B8DA6;" class="text-[9px] font-bold uppercase tracking-wider">🎯 Pipeline Win Rate</span>
      <h2 style="color: #000000;" class="text-xl font-extrabold mt-0.5">
        <Value data={kpi_win_rate} column=win_rate fmt="pct1" />
      </h2>
    </div>
    <div style="color: #7B8DA6;" class="text-[9px] mt-0.5">Closed Won vs. Closed Lost count</div>
  </div>

  <!-- KPI 2: Lost Opportunity Value -->
  <div class="bg-white rounded-xl shadow-sm border-t-4 border-red-500 py-3 px-3.5 flex flex-col justify-between h-[120px]">
    <div>
      <span style="color: #7B8DA6;" class="text-[9px] font-bold uppercase tracking-wider">💸 Lost Opportunity Value</span>
      <h2 style="color: #000000;" class="text-xl font-extrabold mt-0.5">
        <Value data={kpi_lost_value} column=lost_value fmt=usd />
      </h2>
    </div>
    <div style="color: #7B8DA6;" class="text-[9px] mt-0.5">Sum of HubSpot deal amounts marked as 'Closed Lost'</div>
  </div>

  <!-- KPI 3: Open Deals in Funnel -->
  <div class="bg-white rounded-xl shadow-sm border-t-4 border-[#264773] py-3 px-3.5 flex flex-col justify-between h-[120px]">
    <div>
      <span style="color: #7B8DA6;" class="text-[9px] font-bold uppercase tracking-wider">💼 Open Deals in Funnel</span>
      <h2 style="color: #000000;" class="text-xl font-extrabold mt-0.5">
        <Value data={kpi_open_deals} column=open_deals_count />
      </h2>
    </div>
    <div style="color: #7B8DA6;" class="text-[9px] mt-0.5">Active prospects in pipeline</div>
  </div>

  <!-- KPI 4: Top Customer Concentration -->
  <div class="bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-3 px-3.5 flex flex-col justify-between h-[120px]">
    <div>
      <span style="color: #7B8DA6;" class="text-[9px] font-bold uppercase tracking-wider">⚠️ Max Client Concentration</span>
      <h2 style="color: #000000;" class="text-xl font-extrabold mt-0.5">
        <Value data={kpi_top_client_concentration} column=max_concentration fmt="pct0" />
      </h2>
    </div>
    <div style="color: #7B8DA6;" class="text-[9px] mt-0.5">Largest client's share of pipeline</div>
  </div>

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
        yFmt="[>=1000000]$#,##0.00,,\M;[>=1000]$#,##0.00,\K;$#,##0"
        labels={true}
        labelFmt="[>=1000000]$#,##0,,\M;[>=1000]$#,##0,\K;$#,##0"
        labelColor="#FFFFFF"
        labelPosition="inside"
        colorPalette={['#1D5F60', '#7B8DA6']}
        seriesOrder={['Closed Won', 'Closed Lost']}
        height={175}
        echartsOptions={{
            grid: { top: 15, bottom: 25, left: 40, right: 40 },
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
        yFmt="[>=1000000]$#,##0.00,,\M;[>=1000]$#,##0.00,\K;$#,##0"
        labels={true}
        labelFmt="[>=1000000]$#,##0,,\M;[>=1000]$#,##0,\K;$#,##0"
        labelColor="#383D40"
        labelPosition="outside"
        colorPalette={['#264773']}
        height={175}
        echartsOptions={{
            grid: { top: 15, bottom: 25, left: 40, right: 45 },
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

</div>
