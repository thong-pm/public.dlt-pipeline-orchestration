import urllib.parse
import webbrowser
import threading
from http.server import HTTPServer, BaseHTTPRequestHandler
import requests
import tomlkit
import time

# Load credentials
with open('.dlt/secrets.toml', 'r') as f:
    secrets = tomlkit.load(f)

client_id = secrets['sources']['xero']['client_id']
client_secret = secrets['sources']['xero']['client_secret']
redirect_uri = "http://localhost:8080/callback"
scopes = "offline_access accounting.invoices.read accounting.contacts.read accounting.settings.read"

auth_code = None

class OAuthCallbackHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        global auth_code
        query = urllib.parse.urlparse(self.path).query
        params = urllib.parse.parse_qs(query)
        
        if 'code' in params:
            auth_code = params['code'][0]
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            self.wfile.write(b"Authorization successful! Please return to your terminal.")
            threading.Thread(target=self.server.shutdown).start()
        else:
            self.send_response(400)
            self.end_headers()
            self.wfile.write(b"Authorization failed.")
            threading.Thread(target=self.server.shutdown).start()

def run_server():
    server = HTTPServer(('localhost', 8080), OAuthCallbackHandler)
    server.serve_forever()

# 1. Start Authorization
auth_url = (
    f"https://login.xero.com/identity/connect/authorize"
    f"?response_type=code"
    f"&client_id={client_id}"
    f"&redirect_uri={urllib.parse.quote(redirect_uri)}"
    f"&scope={urllib.parse.quote(scopes)}"
)

print(f"\n1. Opening browser for Xero authorization...")
print(f"URL: {auth_url}\n")
webbrowser.open(auth_url)

# 2. Wait for callback
server_thread = threading.Thread(target=run_server)
server_thread.start()

while auth_code is None and server_thread.is_alive():
    time.sleep(0.5)

if not auth_code:
    print("Authorization failed or timed out.")
    exit(1)

# 3. Exchange code for tokens
print("2. Exchanging code for tokens...")
token_response = requests.post(
    "https://identity.xero.com/connect/token",
    auth=(client_id, client_secret),
    data={
        "grant_type": "authorization_code",
        "code": auth_code,
        "redirect_uri": redirect_uri
    }
)
token_response.raise_for_status()
tokens = token_response.json()

# 4. Save to secrets.toml
print("3. Saving tokens to .dlt/secrets.toml...")
secrets['sources']['xero']['access_token'] = tokens['access_token']
secrets['sources']['xero']['refresh_token'] = tokens['refresh_token']

with open('.dlt/secrets.toml', 'w') as f:
    tomlkit.dump(secrets, f)

print("\nSUCCESS! Tokens saved. You can now run the pipeline.")
print("Run: poetry run python run_xero.py")
