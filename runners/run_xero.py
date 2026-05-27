import dlt
import tomlkit
import requests
from sources.xero.source import get_xero_source, XeroTokenManager
from utils.logging import print_load_summary


def select_tenants_interactive(token_mgr):
    """Prompt user to pick one or all tenants."""
    print("Fetching authorized organizations from Xero...")
    tenants = token_mgr.list_tenants()

    if not tenants:
        print("No authorized organizations found. Please run Xero auth first.")
        exit(1)

    print("\nAvailable Xero Organizations:")
    print("-" * 45)
    print("[A] ALL Organizations")
    for i, t in enumerate(tenants):
        print(f"[{i}] {t.get('tenantName')}")
    print("-" * 45)

    while True:
        choice = input(f"Select organization [0-{len(tenants)-1} or A]: ").strip().upper()
        if choice == 'A':
            return [t['tenantId'] for t in tenants], "All Organizations"
        try:
            idx = int(choice)
            if 0 <= idx < len(tenants):
                return [tenants[idx]['tenantId']], tenants[idx]['tenantName']
        except ValueError:
            pass
        print("Invalid selection. Enter a number or 'A'.")


from utils.preflight import run_preflight

if __name__ == "__main__":
    status = run_preflight(sources=['xero'])
    if not status.get('xero'):
        exit(1)

    with open('.dlt/config.toml', 'r') as f:
        config = tomlkit.load(f)

    full_refresh = config['pipeline'].get('full_refresh', False)
    config_tenant_ids = list(config['sources']['xero'].get('tenant_ids', []))

    token_mgr = XeroTokenManager()

    # Resolve tenant IDs
    if config_tenant_ids and config_tenant_ids != ["all"]:
        # Specific tenant IDs set in config — fully automatic
        tenant_ids = config_tenant_ids
        display_name = f"{len(tenant_ids)} tenant(s) from config.toml"
    elif config_tenant_ids == ["all"]:
        # "all" magic value — fetch all tenants automatically (no prompt)
        print("Fetching all authorized organizations from Xero...")
        tenants = token_mgr.list_tenants()
        tenant_ids = [t['tenantId'] for t in tenants]
        display_name = f"All Organizations ({len(tenant_ids)} tenants)"
    else:
        # Empty — fall back to interactive selection
        tenant_ids, display_name = select_tenants_interactive(token_mgr)

    destination = config['pipeline'].get('destination', 'postgres')
    pipeline = dlt.pipeline(
        pipeline_name="xero_pipeline",
        destination=destination,
        dataset_name="xero_raw" if destination == "bigquery" else "xero_data"
    )

    print(f"\nLoading Xero data for: {display_name}")
    print(f"Destination: {destination}")
    print(f"Full Refresh: {full_refresh}\n")

    try:
        data = get_xero_source(tenant_ids=tenant_ids)
        load_info = pipeline.run(data, refresh="drop_data" if full_refresh else None)
        print_load_summary(f"Xero ({display_name})", pipeline, load_info)
    except Exception as e:
        print(f"Xero execution failed: {e}")
        raise
