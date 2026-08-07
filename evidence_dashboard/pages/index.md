---
title: "Executive Cockpit"
---

<script>
  import { goto } from '$app/navigation';

  onMount(() => {
    if (browser) {
      const search = window.location.search || '?time_filter=ytd&business_unit=All&region=All';
      const dest = typeof addBasePath === 'function' ? addBasePath('/overview/') : '/overview/';
      goto(dest + search, { replaceState: true });
    }
  });
</script>

<div class="flex items-center justify-center min-h-[300px] text-[#0d9488] font-bold text-sm">
  Redirecting to Executive Cockpit Overview...
</div>
