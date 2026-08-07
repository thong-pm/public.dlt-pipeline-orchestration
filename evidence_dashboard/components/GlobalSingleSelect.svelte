<script>
  import { getInputContext } from '@evidence-dev/sdk/utils/svelte';
  import { onMount } from 'svelte';

  const browser = typeof window !== 'undefined';

  export let name = 'time_filter';
  export let defaultValue = 'ytd';
  export let options = [
    { label: 'MTD', value: 'mtd' },
    { label: 'QTD', value: 'qtd' },
    { label: 'YTD', value: 'ytd' },
    { label: 'All Time', value: 'all' }
  ];

  let selected = defaultValue;

  function parseUrlParam() {
    if (!browser) return defaultValue;
    const params = new URLSearchParams(window.location.search);
    const raw = params.get(name);
    const valid = options.map(o => o.value);
    if (raw && valid.includes(raw.toLowerCase())) return raw.toLowerCase();
    return defaultValue;
  }

  onMount(() => {
    selected = parseUrlParam();
    syncInputsStore();
  });

  $: if (browser && selected) {
    syncInputsStore();
  }

  function syncInputsStore() {
    if (!browser) return;
    try {
      const inputsStore = getInputContext();
      inputsStore.update($inputs => {
        $inputs[name] = selected;
        return $inputs;
      });
    } catch (e) {
      // Safely ignore if store context is missing during SSR
    }
  }

  function selectOption(val) {
    selected = val;
    syncInputsStore();
    updateUrl();
  }

  function updateUrl() {
    if (!browser) return;
    const params = new URLSearchParams(window.location.search);
    params.set(name, selected);
    const searchStr = params.toString().replace(/%2C/g, ',');
    window.history.replaceState(null, '', window.location.pathname + '?' + searchStr);
  }
</script>

<div class="inline-flex rounded-md shadow-sm bg-gray-100 p-0.5 border border-gray-200">
  {#each options as opt}
    {@const isSelected = selected === opt.value}
    <button
      type="button"
      on:click={() => selectOption(opt.value)}
      class="px-2.5 py-1 text-[10px] font-bold rounded transition-all cursor-pointer {isSelected ? 'bg-teal-600 text-white shadow-sm' : 'text-gray-600 hover:text-gray-900 bg-transparent'}"
    >
      {opt.label}
    </button>
  {/each}
</div>
