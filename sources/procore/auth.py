import urllib.parse
import webbrowser
import threading
from http.server import HTTPServer, BaseHTTPRequestHandler
import requests
import tomlkit
import time
import sys

# Load config and secrets
with open('.dlt/config.toml', 'r') as f:
    config = tomlkit.load(f)

with open('.dlt/secrets.toml', 'r') as f:
    secrets = tomlkit.load(f)

env = config['sources']['procore']['environment']
base_auth_url = "https://login.procore.com" if env == "prod" else "https://sandbox.procore.com"

try:
    client_id = secrets['sources']['procore'][env]['client_id']
    client_secret = secrets['sources']['procore'][env]['client_secret']
except KeyError:
    print(f"Error: No credentials found for [sources.procore.{env}] in secrets.toml.")
    sys.exit(1)

redirect_uri = "http://localhost:8080/callback"
auth_code = None

class OAuthCallbackHandler(BaseHTTPRequestHandler):
    def log_message(self, format, *args):
        pass  # Suppress server logs

    def do_GET(self):
        global auth_code
        query = urllib.parse.urlparse(self.path).query
        params = urllib.parse.parse_qs(query)
        if 'code' in params:
            auth_code = params['code'][0]
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            self.wfile.write(b"Authorization successful! You can close this tab.")
            threading.Thread(target=self.server.shutdown).start()
        else:
            self.send_response(400)
            self.end_headers()
            self.wfile.write(b"Authorization failed.")
            threading.Thread(target=self.server.shutdown).start()

def run_server():
    server = HTTPServer(('localhost', 8080), OAuthCallbackHandler)
    server.serve_forever()

print(f"\nAuthorizing Procore ({env})...")
print(f"Environment read from: .dlt/config.toml -> sources.procore.environment\n")

auth_url = (
    f"{base_auth_url}/oauth/authorize"
    f"?response_type=code"
    f"&client_id={client_id}"
    f"&redirect_uri={urllib.parse.quote(redirect_uri)}"
)

print(f"Open this URL in your browser:\n\n{auth_url}\n")
webbrowser.open(auth_url)

print("Waiting for callback on http://localhost:8080/callback...")
server_thread = threading.Thread(target=run_server)
server_thread.start()

while auth_code is None and server_thread.is_alive():
    time.sleep(0.5)

if not auth_code:
    print("Authorization failed or timed out.")
    sys.exit(1)

# Exchange code for tokens
print("\nExchanging authorization code for tokens...")
token_response = requests.post(
    f"{base_auth_url}/oauth/token",
    data={
        "grant_type": "authorization_code",
        "code": auth_code,
        "client_id": client_id,
        "client_secret": client_secret,
        "redirect_uri": redirect_uri
    }
)
token_response.raise_for_status()
tokens = token_response.json()

# Save tokens into the correct env section
secrets['sources']['procore'][env]['access_token'] = tokens['access_token']
secrets['sources']['procore'][env]['refresh_token'] = tokens['refresh_token']

with open('.dlt/secrets.toml', 'w') as f:
    tomlkit.dump(secrets, f)

print(f"\nSUCCESS! Tokens saved to [sources.procore.{env}] in secrets.toml.")
print(f"You are now authorized for Procore {env}.")
