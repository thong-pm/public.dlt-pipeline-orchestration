<script>
  import { onMount } from 'svelte';

  const browser = typeof window !== 'undefined';

  export let summaryData = [];
  export let pageName = 'Executive Overview';

  let isOpen = false;
  let inputPrompt = '';
  let isLoading = false;
  let cooldownSeconds = 0;
  let sessionRemaining = 20;
  let errorMessage = '';
  let isAiInfoOpen = false;

  const CLOUD_FUNCTION_DEFAULT = 'https://cockpit-ai-chat-p3lkd3llha-uc.a.run.app/chat';
  const LOCAL_DEV_DEFAULT = 'http://127.0.0.1:8090/chat';
  let activeEndpoint = CLOUD_FUNCTION_DEFAULT;

  // Extract signals from Evidence summaryData query store
  $: row = Array.isArray(summaryData) ? summaryData[0] || {} : summaryData || {};
  $: overdueCount = row.overdue_invoices_count || 1;
  $: overdueAmount = formatUsd(row.total_ar_overdue || 250);
  $: stalledCount = row.stalled_deals_count || 10;
  $: stalledAmount = formatUsd(row.stalled_deals_amount || 1424908);
  $: wipAmount = formatUsd(row.wip_value || 293321);

  let messages = [];

  function formatUsd(val) {
    if (val === undefined || val === null || isNaN(val)) return '$0';
    return '$' + Math.round(Number(val)).toLocaleString();
  }

  onMount(() => {
    if (browser) {
      const isDevServer = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') && window.location.port === '3000';
      activeEndpoint = isDevServer ? LOCAL_DEV_DEFAULT : CLOUD_FUNCTION_DEFAULT;

      const cached = sessionStorage.getItem('cockpit_chat_history');
      if (cached) {
        try {
          messages = JSON.parse(cached);
        } catch (e) {}
      }

      const cachedRemaining = sessionStorage.getItem('cockpit_session_remaining');
      if (cachedRemaining !== null) {
        const parsed = parseInt(cachedRemaining, 10);
        if (!isNaN(parsed)) sessionRemaining = parsed;
      }
    }
  });

  $: if (browser && messages.length > 0) {
    try {
      sessionStorage.setItem('cockpit_chat_history', JSON.stringify(messages));
    } catch (e) {}
  }

  $: if (browser && sessionRemaining !== undefined) {
    try {
      sessionStorage.setItem('cockpit_session_remaining', sessionRemaining.toString());
    } catch (e) {}
  }

  function getActiveFilters() {
    if (!browser) return {};
    const params = new URLSearchParams(window.location.search);
    return {
      page: pageName,
      time_filter: params.get('time_filter') || 'ytd',
      business_unit: params.get('business_unit') || 'All',
      region: params.get('region') || 'All',
      signals: {
        overdue_ar: `${overdueCount} invoice (${overdueAmount})`,
        stalled_deals: `${stalledCount} deals (${stalledAmount})`,
        unbilled_wip: `${wipAmount}`
      }
    };
  }

  const clientPromptCache = new Map();
  let currentAbortController = null;

  async function submitQuery(queryText) {
    const textToSend = (queryText || inputPrompt).trim();
    if (!textToSend || isLoading || cooldownSeconds > 0 || sessionRemaining <= 0) return;

    if (currentAbortController) {
      currentAbortController.abort();
      currentAbortController = null;
    }

    isOpen = true;
    errorMessage = '';
    inputPrompt = '';

    const normalizedKey = textToSend.toLowerCase().trim();

    // Check client-side in-memory cache for instant replay (only for standalone first queries, never in multi-turn conversation)
    const isMultiTurn = messages.length > 0;
    const isConversationalParticle = [
      'why', 'why?', 'how', 'who', 'what else', 'tell me more',
      'yes', 'no', 'ok', 'yep', 'sure', 'y', 'n', 'wrong answer', 'continue'
    ].includes(normalizedKey);

    if (!isMultiTurn && !isConversationalParticle && clientPromptCache.has(normalizedKey)) {
      const cached = clientPromptCache.get(normalizedKey);
      messages = [
        ...messages,
        {
          role: 'user',
          text: textToSend,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        },
        {
          role: 'assistant',
          text: cached.text,
          model: cached.model ? `${cached.model} (local)` : 'local-cache',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ];
      setTimeout(scrollToBottom, 50);
      return;
    }

    isLoading = true;

    // Build history payload before adding current prompt
    const historyPayload = messages.slice(-8).map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      text: m.text
    }));

    messages = [
      ...messages,
      {
        role: 'user',
        text: textToSend,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ];

    setTimeout(scrollToBottom, 50);

    const context = getActiveFilters();
    currentAbortController = new AbortController();

    try {
      const response = await fetch(activeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: textToSend,
          context,
          history: historyPayload
        }),
        signal: currentAbortController.signal
      });

      const data = await response.json();

      if (!response.ok) {
        errorMessage = data.message || data.error || `HTTP ${response.status} error`;
        if (data.session_remaining !== undefined) sessionRemaining = data.session_remaining;
      } else {
        if (data.session_remaining !== undefined) sessionRemaining = data.session_remaining;
        const answerText = data.answer || 'No response text returned.';
        if (!isMultiTurn && !isConversationalParticle) {
          clientPromptCache.set(normalizedKey, {
            text: answerText,
            model: data.model_used
          });
        }
        messages = [
          ...messages,
          {
            role: 'assistant',
            text: answerText,
            model: data.model_used,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ];
      }
    } catch (err) {
      if (err.name === 'AbortError') {
        return;
      }
      errorMessage = `Cannot connect to AI Proxy at ${activeEndpoint}. Ensure proxy is running.`;
    } finally {
      isLoading = false;
      currentAbortController = null;
      startCooldown(4);
      setTimeout(scrollToBottom, 50);
    }
  }

  function startCooldown(sec) {
    cooldownSeconds = sec;
    const interval = setInterval(() => {
      cooldownSeconds -= 1;
      if (cooldownSeconds <= 0) clearInterval(interval);
    }, 1000);
  }

  function scrollToBottom() {
    if (!browser) return;
    const container = document.getElementById('diag-chat-scroll');
    if (container) container.scrollTop = container.scrollHeight;
  }

  function formatText(raw) {
    if (!raw) return '';
    let text = raw.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    text = text.replace(/`([^`]+)`/g, '<code class="bg-[#1e293b] text-[#2dd4bf] px-1 py-0.5 rounded text-xs">$1</code>');
    text = text.replace(/\n/g, '<br/>');
    return text;
  }
</script>

<div class="relative w-full max-w-full md:w-[380px] font-sans">
  <!-- Always-Visible Embedded Cockpit Diagnostic Card -->
  <div class="bg-white rounded-xl shadow-sm border-t-4 border-[#B45309] px-3.5 py-2 min-h-[92px] flex flex-col justify-between text-[9px] transition-all max-w-full">
    <!-- Header Row -->
    <div class="font-bold uppercase tracking-wider text-gray-500 text-[8px] flex items-center justify-between gap-1 w-full">
      <div class="flex items-center gap-1.5 relative flex-nowrap shrink-0">
        <span class="text-gray-700 whitespace-nowrap">Diagnostic Copilot</span>
        <!-- Round AI Info Button -->
        <span
          id="ai-privacy-info-btn"
          role="button"
          tabindex="0"
          on:click={() => (isAiInfoOpen = !isAiInfoOpen)}
          on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && (isAiInfoOpen = !isAiInfoOpen)}
          class="info-icon-btn"
          style="display: inline-flex !important; align-items: center !important; justify-content: center !important; width: 14px !important; height: 14px !important; min-width: 14px !important; max-width: 14px !important; padding: 0 !important; margin: 0 !important; background: transparent !important; border: none !important; box-shadow: none !important; outline: none !important; cursor: pointer !important; flex: 0 0 14px !important;"
          title="AI Copilot & Data Model Details"
          aria-label="AI Info"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="pointer-events: none; display: block;">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        </span>
        <span class="text-[8px] font-bold text-[#0d9488] bg-[#ccfbf1] px-1.5 py-0.2 rounded-full whitespace-nowrap">3 Signals</span>

        {#if isAiInfoOpen}
          <!-- Backdrop to close on click outside -->
          <div
            class="fixed inset-0 z-40"
            on:click={() => (isAiInfoOpen = false)}
            on:keydown={(e) => e.key === 'Escape' && (isAiInfoOpen = false)}
            role="button"
            tabindex="-1"
            aria-label="Close backdrop"
          ></div>

          <!-- Popover Card -->
          <div class="absolute left-0 top-6 w-[315px] max-w-[calc(100vw-32px)] bg-[#0b111e] border border-[#1e293b] rounded-xl shadow-2xl p-2.5 z-50 text-gray-200 text-xs normal-case tracking-normal font-normal">
            <div class="flex items-center justify-between border-b border-[#1e293b] pb-1.5 mb-2">
              <div class="flex items-center gap-1.5 font-bold text-white text-[11px]">
                <span class="text-[#2dd4bf]">🛡️</span>
                <span>AI Copilot & Privacy Disclosure</span>
              </div>
              <button
                id="ai-privacy-close-btn"
                type="button"
                on:click={() => (isAiInfoOpen = false)}
                class="text-gray-400 hover:text-white text-xs font-bold p-0.5"
                style="background: transparent; border: none; cursor: pointer;"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div class="space-y-2 text-[9.5px] text-gray-300 leading-snug">
              <!-- Privacy Section -->
              <div class="bg-[#131d31] p-2 rounded border border-[#1e293b]">
                <div class="font-bold text-[#2dd4bf] mb-1">Privacy & Data Storage:</div>
                <ul class="list-disc pl-3.5 space-y-0.5 text-gray-300">
                  <li><strong>Zero Server Logging:</strong> Queries and messages are never stored in server databases.</li>
                  <li><strong>Local Session Only:</strong> Active chat lives only in browser <code class="text-[#2dd4bf]">sessionStorage</code> and clears on tab close.</li>
                  <li><strong>AI Engine:</strong> Powered by <code class="text-[#2dd4bf]"> Gemini 3.5 Flash Lite</code></li>
                </ul>
              </div>

              <!-- Scope & Limitations -->
              <div class="bg-[#131d31] p-2 rounded border border-[#1e293b] space-y-0.5">
                <div class="font-bold text-amber-400 mb-0.5">Scope & Limitations:</div>
                <ul class="list-disc pl-3.5 space-y-0.5 text-gray-300">
                  <li>Data model and volumn are grounded strictly for demo purposes.</li>
                  <li>First query may take 2-5s to respond. Temporary downtime can occur during updates.</li>
                </ul>
              </div>
            </div>
          </div>
        {/if}
      </div>
    </div>

    <!-- The 3 Cross-System Signals (Read directly from Evidence SQL store with 0 API cost) -->
    <div class="flex flex-col gap-1 text-gray-600 leading-tight my-1">
      <!-- Signal 1: Xero AR -->
      <div class="flex items-center justify-between gap-1 group">
        <div class="flex items-start gap-1 min-w-0">
          <span class="text-amber-600 font-bold shrink-0">⚠️</span>
          <span class="truncate"><strong>Xero Overdue AR:</strong> {overdueCount} invoice ({overdueAmount}) pending.</span>
        </div>
        <button
          disabled={isLoading || cooldownSeconds > 0 || sessionRemaining <= 0}
          on:click={() => submitQuery("Which customer owes the " + overdueAmount + " overdue invoice in Xero, and what is the invoice ID and due date?")}
          class="shrink-0 text-[8px] font-semibold text-[#0d9488] hover:underline whitespace-nowrap ml-1 bg-teal-50 hover:bg-teal-100 disabled:opacity-40 px-1.5 py-0.5 rounded cursor-pointer disabled:cursor-not-allowed"
          title="Query details with AI"
        >
          Who owes this?
        </button>
      </div>

      <!-- Signal 2: HubSpot Stalled -->
      <div class="flex items-center justify-between gap-1 group">
        <div class="flex items-start gap-1 min-w-0">
          <span class="text-amber-600 font-bold shrink-0">⚠️</span>
          <span class="truncate"><strong>HubSpot Stalled:</strong> {stalledCount} deals ({stalledAmount}) past close.</span>
        </div>
        <button
          disabled={isLoading || cooldownSeconds > 0 || sessionRemaining <= 0}
          on:click={() => submitQuery("List the top 5 stalled deals in HubSpot by value that are past close date with their amounts.")}
          class="shrink-0 text-[8px] font-semibold text-[#0d9488] hover:underline whitespace-nowrap ml-1 bg-teal-50 hover:bg-teal-100 disabled:opacity-40 px-1.5 py-0.5 rounded cursor-pointer disabled:cursor-not-allowed"
          title="Query details with AI"
        >
          Breakdown deals
        </button>
      </div>

      <!-- Signal 3: Procore Backlog -->
      <div class="flex items-center justify-between gap-1 group">
        <div class="flex items-start gap-1 min-w-0">
          <span class="text-[#264773] font-bold shrink-0">📋</span>
          <span class="truncate"><strong>Procore Backlog:</strong> {wipAmount} unbilled contract work.</span>
        </div>
        <button
          disabled={isLoading || cooldownSeconds > 0 || sessionRemaining <= 0}
          on:click={() => submitQuery("What is our unbilled project delivery backlog broken down by business unit?")}
          class="shrink-0 text-[8px] font-semibold text-[#0d9488] hover:underline whitespace-nowrap ml-1 bg-teal-50 hover:bg-teal-100 disabled:opacity-40 px-1.5 py-0.5 rounded cursor-pointer disabled:cursor-not-allowed"
          title="Query details with AI"
        >
          By BU
        </button>
      </div>
    </div>

    <!-- Embedded Prompt Bar -->
    <form on:submit|preventDefault={() => submitQuery(inputPrompt)} class="flex items-center gap-1.5 pt-1 border-t border-gray-100">
      <input
        type="text"
        bind:value={inputPrompt}
        placeholder={sessionRemaining <= 0 ? "Session limit reached (20 queries)." : cooldownSeconds > 0 ? `Wait ${cooldownSeconds}s...` : "Ask AI about these signals or any metric..."}
        disabled={isLoading || cooldownSeconds > 0 || sessionRemaining <= 0}
        maxlength="250"
        class="flex-1 bg-gray-50 border border-gray-200 rounded px-2 py-0.5 text-[9px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#0d9488] disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={isLoading || !inputPrompt.trim() || cooldownSeconds > 0 || sessionRemaining <= 0}
        class="bg-[#0d9488] hover:bg-[#0f766e] text-white px-2 py-0.5 rounded font-bold text-[8px] disabled:opacity-40 transition"
      >
        Ask
      </button>
    </form>

    <!-- Suggested Prompts Below Chat Bar -->
    <div class="flex flex-wrap sm:flex-nowrap items-center gap-1.5 pt-1">
      <span class="text-[8px] text-gray-400 font-semibold whitespace-nowrap">Suggested:</span>
      <button
        type="button"
        disabled={isLoading || cooldownSeconds > 0 || sessionRemaining <= 0}
        on:click={() => submitQuery("What are our top revenue drivers across products and business units?")}
        class="bg-[#0d9488] hover:bg-[#0f766e] disabled:opacity-40 text-white px-1.5 py-0.5 rounded text-[8px] font-semibold whitespace-nowrap cursor-pointer disabled:cursor-not-allowed transition shrink-0 shadow-xs"
      >
        Top Revenue
      </button>
      <button
        type="button"
        disabled={isLoading || cooldownSeconds > 0 || sessionRemaining <= 0}
        on:click={() => submitQuery("Which projects have the highest unbilled WIP value and contract amounts?")}
        class="bg-[#0d9488] hover:bg-[#0f766e] disabled:opacity-40 text-white px-1.5 py-0.5 rounded text-[8px] font-semibold whitespace-nowrap cursor-pointer disabled:cursor-not-allowed transition shrink-0 shadow-xs"
      >
        Top WIP
      </button>
      <button
        type="button"
        disabled={isLoading || cooldownSeconds > 0 || sessionRemaining <= 0}
        on:click={() => submitQuery("How can I contact the author of this dashboard?")}
        class="bg-[#0d9488] hover:bg-[#0f766e] disabled:opacity-40 text-white px-1.5 py-0.5 rounded text-[8px] font-semibold whitespace-nowrap cursor-pointer disabled:cursor-not-allowed transition shrink-0 shadow-xs"
      >
        Contact Author
      </button>

      <!-- Highlighted Show Conversation Button: Black with Yellow Text -->
      <button
        type="button"
        on:click={() => (isOpen = !isOpen)}
        class="ml-auto text-[8px] font-bold px-2 py-0.5 rounded transition whitespace-nowrap cursor-pointer bg-[#0f172a] hover:bg-black text-[#facc15] hover:text-[#fef08a] border border-[#facc15]/40 hover:border-[#facc15] shadow-xs flex items-center gap-1 shrink-0"
        title="Toggle Conversation History"
      >
        <span>💬</span>
        <span>{isOpen ? 'Hide Chat' : (messages.length > 0 ? `Show Chat (${messages.length})` : 'Show Chat')}</span>
      </button>
    </div>
  </div>

  <!-- Anchored Interactive Conversation Flyout (Responsive Bottom Modal on Mobile, Anchored Dropdown on Desktop) -->
  {#if isOpen}
    <div class="fixed sm:absolute inset-x-3 sm:inset-x-auto sm:right-0 bottom-3 sm:bottom-auto sm:top-[calc(100%+6px)] w-auto sm:w-[410px] h-[75vh] sm:h-[460px] max-w-[calc(100vw-24px)] sm:max-w-none bg-[#0b111e] border border-[#1e293b] rounded-xl shadow-2xl flex flex-col overflow-hidden text-gray-200 text-xs z-50">
      <!-- Flyout Header -->
      <div class="bg-[#0f172a] px-3.5 py-2.5 border-b border-[#1e293b] flex items-center justify-between">
        <div>
          <div class="font-bold text-white text-xs flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
            <span>Diagnostic Intelligence Drill-Down</span>
          </div>
        </div>
        <div class="flex items-center gap-1.5">
          {#if messages.length > 0}
            <button
              on:click={() => { messages = []; if (browser) sessionStorage.removeItem('cockpit_chat_history'); }}
              class="text-[9px] text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 px-1.5 py-0.5 rounded transition"
              title="Clear Conversation"
            >
              Clear
            </button>
          {/if}
          <button
            on:click={() => {
              isOpen = false;
              if (currentAbortController) {
                currentAbortController.abort();
                currentAbortController = null;
              }
            }}
            class="text-gray-400 hover:text-white p-1 rounded transition text-sm font-bold"
            title="Close Panel"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      </div>

      <!-- Session Allowance Status Bar -->
      <div class="bg-[#090e18] px-3 py-1 border-b border-[#1e293b] flex items-center justify-between text-[10px] text-gray-400">
        <span>Session Allowance: <strong class="text-[#2dd4bf]">{sessionRemaining}</strong> / 20 queries left</span>
      </div>

      <!-- Messages Stream -->
      <div id="diag-chat-scroll" class="flex-1 p-3 overflow-y-auto space-y-2.5 bg-[#080c14]">
        {#if messages.length === 0}
          <div class="text-center text-gray-500 py-10 text-[11px]">
            Click a signal above, tap a suggested question, or type any query below.
          </div>
        {/if}

        {#each messages as msg}
          <div class="flex flex-col {msg.role === 'user' ? 'items-end' : 'items-start'}">
            <div
              class="max-w-[88%] rounded-lg p-2.5 leading-relaxed text-[11px] {msg.role === 'user'
                ? 'bg-[#0d9488] text-white font-medium rounded-br-none'
                : 'bg-[#151f32] text-gray-200 border border-[#1e293b] rounded-bl-none'}"
            >
              {@html formatText(msg.text)}
            </div>
            <div class="text-[8px] text-gray-500 mt-0.5 px-1 flex gap-2">
              <span>{msg.timestamp}</span>
              {#if msg.model}
                <span class="text-gray-400 font-mono">[{msg.model}]</span>
              {/if}
            </div>
          </div>
        {/each}

        {#if isLoading}
          <div class="flex items-center gap-2 bg-[#151f32] text-gray-400 p-2 rounded-lg border border-[#1e293b] max-w-[75%]">
            <div class="w-2 h-2 rounded-full bg-[#0d9488] animate-ping"></div>
            <span class="text-[10px]">Analyzing question...</span>
          </div>
        {/if}

        {#if errorMessage}
          <div class="bg-[#450a0a] border border-[#ef4444] text-[#fca5a5] p-2 rounded text-[10px]">
            <strong>Error:</strong> {errorMessage}
          </div>
        {/if}
      </div>

      <!-- Follow-Up Input in Flyout -->
      <div class="p-2 bg-[#0f172a] border-t border-[#1e293b] flex flex-col gap-1.5">
        <form on:submit|preventDefault={() => submitQuery(inputPrompt)} class="flex gap-1.5">
          <input
            type="text"
            bind:value={inputPrompt}
            placeholder={sessionRemaining <= 0 ? "Session limit reached (20 queries)." : cooldownSeconds > 0 ? `Cooldown: ${cooldownSeconds}s...` : "Ask follow-up query..."}
            disabled={isLoading || cooldownSeconds > 0 || sessionRemaining <= 0}
            maxlength="250"
            class="flex-1 bg-[#090d16] border border-[#1e293b] rounded px-2.5 py-1.5 text-[11px] text-white placeholder-gray-500 focus:outline-none focus:border-[#0d9488] disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isLoading || !inputPrompt.trim() || cooldownSeconds > 0 || sessionRemaining <= 0}
            class="bg-[#0d9488] hover:bg-[#0f766e] text-white px-3 py-1.5 rounded font-bold text-[11px] disabled:opacity-40 transition"
          >
            Send
          </button>
        </form>

        <!-- Suggested Questions Below Chat Bar in Flyout -->
        <div class="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-0.5">
          <span class="text-[9px] text-gray-400 font-semibold whitespace-nowrap">Suggested:</span>
          <button
            type="button"
            disabled={isLoading || cooldownSeconds > 0 || sessionRemaining <= 0}
            on:click={() => submitQuery("What are our top revenue drivers across products and business units?")}
            class="bg-[#0d9488] hover:bg-[#0f766e] disabled:opacity-40 text-white px-2 py-0.5 rounded text-[9px] font-semibold transition whitespace-nowrap cursor-pointer disabled:cursor-not-allowed shrink-0 shadow-xs"
          >
            Top Revenue
          </button>
          <button
            type="button"
            disabled={isLoading || cooldownSeconds > 0 || sessionRemaining <= 0}
            on:click={() => submitQuery("Which projects have the highest unbilled WIP value and contract amounts?")}
            class="bg-[#0d9488] hover:bg-[#0f766e] disabled:opacity-40 text-white px-2 py-0.5 rounded text-[9px] font-semibold transition whitespace-nowrap cursor-pointer disabled:cursor-not-allowed shrink-0 shadow-xs"
          >
            Top WIP
          </button>
          <button
            type="button"
            disabled={isLoading || cooldownSeconds > 0 || sessionRemaining <= 0}
            on:click={() => submitQuery("How can I contact the author of this dashboard?")}
            class="bg-[#0d9488] hover:bg-[#0f766e] disabled:opacity-40 text-white px-2 py-0.5 rounded text-[9px] font-semibold transition whitespace-nowrap cursor-pointer disabled:cursor-not-allowed shrink-0 shadow-xs"
          >
            Contact Author
          </button>
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  .info-icon-btn {
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    padding: 0 !important;
    margin: 0 !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    cursor: pointer !important;
    color: #94a3b8;
    border-radius: 9999px !important;
    transition: color 0.15s ease, transform 0.15s ease;
    line-height: 1 !important;
    width: 14px !important;
    height: 14px !important;
    min-width: 14px !important;
    max-width: 14px !important;
    flex: 0 0 14px !important;
  }

  .info-icon-btn:hover {
    color: #0d9488 !important;
    transform: scale(1.15);
  }
</style>
