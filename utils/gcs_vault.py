import os
import json

try:
    from google.cloud import storage
except ImportError:
    storage = None

class GCSTokenVault:
    """
    Manages OAuth token persistence using a Google Cloud Storage bucket.
    Falls back to local file storage if the GCS bucket is not configured.
    """

    def __init__(self, filename: str):
        self.bucket_name = os.environ.get("GCS_TOKEN_BUCKET")
        self.filename = filename
        self.local_path = f".dlt/{filename}"

        self.storage_client = None
        if storage and self.bucket_name:
            try:
                self.storage_client = storage.Client()
            except Exception as e:
                print(f"[GCS Vault] Failed to initialize storage client: {e}")

    def read_tokens(self) -> dict:
        """
        Reads tokens from the GCS bucket, falling back to local file.
        Returns an empty dict if the file does not exist.
        """
        if self.storage_client and self.bucket_name:
            try:
                bucket = self.storage_client.bucket(self.bucket_name)
                blob = bucket.blob(f"auth/{self.filename}")
                if blob.exists():
                    data = blob.download_as_text()
                    return json.loads(data)
                print(f"[GCS Vault] {self.filename} not found in GCS. Falling back to local storage.")
            except Exception as e:
                print(f"[GCS Vault] Error reading {self.filename} from GCS: {e}. Falling back to local storage.")

        # Local fallback
        if os.path.exists(self.local_path):
            try:
                with open(self.local_path, "r") as f:
                    return json.load(f)
            except Exception as e:
                print(f"[GCS Vault] Error reading local file {self.local_path}: {e}")

        return {}

    def write_tokens(self, tokens: dict) -> None:
        """
        Writes tokens to the GCS bucket immediately, and also writes to local file as backup.
        """
        # Always write to local file for backup/development
        try:
            os.makedirs(os.path.dirname(self.local_path), exist_ok=True)
            with open(self.local_path, "w") as f:
                json.dump(tokens, f, indent=4)
        except Exception as e:
            print(f"[GCS Vault] Failed to write local backup for {self.filename}: {e}")

        # Write to GCS if configured
        if self.storage_client and self.bucket_name:
            try:
                bucket = self.storage_client.bucket(self.bucket_name)
                blob = bucket.blob(f"auth/{self.filename}")
                blob.upload_from_string(json.dumps(tokens, indent=4), content_type="application/json")
                print(f"[GCS Vault] Successfully uploaded {self.filename} to GCS bucket {self.bucket_name}.")
            except Exception as e:
                print(f"[GCS Vault] Error uploading {self.filename} to GCS: {e}")
