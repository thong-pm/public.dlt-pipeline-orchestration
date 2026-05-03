import requests
from tenacity import retry, stop_after_attempt, wait_exponential, retry_if_exception

def is_fragile_api_error(exception):
    """Determine if the exception is a fragile API error that should be retried."""
    if isinstance(exception, requests.exceptions.RequestException):
        # Network errors (connection drops, timeouts) usually don't have a response attached
        if getattr(exception, 'response', None) is None:
            return True
        
        # Specific HTTP status codes indicating rate limits or server-side transient errors
        status = exception.response.status_code
        if status in {429, 500, 502, 503, 504}:
            print(f"⚠️ [Retry] Caught HTTP {status} — Retrying...")
            return True
            
    return False

# Reusable decorator for API calls
api_retry = retry(
    stop=stop_after_attempt(5),
    wait=wait_exponential(multiplier=1, min=2, max=10),
    retry=retry_if_exception(is_fragile_api_error),
    reraise=True
)

@api_retry
def retrying_get(*args, **kwargs):
    """Wrapper around requests.get that automatically retries fragile errors."""
    return requests.get(*args, **kwargs)

@api_retry
def retrying_post(*args, **kwargs):
    """Wrapper around requests.post that automatically retries fragile errors."""
    return requests.post(*args, **kwargs)
