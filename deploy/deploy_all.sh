#!/usr/bin/env bash
# ==============================================================================
# Unified Master Deployment Orchestrator: Warehouse, AI Backend & Frontend Build
# ==============================================================================
# Enforces strict 100% cloud readiness & parity flow:
# 1. Pre-flight authentication & GCP API check
# 2. Cloud Warehouse Sync (dbt run + dbt test against BigQuery prod)
# 3. Deploy AI Copilot Cloud Function (Gen 2)
# 4. Backend Health Verification (/health check)
# 5. Live URI Injection & Cache Pre-warming (warm_copilot_cache.py)
# 6. Local Production Build Validation (Evidence vs. Live BigQuery prod with BasePath)
# 7. Interactive Git Deployment Gate (Amend, New Commit, or Exit without pushing)
# ==============================================================================
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"

CURRENT_STEP="Initialization"
AMEND_MODE=false
NEW_COMMIT_MODE=false
SKIP_GIT_MODE=false
COMMIT_MESSAGE=""
ENV_TARGET=""

while [[ $# -gt 0 ]]; do
    case "$1" in
        --env)
            ENV_TARGET="${2:-}"
            shift 2
            ;;
        --dev)
            ENV_TARGET="dev"
            shift
            ;;
        --prod)
            ENV_TARGET="prod"
            shift
            ;;
        --amend)
            AMEND_MODE=true
            shift
            ;;
        --commit|--new-commit)
            NEW_COMMIT_MODE=true
            COMMIT_MESSAGE="${2:-}"
            shift 2
            ;;
        --skip-git|--dry-run|--no-push)
            SKIP_GIT_MODE=true
            shift
            ;;
        *)
            shift
            ;;
    esac
done

# ------------------------------------------------------------------------------
# Robust Error Trap: "Talks to you" on any failure and guarantees zero broken deploys
# ------------------------------------------------------------------------------
restore_local_evidence_config() {
    if [ -f "/tmp/evidence.config.yaml.bak" ]; then
        cp -f "/tmp/evidence.config.yaml.bak" "${ROOT_DIR}/evidence_dashboard/evidence.config.yaml" 2>/dev/null || true
        rm -f "/tmp/evidence.config.yaml.bak" 2>/dev/null || true
    fi
    if [ -f "${ROOT_DIR}/evidence_dashboard/evidence.config.yaml" ]; then
        sed -i '/^deployment:/,$d' "${ROOT_DIR}/evidence_dashboard/evidence.config.yaml" 2>/dev/null || true
    fi

    if [ -d "${ROOT_DIR}/evidence_dashboard/sources/analytics" ]; then
        cat << 'PGEOF' > "${ROOT_DIR}/evidence_dashboard/sources/analytics/connection.yaml"
name: analytics
type: postgres
options:
  host: localhost
  port: 5432
  database: wsltest_db
  user: wsltest
  ssl: false
PGEOF
    fi
}

cleanup_on_interrupt() {
    restore_local_evidence_config
    echo ""
    echo "🛑 Deployment interrupted by user. Local Evidence configuration restored."
    exit 130
}

cleanup_and_report_failure() {
    local exit_code=$?
    local line_no=$1
    local command="$2"

    restore_local_evidence_config

    echo ""
    echo "======================================================================"
    echo " ❌ DEPLOYMENT HALTED: FAILED AT STEP [${CURRENT_STEP}]"
    echo "======================================================================"
    echo " Failed Command: ${command}"
    echo " Script Line:    ${line_no}"
    echo " Exit Code:      ${exit_code}"
    echo ""
    echo " 🛡️ SAFETY GUARANTEE: Zero broken changes were pushed to GitHub."
    echo " Remediation Advice:"
    case "${CURRENT_STEP}" in
        *"Pre-flight"*)
            echo "   -> Check gcloud authentication ('gcloud auth login') and GEMINI_API_KEY in .env"
            ;;
        *"Warehouse"*)
            echo "   -> BigQuery schema sync failed. Check dbt SQL syntax and BigQuery permissions."
            ;;
        *"Cloud Function"*)
            echo "   -> Cloud Function deployment failed. Check GCP Cloud Build logs or IAM permissions."
            ;;
        *"Health"*)
            echo "   -> Backend deployed but failed /health check. Check Cloud Function runtime logs."
            ;;
        *"Evidence Build"*)
            echo "   -> Evidence failed to build against live BigQuery."
            echo "   -> SvelteKit detected a missing column, SQL error, or invalid crawler route."
            echo "   -> Inspect the error log above. Notice how GitHub was protected from this failure!"
            ;;
        *)
            echo "   -> Inspect terminal output above for specific error traces."
            ;;
    esac
    echo "======================================================================"
    exit ${exit_code}
}
trap 'cleanup_and_report_failure $LINENO "$BASH_COMMAND"' ERR
trap 'cleanup_on_interrupt' INT TERM

# Load local environment variables
if [ -f "${ROOT_DIR}/.env" ]; then
    set -a
    source "${ROOT_DIR}/.env"
    set +a
fi

PROJECT_ID="${GCP_PROJECT_ID:?GCP_PROJECT_ID environment variable is required}"
REGION="${GCP_REGION:-us-central1}"

CURRENT_GIT_BRANCH=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "main")
if [ -z "$ENV_TARGET" ]; then
    if [ "$CURRENT_GIT_BRANCH" = "main" ]; then
        ENV_TARGET="prod"
    else
        ENV_TARGET="dev"
    fi
fi

if [ "$ENV_TARGET" = "prod" ]; then
    DATASET_ID="${BIGQUERY_DATASET:-dbt_prod}"
    TARGET_BRANCH="main"
elif [ "$ENV_TARGET" = "dev" ]; then
    DATASET_ID="${BIGQUERY_DATASET:-dbt_dev}"
    TARGET_BRANCH="dev"
else
    echo "❌ ERROR: Invalid environment '${ENV_TARGET}'. Use --env dev or --env prod."
    exit 1
fi

FUNCTION_NAME="cockpit-ai-chat"
SERVICE_ACCOUNT="dlt-pipeline-sa@${PROJECT_ID}.iam.gserviceaccount.com"
GITHUB_REPO_NAME="public.dlt-pipeline-orchestration"

# Select Python / DBT binaries
PYTHON_BIN="${ROOT_DIR}/.venv/bin/python"
if [ ! -f "$PYTHON_BIN" ]; then PYTHON_BIN="python3"; fi

DBT_BIN="${ROOT_DIR}/.venv/bin/dbt"
if [ ! -f "$DBT_BIN" ]; then DBT_BIN="dbt"; fi

echo "======================================================================"
echo " 🚀 UNIFIED CLOUD DEPLOYMENT ORCHESTRATOR (TARGET: ${ENV_TARGET^^} -> ${DATASET_ID})"
echo " Project: ${PROJECT_ID} | Region: ${REGION} | Dataset: ${DATASET_ID} | Branch: ${TARGET_BRANCH}"
if [ "$AMEND_MODE" = true ]; then
    echo " Git Commit Mode: Amend previous commit (--amend)"
elif [ "$NEW_COMMIT_MODE" = true ]; then
    echo " Git Commit Mode: New commit (--commit)"
elif [ "$SKIP_GIT_MODE" = true ]; then
    echo " Git Commit Mode: Dry-run / Skip git (--skip-git)"
else
    echo " Git Commit Mode: Interactive verification first (Prompt upon success)"
fi
echo "======================================================================"

# ------------------------------------------------------------------------------
# STEP 1: Pre-flight Verification
# ------------------------------------------------------------------------------
CURRENT_STEP="[1/6] Pre-flight Verification"
echo ""
echo "=== ${CURRENT_STEP} ==="
echo "Verifying local credentials, gcloud CLI status, and enabled GCP APIs..."

if [ -z "${GEMINI_API_KEY:-}" ]; then
    echo "❌ ERROR: GEMINI_API_KEY is not configured in environment or .env file."
    exit 1
fi
echo "✓ GEMINI_API_KEY verified present."

if ! command -v gcloud &> /dev/null; then
    echo "❌ ERROR: 'gcloud' CLI is not found in PATH."
    exit 1
fi

ACTIVE_ACCOUNT=$(gcloud auth list --filter=status:ACTIVE --format="value(account)" 2>/dev/null || echo "")
if [ -z "$ACTIVE_ACCOUNT" ]; then
    echo "❌ ERROR: No active gcloud account. Run 'gcloud auth login' first."
    exit 1
fi
echo "✓ gcloud authenticated as: ${ACTIVE_ACCOUNT}"

# Verify APIs in a single batch
REQUIRED_APIS=("cloudfunctions.googleapis.com" "run.googleapis.com" "bigquery.googleapis.com" "artifactregistry.googleapis.com" "cloudbuild.googleapis.com")
ENABLED_APIS=$(gcloud services list --enabled --project="${PROJECT_ID}" --format="value(NAME)" 2>/dev/null || echo "")
for api in "${REQUIRED_APIS[@]}"; do
    if ! echo "${ENABLED_APIS}" | grep -q "${api}"; then
        echo "⚠️ Enabling missing GCP API: ${api}..."
        gcloud services enable "${api}" --project="${PROJECT_ID}"
    fi
done
echo "✓ All required GCP services verified enabled."

# ------------------------------------------------------------------------------
# STEP 2: Cloud Warehouse Model Sync (dbt -> BigQuery)
# ------------------------------------------------------------------------------
CURRENT_STEP="[2/6] Cloud Warehouse Sync (dbt ${ENV_TARGET} -> BigQuery ${DATASET_ID})"
echo ""
echo "=== ${CURRENT_STEP} ==="
echo "Synchronizing dbt models into BigQuery (${PROJECT_ID}.${DATASET_ID})..."
echo "This ensures warehouse tables have 100% column parity with code."

export GCP_PROJECT_ID="${PROJECT_ID}"
export BIGQUERY_DATASET="${DATASET_ID}"
cd "${ROOT_DIR}/dbt_transform"

echo "Running: dbt seed --profiles-dir . --target ${ENV_TARGET}..."
"$DBT_BIN" seed --profiles-dir . --target "${ENV_TARGET}"

echo "Running: dbt run --profiles-dir . --target ${ENV_TARGET}..."
"$DBT_BIN" run --profiles-dir . --target "${ENV_TARGET}"

echo "Running: dbt test --profiles-dir . --target ${ENV_TARGET}..."
"$DBT_BIN" test --profiles-dir . --target "${ENV_TARGET}"
echo "✓ BigQuery dataset (${DATASET_ID}) updated and verified against dbt test suite."

# ------------------------------------------------------------------------------
# STEP 3: AI Copilot Sync & Cloud Function Deploy (PROD ONLY)
# ------------------------------------------------------------------------------
CURRENT_STEP="[3/6] AI Copilot Sync & Backend Deployment"
echo ""
echo "=== ${CURRENT_STEP} ==="

if [ "$ENV_TARGET" = "prod" ]; then
    echo "Synchronizing verified BigQuery prod marts into in-memory DuckDB replica..."
    "$PYTHON_BIN" "${ROOT_DIR}/scripts/export_copilot_duckdb.py"
    echo "✓ DuckDB in-memory replica synchronized."

    echo ""
    echo "Pre-warming copilot response cache from updated prod warehouse..."
    "$PYTHON_BIN" "${ROOT_DIR}/scripts/warm_copilot_cache.py"
    echo "✓ Copilot preset cache synchronized."

    echo ""
    echo "Deploying Cloud Function '${FUNCTION_NAME}' to ${REGION} (BIGQUERY_DATASET=${DATASET_ID})..."
    CHAT_PROXY_DIR="${ROOT_DIR}/deploy/gcp/chat_proxy"

    gcloud functions deploy "${FUNCTION_NAME}" \
        --gen2 \
        --project="${PROJECT_ID}" \
        --region="${REGION}" \
        --runtime=python311 \
        --source="${CHAT_PROXY_DIR}" \
        --entry-point=chat_handler \
        --trigger-http \
        --allow-unauthenticated \
        --service-account="${SERVICE_ACCOUNT}" \
        --set-env-vars="GEMINI_API_KEY=${GEMINI_API_KEY},GCP_PROJECT_ID=${PROJECT_ID},BIGQUERY_DATASET=${DATASET_ID}" \
        --memory=512Mi \
        --timeout=60s \
        --max-instances=5

    echo "✓ Cloud Function deployed successfully."
else
    echo "⏭️  Target is '${ENV_TARGET}' (${DATASET_ID}): Skipping AI DuckDB/Cache export and Cloud Function deploy."
    echo "✓ Live production Cloud Function ('${FUNCTION_NAME}') remains untouched on 'dbt_prod'."
fi

# Retrieve direct Cloud Run URI (bypasses 302 CORS preflight redirect)
BACKEND_URI=$(gcloud functions describe "${FUNCTION_NAME}" --gen2 --region="${REGION}" --project="${PROJECT_ID}" --format="value(serviceConfig.uri)" 2>/dev/null || echo "")

if [ -z "${BACKEND_URI}" ]; then
    echo "❌ ERROR: Failed to retrieve deployed Cloud Function URI."
    exit 1
fi
CLEAN_URI="${BACKEND_URI%/}"
echo "✓ Direct Cloud Run URI: ${CLEAN_URI}"

# ------------------------------------------------------------------------------
# STEP 4: Service Health Verification
# ------------------------------------------------------------------------------
CURRENT_STEP="[4/6] Backend Health Verification"
echo ""
echo "=== ${CURRENT_STEP} ==="
echo "Pinging health endpoint: ${CLEAN_URI}/health..."
sleep 2

HEALTH_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "${CLEAN_URI}/health" || echo "000")
if [ "$HEALTH_STATUS" != "200" ]; then
    echo "❌ HEALTH CHECK FAILED: Received HTTP ${HEALTH_STATUS} from ${CLEAN_URI}/health."
    exit 1
fi
echo "✓ Backend health check passed (HTTP 200 OK)."

# ------------------------------------------------------------------------------
# STEP 5: Live URI Injection & Memory Cache Hot-Reload (PROD ONLY)
# ------------------------------------------------------------------------------
CURRENT_STEP="[5/6] URL Injection & Memory Cache Hot-Reload"
echo ""
echo "=== ${CURRENT_STEP} ==="

if [ "$ENV_TARGET" = "prod" ]; then
    CARD_COMPONENT="${ROOT_DIR}/evidence_dashboard/components/CockpitDiagnosticAiCard.svelte"
    if [ -f "$CARD_COMPONENT" ]; then
        sed -i -E "s|const CLOUD_FUNCTION_DEFAULT = '[^']*';|const CLOUD_FUNCTION_DEFAULT = '${CLEAN_URI}/chat';|g" "$CARD_COMPONENT"
        echo "✓ Injected endpoint: ${CLEAN_URI}/chat"
    fi

    echo "Hot-reloading newly deployed Cloud Function in-memory cache..."
    curl -s -X POST "${CLEAN_URI}/cache/warm" -H "Content-Type: application/json" -d '{}' > /dev/null || true
    echo "✓ Cloud Function memory cache hot-reloaded."
else
    echo "⏭️  Target is '${ENV_TARGET}': Skipping production URI mutation and remote cache reload."
fi

# ------------------------------------------------------------------------------
# STEP 6: Mandatory Local Production Build Verification (Evidence vs. BigQuery)
# ------------------------------------------------------------------------------
CURRENT_STEP="[6/6] Local Production Build Verification (Evidence vs. BigQuery)"
echo ""
echo "=== ${CURRENT_STEP} ==="
echo "Testing Evidence build locally against live BigQuery (${DATASET_ID})..."
echo "Replicating GitHub Actions base path (/${GITHUB_REPO_NAME}) to prevent link 404s..."

cd "${ROOT_DIR}/evidence_dashboard"

# Strip any leftover deployment block before backing up to prevent duplicate keys
sed -i '/^deployment:/,$d' "${ROOT_DIR}/evidence_dashboard/evidence.config.yaml"
cp "${ROOT_DIR}/evidence_dashboard/evidence.config.yaml" "/tmp/evidence.config.yaml.bak"

# Inject production basePath to replicate GitHub Pages crawler behavior
printf "\ndeployment:\n  basePath: /%s\n" "${GITHUB_REPO_NAME}" >> evidence.config.yaml

# Configure connection to BigQuery
mkdir -p sources/analytics
cat << EOF > sources/analytics/connection.yaml
name: analytics
type: bigquery
options:
  authenticator: gcloud-cli
  project_id: ${PROJECT_ID}
  dataset: ${DATASET_ID}
EOF
echo "✓ Connected Evidence sources to BigQuery (${PROJECT_ID}.${DATASET_ID})"

echo "Pulling live BigQuery tables to local parquet cache (npm run sources)..."
npm run sources

echo "Compiling static dashboard with strict prerender check (npm run build)..."
BUILD_LOG="/tmp/evidence_build.log"
npm run build 2>&1 | tee "$BUILD_LOG"

# Immediately restore configuration
restore_local_evidence_config
echo "✓ Restored local Evidence sandbox to Postgres (dev) for interactive development."

# Verify build output
if grep -q "status: 500" "$BUILD_LOG" || grep -q "PRERENDER FATAL ERROR" "$BUILD_LOG"; then
    echo "❌ BUILD VERIFICATION FAILED: SvelteKit reported fatal prerender errors."
    exit 1
fi

REQUIRED_PAGES=("build/index.html" "build/overview/index.html" "build/sales/index.html" "build/operations/index.html")
for page in "${REQUIRED_PAGES[@]}"; do
    if [ ! -f "$page" ]; then
        echo "❌ BUILD VERIFICATION FAILED: $page was not generated."
        exit 1
    fi
done
echo "✓ Local production build verified: All pages compiled cleanly against live BigQuery."

# ------------------------------------------------------------------------------
# STEP 7: Visual Preview & State-Aware Git Deployment Gate
# ------------------------------------------------------------------------------
cd "${ROOT_DIR}"
echo ""
echo "======================================================================"
echo " ✅ CLOUD DEPLOYMENT & PARITY VERIFICATION 100% COMPLETE"
echo "======================================================================"
echo " Cloud Function: ${CLEAN_URI}"
echo " Health Status:  HTTP 200 OK"
echo " Warehouse:      BigQuery ${PROJECT_ID}.${DATASET_ID} (Synced & Tested)"
echo " Dashboard:      Prerendered with production basePath (0 errors, 4/4 pages verified)"
echo "======================================================================"

start_preview_server() {
    echo ""
    echo "Starting local static preview server with exact GitHub Pages basePath..."
    echo "----------------------------------------------------------------------"
    echo " Preview URL: http://localhost:4173/${GITHUB_REPO_NAME}/overview/"
    echo "----------------------------------------------------------------------"
    mkdir -p /tmp/evidence_preview
    ln -sfn "${ROOT_DIR}/evidence_dashboard/build" "/tmp/evidence_preview/${GITHUB_REPO_NAME}"

    # Clear port 4173 if an earlier preview instance was left running
    fuser -k 4173/tcp 2>/dev/null || true

    # Run Python HTTP server in background (handles directory redirects cleanly without EISDIR)
    python3 -m http.server 4173 --bind 127.0.0.1 --directory /tmp/evidence_preview > /dev/null 2>&1 &
    PREVIEW_PID=$!

    # Trap Ctrl+C (SIGINT) so it shuts down the preview server and returns to the menu
    trap 'kill "$PREVIEW_PID" 2>/dev/null || true; wait "$PREVIEW_PID" 2>/dev/null || true; trap - INT; echo ""; echo "✓ Preview server stopped."; return 0' INT

    echo "Preview server running on port 4173 (PID: $PREVIEW_PID)."
    echo "Open the URL above in your browser to inspect pages and charts."
    echo ""
    read -r -p "Press [Enter] (or Ctrl+C) when done to close preview and return to menu: " _ || true

    kill "$PREVIEW_PID" 2>/dev/null || true
    wait "$PREVIEW_PID" 2>/dev/null || true
    trap - INT
    echo "✓ Preview server stopped."
}

# If running in non-interactive mode with --skip-git
if [ "$SKIP_GIT_MODE" = true ]; then
    echo ""
    echo "======================================================================"
    echo " 🛑 Exiting (--skip-git mode). Zero git commands executed."
    echo " All changes remain safely in your working tree."
    echo "======================================================================"
    exit 0
fi

# Fetch remote ref quietly for accurate ahead/behind calculation
git fetch origin "${TARGET_BRANCH}" --quiet 2>/dev/null || true

HAS_UNCOMMITTED=$(git status --porcelain 2>/dev/null || echo "")
AHEAD_COUNT=$(git rev-list --count "origin/${TARGET_BRANCH}..HEAD" 2>/dev/null || echo 0)
BEHIND_COUNT=$(git rev-list --count "HEAD..origin/${TARGET_BRANCH}" 2>/dev/null || echo 0)

stage_project_files() {
    echo "Staging modified and new project files..."
    git add -u
    git add deploy/ evidence_dashboard/ scripts/ .github/ .gitignore pipeline.sh 2>/dev/null || true
}

prompt_pr_to_main() {
    if [ "${TARGET_BRANCH}" = "dev" ]; then
        echo ""
        echo "======================================================================"
        echo " 🔀 STAGE 2 PROMOTION GATE: PULL REQUEST (dev -> main)"
        echo "======================================================================"
        echo " Staging verification against BigQuery (${DATASET_ID}) passed and pushed to 'dev'."
        read -r -p "Open Pull Request from 'dev' -> 'main' for Production review now? (y/N): " PR_CONFIRM
        if [[ "${PR_CONFIRM:-n}" =~ ^[Yy]$ ]]; then
            if command -v gh &> /dev/null; then
                gh pr create --base main --head dev --fill || true
            else
                REMOTE_URL=$(git remote get-url origin 2>/dev/null | sed -E 's|\.git$||; s|git@github\.com:|https://github.com/|')
                echo "👉 Open Pull Request here: ${REMOTE_URL}/compare/main...dev?expand=1"
            fi
        else
            echo "✓ Skipped PR creation. 'dev' branch is updated; open PR to 'main' whenever ready."
        fi
    fi
}

push_to_remote() {
    local force_lease="${1:-false}"
    if [ "$force_lease" = true ] || [ "$BEHIND_COUNT" -gt 0 ]; then
        echo "Pushing to origin ${TARGET_BRANCH} with safety lease (force-with-lease)..."
        git push --force-with-lease origin "HEAD:${TARGET_BRANCH}"
    else
        echo "Pushing to origin ${TARGET_BRANCH}..."
        git push origin "HEAD:${TARGET_BRANCH}"
    fi
    prompt_pr_to_main
}

# State 1: Completely clean working tree and 100% in sync with remote
if [ -z "$HAS_UNCOMMITTED" ] && [ "$AHEAD_COUNT" -eq 0 ] && [ "$BEHIND_COUNT" -eq 0 ]; then
    echo ""
    echo "======================================================================"
    echo " ✓ Git Status: 100% in sync with origin/${TARGET_BRANCH}. Working tree clean."
    echo " ✓ Cloud services deployed; zero git actions required."
    echo "======================================================================"
    prompt_pr_to_main
    exit 0
fi

# State 2: Clean working tree, but unpushed local commits exist
if [ -z "$HAS_UNCOMMITTED" ] && [ "$AHEAD_COUNT" -gt 0 ]; then
    echo ""
    echo "======================================================================"
    echo " 🔍 UNPUSHED LOCAL COMMITS DETECTED ($AHEAD_COUNT ahead, $BEHIND_COUNT behind)"
    echo "======================================================================"
    git log -n "$AHEAD_COUNT" --oneline
    echo "======================================================================"
    read -r -p "Push existing unpushed commit(s) to origin/${TARGET_BRANCH}? (y/N): " PUSH_CONFIRM
    if [[ "$PUSH_CONFIRM" =~ ^[Yy]$ ]]; then
        push_to_remote false
        echo "✓ Pushed to origin/${TARGET_BRANCH}."
    else
        echo "🛑 Push cancelled. Commits remain safely on your local branch."
    fi
    exit 0
fi

# State 3: Uncommitted changes exist - Gate for --amend mode
if [ "$AMEND_MODE" = true ]; then
    while true; do
        echo ""
        echo "======================================================================"
        echo " 🛡️  DEPLOYMENT GATE: CONFIRMATION FOR GIT AMEND"
        echo "======================================================================"
        echo "   [p] Preview compiled production build in browser"
        echo "   [y] Yes, amend previous commit and force-push to origin ${TARGET_BRANCH}"
        echo "   [n] No, cancel and exit without pushing"
        echo "======================================================================"
        read -r -p "Enter choice [p/y/n] (default: n): " AMEND_INPUT
        case "${AMEND_INPUT:-n}" in
            p|P)
                start_preview_server
                ;;
            y|Y)
                stage_project_files
                git commit --amend --no-edit
                push_to_remote true
                echo "✓ Clean history preserved: Previous commit amended and pushed to origin/${TARGET_BRANCH}."
                exit 0
                ;;
            n|N|*)
                echo ""
                echo "🛑 Deployment cancelled. Zero git commits or pushes executed."
                echo "All changes remain safely in your local working tree."
                exit 0
                ;;
        esac
    done
fi

# State 3: Uncommitted changes exist - Gate for --commit mode
if [ "$NEW_COMMIT_MODE" = true ]; then
    while true; do
        echo ""
        echo "======================================================================"
        echo " 🛡️  DEPLOYMENT GATE: CONFIRMATION FOR NEW COMMIT"
        echo " Message: '${COMMIT_MESSAGE}'"
        echo "======================================================================"
        echo "   [p] Preview compiled production build in browser"
        echo "   [y] Yes, create commit and push to origin ${TARGET_BRANCH}"
        echo "   [n] No, cancel and exit without pushing"
        echo "======================================================================"
        read -r -p "Enter choice [p/y/n] (default: n): " COMMIT_INPUT
        case "${COMMIT_INPUT:-n}" in
            p|P)
                start_preview_server
                ;;
            y|Y)
                stage_project_files
                MSG="${COMMIT_MESSAGE:-feat(cloud): deploy verified ai copilot and sync pipeline cache}"
                git commit -m "$MSG"
                push_to_remote false
                echo "✓ Committed and pushed to origin/${TARGET_BRANCH}."
                exit 0
                ;;
            n|N|*)
                echo ""
                echo "🛑 Deployment cancelled. Zero git commits or pushes executed."
                echo "All changes remain safely in your local working tree."
                exit 0
                ;;
        esac
    done
fi

# State 3: Uncommitted changes exist - Default interactive menu
if [ -t 0 ]; then
    while true; do
        echo ""
        echo "======================================================================"
        echo " 🛡️  DEPLOYMENT GATE: SELECT ACTION (TARGET BRANCH: ${TARGET_BRANCH})"
        echo "======================================================================"
        if [ "$BEHIND_COUNT" -gt 0 ]; then
            echo " ⚠️  Notice: Local branch diverged from origin/${TARGET_BRANCH} ($AHEAD_COUNT ahead, $BEHIND_COUNT behind)"
            echo "     Any push will use safety lease (force-with-lease) to update remote."
            echo "----------------------------------------------------------------------"
        fi
        echo "   [p] Preview compiled build in browser"
        echo "   [1] Amend previous commit and force-push to origin/${TARGET_BRANCH} (clean history)"
        echo "   [2] Create a new commit and push to origin/${TARGET_BRANCH}"
        echo "   [3] Exit without pushing (I will inspect or run git commands myself)"
        echo "======================================================================"
        read -r -p "Enter choice [p/1/2/3] (default: 3): " MENU_INPUT
        case "${MENU_INPUT:-3}" in
            p|P)
                start_preview_server
                ;;
            1)
                stage_project_files
                git commit --amend --no-edit
                push_to_remote true
                echo "✓ Clean history preserved: Previous commit amended and pushed to origin/${TARGET_BRANCH}."
                exit 0
                ;;
            2)
                read -r -p "Enter commit message: " CUSTOM_MSG
                MSG="${CUSTOM_MSG:-feat(cloud): deploy verified ai copilot and sync pipeline cache}"
                stage_project_files
                git commit -m "$MSG"
                push_to_remote false
                echo "✓ Committed and pushed to origin/${TARGET_BRANCH}."
                exit 0
                ;;
            3|*)
                echo ""
                echo "======================================================================"
                echo " 🛑 Exiting without pushing to GitHub."
                echo " Zero git commands were executed. All changes remain safely in your working tree."
                echo "======================================================================"
                exit 0
                ;;
        esac
    done
else
    echo "Non-interactive environment detected. Exiting safely without pushing."
    exit 0
fi
