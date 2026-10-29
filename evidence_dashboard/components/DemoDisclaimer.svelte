<script>
  export let title = 'About this page';
  export let description = '';
  let isOpen = false;
</script>

<div class="disclaimer-wrapper">
  <!-- Round Info Icon Button -->
  <span
    role="button"
    tabindex="0"
    on:click={() => (isOpen = !isOpen)}
    on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && (isOpen = !isOpen)}
    class="info-btn"
    style="display: inline-flex !important; align-items: center !important; justify-content: center !important; width: 16px !important; height: 16px !important; min-width: 16px !important; max-width: 16px !important; padding: 0 !important; margin: 0 0 0 4px !important; background: transparent !important; border: none !important; box-shadow: none !important; outline: none !important; cursor: pointer !important; flex: 0 0 16px !important;"
    title={title}
    aria-label="Page Information"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="pointer-events: none; display: block;">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="16" x2="12" y2="12"></line>
      <line x1="12" y1="8" x2="12.01" y2="8"></line>
    </svg>
  </span>

  <!-- Anchored Popover -->
  {#if isOpen}
    <div
      class="backdrop"
      on:click={() => (isOpen = false)}
      on:keydown={(e) => e.key === 'Escape' && (isOpen = false)}
      role="button"
      tabindex="-1"
      aria-label="Close backdrop"
    ></div>

    <div class="popover-card">
      <div class="popover-header">
        <div class="popover-title">
          <span class="teal-icon">ℹ</span>
          <span>{title}</span>
        </div>
        <button
          type="button"
          on:click={() => (isOpen = false)}
          class="close-btn"
          aria-label="Close"
        >
          ✕
        </button>
      </div>

      <div class="popover-body">
        <p class="description-text">{description}</p>
      </div>
    </div>
  {/if}
</div>

<style>
  .disclaimer-wrapper {
    position: relative;
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
  }

  .info-btn {
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    padding: 0 !important;
    margin: 0 0 0 4px !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    cursor: pointer !important;
    color: #64748b;
    border-radius: 9999px !important;
    transition: color 0.15s ease, transform 0.15s ease;
    line-height: 1 !important;
    width: 16px !important;
    height: 16px !important;
    min-width: 16px !important;
    max-width: 16px !important;
    flex: 0 0 16px !important;
  }

  .info-btn:hover {
    color: #2dd4bf !important;
    transform: scale(1.1);
  }

  .backdrop {
    position: fixed;
    inset: 0;
    z-index: 40;
  }

  .popover-card {
    position: absolute;
    left: 0;
    top: calc(100% + 6px);
    width: 280px;
    max-width: calc(100vw - 32px);
    background-color: #0b111e;
    border: 1px solid #1e293b;
    border-radius: 0.75rem;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.5);
    padding: 0.75rem;
    z-index: 50;
    color: #e2e8f0;
    font-size: 0.75rem;
    text-align: left;
  }

  .popover-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #1e293b;
    padding-bottom: 0.375rem;
    margin-bottom: 0.5rem;
  }

  .popover-title {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    font-weight: 700;
    color: #ffffff;
    font-size: 0.75rem;
  }

  .teal-icon {
    color: #2dd4bf;
  }

  .close-btn {
    background: transparent;
    border: none;
    color: #94a3b8;
    cursor: pointer;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 2px 4px;
  }

  .close-btn:hover {
    color: #ffffff;
  }

  .popover-body {
    font-size: 11px;
    color: #cbd5e1;
    line-height: 1.5;
  }

  .description-text {
    margin: 0;
  }
</style>
