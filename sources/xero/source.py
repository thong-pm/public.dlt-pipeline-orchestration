import time
import requests
import dlt
import tomlkit
from utils.retry import retrying_get, retrying_post


# ── Configured resources ──────────────────────────────────────────────────────
XERO_RESOURCES = [
    ("invoices",     "Invoices",     "Invoices",     "InvoiceID",     True),
    ("contacts",     "Contacts",     "Contacts",     "ContactID",     True),
    ("accounts",     "Accounts",     "Accounts",     "AccountID",     False),
]

BASE_URL = "https://api.xero.com/api.xro/2.0"


class XeroTokenManager:
    """Manages Xero OAuth2 token lifecycle with automatic refresh."""

    def __init__(self):
        import threading
        # Read dynamic and static credentials from secrets.toml
        with open('.dlt/secrets.toml', 'r') as f:
            secrets = tomlkit.load(f)
        xero = secrets.get('sources', {}).get('xero', {})

        self.client_id = xero.get("client_id")
        self.client_secret = xero.get("client_secret")
        self.refresh_token = xero.get("refresh_token")
        self.access_token = xero.get("access_token")

        # Always force a token refresh on startup using the refresh_token.
        # Caching access_token with an assumed expiry caused stale-token 401s.
        self.token_expiry = 0
        self._lock = threading.Lock()

    def get_access_token(self) -> str:
        with self._lock:
            if time.time() >= self.token_expiry:
                self._refresh()
            return self.access_token

    def _refresh(self):
        response = retrying_post(
            "https://identity.xero.com/connect/token",
            auth=(self.client_id, self.client_secret),
            data={
                "grant_type": "refresh_token",
                "refresh_token": self.refresh_token,
            },
        )
        response.raise_for_status()
        data = response.json()
        self.access_token = data["access_token"]
        self.refresh_token = data["refresh_token"]
        self.token_expiry = time.time() + data["expires_in"] - 60

        # Persist the rotated tokens directly to secrets.toml
        with open('.dlt/secrets.toml', 'r') as f:
            secrets = tomlkit.load(f)
        secrets['sources']['xero']['access_token'] = self.access_token
        secrets['sources']['xero']['refresh_token'] = self.refresh_token
        with open('.dlt/secrets.toml', 'w') as f:
            tomlkit.dump(secrets, f)

        # Real-time sync: immediately push new refresh token to GCS Token Vault
        try:
            from utils.secret_manager import upload_secrets
            upload_secrets()
        except Exception as e:
            print(f"[Xero Token] Notice: Cloud Vault sync skipped ({e})")



    def list_tenants(self):
        headers = {
            'Authorization': f'Bearer {self.get_access_token()}',
            'Accept': 'application/json'
        }
        res = retrying_get('https://api.xero.com/connections', headers=headers)
        res.raise_for_status()
        return res.json()


def _create_multi_tenant_resource(token_mgr: XeroTokenManager, name: str, path: str,
                                 response_key: str, primary_key: str, paginated: bool, 
                                 tenant_ids: list):
    """
    Creates a single dlt resource that iterates over multiple tenants.
    """
    
    def _headers(tenant_id):
        return {
            "Authorization": f"Bearer {token_mgr.get_access_token()}",
            "Xero-Tenant-Id": tenant_id,
            "Accept": "application/json",
        }

    @dlt.resource(name=name, write_disposition="merge", primary_key=primary_key)
    def _resource():
        for tenant_id in tenant_ids:
            try:
                if paginated:
                    page = 1
                    while True:
                        response = retrying_get(f"{BASE_URL}/{path}", headers=_headers(tenant_id), params={"page": page})
                        response.raise_for_status()
                        records = response.json().get(response_key, [])
                        print(f"[Xero] {name} ({tenant_id[:8]}...) page {page}: {len(records)} records")
                        for r in records:
                            r["xero_tenant_id"] = tenant_id
                            yield r
                        if len(records) < 100: break
                        page += 1
                else:
                    response = retrying_get(f"{BASE_URL}/{path}", headers=_headers(tenant_id))
                    response.raise_for_status()
                    records = response.json().get(response_key, [])
                    print(f"[Xero] {name} ({tenant_id[:8]}...): {len(records)} records")
                    for r in records:
                        r["xero_tenant_id"] = tenant_id
                        yield r
            except requests.exceptions.HTTPError as e:
                if e.response is not None and e.response.status_code in (401, 403):
                    print(f"[Xero] WARNING: Tenant {tenant_id[:8]}... query failed with status {e.response.status_code} (Unauthorized/Forbidden) - skipping this tenant.")
                else:
                    raise

    return _resource


@dlt.source(name="xero")
def get_xero_source(tenant_ids=None):
    import tomlkit
    with open('.dlt/config.toml', 'r') as f:
        config = tomlkit.load(f)

    selected_resources = config['sources']['xero'].get('resources', [r[0] for r in XERO_RESOURCES])

    # Ensure tenant_ids is a list
    if isinstance(tenant_ids, str):
        tenant_ids = [tenant_ids]

    if tenant_ids is None:
        config_ids = config['sources']['xero'].get('tenant_ids', [])
        if config_ids:
            tenant_ids = list(config_ids)
        else:
            t_id = dlt.secrets.get("sources.xero.tenant_id")
            if t_id: tenant_ids = [t_id]
            else: raise ValueError("No Xero Tenant IDs provided.")

    if not tenant_ids or tenant_ids == ["all"]:
        raise ValueError("No active Xero tenant connections found. Please check Xero authorization or config.toml.")

    token_mgr = XeroTokenManager()

    # 1. Tenants metadata
    @dlt.resource(name="tenants", write_disposition="replace", primary_key="tenantId")
    def tenants_resource():
        all_tenants = token_mgr.list_tenants()
        yield [t for t in all_tenants if t['tenantId'] in tenant_ids]

    # 2. Data resources — only the ones listed in config.toml
    active_resources = [
        (name, path, key, pk, paginated)
        for name, path, key, pk, paginated in XERO_RESOURCES
        if name in selected_resources
    ]

    return [
        tenants_resource,
        *[_create_multi_tenant_resource(token_mgr, name, path, key, pk, paginated, tenant_ids)
          for name, path, key, pk, paginated in active_resources]
    ]
