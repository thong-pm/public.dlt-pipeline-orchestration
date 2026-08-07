import os
import sys
import base64
import json
import argparse
import tomlkit
from google.cloud import storage

def get_jwt_expiry(token):
    if not token or not isinstance(token, str) or token.count('.') != 2:
        return 0
    try:
        payload_b64 = token.split('.')[1]
        payload_b64 += '=' * (-len(payload_b64) % 4)
        payload = json.loads(base64.b64decode(payload_b64).decode('utf-8'))
        return payload.get('exp', 0)
    except Exception:
        return 0

def merge_credentials_table(local_tab, gcs_tab, path=""):
    # If this is a table containing an access_token, treat it as a token set
    if "access_token" in gcs_tab and "access_token" in local_tab:
        local_token = local_tab["access_token"]
        gcs_token = gcs_tab["access_token"]
        
        local_exp = get_jwt_expiry(local_token)
        gcs_exp = get_jwt_expiry(gcs_token)
        
        if gcs_exp > local_exp:
            print(f"[Smart Merge] GCS token is newer for '{path}' (exp: {gcs_exp} > {local_exp}). Keeping GCS token.")
            for k, v in gcs_tab.items():
                local_tab[k] = v
        else:
            print(f"[Smart Merge] Local token is newer/same for '{path}' (exp: {local_exp} >= {gcs_exp}). Keeping local token.")
        return

    # Otherwise, iterate and recurse
    for k, v in gcs_tab.items():
        full_key = f"{path}.{k}" if path else k
        if k not in local_tab:
            print(f"[Smart Merge] Added remote key '{full_key}' to local secrets.")
            local_tab[k] = v
        elif isinstance(v, dict) and isinstance(local_tab[k], dict):
            merge_credentials_table(local_tab[k], v, full_key)
        else:
            print(f"[Smart Merge] Preserving local value for static key '{full_key}'.")

def main():
    parser = argparse.ArgumentParser(description="Merge and Deploy secrets.toml to GCS")
    parser.add_argument("--overwrite", action="store_true", help="Force overwrite GCS secrets with local secrets completely")
    args = parser.parse_args()

    local_path = ".dlt/secrets.toml"
    remote_name = "secrets.toml"

    print("=======================================================")
    print(" DEPLOY SECRETS: MERGING LOCAL & GCS CONFIGURATION")
    print("=======================================================")

    if not os.path.exists(local_path):
        print(f"Error: Local secrets file not found at {local_path}")
        sys.exit(1)

    with open(local_path, "r", encoding="utf-8") as f:
        local_secrets = tomlkit.load(f)

    # Read GCP configuration from secrets.toml [gcp] section
    gcp_config = local_secrets.get("gcp", {})
    project_id = gcp_config.get("project_id")
    bucket_name = gcp_config.get("token_bucket")

    # Fallback to environment variables if not defined in toml
    if not project_id:
        project_id = os.environ.get("GCP_PROJECT")
    if not bucket_name:
        bucket_name = os.environ.get("GCS_TOKEN_BUCKET")

    if not project_id or not bucket_name:
        print("\n❌ Error: GCP configuration missing.")
        print("Please configure [gcp] section in .dlt/secrets.toml:")
        print("  [gcp]")
        print("  project_id = \"your-gcp-project-id\"")
        print("  token_bucket = \"your-gcs-bucket-name\"")
        sys.exit(1)

    # Init GCS Client
    try:
        storage_client = storage.Client(project=project_id)
        bucket = storage_client.bucket(bucket_name)
        blob = bucket.blob(remote_name)
    except Exception as e:
        print(f"Error initializing GCS Client: {e}")
        sys.exit(1)

    gcs_exists = False
    gcs_content = None
    try:
        if blob.exists():
            gcs_exists = True
            gcs_content = blob.download_as_text(encoding="utf-8")
            print("[GCS] Active secrets.toml found in GCS bucket.")
        else:
            print("[GCS] secrets.toml not found in GCS bucket (first-time upload).")
    except Exception as e:
        print(f"Error checking/reading from GCS: {e}")
        print("Will proceed with clean upload of local secrets.")

    if args.overwrite:
        print("[Merge] Force overwrite requested (--overwrite). Uploading local secrets.toml without merging.")
    elif gcs_exists and gcs_content:
        try:
            print("\n[Merge] Performing smart bidirectional merge based on token expiry...")
            gcs_secrets = tomlkit.parse(gcs_content)
            
            # Perform smart merge on sources
            if "sources" in gcs_secrets:
                if "sources" not in local_secrets:
                    local_secrets["sources"] = tomlkit.table()
                
                merge_credentials_table(local_secrets["sources"], gcs_secrets["sources"])
                
        except Exception as e:
            print(f"Warning: Failed to parse GCS secrets.toml: {e}")
            print("Uploading local secrets file without merging to prevent corruption.")

    # Write merged secrets to GCS
    try:
        merged_payload = tomlkit.dumps(local_secrets)
        blob.upload_from_string(merged_payload, content_type="application/toml")
        print("\n[Success] Successfully deployed merged secrets.toml to GCS.")
    except Exception as e:
        print(f"Error uploading merged secrets to GCS: {e}")
        sys.exit(1)

    print("=======================================================")

if __name__ == "__main__":
    main()
