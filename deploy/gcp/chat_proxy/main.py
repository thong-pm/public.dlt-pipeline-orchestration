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

def get_preset_fast_path(prompt: str) -> Optional[str]:
    """Return pipeline-grounded warehouse responses for fixed copilot prompts in < 1ms."""
    p = prompt.strip().lower()

    # 1. Author / Contact
    if any(k in p for k in ["contact", "author", "creator", "who made", "who built", "reach out", "hire", "email"]):
        return PRESET_CACHE_DATA.get("author") or (
            "You can contact the dashboard author, Thong Pham (TPM Data), via:\n"
            "- **Email**: thong@tpm-data.com\n"
            "- **Website**: https://www.tpm-data.com/\n\n"
            "Feel free to reach out for inquiries regarding automated ELT pipelines, dbt modeling, and modern data architecture."
        )

    # 2. Signal 1: Xero Overdue Invoice
    if ("xero" in p and "overdue" in p) or ("who owes" in p and "invoice" in p) or ("overdue invoice" in p):
        return PRESET_CACHE_DATA.get("xero_overdue")

    # 3. Signal 2: HubSpot Stalled Deals
    if ("stalled" in p and "deal" in p) or ("stalled deals" in p) or ("top 5 stalled" in p):
        return PRESET_CACHE_DATA.get("hubspot_stalled")

    # 4. Signal 3: Procore WIP Backlog by BU
    if ("backlog" in p and "business unit" in p) or ("unbilled project delivery backlog" in p) or ("procore backlog" in p) or ("wip backlog" in p):
        return PRESET_CACHE_DATA.get("procore_backlog")

    # 5. Suggested 1: Top Revenue Drivers
    if ("top revenue" in p) or ("revenue drivers" in p):
        return PRESET_CACHE_DATA.get("top_revenue")

    # 6. Suggested 2: Top WIP Projects
    if ("highest unbilled wip" in p) or ("top wip" in p) or ("highest unbilled" in p):
        return PRESET_CACHE_DATA.get("top_wip")

    return None

def process_chat_query(prompt: str, context: Dict[str, Any], client_ip: str) -> Tuple[int, Dict[str, Any]]:
    # 1. Rate limiting check
    allowed, rate_msg, session_remaining = rate_limiter.check(client_ip)
    if not allowed:
        return 429, {
            "error": "Rate limit exceeded",
            "message": rate_msg,
            "session_remaining": session_remaining
        }

    # 2. Fast-path check for fixed presets (< 1ms execution)
    preset_answer = get_preset_fast_path(prompt)
    if preset_answer:
        return 200, {
            "answer": preset_answer,
            "model_used": "preset-cache",
            "session_remaining": session_remaining
        }

    # 3. Dynamic TTL response cache check
    cache_key = f"{prompt.strip().lower()}::{context.get('page','overview')}::{context.get('business_unit','All')}::{context.get('region','All')}::{context.get('time_filter','ytd')}"
    if cache_key in RESPONSE_CACHE:
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
            f"\n[Active Dashboard Context: Page={page}, "
            f"TimeFilter={time_filter}, BusinessUnit={bu}, Region={region}, ReferenceDate=2026-06-15]\n"
        )

    full_user_content = f"{context_str}User question: {prompt}"

    # 5. Model execution with fallback
    client = get_gemini_client()
    candidate_models = ["gemini-3.5-flash-lite", "gemini-2.5-flash", "gemini-1.5-flash"]

    last_error: Exception = None
    for model_name in candidate_models:
        try:
            chat = client.chats.create(
                model=model_name,
                config=types.GenerateContentConfig(
                    system_instruction=SYSTEM_INSTRUCTION,
                    tools=[execute_analytical_query],
                    temperature=0.0,
                    automatic_function_calling=types.AutomaticFunctionCallingConfig(maximum_remote_calls=5)
                )
            )
            response = chat.send_message(full_user_content)
            
            # Robust text extraction
            answer_text = getattr(response, "text", "") or ""
            if not answer_text.strip() and hasattr(response, "candidates") and response.candidates:
                parts = getattr(response.candidates[0].content, "parts", [])
                texts = [p.text for p in parts if hasattr(p, "text") and p.text]
                if texts:
                    answer_text = "\n".join(texts)

            if not answer_text.strip():
                # Inspect chat history for latest model turn
                history = chat.get_history()
                for msg in reversed(history):
                    if msg.role == "model":
                        texts = [p.text for p in msg.parts if hasattr(p, "text") and p.text]
                        if texts:
                            answer_text = "\n".join(texts)
                            break

            if answer_text.strip():
                # Save into dynamic TTL response cache
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

    status_code, response_body = process_chat_query(prompt, context, client_ip)
    return (json.dumps(response_body), status_code, headers)
