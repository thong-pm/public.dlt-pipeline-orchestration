import os
import shutil
import subprocess
import sys
from pathlib import Path
from typing import Iterable, List

import tomlkit
from dagster import (
    AssetExecutionContext,
    AssetKey,
    AssetSelection,
    AssetSpec,
    Definitions,
    MaterializeResult,
    asset,
    define_asset_job,
    multi_asset,
)
from dagster_dbt import DbtCliResource, DbtProject, dbt_assets

from runners.run_all import RUNNERS
from scripts.export_copilot_duckdb import OUTPUT_PATH, export_to_duckdb
from scripts.warm_copilot_cache import warm_cache
from utils.preflight import run_preflight
from utils.secret_manager import download_secrets, upload_file_to_gcs, upload_secrets
from utils.slack_notifier import send_slack_message

PROJECT_ROOT = Path(__file__).resolve().parent.parent
DBT_PROJECT_DIR = PROJECT_ROOT / "dbt_transform"
EVIDENCE_DIR = PROJECT_ROOT / "evidence_dashboard"

DAGSTER_TARGET = os.environ.get("DAGSTER_TARGET", "local")
DESTINATION = "postgres" if DAGSTER_TARGET == "local" else "bigquery"
DATASET_ID = "dbt_dev" if DAGSTER_TARGET == "dev" else "dbt_prod"


def _resolve_gcp_project_id() -> str:
    env_proj = os.environ.get("GCP_PROJECT_ID", "").strip()
    if env_proj:
        return env_proj
    secrets_path = PROJECT_ROOT / ".dlt" / "secrets.toml"
    if secrets_path.exists():
        try:
            with open(secrets_path, "r", encoding="utf-8") as sf:
                data = tomlkit.load(sf)
            proj = data.get("gcp", {}).get("project_id", "")
            if proj and proj != "<configure_me>":
                return str(proj)
        except Exception:
            pass
    return "your-gcp-project-id"


os.environ.setdefault("GCP_PROJECT_ID", _resolve_gcp_project_id())
os.environ.setdefault("BIGQUERY_DATASET", DATASET_ID)


def _resolve_dbt_executable() -> str:
    candidate = Path(sys.executable).parent / "dbt"
    if candidate.exists():
        dbt_dir = os.fspath(candidate.parent)
        current_path = os.environ.get("PATH", "")
        if dbt_dir not in current_path.split(os.pathsep):
            os.environ["PATH"] = f"{dbt_dir}{os.pathsep}{current_path}"
        return os.fspath(candidate)
    return shutil.which("dbt") or "dbt"


DBT_EXECUTABLE = _resolve_dbt_executable()

dbt_project = DbtProject(
    project_dir=DBT_PROJECT_DIR,
    profiles_dir=DBT_PROJECT_DIR,
    target=DAGSTER_TARGET,
)
dbt_project.prepare_if_dev()

if not dbt_project.manifest_path.exists():
    subprocess.run(
        [DBT_EXECUTABLE, "parse", "--profiles-dir", ".", "--target", DAGSTER_TARGET],
        cwd=DBT_PROJECT_DIR,
        check=True,
    )

HUBSPOT_SPECS = [
    AssetSpec(key=AssetKey(["hubspot", table]), group_name="ingestion")
    for table in ["contacts", "companies", "deals", "owners", "contacts__deals"]
]
SHOPIFY_SPECS = [
    AssetSpec(key=AssetKey(["shopify", table]), group_name="ingestion")
    for table in ["products", "products__variants", "orders"]
]
XERO_SPECS = [
    AssetSpec(key=AssetKey(["xero", table]), group_name="ingestion")
    for table in ["invoices", "invoices__line_items", "contacts", "tenants"]
]
PROCORE_SPECS = [
    AssetSpec(key=AssetKey(["procore", table]), group_name="ingestion")
    for table in ["projects", "companies", "users", "vendors"]
]


def _execute_dlt_source(
    source_name: str,
    specs: List[AssetSpec],
    context: AssetExecutionContext,
) -> Iterable[MaterializeResult]:
    os.chdir(PROJECT_ROOT)
    download_secrets()

    with open(PROJECT_ROOT / ".dlt" / "config.toml", "r", encoding="utf-8") as f:
        config = tomlkit.load(f)

    full_refresh_env = os.environ.get("PIPELINE__FULL_REFRESH")
    if full_refresh_env is not None:
        full_refresh = full_refresh_env.lower() in ("true", "1", "yes")
    else:
        full_refresh = bool(config.get("pipeline", {}).get("full_refresh", False))

    auth_status = run_preflight(sources=[source_name])
    if not auth_status.get(source_name, False):
        context.log.warning(
            f"Preflight authentication check failed or expired for '{source_name}'. "
            f"Isolating failure gracefully: skipping live API ingestion and falling back to existing data/seeds."
        )

        # Notify team via Slack webhook if configured
        try:
            with open(PROJECT_ROOT / ".dlt" / "secrets.toml", "r", encoding="utf-8") as sf:
                secrets = tomlkit.load(sf)
            webhook_url = secrets.get("slack", {}).get("webhook_url")
            if webhook_url and "mock/webhook/url" not in webhook_url and "<configure_me>" not in webhook_url:
                payload = {
                    "attachments": [
                        {
                            "color": "#DAA038",
                            "blocks": [
                                {
                                    "type": "header",
                                    "text": {
                                        "type": "plain_text",
                                        "text": f"⚠️ Dagster Source Skipped: {source_name.capitalize()}",
                                        "emoji": True,
                                    },
                                },
                                {
                                    "type": "section",
                                    "text": {
                                        "type": "mrkdwn",
                                        "text": (
                                            f"Auth check failed or expired for *{source_name.capitalize()}*. "
                                            f"Pipeline isolated this source and continued with available data/seeds."
                                        ),
                                    },
                                },
                            ],
                        }
                    ]
                }
                send_slack_message(webhook_url, payload)
        except Exception as exc:
            context.log.warning(f"Could not dispatch Slack notification: {exc}")

        for spec in specs:
            yield MaterializeResult(
                asset_key=spec.key,
                metadata={
                    "source": source_name,
                    "status": "skipped_auth_expired",
                    "isolated": True,
                    "notice": "Ingestion skipped; downstream models use existing warehouse data or seed fallback.",
                },
            )
        return

    results = {}
    RUNNERS[source_name](full_refresh, DESTINATION, results)
    upload_secrets()

    outcome = results.get(source_name)
    if not outcome or outcome[0] != "success":
        error_detail = outcome[1] if outcome and len(outcome) > 1 else "Unknown error"
        context.log.warning(
            f"dlt pipeline '{source_name}' encountered an error: {error_detail}. "
            f"Isolating failure to preserve healthy pipeline runs."
        )
        for spec in specs:
            yield MaterializeResult(
                asset_key=spec.key,
                metadata={
                    "source": source_name,
                    "status": "failed_isolated",
                    "error": str(error_detail),
                    "isolated": True,
                },
            )
        return

    for spec in specs:
        yield MaterializeResult(
            asset_key=spec.key,
            metadata={
                "source": source_name,
                "destination": DESTINATION,
                "full_refresh": full_refresh,
            },
        )


@multi_asset(name="dlt_hubspot_assets", specs=HUBSPOT_SPECS)
def dlt_hubspot_assets(context: AssetExecutionContext) -> Iterable[MaterializeResult]:
    yield from _execute_dlt_source("hubspot", HUBSPOT_SPECS, context)


@multi_asset(name="dlt_shopify_assets", specs=SHOPIFY_SPECS)
def dlt_shopify_assets(context: AssetExecutionContext) -> Iterable[MaterializeResult]:
    yield from _execute_dlt_source("shopify", SHOPIFY_SPECS, context)


@multi_asset(name="dlt_xero_assets", specs=XERO_SPECS)
def dlt_xero_assets(context: AssetExecutionContext) -> Iterable[MaterializeResult]:
    yield from _execute_dlt_source("xero", XERO_SPECS, context)


@multi_asset(name="dlt_procore_assets", specs=PROCORE_SPECS)
def dlt_procore_assets(context: AssetExecutionContext) -> Iterable[MaterializeResult]:
    yield from _execute_dlt_source("procore", PROCORE_SPECS, context)


@dbt_assets(manifest=dbt_project.manifest_path)
def dbt_analytics_assets(
    context: AssetExecutionContext,
    dbt: DbtCliResource,
):
    yield from dbt.cli(["build", "--target", DAGSTER_TARGET], context=context).stream()
    if DAGSTER_TARGET == "prod" and dbt_project.manifest_path.exists():
        uploaded = upload_file_to_gcs(str(dbt_project.manifest_path), "dbt/prod/manifest.json")
        context.log.info(f"Published prod dbt manifest.json to GCS: {uploaded}")


@asset(
    key=AssetKey(["copilot_duckdb_replica"]),
    group_name="ai_copilot",
    deps=[
        AssetKey(["fct_executive_cockpit"]),
        AssetKey(["fct_pipeline"]),
        AssetKey(["fct_revenue"]),
        AssetKey(["dim_projects"]),
        AssetKey(["dim_products"]),
        AssetKey(["dim_customers"]),
        AssetKey(["stg_xero__invoices"]),
        AssetKey(["seed_dim_business_units"]),
        AssetKey(["seed_dim_regions"]),
    ],
)
def copilot_duckdb_replica() -> MaterializeResult:
    os.environ["BIGQUERY_DATASET"] = DATASET_ID
    export_to_duckdb(OUTPUT_PATH)
    size_kb = round(os.path.getsize(OUTPUT_PATH) / 1024, 2) if os.path.exists(OUTPUT_PATH) else 0.0
    gcs_uploaded = False
    if DAGSTER_TARGET == "prod" and os.path.exists(OUTPUT_PATH):
        gcs_uploaded = upload_file_to_gcs(str(OUTPUT_PATH), "copilot/copilot_warehouse.duckdb")
    return MaterializeResult(
        metadata={
            "duckdb_path": str(OUTPUT_PATH),
            "dataset": DATASET_ID,
            "size_kb": size_kb,
            "gcs_uploaded": gcs_uploaded,
        }
    )


@asset(
    key=AssetKey(["copilot_preset_cache"]),
    group_name="ai_copilot",
    deps=[
        AssetKey(["fct_executive_cockpit"]),
        AssetKey(["fct_pipeline"]),
        AssetKey(["dim_projects"]),
        AssetKey(["stg_xero__invoices"]),
    ],
)
def copilot_preset_cache() -> MaterializeResult:
    os.environ["BIGQUERY_DATASET"] = DATASET_ID
    warm_cache()
    cache_file = PROJECT_ROOT / "deploy" / "gcp" / "chat_proxy" / "copilot_preset_cache.json"
    gcs_uploaded = False
    if DAGSTER_TARGET == "prod" and cache_file.exists():
        gcs_uploaded = upload_file_to_gcs(str(cache_file), "copilot/copilot_preset_cache.json")
    return MaterializeResult(
        metadata={
            "cache_file": str(cache_file),
            "dataset": DATASET_ID,
            "gcs_uploaded": gcs_uploaded,
        }
    )


@asset(
    key=AssetKey(["evidence_static_site"]),
    group_name="bi_dashboard",
    deps=[
        AssetKey(["fct_executive_cockpit"]),
        AssetKey(["fct_revenue"]),
        AssetKey(["fct_pipeline"]),
        AssetKey(["dim_projects"]),
        AssetKey(["dim_customers"]),
        AssetKey(["dim_products"]),
        AssetKey(["copilot_preset_cache"]),
    ],
)
def evidence_static_site() -> MaterializeResult:
    evidence_env = {
        **os.environ,
        "EVIDENCE_SOURCE__analytics__dataset": DATASET_ID,
        "EVIDENCE_SOURCE__analytics__project_id": os.environ.get("GCP_PROJECT_ID", ""),
    }
    subprocess.run(["npm", "run", "sources"], cwd=EVIDENCE_DIR, env=evidence_env, check=True)
    subprocess.run(["npm", "run", "build"], cwd=EVIDENCE_DIR, env=evidence_env, check=True)
    return MaterializeResult(
        metadata={
            "build_dir": str(EVIDENCE_DIR / "build"),
            "target": DAGSTER_TARGET,
            "dataset": DATASET_ID,
        }
    )


full_elt_job = define_asset_job(
    name="full_elt_job",
    selection=AssetSelection.groups("ingestion") | AssetSelection.assets(dbt_analytics_assets),
)

dbt_transform_job = define_asset_job(
    name="dbt_transform_job",
    selection=AssetSelection.assets(dbt_analytics_assets),
)

copilot_sync_job = define_asset_job(
    name="copilot_sync_job",
    selection=AssetSelection.assets(copilot_duckdb_replica, copilot_preset_cache),
)

prod_pipeline_job = define_asset_job(
    name="prod_pipeline_job",
    selection=(
        AssetSelection.groups("ingestion")
        | AssetSelection.assets(dbt_analytics_assets, copilot_duckdb_replica, copilot_preset_cache)
    ),
)

defs = Definitions(
    assets=[
        dlt_hubspot_assets,
        dlt_shopify_assets,
        dlt_xero_assets,
        dlt_procore_assets,
        dbt_analytics_assets,
        copilot_duckdb_replica,
        copilot_preset_cache,
        evidence_static_site,
    ],
    jobs=[
        full_elt_job,
        dbt_transform_job,
        copilot_sync_job,
        prod_pipeline_job,
    ],
    resources={
        "dbt": DbtCliResource(
            project_dir=os.fspath(DBT_PROJECT_DIR),
            profiles_dir=os.fspath(DBT_PROJECT_DIR),
            dbt_executable=DBT_EXECUTABLE,
        ),
    },
)

