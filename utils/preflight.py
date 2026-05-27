"""
Pre-flight credential check for all SaaS sources.
Runs before pipeline execution to detect missing auth and prompt the user to fix it.
"""

import subprocess
import sys

import tomlkit


def _load_secrets():
    with open('.dlt/secrets.toml', 'r') as f:
        return tomlkit.load(f)


def _load_config():
    with open('.dlt/config.toml', 'r') as f:
        return tomlkit.load(f)


def _is_valid(value):
    """A credential is valid if it's set and not the placeholder string."""
    return bool(value) and value != '<configure_me>'


def _check_all() -> dict:
    """
    Returns {source: True/False} for each source's auth status.
    Performs live API checks for sources that use rotating tokens.
    """
    import requests

    secrets = _load_secrets()
    config = _load_config()

    results = {}

    # HubSpot: check if api_key is valid
    hs = secrets.get('sources', {}).get('hubspot', {})
    results['hubspot'] = _is_valid(hs.get('api_key'))

    # Xero: attempt a live refresh to confirm refresh_token works
    xero = secrets.get('sources', {}).get('xero', {})
    refresh_token = xero.get('refresh_token', '')
    if not _is_valid(refresh_token):
        results['xero'] = False
    else:
        try:
            r = requests.post(
                "https://identity.xero.com/connect/token",
                auth=(xero.get('client_id'), xero.get('client_secret')),
                data={"grant_type": "refresh_token", "refresh_token": refresh_token},
                timeout=10
            )
            results['xero'] = r.status_code == 200
            if r.status_code == 200:
                data = r.json()
                with open('.dlt/secrets.toml', 'r') as f:
                    s = tomlkit.load(f)
                s['sources']['xero']['access_token'] = data['access_token']
                s['sources']['xero']['refresh_token'] = data['refresh_token']
                with open('.dlt/secrets.toml', 'w') as f:
                    tomlkit.dump(s, f)
            else:
                print(f"  [preflight] Xero token refresh failed: {r.status_code} - {r.text}")
        except Exception as e:
            print(f"  [preflight] Xero token refresh exception: {e}")
            results['xero'] = False

    # Procore: attempt a live refresh to confirm refresh_token works
    env = config.get('sources', {}).get('procore', {}).get('environment', 'sandbox')
    procore_env = secrets.get('sources', {}).get('procore', {}).get(env, {})
    p_refresh = procore_env.get('refresh_token', '')
    if not _is_valid(p_refresh):
        results['procore'] = False
    else:
        oauth_url = (
            "https://sandbox.procore.com/oauth/token" if env == "sandbox"
            else "https://login.procore.com/oauth/token"
        )
        try:
            r = requests.post(
                oauth_url,
                data={
                    "grant_type": "refresh_token",
                    "refresh_token": p_refresh,
                    "client_id": procore_env.get('client_id'),
                    "client_secret": procore_env.get('client_secret'),
                },
                timeout=10
            )
            results['procore'] = r.status_code == 200
            if r.status_code == 200:
                data = r.json()
                with open('.dlt/secrets.toml', 'r') as f:
                    s = tomlkit.load(f)
                s['sources']['procore'][env]['access_token'] = data['access_token']
                s['sources']['procore'][env]['refresh_token'] = data['refresh_token']
                with open('.dlt/secrets.toml', 'w') as f:
                    tomlkit.dump(s, f)
            else:
                print(f"  [preflight] Procore token refresh failed: {r.status_code} - {r.text}")
        except Exception as e:
            print(f"  [preflight] Procore token refresh exception: {e}")
            results['procore'] = False

    # Shopify: check at least one store has a valid token
    shopify = secrets.get('sources', {}).get('shopify', {})
    stores = shopify.get('stores', {})

    if stores:
        # Multi-store mode: test each configured store against shop.json
        any_valid = False
        for store_key, store_cfg in stores.items():
            access_token = store_cfg.get('access_token', '')
            shop_url = store_cfg.get('shop_url', '').rstrip('/')
            if not _is_valid(access_token) or not _is_valid(shop_url):
                continue
            try:
                r = requests.get(
                    f"{shop_url}/admin/api/2024-01/shop.json",
                    headers={"X-Shopify-Access-Token": access_token},
                    timeout=10
                )
                if r.status_code == 200:
                    any_valid = True
                    break
            except Exception:
                continue
        results['shopify'] = any_valid
    else:
        # Single-store fallback: check root-level fields
        access_token = shopify.get('access_token', '')
        shop_url = shopify.get('shop_url', '').rstrip('/')
        if not _is_valid(access_token) or not _is_valid(shop_url):
            results['shopify'] = False
        else:
            try:
                r = requests.get(
                    f"{shop_url}/admin/api/2024-01/shop.json",
                    headers={"X-Shopify-Access-Token": access_token},
                    timeout=10
                )
                results['shopify'] = r.status_code == 200
            except Exception:
                results['shopify'] = False

    return results



# Auth instructions for each source
_HELP = {
    'hubspot': 'Add your HubSpot Private App token to .dlt/secrets.toml → [sources.hubspot] api_key',
    'xero':    'Run: poetry run python sources/xero/auth.py',
    'procore': 'Run: poetry run python sources/procore/auth.py',
    'shopify': 'Run: poetry run python sources/shopify/auth.py',
}

# Auth scripts that can be triggered automatically
_AUTH_SCRIPTS = {
    'xero':    'sources/xero/auth.py',
    'procore': 'sources/procore/auth.py',
    'shopify': 'sources/shopify/auth.py',
}


def run_preflight(sources: list = None) -> dict:
    """
    Check credentials for the requested sources.

    If running interactively (terminal attached), prompts the user to
    authorize any unauthenticated sources on the spot.

    If running non-interactively (cron/CI), just logs warnings and returns
    which sources are ready so the orchestrator can skip broken ones.

    Args:
        sources: List of source names to check, e.g. ['xero', 'shopify'].
                 Defaults to all four sources.

    Returns:
        dict of {source: True/False} — True means ready to run.
    """
    all_status = _check_all()

    # Filter to only the requested sources
    if sources:
        status = {k: v for k, v in all_status.items() if k in sources}
    else:
        status = all_status

    unauthorized = [s for s, ok in status.items() if not ok]

    if not unauthorized:
        return status  # All good, nothing to do

    # Log unauthorized sources
    print("\n" + "=" * 55)
    print("PRE-FLIGHT: Missing authorization detected")
    print("=" * 55)
    for source in unauthorized:
        print(f"  [FAILED] {source.upper():10s} - {_HELP[source]}")
    print("=" * 55)

    for source in unauthorized:
        script = _AUTH_SCRIPTS.get(source)
        if not script:
            print(f"\n  - {source.capitalize()} requires manual setup (see above).")
            continue

        if source == 'shopify':
            try:
                secrets = _load_secrets()
                shopify_cfg = secrets.get('sources', {}).get('shopify', {})
                stores = shopify_cfg.get('stores', {})
            except Exception:
                stores = {}

            if stores:
                import requests
                for store_key, store_cfg in stores.items():
                    access_token = store_cfg.get('access_token', '')
                    shop_url = store_cfg.get('shop_url', '').rstrip('/')
                    is_store_valid = False
                    if _is_valid(access_token) and _is_valid(shop_url):
                        try:
                            r = requests.get(
                                f"{shop_url}/admin/api/2024-01/shop.json",
                                headers={"X-Shopify-Access-Token": access_token},
                                timeout=10
                            )
                            is_store_valid = (r.status_code == 200)
                        except Exception:
                            pass
                    
                    if not is_store_valid:
                        try:
                            answer = input(f"\n  - Authorize Shopify store '{store_key}' now? [y/N]: ").strip().lower()
                        except (EOFError, OSError):
                            print(f"  Non-interactive mode - skipping Shopify store '{store_key}'.")
                            continue
                        if answer == 'y':
                            print(f"  Starting Shopify auth for '{store_key}'...")
                            subprocess.run([sys.executable, script, "--store", store_key])
                        else:
                            print(f"  Skipping Shopify store '{store_key}'.")
            else:
                try:
                    answer = input(f"\n  - Authorize Shopify now? [y/N]: ").strip().lower()
                except (EOFError, OSError):
                    print(f"  Non-interactive mode - skipping Shopify.")
                    continue
                if answer == 'y':
                    print("  Starting Shopify auth...")
                    subprocess.run([sys.executable, script])
                else:
                    print("  Skipping Shopify.")
        else:
            try:
                # Always try to prompt — falls back to skip in non-interactive mode
                answer = input(f"\n  - Authorize {source.capitalize()} now? [y/N]: ").strip().lower()
            except (EOFError, OSError):
                # stdin not available (cron/CI) — skip this source
                print(f"  Non-interactive mode - skipping {source.capitalize()}.")
                continue

            if answer == 'y':
                print(f"  Starting {source.capitalize()} auth...")
                subprocess.run([sys.executable, script])
            else:
                print(f"  Skipping {source.capitalize()} - it will be excluded from this run.")

    # Re-check after any auth attempts
    status = {k: v for k, v in _check_all().items() if k in status}
    print()
    return status

