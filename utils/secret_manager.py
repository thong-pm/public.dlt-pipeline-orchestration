import os

try:
    from google.cloud import secretmanager
except ImportError:
    secretmanager = None

try:
    from google.cloud import storage
except ImportError:
    storage = None


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


def download_secrets() -> bool:
    bucket_name = os.environ.get("GCS_TOKEN_BUCKET")
    local_path = ".dlt/secrets.toml"
    local_exists = os.path.exists(local_path)
    is_cloud_run = "K_JOB" in os.environ or "K_SERVICE" in os.environ
    force_download = os.environ.get("FORCE_DOWNLOAD_SECRETS", "").lower() in ("true", "1", "yes")

    # If running locally and secrets.toml exists, don't overwrite it unless forced
    if local_exists and not is_cloud_run and not force_download:
        print("[Secret Manager] Running locally and .dlt/secrets.toml already exists. Skipping download to protect local tokens.")
        return False

    # 1. Try downloading from GCS Token Vault (primary source of truth for secrets.toml in production)
    if storage and bucket_name:
        try:
            print(f"[GCS Vault] Downloading secrets.toml from bucket {bucket_name}...")
            client = storage.Client()
            bucket = client.bucket(bucket_name)
            blob = bucket.blob("secrets.toml")
            if blob.exists():
                os.makedirs(".dlt", exist_ok=True)
                blob.download_to_filename(local_path)
                print("[GCS Vault] Successfully downloaded secrets.toml from GCS.")
                return True
            print("[GCS Vault] secrets.toml not found in GCS. Falling back to Secret Manager.")
        except Exception as e:
            print(f"[GCS Vault] Error downloading secrets.toml from GCS: {e}. Falling back to Secret Manager.")

    # 2. Fallback to GCP Secret Manager
    client, name = get_secret_client_and_name()
    if not client:
        print("[Secret Manager] Secret Manager not configured or init failed. Skipping fallback, using local secrets.toml.")
        return False

    try:
        print(f"[Secret Manager] Fetching latest secret version from {name}...")
        response = client.access_secret_version(request={"name": f"{name}/versions/latest"})
        payload = response.payload.data.decode("UTF-8")
        
        os.makedirs(".dlt", exist_ok=True)
        with open(local_path, "w") as f:
            f.write(payload)
        print("[Secret Manager] Successfully downloaded secrets.toml from GCP Secret Manager.")
        return True
    except Exception as e:
        print(f"[Secret Manager] ERROR downloading secrets: {e}")
        if not os.path.exists(local_path):
            raise e
        print("[Secret Manager] Warning: Falling back to existing local secrets.toml.")
        return False


def upload_secrets() -> bool:
    bucket_name = os.environ.get("GCS_TOKEN_BUCKET")
    local_path = ".dlt/secrets.toml"

    if not os.path.exists(local_path):
        print(f"[GCS Vault] Local secrets.toml not found at {local_path}. Cannot upload.")
        return False

    if storage and bucket_name:
        try:
            print(f"[GCS Vault] Uploading secrets.toml to bucket {bucket_name}...")
            client = storage.Client()
            bucket = client.bucket(bucket_name)
            blob = bucket.blob("secrets.toml")
            blob.upload_from_filename(local_path)
            print("[GCS Vault] Successfully uploaded secrets.toml to GCS.")
            return True
        except Exception as e:
            print(f"[GCS Vault] ERROR uploading secrets.toml to GCS: {e}")
            return False
    else:
        print("[GCS Vault] GCS_TOKEN_BUCKET is not set or storage client not loaded. Skipping upload.")
        return False
