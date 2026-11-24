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

# Reads a value from .dlt/config.toml given a dotted key path
read_config() {
  local path="$1"
  local default="${2:-}"
  local result
  result=$($PYTHON_CMD -c "
import tomlkit, functools
data = tomlkit.load(open('.dlt/config.toml'))
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
DASHBOARD_BASE_PATH=$(read_config "dashboard.base_path" "")
PREVIEW_PORT=$(read_config "dashboard.preview_port" "3000")

show_help() {
  cat << 'HELP'
======================================================================
  Pipeline CLI: Multi-Environment Workflow Manager
======================================================================
Usage: bash pipeline.sh <command> [target] [options]

Commands:
  run <local|dev|prod>  Execute pipeline
                        local/dev : Full local ELT (APIs -> Postgres -> dbt local)
                        prod      : Trigger remote Cloud Run Job on GCP

  dbt <local|dev|prod> [args]
                        Run dbt models against chosen target
                        local : Local PostgreSQL (schema: dbt_prod)
                        dev   : Google BigQuery Staging (dataset: dbt_dev)
                        prod  : Google BigQuery Production (dataset: dbt_prod)

  dbt-clone             Zero-copy clone BigQuery dbt_prod into dbt_dev (--full-refresh)
  verify                Run 6-gate pre-push full-stack verification against dbt_dev

  dashboard <local|dev|prod> [options]
                        Launch Evidence.dev BI dashboard
                        local : Connected to Local Postgres
                        dev   : Connected to Google BigQuery (dbt_dev)
                        prod  : Connected to Google BigQuery (dbt_prod)
                        --build        : Run URL routing tests, build static bundle & preview
                        --skip-sources : Skip re-querying warehouse when cached sources match target
                        --base-path    : Build & preview with GitHub Pages repo subpath (/repo/overview/)
                        --refresh      : Force re-pull of Evidence sources before dev/build

  deploy <target>       Deploy system components to GCP
                        job       : Build Docker image & update Cloud Run Job
                        dashboard : Deploy AI backend, sync BigQuery & verify
                        all       : Deploy both job and dashboard

  copilot               Synchronize BigQuery marts to in-memory DuckDB & warm cache
  dagster [local|dev|prod]
                        Launch Dagster Asset UI on http://127.0.0.1:3001
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

  if [ "$target" = "local" ]; then
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
  elif [ "$target" = "dev" ]; then
    cat << EOF > "$connection_dir/connection.yaml"
name: analytics
type: bigquery
options:
  authenticator: gcloud-cli
  project_id: ${GCP_PROJECT_ID:-$PROJECT}
  dataset: dbt_dev
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
  echo " 🛠️  RUNNING LOCAL PIPELINE (LOCAL ENV -> POSTGRES)"
  echo "======================================================================"
  export PIPELINE__DESTINATION="postgres"
  export GCS_TOKEN_BUCKET="$BUCKET"
  export FORCE_DOWNLOAD_SECRETS="true"
  export_pg_env

  echo ""
  echo "=== Step 1: Running Extract & Load (dlt) ==="
  $PYTHON_CMD -m runners.run_all

  echo ""
  echo "=== Step 2: Running dbt Transform & Test (target: local) ==="
  cd "$PROJECT_ROOT/dbt_transform"
  $DBT_CMD deps --profiles-dir .
  $DBT_CMD seed --profiles-dir . --target local
  $DBT_CMD run --profiles-dir . --target local
  $DBT_CMD test --profiles-dir . --target local

  echo ""
  echo "======================================================================"
  echo " ✅ LOCAL PIPELINE COMPLETED SUCCESSFULLY"
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
    TARGET="${2:-local}"
    case "$TARGET" in
      local|dev)
        run_local_pipeline
        ;;
      prod)
        run_remote_pipeline
        ;;
      *)
        echo "❌ Error: Invalid target '$TARGET'. Use 'bash pipeline.sh run <local|dev|prod>'."
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

  local|dev)
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
    TARGET="${2:-local}"
    shift 2 || shift 1
    EXTRA_ARGS=("$@")

    if [ "$TARGET" != "local" ] && [ "$TARGET" != "dev" ] && [ "$TARGET" != "prod" ]; then
      echo "❌ Error: Invalid target '$TARGET'. Must be 'local', 'dev', or 'prod'."
      exit 1
    fi

    echo "======================================================================"
    echo " ⚡ RUNNING DBT MODELS DIRECTLY (TARGET: $TARGET)"
    echo "======================================================================"

    export GCP_PROJECT_ID="$PROJECT"
    if [ "$TARGET" = "local" ]; then export_pg_env; fi

    cd "$PROJECT_ROOT/dbt_transform"
    $DBT_CMD deps --profiles-dir .
    $DBT_CMD run --profiles-dir . --target "$TARGET" "${EXTRA_ARGS[@]}"

    echo ""
    echo "======================================================================"
    echo " ✅ DBT RUN COMPLETED (TARGET: $TARGET)"
    echo "======================================================================"
    ;;

  dbt-clone)
    echo "======================================================================"
    echo " 🧬 ZERO-COPY CLONING BIGQUERY dbt_prod -> dbt_dev"
    echo "======================================================================"
    export GCP_PROJECT_ID="$PROJECT"
    export DBT_BIGQUERY_DATASET="dbt_dev"
    if [ -f "$PROJECT_ROOT/gcp-credentials.json" ]; then
      export GOOGLE_APPLICATION_CREDENTIALS="$PROJECT_ROOT/gcp-credentials.json"
    fi

    cd "$PROJECT_ROOT/dbt_transform"
    $DBT_CMD deps --profiles-dir .
    mkdir -p prod_state
    $PYTHON_CMD -c "
from google.cloud import storage
bucket = storage.Client().bucket('$BUCKET')
blob = bucket.blob('dbt/prod/manifest.json')
if not blob.exists():
    raise SystemExit('Prod manifest not found in gs://$BUCKET/dbt/prod/manifest.json. Run a prod dbt build first.')
blob.download_to_filename('prod_state/manifest.json')
print('Downloaded prod manifest.json from GCS.')
"
    $DBT_CMD clone --profiles-dir . --target dev --state prod_state --full-refresh
    echo "======================================================================"
    echo " ✅ ZERO-COPY CLONE COMPLETED (TARGET: dbt_dev)"
    echo "======================================================================"
    ;;

  verify)
    echo "======================================================================"
    echo " 🛡️  RUNNING 6-GATE FULL-STACK PRE-PUSH VERIFICATION (TARGET: dbt_dev)"
    echo "======================================================================"
    export GCP_PROJECT_ID="$PROJECT"
    export DBT_BIGQUERY_DATASET="dbt_dev"
    export BIGQUERY_DATASET="dbt_dev"
    if [ -f "$PROJECT_ROOT/gcp-credentials.json" ]; then
      export GOOGLE_APPLICATION_CREDENTIALS="$PROJECT_ROOT/gcp-credentials.json"
    fi

    echo ""
    echo "=== [Gate 1/6] Secret Hygiene & Network Binding Scan ==="
    $PYTHON_CMD "$PROJECT_ROOT/scripts/verify_security.py"

    echo ""
    echo "=== [Gate 2/6] Dagster Asset Graph & Job Resolution ==="
    $PYTHON_CMD -c "
from orchestration.definitions import defs
assets = list(defs.resolve_asset_graph().get_all_asset_keys())
job = defs.resolve_job_def('prod_pipeline_job')
print(f'✓ Gate 2 Passed: {len(assets)} Dagster assets and {job.name} resolved cleanly.')
"

    echo ""
    echo "=== [Gate 3/6] Sandbox Warehouse Build & Data Tests (BigQuery dbt_dev) ==="
    cd "$PROJECT_ROOT/dbt_transform"
    $DBT_CMD deps --profiles-dir .
    if [ -n "$BUCKET" ]; then
      mkdir -p prod_state
      if $PYTHON_CMD -c "
from google.cloud import storage
blob = storage.Client().bucket('$BUCKET').blob('dbt/prod/manifest.json')
assert blob.exists()
blob.download_to_filename('prod_state/manifest.json')
" 2>/dev/null; then
        echo "Zero-copy cloning dbt_prod -> dbt_dev (--full-refresh) & building modified models..."
        $DBT_CMD clone --profiles-dir . --target dev --state prod_state --full-refresh || true
        $DBT_CMD build --profiles-dir . --target dev --select state:modified+ --state prod_state
      else
        $DBT_CMD build --profiles-dir . --target dev
      fi
    else
      $DBT_CMD build --profiles-dir . --target dev
    fi
    echo "✓ Gate 3 Passed: BigQuery dbt_dev models and data tests succeeded."

    echo ""
    echo "=== [Gate 4/6] AI Copilot DuckDB Export (dbt_dev) & Live Proxy /health ==="
    cd "$PROJECT_ROOT"
    $PYTHON_CMD scripts/export_copilot_duckdb.py
    $PYTHON_CMD -c "
import sys
sys.path.insert(0, 'deploy/gcp/chat_proxy')
import duckdb_executor
res = duckdb_executor.run_analytical_query('SELECT count(*) as cnt FROM fct_executive_cockpit')
assert 'cnt' in res, f'Unexpected DuckDB result: {res}'
print('✓ Local DuckDB query against dbt_dev replica succeeded:', res)
"
    BACKEND_URL=$(grep -oE "https://[^']+" "$PROJECT_ROOT/evidence_dashboard/components/CockpitDiagnosticAiCard.svelte" | head -n 1 || echo "")
    if [ -n "$BACKEND_URL" ]; then
      HEALTH_URL="$(echo "$BACKEND_URL" | sed 's|/chat$||')/health"
      HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" --max-time 10 "$HEALTH_URL" || echo "000")
      if [ "$HTTP_CODE" != "200" ]; then
        echo "❌ Gate 4 Failed: Cloud Function health check at $HEALTH_URL returned HTTP $HTTP_CODE."
        exit 1
      fi
      echo "✓ Gate 4 Passed: AI Copilot DuckDB replica and live /health (HTTP 200) verified."
    fi

    echo ""
    echo "=== [Gate 5/6] Automated URL Routing & Slicer Query-String Test Suite ==="
    cd "$PROJECT_ROOT/evidence_dashboard"
    npm run test:url
    echo "✓ Gate 5 Passed: All URL routing and basePath combination tests succeeded."

    echo ""
    echo "=== [Gate 6/6] Evidence Static Prerender Build (against BigQuery dbt_dev) ==="
    export EVIDENCE_SOURCE__analytics__project_id="$PROJECT"
    export EVIDENCE_SOURCE__analytics__dataset="dbt_dev"
    generate_evidence_connection "dev"
    npm run sources
    echo "dev" > "$PROJECT_ROOT/evidence_dashboard/.evidence/.last_target"

    if [ -n "$DASHBOARD_BASE_PATH" ]; then
      cp evidence.config.yaml /tmp/evidence.config.yaml.bak
      trap 'cp -f /tmp/evidence.config.yaml.bak "$PROJECT_ROOT/evidence_dashboard/evidence.config.yaml" 2>/dev/null || true; rm -f /tmp/evidence.config.yaml.bak' EXIT INT TERM
      sed -i '/^deployment:/,$d' evidence.config.yaml
      printf "\ndeployment:\n  basePath: %s\n" "$DASHBOARD_BASE_PATH" >> evidence.config.yaml
    fi

    npm run build

    if [ -n "$DASHBOARD_BASE_PATH" ]; then
      cp -f /tmp/evidence.config.yaml.bak evidence.config.yaml
      rm -f /tmp/evidence.config.yaml.bak
      trap - EXIT INT TERM
    fi

    for page in "build/index.html" "build/overview/index.html" "build/sales/index.html" "build/operations/index.html"; do
      if [ ! -f "$page" ]; then
        echo "❌ Gate 6 Failed: $page was not generated."
        exit 1
      fi
    done
    echo "✓ Gate 6 Passed: All 4 dashboard pages prerendered cleanly against dbt_dev."
    echo ""
    echo "======================================================================"
    echo " ✅ ALL 6 PRE-PUSH VERIFICATION GATES PASSED (100% READY TO PUSH)"
    echo "======================================================================"

    if [ "${2:-}" != "--no-preview" ]; then
      if [ -n "$DASHBOARD_BASE_PATH" ]; then
        BASE_SLUG="${DASHBOARD_BASE_PATH#/}"
        mkdir -p "/tmp/evidence_preview/$(dirname "$BASE_SLUG")"
        ln -sfn "$PROJECT_ROOT/evidence_dashboard/build" "/tmp/evidence_preview/$BASE_SLUG"
        PREVIEW_URL="http://127.0.0.1:${PREVIEW_PORT}${DASHBOARD_BASE_PATH}/overview/"
        PREVIEW_DIR="/tmp/evidence_preview"
      else
        PREVIEW_URL="http://127.0.0.1:${PREVIEW_PORT}/overview/"
        PREVIEW_DIR="$PROJECT_ROOT/evidence_dashboard/build"
      fi
      echo ""
      echo " Preview URL: $PREVIEW_URL"
      echo " Press Ctrl+C to stop the preview server."
      echo "======================================================================"
      trap 'echo ""; echo "✓ Preview server stopped."; exit 0' INT TERM
      python3 -m http.server "$PREVIEW_PORT" --bind 127.0.0.1 --directory "$PREVIEW_DIR"
    fi
    ;;

  dashboard)
    TARGET="${2:-prod}"
    shift 2 || shift 1 || true

    BUILD_MODE=false
    SKIP_SOURCES=false
    FORCE_REFRESH=false
    USE_BASE_PATH=true
    for arg in "$@"; do
      case "$arg" in
        --build) BUILD_MODE=true ;;
        --skip-sources) SKIP_SOURCES=true ;;
        --refresh) FORCE_REFRESH=true ;;
        --base-path) USE_BASE_PATH=true ;;
        --no-base-path) USE_BASE_PATH=false ;;
      esac
    done

    if [ "$TARGET" != "local" ] && [ "$TARGET" != "dev" ] && [ "$TARGET" != "prod" ]; then
      echo "❌ Error: Invalid target '$TARGET'. Must be 'local', 'dev', or 'prod'."
      exit 1
    fi

    echo "======================================================================"
    echo " 📊 LAUNCHING EVIDENCE DASHBOARD (TARGET: $TARGET)"
    echo "======================================================================"

    if [ "$TARGET" = "local" ]; then
      export_pg_env
    else
      if [ -f "$PROJECT_ROOT/gcp-credentials.json" ]; then
        export GOOGLE_APPLICATION_CREDENTIALS="$PROJECT_ROOT/gcp-credentials.json"
      fi
      export EVIDENCE_SOURCE__analytics__project_id="$PROJECT"
      if [ "$TARGET" = "dev" ]; then
        export EVIDENCE_SOURCE__analytics__dataset="dbt_dev"
      else
        export EVIDENCE_SOURCE__analytics__dataset="dbt_prod"
      fi
    fi
    generate_evidence_connection "$TARGET"

    cd "$PROJECT_ROOT/evidence_dashboard"
    npm run test:url

    LAST_TARGET_FILE="$PROJECT_ROOT/evidence_dashboard/.evidence/.last_target"
    mkdir -p "$(dirname "$LAST_TARGET_FILE")"
    LAST_TARGET=$(cat "$LAST_TARGET_FILE" 2>/dev/null || echo "")

    NEED_SOURCES=false
    if [ "$FORCE_REFRESH" = true ] || [ "$LAST_TARGET" != "$TARGET" ]; then
      NEED_SOURCES=true
    elif [ "$BUILD_MODE" = true ] && [ "$SKIP_SOURCES" = false ]; then
      NEED_SOURCES=true
    fi

    if [ "$SKIP_SOURCES" = true ] && [ "$LAST_TARGET" = "$TARGET" ]; then
      NEED_SOURCES=false
    fi

    if [ "$NEED_SOURCES" = true ]; then
      echo "Refreshing Evidence sources for target '$TARGET'..."
      npm run sources
      echo "$TARGET" > "$LAST_TARGET_FILE"
    else
      echo "Reusing cached Evidence sources for target '$TARGET' (pass --refresh to re-query)."
    fi

    if [ "$BUILD_MODE" = true ]; then
      if [ "$USE_BASE_PATH" = true ] && [ -n "$DASHBOARD_BASE_PATH" ]; then
        cp evidence.config.yaml /tmp/evidence.config.yaml.bak
        trap 'cp -f /tmp/evidence.config.yaml.bak "$PROJECT_ROOT/evidence_dashboard/evidence.config.yaml" 2>/dev/null || true; rm -f /tmp/evidence.config.yaml.bak' EXIT INT TERM
        sed -i '/^deployment:/,$d' evidence.config.yaml
        printf "\ndeployment:\n  basePath: %s\n" "$DASHBOARD_BASE_PATH" >> evidence.config.yaml
      fi

      npm run build

      if [ "$USE_BASE_PATH" = true ] && [ -n "$DASHBOARD_BASE_PATH" ]; then
        cp -f /tmp/evidence.config.yaml.bak evidence.config.yaml
        rm -f /tmp/evidence.config.yaml.bak
        trap - EXIT INT TERM
        BASE_SLUG="${DASHBOARD_BASE_PATH#/}"
        mkdir -p "/tmp/evidence_preview/$(dirname "$BASE_SLUG")"
        ln -sfn "$PROJECT_ROOT/evidence_dashboard/build" "/tmp/evidence_preview/$BASE_SLUG"
        echo "Serving subpath preview at: http://127.0.0.1:${PREVIEW_PORT}${DASHBOARD_BASE_PATH}/overview/"
        python3 -m http.server "$PREVIEW_PORT" --bind 127.0.0.1 --directory /tmp/evidence_preview
      else
        echo "Serving preview at: http://127.0.0.1:${PREVIEW_PORT}/overview/"
        npm run preview
      fi
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

  dagster)
    TARGET="${2:-dev}"
    if [ "$TARGET" != "local" ] && [ "$TARGET" != "dev" ] && [ "$TARGET" != "prod" ]; then
      echo "❌ Error: Invalid target '$TARGET'. Must be 'local', 'dev', or 'prod'."
      exit 1
    fi

    export DAGSTER_TARGET="$TARGET"
    export GCP_PROJECT_ID="$PROJECT"
    export DAGSTER_HOME="$PROJECT_ROOT/.dagster_home"
    mkdir -p "$DAGSTER_HOME"

    if [ "$TARGET" = "local" ]; then
      export_pg_env
    elif [ -f "$PROJECT_ROOT/gcp-credentials.json" ]; then
      export GOOGLE_APPLICATION_CREDENTIALS="$PROJECT_ROOT/gcp-credentials.json"
    fi

    echo "======================================================================"
    echo " 🧭 LAUNCHING DAGSTER ASSET ORCHESTRATOR (TARGET: $TARGET)"
    echo " UI: http://127.0.0.1:3001"
    echo "======================================================================"
    PATH="$PROJECT_ROOT/.venv/bin:$PATH" "$PROJECT_ROOT/.venv/bin/dagster" dev -m orchestration.definitions -h 127.0.0.1 -p 3001
    ;;

  auth)
    echo "======================================================================"
    echo " 🔑 RUNNING INTERACTIVE OAUTH 2.0 RE-AUTHORIZATION"
    echo "======================================================================"
    $PYTHON_CMD scripts/fix_auth.py
    ;;

  cloud)
    # Docker/Cloud Run entrypoint: executes the Dagster asset job and sends Slack notification
    if [ "${PIPELINE__DESTINATION:-postgres}" = "bigquery" ]; then
      DBT_TARGET="${DBT_TARGET:-prod}"
      DAGSTER_JOB="prod_pipeline_job"
    else
      DBT_TARGET="${DBT_TARGET:-local}"
      DAGSTER_JOB="full_elt_job"
      export_pg_env
    fi

    export DAGSTER_TARGET="$DBT_TARGET"
    export GCP_PROJECT_ID="$PROJECT"
    export DAGSTER_HOME="/tmp/dagster_home"
    mkdir -p "$DAGSTER_HOME"

    LOG_FILE="/tmp/pipeline_run.log"
    echo "" > "$LOG_FILE"

    echo "=== [1/2] Installing dbt Packages ===" | tee -a "$LOG_FILE"
    (cd "$PROJECT_ROOT/dbt_transform" && $DBT_CMD deps --profiles-dir .) 2>&1 | tee -a "$LOG_FILE"

    echo "=== [2/2] Executing Dagster Pipeline Job ($DAGSTER_JOB, Target: $DAGSTER_TARGET) ===" | tee -a "$LOG_FILE"
    $PYTHON_CMD -c "
from orchestration.definitions import defs
job = defs.resolve_job_def('$DAGSTER_JOB')
result = job.execute_in_process()
raise SystemExit(0 if result.success else 1)
" 2>&1 | tee -a "$LOG_FILE"
    DAGSTER_EXIT_CODE=${PIPESTATUS[0]}

    cd "$PROJECT_ROOT"
    $PYTHON_CMD -m utils.slack_notifier \
      --dlt-code "$DAGSTER_EXIT_CODE" \
      --dbt-code "$DAGSTER_EXIT_CODE" \
      --test-code "$DAGSTER_EXIT_CODE" \
      --log-file "$LOG_FILE"

    if [ $DAGSTER_EXIT_CODE -ne 0 ]; then
      echo "=== Dagster Pipeline Execution Completed with Errors ==="
      exit 1
    else
      echo "=== Dagster Pipeline Execution Completed Successfully ==="
      exit 0
    fi
    ;;

  help|--help|-h|*)
    show_help
    ;;
esac
