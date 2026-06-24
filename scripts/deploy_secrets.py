import os
import sys
import tomlkit
from google.cloud import storage

def main():
    bucket_name = os.environ.get("GCS_TOKEN_BUCKET", "gcp-etl-497002-tokens")
    project_id = "gcp-etl-497002"
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

    choice = ""
    if gcs_exists and gcs_content:
        try:
            choice = input("\nDo you want to merge GCS tokens? (Press Enter to merge, or type 'overwrite' to overwrite GCS with local tokens): ").strip().lower()
        except (EOFError, OSError):
            choice = ""  # non-interactive fallback

    if choice == "overwrite":
        print("[Merge] Overwrite requested. Uploading local secrets.toml without merging GCS tokens.")
    elif gcs_exists and gcs_content:
        try:
            gcs_secrets = tomlkit.parse(gcs_content)
            
            # Merge Xero: Preserve GCS production client credentials and dynamic tokens
            if "sources" in gcs_secrets and "xero" in gcs_secrets["sources"]:
                print("[Merge] Preserving Production Xero credentials and active tokens from GCS.")
                if "sources" not in local_secrets:
                    local_secrets["sources"] = tomlkit.table()
                local_secrets["sources"]["xero"] = gcs_secrets["sources"]["xero"]

            # Merge Procore: Preserve GCS production client credentials and dynamic tokens
            if "sources" in gcs_secrets and "procore" in gcs_secrets["sources"]:
                print("[Merge] Preserving Production Procore credentials and active tokens from GCS.")
                if "sources" not in local_secrets:
                    local_secrets["sources"] = tomlkit.table()
                local_secrets["sources"]["procore"] = gcs_secrets["sources"]["procore"]

        except Exception as e:
            print(f"Warning: Failed to parse GCS secrets.toml: {e}")
            print("Uploading local secrets file without merging to prevent corruption.")

    # Write merged secrets to GCS
    try:
        merged_payload = tomlkit.dumps(local_secrets)
        blob.upload_from_string(merged_payload, content_type="application/toml")
        print("[Success] Successfully deployed merged secrets.toml to GCS.")
    except Exception as e:
        print(f"Error uploading merged secrets to GCS: {e}")
        sys.exit(1)

    print("=======================================================")

if __name__ == "__main__":
    main()
