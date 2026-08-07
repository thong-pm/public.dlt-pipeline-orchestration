import os
import sys
import subprocess
import tomlkit
from google.cloud import storage

# Ensure project root is in sys.path for importing project modules
PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if PROJECT_ROOT not in sys.path:
    sys.path.insert(0, PROJECT_ROOT)

def main():
    local_path = ".dlt/secrets.toml"
    remote_name = "secrets.toml"

    # Try to load GCP config from secrets.toml (or fallback to example if running first-time setup)
    config_path = local_path if os.path.exists(local_path) else ".dlt/secrets.toml.example"
    project_id = None
    bucket_name = None

    if os.path.exists(config_path):
        try:
            with open(config_path, "r", encoding="utf-8") as f:
                secrets = tomlkit.load(f)
            gcp_config = secrets.get("gcp", {})
            project_id = gcp_config.get("project_id")
            bucket_name = gcp_config.get("token_bucket")
        except Exception:
            pass

    # Fallback to environment variables
    if not project_id:
        project_id = os.environ.get("GCP_PROJECT")
    if not bucket_name:
        bucket_name = os.environ.get("GCS_TOKEN_BUCKET")

    # Validate settings are not placeholders
    if (not project_id or not bucket_name or 
        project_id == "<your-gcp-project-id>" or 
        bucket_name == "<your-gcs-bucket-for-tokens>"):
        print("\n❌ Error: GCP configuration missing or contains default placeholders.")
        print("Please configure the [gcp] section in .dlt/secrets.toml:")
        print("  [gcp]")
        print("  project_id = \"your-gcp-project-id\"")
        print("  token_bucket = \"your-gcs-bucket-name\"")
        sys.exit(1)

    print("=======================================================")
    print("           DLT PIPELINE - RE-AUTHORIZE SAAS            ")
    print("=======================================================")

    # 1. Pull the latest active secrets from GCS
    print("\n[Step 1/4] Downloading latest active secrets from GCS...")
    try:
        storage_client = storage.Client(project=project_id)
        bucket = storage_client.bucket(bucket_name)
        blob = bucket.blob(remote_name)
        
        if blob.exists():
            gcs_content = blob.download_as_text(encoding="utf-8")
            os.makedirs(os.path.dirname(local_path), exist_ok=True)
            with open(local_path, "w", encoding="utf-8") as f:
                f.write(gcs_content)
            print("✓ Successfully pulled current secrets to local.")
        else:
            print("⚠️ No secrets.toml found in GCS. Will initialize local secrets.")
    except Exception as e:
        print(f"❌ Error pulling secrets from GCS: {e}")
        sys.exit(1)

    # 2. Check current credential status using preflight check
    print("\n[Step 2/4] Checking live authorization status...")
    from utils.preflight import _check_all
    status = _check_all()
    
    script_map = {
        'xero': ("Xero", "sources/xero/auth.py"),
        'procore': ("Procore", "sources/procore/auth.py"),
        'shopify': ("Shopify", "sources/shopify/auth.py"),
    }

    expired_sources = [s for s, ok in status.items() if not ok and s in script_map]
    
    for s, ok in status.items():
        symbol = "✓ Valid (Ready)" if ok else "❌ Expired / Missing (Re-auth needed)"
        print(f"  - {s.capitalize():10s}: {symbol}")

    queue = []
    if expired_sources:
        print(f"\n👉 Detected {len(expired_sources)} source(s) needing re-authorization: {', '.join(s.capitalize() for s in expired_sources)}")
        print("\nSelect option:")
        print(f"1) Re-authorize ONLY expired sources ({' -> '.join(s.capitalize() for s in expired_sources)}) [Default]")
        print("2) Force re-authorize ALL (Xero -> Procore)")
        print("3) Xero only")
        print("4) Procore only")
        print("5) Shopify only")

        choice = input("Select option (1-5, default=1) or 'q' to quit: ").strip().lower()
        if choice == 'q':
            print("Exiting.")
            sys.exit(0)
        elif choice in ["", "1"]:
            queue = [script_map[s] for s in expired_sources]
        elif choice == "2":
            queue = [script_map["xero"], script_map["procore"]]
        elif choice == "3":
            queue = [script_map["xero"]]
        elif choice == "4":
            queue = [script_map["procore"]]
        elif choice == "5":
            queue = [script_map["shopify"]]
    else:
        print("\n✓ ALL sources are currently valid and authorized!")
        print("\nSelect option if you wish to force re-authorization:")
        print("1) Force re-authorize Procore")
        print("2) Force re-authorize Xero")
        print("3) Force re-authorize ALL (Xero -> Procore)")
        print("4) Shopify only")
        
        choice = input("Select option (1-4) or 'q' to exit [Default=q]: ").strip().lower()
        if choice in ["", "q"]:
            print("Everything is valid. No action needed.")
            sys.exit(0)
        elif choice == "1":
            queue = [script_map["procore"]]
        elif choice == "2":
            queue = [script_map["xero"]]
        elif choice == "3":
            queue = [script_map["xero"], script_map["procore"]]
        elif choice == "4":
            queue = [script_map["shopify"]]

    # 3. Run the auth scripts in sequence
    completed_saas = []
    for saas_name, auth_script in queue:
        print(f"\n[Step 3/4] Starting local authorization flow for {saas_name}...")
        print(f"Running: {sys.executable} {auth_script}")
        print("-------------------------------------------------------")
        try:
            subprocess.run([sys.executable, auth_script], check=True)
            print("-------------------------------------------------------")
            print(f"✓ {saas_name} authorization completed successfully.")
            completed_saas.append(saas_name)
        except subprocess.CalledProcessError as e:
            print("-------------------------------------------------------")
            print(f"❌ Local authorization failed for {saas_name} (Code: {e.returncode}).")
            sys.exit(1)

    # 4. Upload updated secrets back to GCS
    print("\n[Step 4/4] Uploading updated secrets back to GCS...")
    try:
        if not os.path.exists(local_path):
            print(f"❌ Error: Updated secrets file not found at {local_path}")
            sys.exit(1)

        with open(local_path, "r", encoding="utf-8") as f:
            updated_payload = f.read()

        blob.upload_from_string(updated_payload, content_type="application/toml")
        print("✓ Successfully deployed updated secrets.toml to GCS.")
    except Exception as e:
        print(f"❌ Error uploading secrets to GCS: {e}")
        sys.exit(1)

    print("\n=======================================================")
    print(f" SUCCESS! {', '.join(completed_saas)} authorized & synced to GCP.")
    print(" You can now trigger your pipeline run.")
    print("=======================================================")

if __name__ == "__main__":
    main()
