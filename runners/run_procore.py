import dlt
import tomlkit
from sources.procore.source import get_procore_source
from utils.logging import print_load_summary

from utils.preflight import run_preflight

if __name__ == "__main__":
    status = run_preflight(sources=['procore'])
    if not status.get('procore'):
        exit(1)


    with open('.dlt/config.toml', 'r') as f:
        config = tomlkit.load(f)

    destination = config['pipeline'].get('destination', 'postgres')
    full_refresh = config['pipeline'].get('full_refresh', False)
    env = config['sources']['procore']['environment']

    pipeline = dlt.pipeline(
        pipeline_name="procore_pipeline",
        destination=destination,
        dataset_name="procore_raw" if destination == "bigquery" else "procore_data"
    )

    print(f"Loading Procore ({env})... Destination: {destination}, Full Refresh: {full_refresh}")

    try:
        data = get_procore_source()
        load_info = pipeline.run(data, refresh="drop_data" if full_refresh else None)
        print_load_summary(f"Procore ({env})", pipeline, load_info)
    except Exception as e:
        print(f"Procore execution failed: {e}")
        raise
