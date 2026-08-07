import time
import requests
import dlt
import tomlkit
from utils.retry import retrying_get, retrying_post
import sys
from typing import Iterator, List, Tuple


def _load_config():
    with open('.dlt/config.toml', 'r') as f:
        return tomlkit.load(f)


class ProcoreTokenManager:
    """Manages Procore OAuth2 token lifecycle."""

    def __init__(self):
        import threading
        config = _load_config()
        self.env = config['sources']['procore']['environment']

        # Read static and dynamic credentials from secrets.toml
        with open('.dlt/secrets.toml', 'r') as f:
            secrets = tomlkit.load(f)

        env_secrets = secrets.get('sources', {}).get('procore', {}).get(self.env, {})
        self.client_id = env_secrets.get("client_id")
        self.client_secret = env_secrets.get("client_secret")
        self.refresh_token = env_secrets.get("refresh_token")
        self.access_token = env_secrets.get("access_token")

        if not self.refresh_token or self.refresh_token == "<configure_me>":
            raise ValueError(
                f"Procore {self.env} credentials not set. Run: poetry run python sources/procore/auth.py"
            )

        if self.env == "sandbox":
            self.api_url = "https://sandbox.procore.com/rest/v1.0"
            self.oauth_url = "https://sandbox.procore.com/oauth/token"
        else:
            self.api_url = "https://api.procore.com/rest/v1.0"
            self.oauth_url = "https://login.procore.com/oauth/token"

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
            self.oauth_url,
            data={
                "grant_type": "refresh_token",
                "refresh_token": self.refresh_token,
                "client_id": self.client_id,
                "client_secret": self.client_secret,
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
        secrets['sources']['procore'][self.env]['access_token'] = self.access_token
        secrets['sources']['procore'][self.env]['refresh_token'] = self.refresh_token
        with open('.dlt/secrets.toml', 'w') as f:
            tomlkit.dump(secrets, f)

        # Real-time sync: immediately push new refresh token to GCS Token Vault
        try:
            from utils.secret_manager import upload_secrets
            upload_secrets()
        except Exception as e:
            print(f"[Procore Token] Notice: Cloud Vault sync skipped ({e})")


    def list_companies(self):
        headers = {"Authorization": f"Bearer {self.get_access_token()}"}
        res = retrying_get(f"{self.api_url}/companies", headers=headers)
        res.raise_for_status()
        return res.json()


def _paginate(url: str, headers: dict, params: dict = None, page_size: int = 100):
    """Generic paginator for Procore API endpoints."""
    params = dict(params or {})
    page = 1
    while True:
        response = retrying_get(url, headers=headers, params={**params, 'page': page, 'per_page': page_size})
        if response.status_code == 403:
            print(f"[Procore] WARNING: 403 Forbidden for {url} — skipping (check app permissions)")
            return
        if response.status_code == 404:
            print(f"[Procore] WARNING: 404 Not Found for {url} — skipping")
            return
        response.raise_for_status()
        data = response.json()
        if not data:
            break
        yield from data
        if len(data) < page_size:
            break
        page += 1


@dlt.source(name="procore")
def get_procore_source(company_ids=None):
    token_mgr = ProcoreTokenManager()
    config = _load_config()

    # Handle "all" magic value — works whether injected by dlt or set manually
    if list(str(c) for c in (company_ids or [])) == ["all"]:
        all_comps = token_mgr.list_companies()
        company_ids = [c['id'] for c in all_comps]
        print(f"[Procore] Auto-selected all {len(company_ids)} companies: {company_ids}")

    # Ensure company_ids is a plain Python list of ints
    company_ids = [int(c) for c in company_ids]
    print(f"[Procore] Running with company_ids: {company_ids}")

    selected = [str(r) for r in config['sources']['procore'].get('resources', ['companies', 'projects'])]

    def _h():
        return {"Authorization": f"Bearer {token_mgr.get_access_token()}"}

    # Cache of all projects across all companies — fetched once, used by all project-level resources
    _projects_cache: List[Tuple[int, int]] = []  # (company_id, project_id)
    _projects_fetched = [False]

    def _get_project_ids():
        if not _projects_fetched[0]:
            for c_id in company_ids:
                for proj in _paginate(f"{token_mgr.api_url}/projects", _h(), {'company_id': c_id}):
                    _projects_cache.append((c_id, proj['id']))
            _projects_fetched[0] = True
        return _projects_cache

    # ─────────────────────────────────────────────
    # COMPANY-LEVEL RESOURCES
    # ─────────────────────────────────────────────

    @dlt.resource(name="companies", write_disposition="replace", primary_key="id")
    def companies():
        all_comps = token_mgr.list_companies()
        yield [c for c in all_comps if c['id'] in company_ids]

    @dlt.resource(name="projects", write_disposition="merge", primary_key="id")
    def projects():
        for c_id in company_ids:
            for p in _paginate(f"{token_mgr.api_url}/projects", _h(), {'company_id': c_id}):
                p['procore_company_id'] = c_id
                yield p

    @dlt.resource(name="users", write_disposition="merge", primary_key="id")
    def users():
        for c_id in company_ids:
            for u in _paginate(f"{token_mgr.api_url}/companies/{c_id}/users", _h()):
                u['procore_company_id'] = c_id
                yield u

    @dlt.resource(name="vendors", write_disposition="merge", primary_key="id")
    def vendors():
        for c_id in company_ids:
            for v in _paginate(f"{token_mgr.api_url}/vendors", _h(), {'company_id': c_id}):
                v['procore_company_id'] = c_id
                yield v

    @dlt.resource(name="timesheets", write_disposition="merge", primary_key="id")
    def timesheets():
        for c_id in company_ids:
            for t in _paginate(f"{token_mgr.api_url}/timesheets", _h(), {'company_id': c_id}):
                t['procore_company_id'] = c_id
                yield t

    # ─────────────────────────────────────────────
    # PROJECT-LEVEL RESOURCES
    # ─────────────────────────────────────────────

    @dlt.resource(name="budget_line_items", write_disposition="merge", primary_key="id")
    def budget_line_items():
        for c_id, proj_id in _get_project_ids():
            for item in _paginate(f"{token_mgr.api_url}/budget_line_items", _h(),
                                  {'project_id': proj_id, 'view': 'flat'}):
                item['procore_company_id'] = c_id
                item['procore_project_id'] = proj_id
                yield item

    @dlt.resource(name="prime_contracts", write_disposition="merge", primary_key="id")
    def prime_contracts():
        for c_id, proj_id in _get_project_ids():
            for item in _paginate(f"{token_mgr.api_url}/projects/{proj_id}/prime_contracts", _h(),
                                  {'project_id': proj_id}):
                item['procore_company_id'] = c_id
                item['procore_project_id'] = proj_id
                yield item

    @dlt.resource(name="change_orders", write_disposition="merge", primary_key="id")
    def change_orders():
        for c_id, proj_id in _get_project_ids():
            for item in _paginate(f"{token_mgr.api_url}/projects/{proj_id}/prime_contract_change_orders",
                                  _h(), {'project_id': proj_id}):
                item['procore_company_id'] = c_id
                item['procore_project_id'] = proj_id
                yield item

    @dlt.resource(name="observations", write_disposition="merge", primary_key="id")
    def observations():
        for c_id, proj_id in _get_project_ids():
            for item in _paginate(f"{token_mgr.api_url}/projects/{proj_id}/observations/items",
                                  _h(), {'project_id': proj_id}):
                item['procore_company_id'] = c_id
                item['procore_project_id'] = proj_id
                yield item

    @dlt.resource(name="rfis", write_disposition="merge", primary_key="id")
    def rfis():
        for c_id, proj_id in _get_project_ids():
            for item in _paginate(f"{token_mgr.api_url}/projects/{proj_id}/rfis",
                                  _h(), {'project_id': proj_id}):
                item['procore_company_id'] = c_id
                item['procore_project_id'] = proj_id
                yield item

    @dlt.resource(name="submittals", write_disposition="merge", primary_key="id")
    def submittals():
        for c_id, proj_id in _get_project_ids():
            for item in _paginate(f"{token_mgr.api_url}/projects/{proj_id}/submittals",
                                  _h(), {'project_id': proj_id}):
                item['procore_company_id'] = c_id
                item['procore_project_id'] = proj_id
                yield item

    @dlt.resource(name="punch_items", write_disposition="merge", primary_key="id")
    def punch_items():
        for c_id, proj_id in _get_project_ids():
            for item in _paginate(f"{token_mgr.api_url}/projects/{proj_id}/punch_items",
                                  _h(), {'project_id': proj_id}):
                item['procore_company_id'] = c_id
                item['procore_project_id'] = proj_id
                yield item

    @dlt.resource(name="manpower_logs", write_disposition="merge", primary_key="id")
    def manpower_logs():
        for c_id, proj_id in _get_project_ids():
            for item in _paginate(f"{token_mgr.api_url}/projects/{proj_id}/manpower_logs",
                                  _h(), {'project_id': proj_id}):
                item['procore_company_id'] = c_id
                item['procore_project_id'] = proj_id
                yield item

    @dlt.resource(name="drawings", write_disposition="merge", primary_key="id")
    def drawings():
        for c_id, proj_id in _get_project_ids():
            for item in _paginate(f"{token_mgr.api_url}/projects/{proj_id}/drawings",
                                  _h(), {'project_id': proj_id}):
                item['procore_company_id'] = c_id
                item['procore_project_id'] = proj_id
                yield item

    @dlt.resource(name="schedule_tasks", write_disposition="merge", primary_key="id")
    def schedule_tasks():
        for c_id, proj_id in _get_project_ids():
            for item in _paginate(f"{token_mgr.api_url}/projects/{proj_id}/schedule/tasks",
                                  _h(), {'project_id': proj_id}):
                item['procore_company_id'] = c_id
                item['procore_project_id'] = proj_id
                yield item

    # ─────────────────────────────────────────────
    # Return only selected resources
    # ─────────────────────────────────────────────
    all_resources = {
        # Company-level
        "companies": companies,
        "projects": projects,
        "users": users,
        "vendors": vendors,
        "timesheets": timesheets,
        # Project-level
        "budget_line_items": budget_line_items,
        "prime_contracts": prime_contracts,
        "change_orders": change_orders,
        "observations": observations,
        "rfis": rfis,
        "submittals": submittals,
        "punch_items": punch_items,
        "manpower_logs": manpower_logs,
        "drawings": drawings,
        "schedule_tasks": schedule_tasks,
    }

    return [r for name, r in all_resources.items() if name in selected]
