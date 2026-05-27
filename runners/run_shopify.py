import dlt
import tomlkit
from sources.shopify.source import get_shopify_source
from utils.logging import print_load_summary

from utils.preflight import run_preflight

if __name__ == "__main__":
    status = run_preflight(sources=['shopify'])
    if not status.get('shopify'):
        exit(1)


    with open('.dlt/config.toml', 'r') as f:
        config = tomlkit.load(f)
    
    destination = config['pipeline'].get('destination', 'postgres')
    full_refresh = config['pipeline'].get('full_refresh', False)
    
    pipeline = dlt.pipeline(
        pipeline_name="shopify_pipeline",
        destination=destination,
        dataset_name="shopify_raw" if destination == "bigquery" else "shopify_data"
    )
    
    print(f"Loading Shopify data... Destination: {destination}, Full Refresh: {full_refresh}")
    try:
        data = get_shopify_source()
        load_info = pipeline.run(data, refresh="drop_data" if full_refresh else None)
        print_load_summary("Shopify", pipeline, load_info)
    except Exception as e:
        print(f"Shopify execution failed: {e}")
        raise

