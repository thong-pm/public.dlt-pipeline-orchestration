"""GCP Cloud Function (Gen 2) and local HTTP handler for Executive Cockpit AI."""

import json
import os
import sys
import time
from typing import Any, Dict, Tuple, Optional
from google import genai
from google.genai import types

# Add current directory to path if needed
sys.path.insert(0, os.path.dirname(__file__))

from semantic_catalog import SYSTEM_INSTRUCTION
from rate_limiter import RateLimiter
try:
    from duckdb_executor import run_analytical_query
except Exception:
    from bq_executor import run_analytical_query

# Load .env file if running locally
def load_local_env() -> None:
    env_paths = [
        os.path.join(os.path.dirname(__file__), "..", "..", "..", ".env"),
        os.path.join(os.getcwd(), ".env")
    ]
    for p in env_paths:
        if os.path.exists(p):
            with open(p) as f:
                for line in f:
                    line = line.strip()
                    if line and not line.startswith("#") and "=" in line:
                        k, v = line.split("=", 1)
                        if k.strip() not in os.environ:
                            os.environ[k.strip()] = v.strip()

load_local_env()

rate_limiter = RateLimiter(
    max_requests_per_minute=10,
    max_requests_per_day=1000,
    max_per_ip_per_minute=5
)

# Tool function exposed to Gemini
def execute_analytical_query(query: str) -> str:
    """
    Executes a read-only SQL SELECT query against BigQuery dataset `gcp-etl-497002.dbt_prod`.
    Use this to retrieve factual metrics from fct_executive_cockpit, fct_pipeline, fct_revenue,
    dim_projects, dim_products, or dim_customers.
    """
    return run_analytical_query(query)

_genai_client = None

def get_gemini_client() -> genai.Client:
    global _genai_client
    if _genai_client is None:
        api_key = os.environ.get("GEMINI_API_KEY")
        if not api_key:
            raise ValueError("GEMINI_API_KEY environment variable is not configured.")
        _genai_client = genai.Client(api_key=api_key)
    return _genai_client

def build_cors_headers() -> Dict[str, str]:
    return {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Content-Type": "application/json"
    }

# In-memory dynamic response cache: cache_key -> (timestamp, response_dict)
RESPONSE_CACHE: Dict[str, Tuple[float, Dict[str, Any]]] = {}
CACHE_TTL_SECONDS = 7200  # 2 hours

PRESET_CACHE_FILE = os.path.join(os.path.dirname(__file__), "copilot_preset_cache.json")
PRESET_CACHE_DATA: Dict[str, str] = {}

def load_preset_cache_from_disk() -> None:
    """Load latest pipeline-warmed cache from copilot_preset_cache.json."""
    global PRESET_CACHE_DATA
    if os.path.exists(PRESET_CACHE_FILE):
        try:
            with open(PRESET_CACHE_FILE, "r", encoding="utf-8") as f:
                data = json.load(f)
                PRESET_CACHE_DATA = data.get("presets", {})
        except Exception:
            pass

load_preset_cache_from_disk()

def get_preset_fast_path(prompt: str, has_history: bool = False) -> Optional[str]:
    """Return pipeline-grounded warehouse responses for fixed copilot prompts in < 1ms."""
    p = prompt.strip().lower()

    # Negation and data-scope tokens MUST block preset fast-path matching
    has_negation = any(neg in p for neg in ["not", "no", "don't", "dont", "do not", "never", "without", "exclude", "except"])
    has_data_scope = any(d in p for d in ["data", "warehouse", "database", "table", "customer", "client", "company", "person", "people", "dim_", "fct_"])

    # 0. Fast-path conversational greetings (only on standalone first turn without history)
    if not has_history and p in ["hey", "hello", "hi", "hey!", "hello!", "hi!"]:
        return (
            "Hello! I am your Executive Cockpit Analytical AI Assistant. How can I help you analyze your "
            "revenue, pipeline, projects, or financial performance today?"
        )

    # 1. Author / Contact
    # Must NOT contain negation ("not the author") or data warehouse scope ("companies in data")
    if not has_negation and not has_data_scope:
        is_exact_author_intent = (
            p in [
                "contact author", "author", "creator", "developer", "contact", "reach out", "hire",
                "who made this", "who built this", "who created this", "who is the author", "who built this dashboard?",
                "how can i contact the author of this dashboard?"
            ]
            or "contact the author" in p
            or "contact the developer" in p
            or "how can i contact the author" in p
            or "who created this dashboard" in p
            or "who built this dashboard" in p
        )
        if is_exact_author_intent:
            return PRESET_CACHE_DATA.get("author") or (
                "You can contact the dashboard author, Thong Pham (TPM Data), via:\n"
                "- **Email**: thong@tpm-data.com\n"
                "- **Website**: https://www.tpm-data.com/\n\n"
                "Feel free to reach out for inquiries regarding automated ELT pipelines, dbt modeling, and modern data architecture."
            )

    # 2. Capabilities overview (only if no negation)
    if not has_negation and any(k in p for k in ["what can you do", "what do you do", "capabilities", "what are you capable"]):
        return (
            "As the Executive Cockpit Analytical AI Assistant, I help executives query and analyze data from our data warehouse (`gcp-etl-497002.dbt_prod`).\n\n"
            "Here are the main capabilities and data domains I can assist you with:\n\n"
            "1. **Executive Performance Cockpit** (`fct_executive_cockpit`):\n"
            "- Review billed revenue, job costs, and gross profit amounts.\n"
            "- Analyze realized gross margins versus sold margins and track margin fade.\n"
            "- Monitor cash collections, net cash flow, and lead-to-cash cycle days.\n"
            "- Track active project counts across business units ('Corporate', 'Commercial', 'Residential') and regions ('North America', 'EMEA', 'APAC').\n\n"
            "2. **Sales Pipeline & Deals** (`fct_pipeline`):\n"
            "- Inspect HubSpot CRM opportunities, deal stages, and total deal amounts.\n"
            "- Review win/loss reasons and active pipeline values.\n\n"
            "3. **Revenue & Billing** (`fct_revenue` & `seed_xero_invoices`):\n"
            "- Analyze granular billing transactions across source systems (HubSpot, Xero, Shopify, Procore).\n"
            "- Check accounts receivable invoice ledgers, outstanding amounts due, and payment status.\n\n"
            "4. **Operations & Catalogs** (`dim_projects`, `dim_customers`, `dim_products`):\n"
            "- Track operational and construction projects consolidated from Procore.\n"
            "- Look up customer master records across HubSpot and Xero.\n"
            "- Review Shopify product catalogs, pricing, and inventory variants.\n\n"
            "How can I help you analyze the data today?"
        )

    # 3. Signal 1: Xero Overdue Invoice
    if not has_negation and (
        ("which customer owes the" in p and "overdue invoice in xero" in p)
        or (not has_history and (("xero" in p and "overdue" in p) or ("who owes" in p and "invoice" in p) or ("overdue invoice" in p)))
    ):
        return PRESET_CACHE_DATA.get("xero_overdue")

    # 4. Signal 2: HubSpot Stalled Deals
    if not has_negation and (
        ("list the top 5 stalled deals in hubspot" in p)
        or (not has_history and (("stalled" in p and "deal" in p) or ("stalled deals" in p) or ("top 5 stalled" in p)))
    ):
        return PRESET_CACHE_DATA.get("hubspot_stalled")

    # 5. Signal 3: Procore WIP Backlog by BU
    if not has_negation and (
        ("unbilled project delivery backlog broken down by business unit" in p)
        or (not has_history and (("backlog" in p and "business unit" in p) or ("procore backlog" in p) or ("wip backlog" in p)))
    ):
        return PRESET_CACHE_DATA.get("procore_backlog")

    # 6. Suggested 1: Top Revenue Drivers
    if not has_negation and (
        ("what are our top revenue drivers across products and business units" in p)
        or (not has_history and (("top revenue" in p) or ("revenue drivers" in p)))
    ):
        return PRESET_CACHE_DATA.get("top_revenue")

    # 7. Suggested 2: Top WIP Projects
    if not has_negation and (
        ("which projects have the highest unbilled wip value and contract amounts" in p)
        or (not has_history and (("highest unbilled wip" in p) or ("top wip" in p) or ("highest unbilled" in p)))
    ):
        return PRESET_CACHE_DATA.get("top_wip")

    return None

def process_chat_query(
    prompt: str,
    context: Dict[str, Any],
    client_ip: str,
    history: Optional[list] = None
) -> Tuple[int, Dict[str, Any]]:
    # 1. Rate limiting check
    allowed, rate_msg, session_remaining = rate_limiter.check(client_ip)
    if not allowed:
        return 429, {
            "error": "Rate limit exceeded",
            "message": rate_msg,
            "session_remaining": session_remaining
        }

    has_history = bool(history and len(history) > 0)

    # 2. Fast-path check for fixed presets (< 1ms execution)
    # Presets are fixed, pipeline-grounded answers and ALWAYS return in < 1ms regardless of history
    preset_answer = get_preset_fast_path(prompt, has_history=has_history)
    if preset_answer:
        return 200, {
            "answer": preset_answer,
            "model_used": "preset-cache",
            "session_remaining": session_remaining
        }

    has_history = bool(history and len(history) > 0)

    # 3. Dynamic TTL response cache check (only for standalone first-turn queries)
    cache_key = f"{prompt.strip().lower()}::{context.get('page','overview')}::{context.get('business_unit','All')}::{context.get('region','All')}::{context.get('time_filter','ytd')}"
    if not has_history and cache_key in RESPONSE_CACHE:
        cached_time, cached_payload = RESPONSE_CACHE[cache_key]
        if time.time() - cached_time < CACHE_TTL_SECONDS:
            return 200, {
                **cached_payload,
                "session_remaining": session_remaining,
                "model_used": f"{cached_payload.get('model_used', 'gemini')} (cache)"
            }

    # 4. Prepare user prompt with dashboard UI state if present
    context_str = ""
    if context:
        page = context.get("page", "overview")
        time_filter = context.get("time_filter", "ytd")
        bu = context.get("business_unit", "All")
        region = context.get("region", "All")
        context_str = (
            f"[Dashboard Context: Page={page}, "
            f"TimeFilter={time_filter}, BusinessUnit={bu}, Region={region}, ReferenceDate=2026-06-15]\n"
        )
        if "signals" in context and isinstance(context["signals"], dict):
            sig = context["signals"]
            context_str += (
                f"[Live Screen Signals: Overdue AR={sig.get('overdue_ar')}, "
                f"Stalled Deals={sig.get('stalled_deals')}, Unbilled Backlog={sig.get('unbilled_wip')}]\n"
            )

    follow_up_hint = ""
    if has_history and prompt.strip().lower() in ["yes", "yeah", "yep", "sure", "ok", "okay", "proceed", "go ahead", "do it"]:
        follow_up_hint = (
            "[Directive: The user confirmed 'yes' to your previous offer. Do NOT ask for clarification or repeat your previous question. "
            "Immediately execute an analytical query for the most prominent option, such as top clients by billed revenue or customers from dim_customers, "
            "and present the factual records.]\n"
        )

    full_user_content = f"{context_str}{follow_up_hint}User question: {prompt}"

    # Build Gemini history content objects
    chat_history: list[types.Content] = []
    if history and isinstance(history, list):
        for item in history[-8:]:
            if not isinstance(item, dict):
                continue
            raw_role = (item.get("role") or "").lower()
            role = "user" if raw_role in ("user", "human") else "model"
            text = (item.get("text") or item.get("content") or "").strip()
            if text:
                chat_history.append(types.Content(role=role, parts=[types.Part.from_text(text=text)]))

    # 5. Model execution with fallback
    client = get_gemini_client()
    candidate_models = ["gemini-3.5-flash-lite", "gemini-3.5-flash"]

    last_error: Exception = None
    for model_name in candidate_models:
        try:
            chat_kwargs: Dict[str, Any] = {
                "model": model_name,
                "config": types.GenerateContentConfig(
                    system_instruction=SYSTEM_INSTRUCTION,
                    tools=[execute_analytical_query],
                    automatic_function_calling=types.AutomaticFunctionCallingConfig(maximum_remote_calls=3),
                    temperature=0.2
                )
            }
            if chat_history:
                chat_kwargs["history"] = chat_history

            chat = client.chats.create(**chat_kwargs)
            response = chat.send_message(full_user_content)

            # Robust text extraction
            answer_text = getattr(response, "text", "") or ""
            if not answer_text.strip() and hasattr(response, "candidates") and response.candidates:
                parts = getattr(response.candidates[0].content, "parts", [])
                texts = [p.text for p in parts if hasattr(p, "text") and p.text]
                if texts:
                    answer_text = "\n".join(texts)

            if not answer_text.strip():
                # Inspect ONLY the very latest model turn in chat history (never walk back into prior conversation turns)
                history_turns = chat.get_history()
                if history_turns and history_turns[-1].role == "model":
                    texts = [p.text for p in history_turns[-1].parts if hasattr(p, "text") and p.text]
                    if texts:
                        answer_text = "\n".join(texts)

            if not answer_text.strip():
                # If tool calls exhausted limits without generating text, force a final synthesis turn
                clean_history = []
                for turn in chat.get_history():
                    has_call = any(hasattr(p, "function_call") and p.function_call for p in turn.parts)
                    has_text = any(hasattr(p, "text") and p.text for p in turn.parts)
                    if has_call and not has_text:
                        continue
                    clean_history.append(turn)

                synthesis_prompt = types.Content(
                    role="user",
                    parts=[types.Part.from_text(text="Synthesize the findings from the query results above and answer the user's question directly. If no matching records were found, state clearly that no records exist in the database.")]
                )
                try:
                    forced_response = client.models.generate_content(
                        model=model_name,
                        contents=clean_history + [synthesis_prompt]
                    )
                    answer_text = getattr(forced_response, "text", "") or ""
                except Exception:
                    pass

            if not answer_text.strip():
                raise RuntimeError(f"{model_name} generated no textual response; falling back to secondary model")

            if answer_text.strip():
                # Save into dynamic TTL response cache for standalone first-turn queries
                if not has_history:
                    RESPONSE_CACHE[cache_key] = (time.time(), {
                        "answer": answer_text.strip(),
                        "model_used": model_name
                    })
                return 200, {
                    "answer": answer_text.strip(),
                    "model_used": model_name,
                    "session_remaining": session_remaining
                }
        except Exception as exc:
            last_error = exc
            continue

    return 500, {
        "error": "Model invocation failed",
        "message": str(last_error),
        "session_remaining": session_remaining
    }

def stream_chat_query(
    prompt: str,
    context: Dict[str, Any],
    client_ip: str,
    history: Optional[list] = None
):
    """Yield Server-Sent Events (SSE) data chunks for real-time token streaming."""
    allowed, rate_msg, session_remaining = rate_limiter.check(client_ip)
    if not allowed:
        yield f"data: {json.dumps({'type': 'error', 'message': rate_msg, 'session_remaining': session_remaining})}\n\n"
        return

    has_history = bool(history and len(history) > 0)

    # 1. Preset fast-path check
    preset_answer = get_preset_fast_path(prompt, has_history=has_history)
    if preset_answer:
        yield f"data: {json.dumps({'type': 'chunk', 'text': preset_answer, 'model': 'preset-cache'})}\n\n"
        yield f"data: {json.dumps({'type': 'done', 'session_remaining': session_remaining, 'model_used': 'preset-cache'})}\n\n"
        return

    # 2. Dynamic response cache check
    cache_key = f"{prompt.strip().lower()}::{context.get('page','overview')}::{context.get('business_unit','All')}::{context.get('region','All')}::{context.get('time_filter','ytd')}"
    if not has_history and cache_key in RESPONSE_CACHE:
        cached_time, cached_payload = RESPONSE_CACHE[cache_key]
        if time.time() - cached_time < CACHE_TTL_SECONDS:
            cached_text = cached_payload.get("answer", "")
            model_tag = f"{cached_payload.get('model_used', 'gemini')} (cache)"
            yield f"data: {json.dumps({'type': 'chunk', 'text': cached_text, 'model': model_tag})}\n\n"
            yield f"data: {json.dumps({'type': 'done', 'session_remaining': session_remaining, 'model_used': model_tag})}\n\n"
            return

    # 3. Build prompt and context
    context_str = ""
    if context:
        page = context.get("page", "overview")
        time_filter = context.get("time_filter", "ytd")
        bu = context.get("business_unit", "All")
        region = context.get("region", "All")
        context_str = (
            f"[Dashboard Context: Page={page}, "
            f"TimeFilter={time_filter}, BusinessUnit={bu}, Region={region}, ReferenceDate=2026-06-15]\n"
        )
        if "signals" in context and isinstance(context["signals"], dict):
            sig = context["signals"]
            context_str += (
                f"[Live Screen Signals: Overdue AR={sig.get('overdue_ar')}, "
                f"Stalled Deals={sig.get('stalled_deals')}, Unbilled Backlog={sig.get('unbilled_wip')}]\n"
            )

    follow_up_hint = ""
    if has_history and prompt.strip().lower() in ["yes", "yeah", "yep", "sure", "ok", "okay", "proceed", "go ahead", "do it"]:
        follow_up_hint = (
            "[Directive: The user confirmed 'yes' to your previous offer. Do NOT ask for clarification or repeat your previous question. "
            "Immediately execute an analytical query for the most prominent option, such as top clients by billed revenue or customers from dim_customers, "
            "and present the factual records.]\n"
        )

    full_user_content = f"{context_str}{follow_up_hint}User question: {prompt}"

    chat_history: list[types.Content] = []
    if history and isinstance(history, list):
        for item in history[-8:]:
            if not isinstance(item, dict):
                continue
            raw_role = (item.get("role") or "").lower()
            role = "user" if raw_role in ("user", "human") else "model"
            text = (item.get("text") or item.get("content") or "").strip()
            if text:
                chat_history.append(types.Content(role=role, parts=[types.Part.from_text(text=text)]))

    client = get_gemini_client()
    candidate_models = ["gemini-3.5-flash-lite", "gemini-3.5-flash"]
    last_error: Exception = None

    for model_name in candidate_models:
        try:
            chat_kwargs: Dict[str, Any] = {
                "model": model_name,
                "config": types.GenerateContentConfig(
                    system_instruction=SYSTEM_INSTRUCTION,
                    tools=[execute_analytical_query],
                    automatic_function_calling=types.AutomaticFunctionCallingConfig(maximum_remote_calls=3),
                    temperature=0.2
                )
            }
            if chat_history:
                chat_kwargs["history"] = chat_history

            chat = client.chats.create(**chat_kwargs)
            accumulated_chunks: list[str] = []

            for stream_chunk in chat.send_message_stream(full_user_content):
                chunk_text = getattr(stream_chunk, "text", "") or ""
                if chunk_text:
                    accumulated_chunks.append(chunk_text)
                    yield f"data: {json.dumps({'type': 'chunk', 'text': chunk_text, 'model': model_name})}\n\n"

            final_text = "".join(accumulated_chunks).strip()
            if not final_text:
                history_turns = chat.get_history()
                if history_turns and history_turns[-1].role == "model":
                    texts = [p.text for p in history_turns[-1].parts if hasattr(p, "text") and p.text]
                    if texts:
                        final_text = "\n".join(texts)
                        yield f"data: {json.dumps({'type': 'chunk', 'text': final_text, 'model': model_name})}\n\n"

            if final_text:
                if not has_history:
                    RESPONSE_CACHE[cache_key] = (time.time(), {
                        "answer": final_text,
                        "model_used": model_name
                    })
                yield f"data: {json.dumps({'type': 'done', 'session_remaining': session_remaining, 'model_used': model_name})}\n\n"
                return
        except Exception as exc:
            last_error = exc
            continue

    yield f"data: {json.dumps({'type': 'error', 'message': str(last_error), 'session_remaining': session_remaining})}\n\n"

def chat_handler(request):
    """Entry point for Google Cloud Functions (Gen 2) HTTP trigger."""
    headers = build_cors_headers()

    if request.method == "OPTIONS":
        return ("", 204, headers)

    req_path = getattr(request, "path", "")
    if request.method == "GET" or req_path in ("/health", "health"):
        return (json.dumps({"status": "ok", "service": "cockpit-ai-chat"}), 200, headers)

    if req_path in ("/cache/warm", "cache/warm"):
        load_preset_cache_from_disk()
        return (json.dumps({"status": "cache_warmed", "presets_loaded": len(PRESET_CACHE_DATA)}), 200, headers)

    if request.method != "POST":
        return (json.dumps({"error": "Method not allowed. Use POST."}), 405, headers)

    client_ip = request.headers.get("X-Forwarded-For", request.remote_addr or "127.0.0.1")
    if "," in client_ip:
        client_ip = client_ip.split(",")[0].strip()

    try:
        data = request.get_json(silent=True) or {}
    except Exception:
        return (json.dumps({"error": "Invalid JSON body"}), 400, headers)

    prompt = (data.get("prompt") or "").strip()
    if not prompt:
        return (json.dumps({"error": "Missing 'prompt' field in request body"}), 400, headers)

    if len(prompt) > 300:
        return (json.dumps({"error": "Prompt exceeds maximum allowed length of 300 characters"}), 400, headers)

    context = data.get("context") or {}
    history = data.get("history") or []

    # Stream if requested via payload, endpoint, or Accept header
    is_stream = bool(
        data.get("stream")
        or req_path in ("/chat/stream", "/stream")
        or request.headers.get("Accept") == "text/event-stream"
    )

    if is_stream:
        try:
            from flask import Response
            stream_headers = build_cors_headers()
            stream_headers["Content-Type"] = "text/event-stream"
            stream_headers["Cache-Control"] = "no-cache"
            stream_headers["X-Accel-Buffering"] = "no"
            return Response(
                stream_chat_query(prompt, context, client_ip, history=history),
                headers=stream_headers,
                mimetype="text/event-stream"
            )
        except Exception:
            pass

    status_code, response_body = process_chat_query(prompt, context, client_ip, history=history)
    return (json.dumps(response_body), status_code, headers)
