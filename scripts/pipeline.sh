#!/usr/bin/env bash
set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
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
 🚀 Pipeline CLI — Multi-Environment Workflow Manager
======================================================================
Usage: bash scripts/pipeline.sh <command> [options]

Commands:
  dev                   Full local ETL (dlt + dbt -> Postgres)
  dbt <dev|prod> [args] Run dbt models against chosen target
  dashboard <dev|prod>  Launch Evidence dashboard (dev=Postgres, prod=BigQuery)
    --build             Build static site instead of launching dev server
  prod                  Trigger Cloud Run Job on GCP
  deploy                Build Docker image and update Cloud Run Job
  auth                  Re-authorize OAuth 2.0 tokens
  cloud                 Cloud Run entrypoint (used by Dockerfile CMD)
  help                  Show this help
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

COMMAND="${1:-help}"

case "$COMMAND" in
  auth)
    echo "======================================================================"
    echo " 🔑 RUNNING INTERACTIVE OAUTH 2.0 RE-AUTHORIZATION"
    echo "======================================================================"
    $PYTHON_CMD scripts/fix_auth.py
    ;;

  dev)
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
    echo " 📊 BUILDING & PREVIEWING EVIDENCE DASHBOARD (TARGET: $TARGET)"
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
    npm run sources
    npm run build
    npm run preview
    ;;

  cloud)
    # Docker/Cloud Run entrypoint — replaces run.sh
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

  prod)
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
    ;;

  deploy)
    if [ -z "$PROJECT" ] || [ -z "$BUCKET" ]; then
      echo "❌ Error: GCP configuration missing in .dlt/secrets.toml."
      exit 1
    fi

    IMAGE="${REGION}-docker.pkg.dev/${PROJECT}/dlt-pipeline/pipeline"

    echo "======================================================================"
    echo " 🚀 DEPLOYING PIPELINE TO GCP CLOUD RUN"
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
    echo " ✅ BUILD & DEPLOY DONE"
    echo "======================================================================"
    ;;

  help|--help|-h|*)
    show_help
    ;;
esac
