<script>
  import { getInputContext } from '@evidence-dev/sdk/utils/svelte';
  import { onMount } from 'svelte';

  const browser = typeof window !== 'undefined';

  export let name = 'business_unit';
  export let title = 'Select';
  export let data = [];
  export let valueColumn = 'id';
  export let labelColumn = 'name';

  let open = false;
  let selected = [];
  let initialized = false;

  function cleanId(val) {
    if (val === null || val === undefined) return '';
    return String(val).replace(/\.0$/, '').trim();
  }

  function parseUrlParam() {
    if (!browser) return [];
    const params = new URLSearchParams(window.location.search);
    const raw = params.get(name);
    if (!raw || raw === 'All' || raw === '%' || /selectnullwhere0/i.test(raw)) return [];
    return raw.split(',').map(cleanId).filter(v => v && v !== 'All' && v !== '%' && !/selectnullwhere0/i.test(v));
  }

  onMount(() => {
    selected = parseUrlParam();
    initialized = true;
  });

  // Reactive clean lists
  $: cleanSelected = selected.map(cleanId);
  $: allDataIds = Array.isArray(data) ? data.map(item => cleanId(item[valueColumn])) : [];

  // Reactive Display Text (re-computes when data loads asynchronously)
  $: displayText = (() => {
    if (!data || data.length === 0 || cleanSelected.length === 0 || (allDataIds.length > 0 && cleanSelected.length >= allDataIds.length)) {
      return `${title}: All`;
    }
    const labels = cleanSelected.map(v => {
      const match = data.find(item => cleanId(item[valueColumn]) === cleanId(v));
      return match ? match[labelColumn] : v;
    });
    if (labels.length === 1) return `${title}: ${labels[0]}`;
    return `${title}: ${labels.join(', ')}`;
  })();

  // Reactive Store Sync (re-syncs when data finishes loading from DuckDB)
  $: if (browser && initialized) {
    try {
      const inputsStore = getInputContext();
      let formattedSqlValue = "('%')";
      let activeValues = [];

      if (cleanSelected.length === 0 || (allDataIds.length > 0 && cleanSelected.length >= allDataIds.length)) {
        formattedSqlValue = "('%')";
        activeValues = ['%'];
      } else {
        // Include both '2' and '2.0' so DuckDB text cast matches regardless of float representation
        const sqlItems = cleanSelected.flatMap(v => [`'${v}'`, `'${v}.0'`]);
        formattedSqlValue = `(${sqlItems.join(', ')})`;
        activeValues = cleanSelected;
      }

      inputsStore.update($inputs => {
        $inputs[name] = {
          value: formattedSqlValue,
          rawValues: activeValues.map(v => ({ value: v, label: getLabelForValue(v) }))
        };
        return $inputs;
      });
    } catch (e) {
      // Safely ignore SSR
    }
  }

  function getLabelForValue(val) {
    if (val === '%') return 'All';
    if (!data || data.length === 0) return val;
    const match = data.find(item => cleanId(item[valueColumn]) === cleanId(val));
    return match ? match[labelColumn] : val;
  }

  function toggleOption(val) {
    const cleaned = cleanId(val);
    if (selected.includes(cleaned)) {
      selected = selected.filter(v => v !== cleaned);
    } else {
      selected = [...selected, cleaned];
    }
    updateUrl();
  }

  function selectAll() {
    selected = [];
    updateUrl();
  }

  function updateUrl() {
    if (!browser) return;
    const params = new URLSearchParams(window.location.search);
    const cleanSel = selected.map(cleanId);
    const allIds = data ? data.map(item => cleanId(item[valueColumn])) : [];

    let valStr = 'All';
    if (cleanSel.length > 0 && (allIds.length === 0 || cleanSel.length < allIds.length)) {
      valStr = cleanSel.join(',');
    }
    params.set(name, valStr);

    // Unencode %2C back to clean commas in the address bar
    const searchStr = params.toString().replace(/%2C/g, ',');
    window.history.replaceState(null, '', window.location.pathname + '?' + searchStr);
  }
</script>

<div class="relative inline-block text-left">
  <!-- Trigger Button -->
  <button
    type="button"
    on:click|stopPropagation={() => (open = !open)}
    class="bg-white text-gray-700 border border-gray-300 rounded px-2.5 py-1 text-[10px] font-bold shadow-sm flex items-center justify-between gap-2 h-[26px] min-w-[180px] max-w-[260px] hover:border-[#0d9488] focus:outline-none cursor-pointer transition-colors"
  >
    <span class="truncate">{displayText}</span>
    <span class="text-gray-400 text-[8px]">▼</span>
  </button>

  <!-- Backdrop to close dropdown without white box -->
  {#if open}
    <div
      tabindex="-1"
      role="presentation"
      on:click|stopPropagation={() => (open = false)}
      on:keydown|stopPropagation={() => (open = false)}
      class="fixed inset-0 z-40 bg-transparent cursor-default"
      style="background: transparent !important; border: none !important; box-shadow: none !important; outline: none !important;"
    />

    <!-- Options Dropdown Menu -->
    <div
      class="absolute left-0 mt-1 w-60 rounded-md shadow-lg bg-white border border-gray-200 z-50 py-1 text-xs max-h-60 overflow-y-auto"
    >
      <!-- All Options Button -->
      <button
        type="button"
        on:click|stopPropagation={selectAll}
        class="w-full text-left px-3 py-1.5 hover:bg-teal-50 flex items-center justify-between text-gray-700 font-semibold cursor-pointer border-b border-gray-100"
      >
        <span>All ({title})</span>
        {#if cleanSelected.length === 0 || (allDataIds.length > 0 && cleanSelected.length >= allDataIds.length)}
          <span class="text-teal-600 font-bold">✓</span>
        {/if}
      </button>

      <!-- Individual Options -->
      {#if data && data.length > 0}
        {#each data as item}
          {@const valStr = cleanId(item[valueColumn])}
          {@const isChecked = cleanSelected.includes(valStr)}
          <button
            type="button"
            on:click|stopPropagation={() => toggleOption(valStr)}
            class="w-full text-left px-3 py-1.5 hover:bg-teal-50 flex items-center gap-2 text-gray-700 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={isChecked}
              class="rounded text-teal-600 focus:ring-teal-500 pointer-events-none"
            />
            <span class="truncate font-medium">{item[labelColumn]}</span>
          </button>
        {/each}
      {/if}
    </div>
  {/if}
</div>
