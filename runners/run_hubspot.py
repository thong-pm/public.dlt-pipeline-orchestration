import dlt
import tomlkit
from sources.hubspot import hubspot
from utils.logging import print_load_summary

from utils.preflight import run_preflight

if __name__ == "__main__":
    status = run_preflight(sources=['hubspot'])
    if not status.get('hubspot'):
        exit(1)


    with open('.dlt/config.toml', 'r') as f:
        config = tomlkit.load(f)

    full_refresh = config['pipeline'].get('full_refresh', False)
    resources = config['sources']['hubspot']['resources']

    print(f"Loading HubSpot data...")
    print(f"Resources: {resources}")
    print(f"Full Refresh: {full_refresh}\n")

    pipeline = dlt.pipeline(
        pipeline_name="hubspot_pipeline",
        destination="postgres",
        dataset_name="hubspot_data"
    )

    try:
        data = hubspot().with_resources(*resources)
        load_info = pipeline.run(data, refresh="drop_data" if full_refresh else None)
        print_load_summary("HubSpot", pipeline, load_info)
    except Exception as e:
        print(f"HubSpot execution failed: {e}")
        raise
