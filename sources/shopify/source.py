import dlt
import tomlkit
from dlt.sources.rest_api import rest_api_source


def _load_secrets():
    with open('.dlt/secrets.toml', 'r') as f:
        return tomlkit.load(f)


def _load_config():
    with open('.dlt/config.toml', 'r') as f:
        return tomlkit.load(f)


def _build_rest_config(shop_url: str, access_token: str, resources: list) -> dict:
    """Build a dlt rest_api_source config for a single Shopify store."""

    all_resources = [
        {
            "name": "products",
            "endpoint": {
                "path": "products.json",
                "data_selector": "products",
                "params": {"limit": 250}
            }
        },
        {
            "name": "orders",
            "endpoint": {
                "path": "orders.json",
                "data_selector": "orders",
                # status=any requires read_all_orders scope (requested during auth)
                "params": {"limit": 250, "status": "any"}
            }
        },
        {
            "name": "customers",
            "endpoint": {
                "path": "customers.json",
                "data_selector": "customers",
                "params": {"limit": 250}
            }
        },
        {
            "name": "inventory_items",
            "endpoint": {
                "path": "inventory_items.json",
                "data_selector": "inventory_items",
                "params": {"limit": 250}
            }
        },
    ]

    selected = [r for r in all_resources if r['name'] in resources]

    return {
        "client": {
            "base_url": f"{shop_url.rstrip('/')}/admin/api/2024-01/",
            "headers": {
                "X-Shopify-Access-Token": access_token,
                "Content-Type": "application/json",
            }
        },
        "resources": selected
    }


def get_shopify_source():
    secrets = _load_secrets()
    config = _load_config()

    shopify_secrets = secrets.get('sources', {}).get('shopify', {})
    shopify_config = config.get('sources', {}).get('shopify', {})
    selected_resources = [str(r) for r in shopify_config.get('resources', ['products', 'orders'])]

    # ── Multi-store detection ──────────────────────────────────────────────
    # If [sources.shopify.stores.*] sections exist, iterate over each store.
    # Otherwise fall back to the single-store root config.
    stores_cfg = shopify_secrets.get('stores', {})
    configured_store_keys = list(shopify_config.get('stores', ['all']))

    if stores_cfg:
        if configured_store_keys == ['all']:
            stores_to_run = list(stores_cfg.keys())
        else:
            stores_to_run = [k for k in configured_store_keys if k in stores_cfg]

        sources = []
        for store_key in stores_to_run:
            store = stores_cfg[store_key]
            access_token = store.get('access_token')
            shop_url = store.get('shop_url', '')

            if not access_token or access_token == '<configure_me>':
                print(f"[Shopify] ⚠️  Skipping '{store_key}' — no access_token. Run auth with --store {store_key}")
                continue

            print(f"[Shopify] Loading store: {store_key} ({shop_url})")
            rest_config = _build_rest_config(shop_url, access_token, selected_resources)
            src = rest_api_source(rest_config, name=f"shopify_{store_key}")
            sources.append(src)

        if not sources:
            raise ValueError("No Shopify stores have valid access tokens.")
        return sources[0] if len(sources) == 1 else sources

    # ── Single-store fallback ─────────────────────────────────────────────
    access_token = shopify_secrets.get('access_token')
    shop_url = shopify_secrets.get('shop_url', '')

    if not access_token or access_token == '<configure_me>':
        raise ValueError("Shopify access_token not set. Run: poetry run python sources/shopify/auth.py")
    if not shop_url or shop_url in ('<configure_me>', 'https://<your-shop-name>.myshopify.com'):
        raise ValueError("Shopify shop_url not set in .dlt/secrets.toml")

    print(f"[Shopify] Loading store: {shop_url}")
    rest_config = _build_rest_config(shop_url, access_token, selected_resources)
    return rest_api_source(rest_config, name="shopify")
