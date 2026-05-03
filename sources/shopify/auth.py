"""
Shopify OAuth 2.0 Authorization Script.
Supports single-store and multi-store configurations.

Single store usage:
    poetry run python sources/shopify/auth.py

Multi-store usage (auth each store separately):
    poetry run python sources/shopify/auth.py --store store1
    poetry run python sources/shopify/auth.py --store store2
"""

import argparse
import hashlib
import hmac
import threading
import time
import urllib.parse
import webbrowser
from http.server import BaseHTTPRequestHandler, HTTPServer

import requests
import tomlkit

REDIRECT_URI = "http://localhost:8080/callback"
# read_all_orders: required to use status=any and access orders older than 60 days
SCOPES = "read_products,read_orders,read_all_orders,read_customers,read_inventory"
PORT = 8080

# Shared state between main thread and HTTP callback handler
_auth_state = {}


def _load_secrets():
    with open('.dlt/secrets.toml', 'r') as f:
        return tomlkit.load(f)


def _save_token(access_token: str, store_key: str = None):
    """Save token to secrets.toml. Saves to store-specific section if store_key given."""
    with open('.dlt/secrets.toml', 'r') as f:
        secrets = tomlkit.load(f)

    if store_key:
        # Multi-store: save under [sources.shopify.stores.<store_key>]
        if 'stores' not in secrets['sources']['shopify']:
            secrets['sources']['shopify']['stores'] = tomlkit.table()
        if store_key not in secrets['sources']['shopify']['stores']:
            secrets['sources']['shopify']['stores'][store_key] = tomlkit.table()
        secrets['sources']['shopify']['stores'][store_key]['access_token'] = access_token
    else:
        # Single store: save under [sources.shopify]
        secrets['sources']['shopify']['access_token'] = access_token

    with open('.dlt/secrets.toml', 'w') as f:
        tomlkit.dump(secrets, f)
    print("3. Token saved to .dlt/secrets.toml ✅")


def _validate_hmac(params: dict, client_secret: str) -> bool:
    """Validate Shopify's HMAC signature on the callback."""
    received_hmac = params.pop('hmac', None)
    sorted_params = '&'.join(f"{k}={v}" for k, v in sorted(params.items()))
    computed = hmac.new(
        client_secret.encode('utf-8'),
        sorted_params.encode('utf-8'),
        hashlib.sha256
    ).hexdigest()
    return computed == received_hmac


class _CallbackHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path != '/callback':
            self.send_response(404)
            self.end_headers()
            return

        params = dict(urllib.parse.parse_qsl(parsed.query))

        # Use the config from auth state (set before starting server)
        client_secret = _auth_state['client_secret']
        client_id = _auth_state['client_id']
        shop_url = _auth_state['shop_url']
        store_key = _auth_state.get('store_key')

        # Validate HMAC
        if not _validate_hmac(dict(params), client_secret):
            self.send_response(400)
            self.end_headers()
            self.wfile.write(b"HMAC validation failed.")
            _auth_state['error'] = "HMAC validation failed"
            return

        code = params.get('code')
        print("2. Exchanging code for permanent offline token...")

        response = requests.post(
            f"{shop_url}/admin/oauth/access_token",
            json={
                "client_id": client_id,
                "client_secret": client_secret,
                "code": code,
            }
        )
        response.raise_for_status()
        data = response.json()
        access_token = data['access_token']

        _save_token(access_token, store_key=store_key)
        _auth_state['access_token'] = access_token

        self.send_response(200)
        self.end_headers()
        self.wfile.write(b"<h2>Success! Shopify connected. You can close this tab.</h2>")

    def log_message(self, format, *args):
        pass  # Suppress server access logs


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Authorize a Shopify store")
    parser.add_argument(
        "--store", default=None,
        help="Store key name for multi-store setup (e.g. 'store1'). "
             "Omit to use the single-store root config."
    )
    args = parser.parse_args()

    secrets = _load_secrets()
    shopify = secrets.get('sources', {}).get('shopify', {})

    client_id = shopify.get('client_id')
    client_secret = shopify.get('client_secret')

    if args.store:
        # Multi-store: get shop_url from the store-specific section
        store_cfg = shopify.get('stores', {}).get(args.store, {})
        if not store_cfg:
            print(f"❌ Store '{args.store}' not found in [sources.shopify.stores.{args.store}]")
            print(f"   Add it to .dlt/secrets.toml first:")
            print(f"   [sources.shopify.stores.{args.store}]")
            print(f"   shop_url = \"https://your-store.myshopify.com\"")
            exit(1)
        shop_url = store_cfg.get('shop_url', '').rstrip('/')
        store_key = args.store
        print(f"Authorizing store: {args.store} ({shop_url})")
    else:
        # Single store: get shop_url from root config
        shop_url = shopify.get('shop_url', '').rstrip('/')
        store_key = None
        print(f"Authorizing default store: {shop_url}")

    if not client_id or client_id == '<configure_me>':
        print("❌ Please set client_id in .dlt/secrets.toml first.")
        exit(1)
    if not shop_url or shop_url in ('<configure_me>', 'https://<your-shop-name>.myshopify.com'):
        print("❌ Please set shop_url in .dlt/secrets.toml first.")
        exit(1)

    # Set shared state for callback handler
    _auth_state.update({
        'client_id': client_id,
        'client_secret': client_secret,
        'shop_url': shop_url,
        'store_key': store_key,
    })

    auth_url = (
        f"{shop_url}/admin/oauth/authorize"
        f"?client_id={client_id}"
        f"&scope={SCOPES}"
        f"&redirect_uri={urllib.parse.quote(REDIRECT_URI, safe='')}"
        f"&grant_options[]=offline"
    )

    server = HTTPServer(('localhost', PORT), _CallbackHandler)
    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()

    print("\n1. Opening browser for Shopify authorization...")
    print(f"   If browser doesn't open, paste this URL manually:\n   {auth_url}\n")

    try:
        webbrowser.open(auth_url)
    except Exception:
        pass

    timeout = 120
    start = time.time()
    while 'access_token' not in _auth_state and 'error' not in _auth_state:
        if time.time() - start > timeout:
            print("❌ Timed out waiting for authorization.")
            exit(1)
        time.sleep(0.5)

    server.shutdown()

    if 'error' in _auth_state:
        print(f"❌ Auth failed: {_auth_state['error']}")
        exit(1)

    print("\n✅ SUCCESS! Shopify token saved. This token never expires.")
    if store_key:
        print(f"   Run: poetry run python -m runners.run_shopify")
