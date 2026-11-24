<script>
  import { goto } from '$app/navigation';

  export let activePage = 'overview';
  export let companyName = 'Your Company';
  export let buildNavUrl = (path) => path;

  const NAV_ITEMS = [
    { id: 'overview', path: '/overview', label: 'Overview Cockpit' },
    { id: 'sales', path: '/sales', label: 'Sales & Win-Loss' },
    { id: 'operations', path: '/operations', label: 'Operations & Vendors' }
  ];
</script>

<div class="flex flex-wrap items-center justify-between gap-2 border-b border-gray-200 pb-1.5 mb-2.5 mt-0.5">
  <div class="px-2.5 py-1 rounded border border-dashed border-white/30 bg-white/5 text-white text-[11px] font-bold tracking-wide uppercase">
    {companyName}
  </div>

  <div class="flex flex-wrap items-center gap-1.5" role="navigation" aria-label="Dashboard pages">
    {#each NAV_ITEMS as item}
      <button
        type="button"
        on:click={() => goto(buildNavUrl(item.path))}
        aria-current={activePage === item.id ? 'page' : undefined}
        class={activePage === item.id
          ? 'px-3 py-1 rounded bg-[#0d9488] text-white text-[10px] font-bold shadow-sm transition-all cursor-pointer'
          : 'px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all cursor-pointer'}
      >
        {item.label}
      </button>
    {/each}
  </div>
</div>
