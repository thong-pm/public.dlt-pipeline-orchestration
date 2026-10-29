<script>
  import { onMount } from 'svelte';

  const browser = typeof window !== 'undefined';

  export let endpoint = 'http://127.0.0.1:8090/chat';
  export let pageName = 'Executive Cockpit';

  let isOpen = false;
  let activeEndpoint = endpoint;

  let inputPrompt = '';
  let isLoading = false;
  let cooldownSeconds = 0;
  let sessionRemaining = 20;
  let errorMessage = '';

  let messages = [
    {
      role: 'assistant',
      text: 'Hello. I am the Cockpit AI Assistant. I can answer questions about billed revenue, margin fade, sales pipeline, and project delivery using data directly from BigQuery.',
      timestamp: 'Now'
    }
  ];

  const suggestedQuestions = [
    'What was our total billed revenue for Residential Joinery in EMEA?',
    'Show top open pipeline deals and total pipeline value',
    'What is our projected revenue based on historical win rates?'
  ];

  const CLOUD_FUNCTION_DEFAULT = 'https://cockpit-ai-chat-p3lkd3llha-uc.a.run.app/chat';
  const LOCAL_DEV_DEFAULT = 'http://127.0.0.1:8090/chat';

  onMount(() => {
    if (browser) {
      const isDevServer = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') && window.location.port === '3000';
      activeEndpoint = isDevServer ? LOCAL_DEV_DEFAULT : CLOUD_FUNCTION_DEFAULT;
    }
  });

  function getActiveFilters() {
    if (!browser) return {};
    const params = new URLSearchParams(window.location.search);
    return {
      page: pageName,
      time_filter: params.get('time_filter') || 'ytd',
      business_unit: params.get('business_unit') || 'All',
      region: params.get('region') || 'All'
    };
  }

  async function submitQuery(queryText) {
    const textToSend = (queryText || inputPrompt).trim();
    if (!textToSend || isLoading || cooldownSeconds > 0) return;

    errorMessage = '';
    inputPrompt = '';
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

    // Scroll to bottom
    setTimeout(scrollToBottom, 50);

    const context = getActiveFilters();

    try {
      const response = await fetch(activeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: textToSend,
          context,
          history: historyPayload
        })
      });

      const data = await response.json();

      if (!response.ok) {
        errorMessage = data.message || data.error || `HTTP ${response.status} error`;
        if (data.session_remaining !== undefined) {
          sessionRemaining = data.session_remaining;
        }
      } else {
        if (data.session_remaining !== undefined) {
          sessionRemaining = data.session_remaining;
        }
        messages = [
          ...messages,
          {
            role: 'assistant',
            text: data.answer || 'No response text returned.',
            model: data.model_used,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ];
      }
    } catch (err) {
      errorMessage = `Cannot connect to AI Proxy at ${activeEndpoint}. Make sure the proxy server is running.`;
    } finally {
      isLoading = false;
      startCooldown(4);
      setTimeout(scrollToBottom, 50);
    }
  }

  function startCooldown(sec) {
    cooldownSeconds = sec;
    const interval = setInterval(() => {
      cooldownSeconds -= 1;
      if (cooldownSeconds <= 0) {
        clearInterval(interval);
      }
    }, 1000);
  }

  function scrollToBottom() {
    if (!browser) return;
    const container = document.getElementById('cockpit-chat-messages');
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }

  function formatText(raw) {
    if (!raw) return '';
    // Basic sanitizing and bold/bullet markdown transformation
    let text = raw
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Bold **text**
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Code `text`
    text = text.replace(/`([^`]+)`/g, '<code class="bg-[#1e293b] text-[#2dd4bf] px-1 py-0.5 rounded text-xs">$1</code>');
    // Line breaks
    text = text.replace(/\n/g, '<br/>');
    return text;
  }
</script>

<div class="fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-50 font-sans max-w-[calc(100vw-24px)]">
  {#if !isOpen}
    <button
      on:click={() => (isOpen = true)}
      class="flex items-center gap-2 bg-[#0d9488] hover:bg-[#0f766e] text-white px-4 py-2.5 rounded-full shadow-lg border border-[#2dd4bf]/30 transition-all duration-200 transform hover:scale-105"
      aria-label="Open Cockpit AI Chat"
    >
      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
      <span class="text-xs font-semibold tracking-wide uppercase">Ask Cockpit AI</span>
    </button>
  {:else}
    <div class="w-[calc(100vw-24px)] sm:w-[390px] h-[min(550px,calc(100vh-80px))] bg-[#0b111e] border border-[#1e293b] rounded-xl shadow-2xl flex flex-col overflow-hidden text-gray-200 text-xs">
      <!-- Chat Header -->
      <div class="bg-[#0f172a] px-4 py-3 border-b border-[#1e293b] flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse"></div>
          <div>
            <div class="font-bold text-white text-sm">Cockpit Intelligence</div>
            <div class="text-[10px] text-gray-400">Grounded BigQuery + Gemini Free Tier</div>
          </div>
        </div>
          <button
            on:click={() => (isOpen = false)}
            class="text-gray-400 hover:text-white p-1 rounded transition"
            title="Minimize Chat"
            aria-label="Minimize Chat"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Session Allowance Banner -->
      <div class="bg-[#090e18] px-3 py-1.5 border-b border-[#1e293b] flex items-center justify-between text-[10px] text-gray-400">
        <span>Session Allowance: <strong class="text-[#2dd4bf]">{sessionRemaining}</strong> / 20 queries left</span>
        <span class="text-gray-500">Live BigQuery Grounding</span>
      </div>

      <!-- Message History Container -->
      <div id="cockpit-chat-messages" class="flex-1 p-3 overflow-y-auto space-y-3 bg-[#080c14]">
        {#each messages as msg}
          <div class="flex flex-col {msg.role === 'user' ? 'items-end' : 'items-start'}">
            <div
              class="max-w-[85%] rounded-lg p-2.5 leading-relaxed {msg.role === 'user'
                ? 'bg-[#0d9488] text-white font-medium rounded-br-none'
                : 'bg-[#151f32] text-gray-200 border border-[#1e293b] rounded-bl-none'}"
            >
              {@html formatText(msg.text)}
            </div>
            <div class="text-[9px] text-gray-500 mt-1 px-1 flex gap-2">
              <span>{msg.timestamp}</span>
              {#if msg.model}
                <span class="text-gray-400 font-mono">[{msg.model}]</span>
              {/if}
            </div>
          </div>
        {/each}

        {#if isLoading}
          <div class="flex items-center gap-2 bg-[#151f32] text-gray-400 p-2 rounded-lg border border-[#1e293b] max-w-[70%]">
            <div class="w-2 h-2 rounded-full bg-[#0d9488] animate-ping"></div>
            <span class="text-[11px]">Analyzing question...</span>
          </div>
        {/if}

        {#if errorMessage}
          <div class="bg-[#450a0a] border border-[#ef4444] text-[#fca5a5] p-2 rounded text-[11px]">
            <strong>Error:</strong> {errorMessage}
          </div>
        {/if}
      </div>

      <!-- Suggested Quick Prompts -->
      {#if messages.length <= 1}
        <div class="p-2 bg-[#090d16] border-t border-[#1e293b] space-y-1">
          <div class="text-[10px] text-gray-400 font-semibold mb-1">Suggested inquiries:</div>
          {#each suggestedQuestions as q}
            <button
              on:click={() => submitQuery(q)}
              class="w-full text-left bg-[#111927] hover:bg-[#1a263c] text-gray-300 hover:text-white px-2 py-1 rounded text-[10px] border border-[#1e293b] transition truncate block"
            >
              {q}
            </button>
          {/each}
        </div>
      {/if}

      <!-- Input Area -->
      <div class="p-2.5 bg-[#0f172a] border-t border-[#1e293b]">
        <form on:submit|preventDefault={() => submitQuery(inputPrompt)} class="flex gap-2">
          <input
            type="text"
            bind:value={inputPrompt}
            placeholder={sessionRemaining <= 0 ? "Session limit reached (20 queries)." : cooldownSeconds > 0 ? `Please wait ${cooldownSeconds}s...` : "Ask about revenue, deals, margins..."}
            disabled={isLoading || cooldownSeconds > 0 || sessionRemaining <= 0}
            maxlength="300"
            class="flex-1 bg-[#090d16] border border-[#1e293b] rounded-lg px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#0d9488] disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isLoading || !inputPrompt.trim() || cooldownSeconds > 0 || sessionRemaining <= 0}
            class="bg-[#0d9488] hover:bg-[#0f766e] text-white px-3.5 py-2 rounded-lg font-semibold text-xs disabled:opacity-40 disabled:cursor-not-allowed transition flex items-center justify-center"
            aria-label="Send Message"
          >
            {#if isLoading}
              <svg class="animate-spin h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
              </svg>
            {:else}
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            {/if}
          </button>
        </form>
      </div>
    </div>
  {/if}
</div>
