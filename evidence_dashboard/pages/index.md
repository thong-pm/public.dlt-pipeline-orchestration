---
title: "Business Performance Dashboard"
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
      when '${inputs.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${inputs.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${inputs.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end
```

```sql pipeline_coverage
select
    coalesce(sum(d.amount) / nullif(1000000.0 - (select sum(revenue_amount) from postgres.fct_revenue where source_system = 'xero' and transaction_date >= case
        when '${inputs.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
        when '${inputs.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
        when '${inputs.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
        else '1970-01-01'::date
    end), 0), 0) as coverage_ratio
from postgres.fct_pipeline d
where d.deal_stage not in ('closedwon', 'closedlost')
  and d.notes_last_updated_at >= case
      when '${inputs.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${inputs.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${inputs.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end
```


```sql kpi_revenue
select 
    sum(revenue_amount) as total_revenue,
    1000000.0 as target_revenue,
    sum(revenue_amount) / 1000000.0 as target_progress
from postgres.fct_revenue 
where source_system = 'xero'
  and transaction_date >= case
      when '${inputs.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${inputs.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${inputs.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end
```

```sql kpi_pipeline
select 
    sum(amount) as pipeline_value,
    750000.0 as target_value,
    sum(amount) / 750000.0 as target_progress
from postgres.fct_pipeline 
where deal_stage not in ('closedwon', 'closedlost')
  and notes_last_updated_at >= case
      when '${inputs.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${inputs.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${inputs.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end
```

```sql kpi_projects
select count(distinct project_id) as total_projects 
from postgres.dim_projects 
where is_active = true
  and created_at >= case
      when '${inputs.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${inputs.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${inputs.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end
```

```sql kpi_products
select count(distinct product_id) as total_products 
from postgres.dim_products
where created_at >= case
    when '${inputs.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${inputs.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${inputs.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end
```

```sql revenue_bookings_billing
select
    date_trunc('month', transaction_date) as month_date,
    case 
        when source_system = 'xero' then 'Billed Cash Flow (Xero)'
        when source_system = 'hubspot' then 'Booked Contracts (HubSpot)'
        else source_system
    end as source_system,
    sum(revenue_amount) as revenue
from postgres.fct_revenue
where transaction_date >= case
    when '${inputs.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${inputs.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${inputs.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end
group by date_trunc('month', transaction_date), source_system
order by month_date, case when source_system = 'xero' then 1 else 2 end
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
    when '${inputs.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${inputs.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${inputs.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end
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
    when '${inputs.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${inputs.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${inputs.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end
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
    when '${inputs.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${inputs.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${inputs.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end
group by all
order by total_variants desc
```

<div class="flex gap-1.5 border-b border-gray-200 pb-1.5 mb-2.5 mt-0.5">
  <a href={browser ? "/?time_filter=" + activeFilter : "/"} class="px-3 py-1 rounded bg-[#264773] text-white text-[10px] font-bold shadow-sm transition-all">Overview Cockpit</a>
  <a href={browser ? "/sales?time_filter=" + activeFilter : "/sales"} class="px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all">Sales & Win-Loss</a>
  <a href={browser ? "/operations?time_filter=" + activeFilter : "/operations"} class="px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all">Operations & Vendors</a>
</div>

<div class="flex justify-between items-center mb-1.5 mt-0.5">
  <div class="text-base font-extrabold text-[#264773]">Business Performance Cockpit</div>
  <div class="text-[9px] text-gray-500 font-semibold bg-white shadow-sm border border-gray-200 px-2 py-0.5 rounded">Data Source: Local Postgres</div>
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

<!-- Row 1: Executive KPI Cards (Grid Width: 3/12 each) styled with Tailwind CSS -->
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 mb-3.5">
  
  <!-- KPI 1: Billed Revenue -->
  <div style="background-color: #1D5F60;" class="rounded-xl shadow-sm py-2.5 px-3.5 flex flex-col justify-between text-white h-[105px]">
    <div>
      <span class="text-[9px] font-bold text-white/80 uppercase tracking-wider">💰 Total Billed Revenue</span>
      <h2 class="text-xl font-extrabold mt-0.5 text-white">
        <Value data={kpi_revenue} column=total_revenue fmt=usd />
      </h2>
      <div class="text-[9px] font-semibold mt-0.5 text-white">
        🎯 <Value data={kpi_revenue} column=target_progress fmt="pct0" /> of YTD Target ($1.0M)
      </div>
    </div>
    <div class="flex justify-between items-center text-[9px] text-white/80 mt-0.5 border-t border-white/20 pt-1">
      <span>Actual invoices billed via Xero</span>
      <span class="font-extrabold bg-white/20 px-1.5 py-0.5 rounded">⚡ <Value data={delivery_lag} column=avg_lag_days fmt="num0" />d Lag</span>
    </div>
  </div>

  <!-- KPI 2: Active Sales Pipeline -->
  <div class="bg-white rounded-xl shadow-sm border-t-4 border-[#264773] py-2.5 px-3.5 flex flex-col justify-between h-[105px]">
    <div>
      <span style="color: #7B8DA6;" class="text-[9px] font-bold uppercase tracking-wider">📈 Active Pipeline Value</span>
      <h2 style="color: #000000;" class="text-xl font-extrabold mt-0.5">
        <Value data={kpi_pipeline} column=pipeline_value fmt=usd />
      </h2>
      <div style="color: #264773;" class="text-[9px] font-semibold mt-0.5">
        🎯 <Value data={kpi_pipeline} column=target_progress fmt="pct0" /> of target ($750K)
      </div>
    </div>
    <div class="flex justify-between items-center text-[9px] mt-0.5 border-t border-gray-100 pt-1">
      <span style="color: #7B8DA6;">Open opportunities in HubSpot CRM</span>
      <span style="background-color: rgba(38, 71, 115, 0.1); color: #264773;" class="font-extrabold px-1.5 py-0.5 rounded">📊 <Value data={pipeline_coverage} column=coverage_ratio fmt="0.0" />x Cover</span>
    </div>
  </div>

  <!-- KPI 3: Active Operations Projects -->
  <div class="bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-2.5 px-3.5 flex flex-col justify-between h-[105px]">
    <div>
      <span style="color: #7B8DA6;" class="text-[9px] font-bold uppercase tracking-wider">🏗️ Active Projects</span>
      <h2 style="color: #000000;" class="text-xl font-extrabold mt-0.5">
        <Value data={kpi_projects} column=total_projects />
      </h2>
    </div>
    <div style="color: #7B8DA6;" class="text-[9px] mt-0.5">Ongoing jobs managed in Procore</div>
  </div>

  <!-- KPI 4: Catalog Size -->
  <div class="bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-2.5 px-3.5 flex flex-col justify-between h-[105px]">
    <div>
      <span style="color: #7B8DA6;" class="text-[9px] font-bold uppercase tracking-wider">🛍️ Shopify Products</span>
      <h2 style="color: #000000;" class="text-xl font-extrabold mt-0.5">
        <Value data={kpi_products} column=total_products />
      </h2>
    </div>
    <div style="color: #7B8DA6;" class="text-[9px] mt-0.5">Unique items in active catalog</div>
  </div>

</div>

<!-- Row 2: Sales & Financial Performance (Two Column Grid) -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5">
  <div class="bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden">
    <div class="flex items-center gap-1.5 mb-1">
      <span class="font-bold text-gray-700 text-xs">Monthly Cash Flow Billed vs. Booked Contracts</span>
      <Info description="Compares actual invoices sent in Xero (realized cash flow) against contracts signed in HubSpot (committed bookings) to track operational delivery speed." />
    </div>
    <BarChart
        data={revenue_bookings_billing}
        x=month_date
        y=revenue
        series=source_system
        fillOpacity=0.9
        yFmt="[>=1000000]$#,##0.00,,\M;[>=1000]$#,##0.00,\K;$#,##0"
        labels={inputs.time_filter !== 'all' && inputs.time_filter !== 'ytd'}
        labelFmt="[>=1000000]$#,##0,,\M;[>=1000]$#,##0,\K;$#,##0"
        labelColor="#FFFFFF"
        labelPosition="inside"
        stackTotalLabel={inputs.time_filter !== 'all' && inputs.time_filter !== 'ytd'}
        colorPalette={['#264773', '#7B8DA6']}
        seriesOrder={['Billed Cash Flow (Xero)', 'Booked Contracts (HubSpot)']}
        height={175}
        echartsOptions={{
            grid: { top: 25, bottom: 35, left: 40, right: 15 },
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
    />
  </div>
  <div class="bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden">
    <div class="flex items-center gap-1.5 mb-1">
      <span class="font-bold text-gray-700 text-xs">Sales Pipeline Opportunity Value</span>
      <Info description="Displays the total value of all currently open opportunities in HubSpot CRM by stage, excluding closed won and closed lost deals." />
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
        echartsOptions={{
            xAxis: { minInterval: 1, splitNumber: 3 },
            grid: { top: 15, bottom: 25, left: 40, right: 30 }
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
      <Column id="total_variants" label="Variants Count" align="center" />
      <Column id="average_price" label="Average Price" align="right" fmt="usd" />
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
