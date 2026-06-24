import os
import dlt
import tomlkit
import threading

from sources.hubspot import hubspot
from sources.xero.source import get_xero_source, XeroTokenManager
from sources.procore.source import get_procore_source
from sources.shopify.source import get_shopify_source
from utils.logging import print_load_summary
from utils.preflight import run_preflight
from utils.secret_manager import download_secrets, upload_secrets


def run_hubspot(full_refresh: bool, destination: str, results: dict):
    try:
        with open('.dlt/config.toml', 'r') as f:
            config = tomlkit.load(f)
        resources = config['sources']['hubspot']['resources']
        pipeline = dlt.pipeline(
            pipeline_name="hubspot_pipeline",
            destination=destination,
            dataset_name="hubspot_raw" if destination == "bigquery" else "hubspot_data"
        )
        data = hubspot().with_resources(*resources)
        info = pipeline.run(data, refresh="drop_data" if full_refresh else None)
        results['hubspot'] = ('success', pipeline, info)
    except Exception as e:
        results['hubspot'] = ('failed', str(e))


def run_xero(full_refresh: bool, destination: str, results: dict):
    try:
        with open('.dlt/config.toml', 'r') as f:
            config = tomlkit.load(f)
        config_tenant_ids = list(config['sources']['xero'].get('tenant_ids', []))

        token_mgr = XeroTokenManager()
        if config_tenant_ids == ["all"]:
            tenants = token_mgr.list_tenants()
            tenant_ids = [t['tenantId'] for t in tenants]
        elif config_tenant_ids:
            tenant_ids = config_tenant_ids
        else:
            raise ValueError("tenant_ids must be set in config.toml. Use [\"all\"] or specific IDs.")

        if not tenant_ids:
            raise ValueError("No active Xero tenant connections found.")

        pipeline = dlt.pipeline(
            pipeline_name="xero_pipeline",
            destination=destination,
            dataset_name="xero_raw" if destination == "bigquery" else "xero_data"
        )
        data = get_xero_source(tenant_ids=tenant_ids)
        info = pipeline.run(data, refresh="drop_data" if full_refresh else None)
        results['xero'] = ('success', pipeline, info)
    except Exception as e:
        results['xero'] = ('failed', str(e))


def run_procore(full_refresh: bool, destination: str, results: dict):
    try:
        pipeline = dlt.pipeline(
            pipeline_name="procore_pipeline",
            destination=destination,
            dataset_name="procore_raw" if destination == "bigquery" else "procore_data"
        )
        data = get_procore_source()
        info = pipeline.run(data, refresh="drop_data" if full_refresh else None)
        results['procore'] = ('success', pipeline, info)
    except Exception as e:
        results['procore'] = ('failed', str(e))


def run_shopify(full_refresh: bool, destination: str, results: dict):
    try:
        pipeline = dlt.pipeline(
            pipeline_name="shopify_pipeline",
            destination=destination,
            dataset_name="shopify_raw" if destination == "bigquery" else "shopify_data"
        )
        data = get_shopify_source()
        info = pipeline.run(data, refresh="drop_data" if full_refresh else None)
        results['shopify'] = ('success', pipeline, info)
    except Exception as e:
        results['shopify'] = ('failed', str(e))


RUNNERS = {
    'hubspot': run_hubspot,
    'xero':    run_xero,
    'procore': run_procore,
    'shopify': run_shopify,
}


if __name__ == "__main__":
    download_secrets()
    with open('.dlt/config.toml', 'r') as f:
        config = tomlkit.load(f)
    
    # Enable environment variables to override pipeline config
    full_refresh_env = os.environ.get('PIPELINE__FULL_REFRESH')
    if full_refresh_env is not None:
        full_refresh = full_refresh_env.lower() in ('true', '1', 'yes')
    else:
        full_refresh = config['pipeline'].get('full_refresh', False)

    # Read active pipelines from boolean dictionary [pipeline.active]
    active_dict = config.get('pipeline', {}).get('active', {})
    if not active_dict:
        # Fallback if config section missing
        active_pipelines = ['hubspot', 'xero', 'procore', 'shopify']
    else:
        active_pipelines = [k for k, v in active_dict.items() if v]
        disabled_pipelines = [k for k, v in active_dict.items() if not v]
        if disabled_pipelines:
            print(f"Disabled (in config): {', '.join(s.capitalize() for s in disabled_pipelines)}")

    # Pre-flight auth check
    # Checks all sources, prompts to authorize if in interactive mode,
    # skips unauthorized ones if in non-interactive/scheduled mode.
    auth_status = run_preflight(sources=active_pipelines)
    ready = [source for source, ok in auth_status.items() if ok]
    skipped = [source for source, ok in auth_status.items() if not ok]


    if not ready:
        print("No sources are authorized. Nothing to run.")
        exit(1)

    if skipped:
        print(f"Skipping (not authorized): {', '.join(s.capitalize() for s in skipped)}")

    destination = os.environ.get('PIPELINE__DESTINATION') or config['pipeline'].get('destination', 'postgres')
    print(f"\nStarting pipelines in parallel: {', '.join(s.capitalize() for s in ready)}")
    print(f"Destination: {destination}")
    print(f"Full Refresh: {full_refresh}")
    print("=" * 55)

    results = {}
    threads = [
        threading.Thread(target=RUNNERS[source], args=(full_refresh, destination, results), name=source)
        for source in ready
    ]

    for t in threads:
        t.start()
    for t in threads:
        t.join()

    # Upload rotated tokens back to GCS
    upload_secrets()

    # Summary
    print("\n" + "=" * 55)
    print("PIPELINE RUN SUMMARY")
    print("=" * 55)

    failed = []
    for source, result in results.items():
        if result[0] == 'success':
            _, pipeline, info = result
            print_load_summary(source.capitalize(), pipeline, info)
        else:
            _, error = result
            print(f"\n{source.upper()} FAILED: {error}")
            failed.append(source)

    print("=" * 55)

    if skipped:
        print(f"Skipped (no auth): {', '.join(s.capitalize() for s in skipped)}")
    if failed:
        print(f"{len(failed)} pipeline(s) failed: {', '.join(failed)}")
        exit(1)
    else:
        print(f"All authorized pipelines completed successfully.")
