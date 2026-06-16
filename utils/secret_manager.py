import os

try:
    from google.cloud import secretmanager
except ImportError:
    secretmanager = None

def get_secret_client_and_name():
    if not secretmanager:
        return None, None
    project_id = os.environ.get("GCP_PROJECT_ID")
    secret_name = os.environ.get("GCP_SECRET_NAME", "dlt-secrets-toml")
    if not project_id:
        return None, None
    try:
        client = secretmanager.SecretManagerServiceClient()
        name = f"projects/{project_id}/secrets/{secret_name}"
        return client, name
    except Exception as e:
        print(f"[Secret Manager] Failed to initialize client: {e}")
        return None, None

def download_secrets():
    # Only download in Cloud Run environment (K_JOB / K_SERVICE) or if local secrets.toml doesn't exist
    is_cloud_run = "K_JOB" in os.environ or "K_SERVICE" in os.environ
    local_exists = os.path.exists(".dlt/secrets.toml")
    force_download = os.environ.get("FORCE_DOWNLOAD_SECRETS", "").lower() in ("true", "1", "yes")

    if local_exists and not is_cloud_run and not force_download:
        print("[Secret Manager] Running locally and .dlt/secrets.toml already exists. Skipping download to protect local tokens.")
        return False

    client, name = get_secret_client_and_name()
    if not client:
        print("[Secret Manager] GCP_PROJECT_ID not set or client init failed. Skipping download, using local secrets.toml.")
        return False

    try:
        print(f"[Secret Manager] Fetching latest secret version from {name}...")
        response = client.access_secret_version(request={"name": f"{name}/versions/latest"})
        payload = response.payload.data.decode("UTF-8")
        
        os.makedirs(".dlt", exist_ok=True)
        with open(".dlt/secrets.toml", "w") as f:
            f.write(payload)
        print("[Secret Manager] Successfully downloaded secrets.toml from GCP Secret Manager.")
        return True
    except Exception as e:
        print(f"[Secret Manager] ERROR downloading secrets: {e}")
        # If secrets.toml doesn't exist, we fail. If it exists, we fallback.
        if not os.path.exists(".dlt/secrets.toml"):
            raise e
        print("[Secret Manager] Warning: Falling back to existing local secrets.toml.")
        return False

