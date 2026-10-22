#!/usr/bin/env bash
set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$PROJECT_ROOT"

if [ -d "$PROJECT_ROOT/.venv" ]; then
    PYTHON_CMD="$PROJECT_ROOT/.venv/bin/python"
    DBT_CMD="$PROJECT_ROOT/.venv/bin/dbt"
else
    PYTHON_CMD="python"
    DBT_CMD="dbt"
fi

# Reads a value from .dlt/secrets.toml given a dotted key path
read_secret() {
  local path="$1"
  local default="${2:-}"
  local result
  result=$($PYTHON_CMD -c "
import tomlkit, functools
data = tomlkit.load(open('.dlt/secrets.toml'))
keys = '$path'.split('.')
val = functools.reduce(lambda d, k: d.get(k, {}), keys, data)
print(val if isinstance(val, (str, int, float)) else '')
" 2>/dev/null) || result=""
  echo "${result:-$default}"
}

PROJECT=$(read_secret "gcp.project_id")
REGION=$(read_secret "gcp.region" "us-central1")
BUCKET=$(read_secret "gcp.token_bucket")
JOB=$(read_secret "gcp.cloud_run_job" "dlt-pipeline-job")
GCLOUD=$(read_secret "gcp.gcloud_bin" "gcloud")

show_help() {
  cat << 'HELP'
======================================================================
  Pipeline CLI: Multi-Environment Workflow Manager
======================================================================
Usage: bash pipeline.sh <command> [target] [options]

Commands:
  run <dev|prod>        Execute pipeline
                        dev  : Full local ELT (APIs -> Postgres -> dbt)
                        prod : Trigger remote Cloud Run Job on GCP

  dbt <dev|prod> [args] Run dbt models against chosen target
                        Pass standard dbt flags (e.g. --select)

  dashboard <dev|prod>  Launch Evidence.dev BI dashboard
                        dev  : Connected to Local Postgres
                        prod : Connected to Google BigQuery
                        --build : Compile static production bundle

  deploy <target>       Deploy system components to GCP
                        job       : Build Docker image & update Cloud Run Job
                        dashboard : Deploy AI backend, sync BigQuery & verify
                        all       : Deploy both job and dashboard

  copilot               Synchronize BigQuery marts to in-memory DuckDB & warm cache
  auth                  Re-authorize SaaS OAuth tokens & sync to GCS
  help                  Show this help

Aliases:
  dev                   Alias for 'run dev'
  prod                  Alias for 'run prod'
  deploy-all            Alias for 'deploy dashboard'
======================================================================
HELP
}

export_pg_env() {
  export PGPASSWORD=$(read_secret "destination.postgres.credentials.password")
}

generate_evidence_connection() {
  local target="$1"
  local connection_dir="$PROJECT_ROOT/evidence_dashboard/sources/analytics"
  mkdir -p "$connection_dir"

  if [ "$target" = "dev" ]; then
    local pg_host=$(read_secret "destination.postgres.credentials.host" "localhost")
    local pg_port=$(read_secret "destination.postgres.credentials.port" "5432")
    local pg_db=$(read_secret "destination.postgres.credentials.database" "wsltest_db")
    local pg_user=$(read_secret "destination.postgres.credentials.username" "wsltest")

    cat << EOF > "$connection_dir/connection.yaml"
name: analytics
type: postgres
options:
  host: $pg_host
  port: $pg_port
  database: $pg_db
  user: $pg_user
  ssl: false
EOF
  else
    cat << EOF > "$connection_dir/connection.yaml"
name: analytics
type: bigquery
options:
  authenticator: gcloud-cli
  project_id: ${GCP_PROJECT_ID:-$PROJECT}
  dataset: dbt_prod
EOF
  fi
}

run_local_pipeline() {
  echo "======================================================================"
  echo " 🛠️  RUNNING LOCAL PIPELINE (DEV ENV -> POSTGRES)"
  echo "======================================================================"
  export PIPELINE__DESTINATION="postgres"
  export GCS_TOKEN_BUCKET="$BUCKET"
  export FORCE_DOWNLOAD_SECRETS="true"
  export_pg_env

  echo ""
  echo "=== Step 1: Running Extract & Load (dlt) ==="
  $PYTHON_CMD -m runners.run_all

  echo ""
  echo "=== Step 2: Running dbt Transform & Test (target: dev) ==="
  cd "$PROJECT_ROOT/dbt_transform"
  $DBT_CMD deps --profiles-dir .
  $DBT_CMD seed --profiles-dir . --target dev
  $DBT_CMD run --profiles-dir . --target dev
  $DBT_CMD test --profiles-dir . --target dev

  echo ""
  echo "======================================================================"
  echo " ✅ LOCAL DEV PIPELINE COMPLETED SUCCESSFULLY"
  echo "======================================================================"
}

run_remote_pipeline() {
  if [ -z "$PROJECT" ] || [ -z "$BUCKET" ]; then
    echo "❌ Error: GCP configuration missing in .dlt/secrets.toml."
    exit 1
  fi

  echo "======================================================================"
  echo " ☁️  TRIGGERING PRODUCTION PIPELINE (CLOUD RUN -> BIGQUERY)"
  echo "======================================================================"
  echo "Executing Cloud Run Job: $JOB (Project: $PROJECT, Region: $REGION)..."

  $GCLOUD run jobs execute "$JOB" \
    --region "$REGION" \
    --project "$PROJECT" \
    --async

  echo ""
  echo "======================================================================"
  echo " 🚀 CLOUD RUN JOB TRIGGERED SUCCESSFULLY"
  echo " You can view live progress in Cloud Console or run:"
  echo " gcloud logging read 'resource.type=\"cloud_run_job\" AND resource.labels.job_name=\"$JOB\"' --limit 30"
  echo "======================================================================"
}

deploy_job() {
  if [ -z "$PROJECT" ] || [ -z "$BUCKET" ]; then
    echo "❌ Error: GCP configuration missing in .dlt/secrets.toml."
    exit 1
  fi

  IMAGE="${REGION}-docker.pkg.dev/${PROJECT}/dlt-pipeline/pipeline"

  echo "======================================================================"
  echo " 🚀 DEPLOYING INGESTION PIPELINE TO GCP CLOUD RUN"
  echo "======================================================================"

  echo ""
  echo "=== Step 1: Merging and Deploying secrets.toml to GCS ==="
  $PYTHON_CMD scripts/deploy_secrets.py

  echo ""
  echo "=== Step 2: Build & Push image via Cloud Build ==="
  $GCLOUD builds submit \
    --tag "$IMAGE" \
    --project "$PROJECT" \
    --timeout=600

  echo ""
  echo "=== Step 3: Update Cloud Run Job to latest image ==="
  $GCLOUD run jobs update "$JOB" \
    --image "$IMAGE" \
    --region "$REGION" \
    --project "$PROJECT" \
    --update-env-vars "GCS_TOKEN_BUCKET=$BUCKET"

  echo ""
  echo "======================================================================"
  echo " ✅ INGESTION JOB DEPLOYED SUCCESSFULLY"
  echo "======================================================================"
}

deploy_dashboard() {
  bash "$PROJECT_ROOT/deploy/deploy_all.sh" "$@"
}

COMMAND="${1:-help}"

case "$COMMAND" in
  run)
    TARGET="${2:-dev}"
    case "$TARGET" in
      dev)
        run_local_pipeline
        ;;
      prod)
        run_remote_pipeline
        ;;
      *)
        echo "❌ Error: Invalid target '$TARGET'. Use 'bash pipeline.sh run <dev|prod>'."
        exit 1
        ;;
    esac
    ;;

  deploy)
    TARGET="${2:-}"
    shift || true
    if [ -n "${1:-}" ]; then shift; fi
    case "$TARGET" in
      job|ingestion)
        deploy_job
        ;;
      dashboard|cockpit)
        deploy_dashboard "$@"
        ;;
      all)
        echo "=== [1/2] Deploying Cloud Run Ingestion Job ==="
        deploy_job
        echo ""
        echo "=== [2/2] Deploying AI Copilot Backend & Verifying Dashboard ==="
        deploy_dashboard "$@"
        ;;
      *)
        echo "Select component to deploy:"
        echo "  bash pipeline.sh deploy job        # Ingestion Cloud Run Job"
        echo "  bash pipeline.sh deploy dashboard  # AI Backend + BigQuery Marts + Site"
        echo "  bash pipeline.sh deploy all        # Both components in sequence"
        exit 1
        ;;
    esac
    ;;

  dev)
    run_local_pipeline
    ;;

  prod)
    run_remote_pipeline
    ;;

  deploy-all)
    shift || true
    deploy_dashboard "$@"
    ;;

  dbt)
    TARGET="${2:-dev}"
    shift 2 || shift 1
    EXTRA_ARGS=("$@")

    if [ "$TARGET" != "dev" ] && [ "$TARGET" != "prod" ]; then
      echo "❌ Error: Invalid target '$TARGET'. Must be 'dev' or 'prod'."
      exit 1
    fi

    echo "======================================================================"
    echo " ⚡ RUNNING DBT MODELS DIRECTLY (TARGET: $TARGET)"
    echo "======================================================================"

    export GCP_PROJECT_ID="$PROJECT"
    if [ "$TARGET" = "dev" ]; then export_pg_env; fi

    cd "$PROJECT_ROOT/dbt_transform"
    $DBT_CMD deps --profiles-dir .
    $DBT_CMD run --profiles-dir . --target "$TARGET" "${EXTRA_ARGS[@]}"

    echo ""
    echo "======================================================================"
    echo " ✅ DBT RUN COMPLETED (TARGET: $TARGET)"
    echo "======================================================================"
    ;;

  dashboard)
    TARGET="${2:-prod}"

    if [ "$TARGET" != "dev" ] && [ "$TARGET" != "prod" ]; then
      echo "❌ Error: Invalid target '$TARGET'. Must be 'dev' or 'prod'."
      exit 1
    fi

    echo "======================================================================"
    echo " 📊 LAUNCHING EVIDENCE DASHBOARD (TARGET: $TARGET)"
    echo "======================================================================"

    if [ "$TARGET" = "dev" ]; then
      export_pg_env
    else
      if [ -f "$PROJECT_ROOT/gcp-credentials.json" ]; then
        export GOOGLE_APPLICATION_CREDENTIALS="$PROJECT_ROOT/gcp-credentials.json"
      fi
    fi
    generate_evidence_connection "$TARGET"

    cd "$PROJECT_ROOT/evidence_dashboard"

    if [ "${3:-}" = "--build" ]; then
      npm run sources
      npm run build
      npm run preview
    else
      npm run dev
    fi
    ;;

  copilot)
    echo "======================================================================"
    echo " 🦆 SYNCHRONIZING COPILOT DUCKDB REPLICA & PRESET CACHE"
    echo "======================================================================"
    $PYTHON_CMD scripts/export_copilot_duckdb.py
    $PYTHON_CMD scripts/warm_copilot_cache.py
    echo ""
    echo "======================================================================"
    echo " ✅ COPILOT DATA & CACHE SYNCHRONIZED"
    echo "======================================================================"
    ;;

  auth)
    echo "======================================================================"
    echo " 🔑 RUNNING INTERACTIVE OAUTH 2.0 RE-AUTHORIZATION"
    echo "======================================================================"
    $PYTHON_CMD scripts/fix_auth.py
    ;;

  cloud)
    # Docker/Cloud Run entrypoint (used by container CMD)
    DBT_TARGET="dev"
    if [ "${PIPELINE__DESTINATION:-postgres}" = "bigquery" ]; then
      DBT_TARGET="prod"
    fi

    LOG_FILE="/tmp/pipeline_run.log"
    echo "" > "$LOG_FILE"

    echo "=== [1/3] Running Extract & Load (dlt) ===" | tee -a "$LOG_FILE"
    $PYTHON_CMD -m runners.run_all 2>&1 | tee -a "$LOG_FILE"
    DLT_EXIT_CODE=${PIPESTATUS[0]}

    echo "=== [2/3] Installing dbt Packages ===" | tee -a "$LOG_FILE"
    cd "$PROJECT_ROOT/dbt_transform"
    $DBT_CMD deps --profiles-dir . 2>&1 | tee -a "$LOG_FILE"

    echo "=== [3/3] Running and Testing dbt Models (Target: $DBT_TARGET) ===" | tee -a "$LOG_FILE"
    $DBT_CMD seed --profiles-dir . --target "$DBT_TARGET" 2>&1 | tee -a "$LOG_FILE"
    $DBT_CMD run --profiles-dir . --target "$DBT_TARGET" 2>&1 | tee -a "$LOG_FILE"
    DBT_RUN_EXIT_CODE=${PIPESTATUS[0]}

    $DBT_CMD test --profiles-dir . --target "$DBT_TARGET" 2>&1 | tee -a "$LOG_FILE"
    DBT_TEST_EXIT_CODE=${PIPESTATUS[0]}

    if [ $DBT_TEST_EXIT_CODE -eq 0 ]; then
      echo "=== Pre-warming Diagnostic Copilot AI Cache ===" | tee -a "$LOG_FILE"
      $PYTHON_CMD scripts/warm_copilot_cache.py 2>&1 | tee -a "$LOG_FILE" || true
    fi

    cd "$PROJECT_ROOT"
    $PYTHON_CMD -m utils.slack_notifier \
      --dlt-code "$DLT_EXIT_CODE" \
      --dbt-code "$DBT_RUN_EXIT_CODE" \
      --test-code "$DBT_TEST_EXIT_CODE" \
      --log-file "$LOG_FILE"

    if [ $DLT_EXIT_CODE -ne 0 ] || [ $DBT_RUN_EXIT_CODE -ne 0 ] || [ $DBT_TEST_EXIT_CODE -ne 0 ]; then
      echo "=== Pipeline Execution Completed with Errors ==="
      exit 1
    else
      echo "=== Pipeline Execution Completed Successfully ==="
      exit 0
    fi
    ;;

  help|--help|-h|*)
    show_help
    ;;
esac
