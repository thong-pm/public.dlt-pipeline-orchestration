import os
import sys
import subprocess
import tomlkit
from google.cloud import storage

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

    # 2. Ask user which SaaS needs authorization
    print("\n[Step 2/4] Select the SaaS you want to re-authorize:")
    print("1) Xero")
    print("2) Procore")
    
    choice = ""
    while choice not in ["1", "2"]:
        try:
            choice = input("Select option (1-2) or 'q' to quit: ").strip().lower()
            if choice == 'q':
                print("Exiting.")
                sys.exit(0)
        except (EOFError, OSError):
            print("\nError: Interactive input not available. Run this script in a terminal.")
            sys.exit(1)

    auth_script = ""
    saas_name = ""
    if choice == "1":
        auth_script = "sources/xero/auth.py"
        saas_name = "Xero"
    elif choice == "2":
        auth_script = "sources/procore/auth.py"
        saas_name = "Procore"

    # 3. Run the local auth script
    print(f"\n[Step 3/4] Starting local authorization flow for {saas_name}...")
    print(f"Running: poetry run python {auth_script}")
    print("-------------------------------------------------------")
    
    # We run poetry run python sources/<saas>/auth.py
    # Since we need to capture interactive inputs (the terminal stays active until browser callback redirects),
    # we use subprocess.run with stdout/stdin connected to the user terminal.
    try:
        result = subprocess.run(
            ["poetry", "run", "python", auth_script],
            check=True
        )
    except subprocess.CalledProcessError as e:
        print("-------------------------------------------------------")
        print(f"❌ Local authorization failed for {saas_name} (Code: {e.returncode}).")
        sys.exit(1)
    except FileNotFoundError:
        # Fallback if poetry isn't active or in path
        try:
            print("poetry not found in path, attempting to run with python directly...")
            result = subprocess.run(
                ["python", auth_script],
                check=True
            )
        except subprocess.CalledProcessError as e:
            print("-------------------------------------------------------")
            print(f"❌ Local authorization failed for {saas_name} (Code: {e.returncode}).")
            sys.exit(1)

    print("-------------------------------------------------------")
    print("✓ Local authorization completed successfully.")

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
    print(f" SUCCESS! {saas_name} is now re-authorized on GCP.")
    print(" You can now trigger your pipeline run.")
    print("=======================================================")

if __name__ == "__main__":
    main()
