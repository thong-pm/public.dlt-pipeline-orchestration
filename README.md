# DLT Pipeline: Multi-Tenant SaaS Orchestration

A production-ready, parallel orchestration system for HubSpot, Xero, and Procore data pipelines using `dlt`.

## Project Structure

```text
.
├── .dlt/
│   ├── config.toml      # Master Control Panel (environments, resources, toggles)
│   └── secrets.toml     # Sensitive credentials (API keys, rotated tokens)
├── runners/             # Execution scripts
│   ├── run_all.py       # Orchestrates all pipelines in parallel
│   ├── run_hubspot.py   # Runs only HubSpot
│   ├── run_procore.py   # Runs only Procore
│   ├── run_shopify.py   # Runs only Shopify
│   └── run_xero.py      # Runs only Xero
├── sources/             # API extraction logic
│   ├── hubspot/         
│   ├── procore/         # Contains Procore token manager & paginator
│   ├── shopify/         # Multi-store Shopify support
│   └── xero/            
└── utils/               # Pipeline utilities
    ├── logging.py       # Formats output summary tables
    └── preflight.py     # Live token validation and auto-rotation before execution
```

## Prerequisites & Initial Auth

Each source requires a one-time setup to authorize the connection.

### HubSpot
* **API Key**: Create a Private App in HubSpot and copy the Access Token.
* **Secrets**: Add to `[sources.hubspot]` in `.dlt/secrets.toml`.

### Xero
* **App Setup**: Create an app at [developers.xero.com](https://developers.xero.com/).
* **Redirect URI**: Set to `http://localhost:8080/callback`.
* **Auth**: Run `poetry run python sources/xero/auth.py` once to perform the OAuth handshake.
* **Auto-Rotate**: The pipeline handles token rotation automatically thereafter.

### Procore
* **App Setup**: Create an app at [developers.procore.com](https://developers.procore.com/).
* **Redirect URI**: Set to `http://localhost:8080/callback`.
* **Company Install**: You **must** go to your Procore Company Admin > App Management and install your app for that company.
* **Auth**: Run `poetry run python sources/procore/auth.py` once.
* **Auto-Rotate**: Tokens are persisted and rotated automatically in `.dlt/secrets.toml`.

---

## Execution

### 1. Setup

If you are starting from scratch in your terminal, follow these steps:

**Initialize the Environment**:
Always use a virtual environment to avoid installing packages to your global Python environment.

```bash
# Clone the repository (if you haven't already)
git clone <your-repo-url>
cd dlt-pipeline-testing

# Create and activate a virtual environment
python3 -m venv .venv
source .venv/bin/activate
```

**Install Dependencies**:
```bash
# Install Poetry inside the virtual environment
pip install poetry

# Install project dependencies
poetry install

# Create your secrets file from the template
cp .dlt/secrets.toml.example .dlt/secrets.toml
```

### 2. Configure
Edit `.dlt/config.toml` to toggle resources or change environments.

### 3. Run
**Run everything in parallel:**
```bash
poetry run python -m runners.run_all
```

**Run individual source:**
```bash
poetry run python -m runners.run_procore
poetry run python -m runners.run_xero
poetry run python -m runners.run_hubspot
```

## Monitoring
Check terminal output for the **PIPELINE RUN SUMMARY** table. The system provides detailed logs for every API page fetched and any errors encountered during the parallel run.
