"""Local HTTP development server for Executive Cockpit AI Chatbot."""

import json
import os
import sys
from http.server import BaseHTTPRequestHandler, HTTPServer

sys.path.insert(0, os.path.dirname(__file__))
from main import process_chat_query, build_cors_headers

PORT = int(os.environ.get("CHAT_PROXY_PORT", 8090))
HOST = os.environ.get("CHAT_PROXY_HOST", "0.0.0.0")

class ChatProxyRequestHandler(BaseHTTPRequestHandler):
    def _send_cors_headers(self, status: int = 200) -> None:
        self.send_response(status)
        for key, val in build_cors_headers().items():
            self.send_header(key, val)
        self.end_headers()

    def do_OPTIONS(self) -> None:
        self._send_cors_headers(204)

    def do_GET(self) -> None:
        if self.path == "/health":
            self._send_cors_headers(200)
            self.wfile.write(b'{"status": "ok", "service": "cockpit-ai-proxy"}')
        else:
            self._send_cors_headers(404)
            self.wfile.write(b'{"error": "Not found"}')

    def do_POST(self) -> None:
        if self.path == "/cache/warm":
            from main import load_preset_cache_from_disk
            load_preset_cache_from_disk()
            self._send_cors_headers(200)
            self.wfile.write(b'{"status": "ok", "message": "Copilot preset cache reloaded from disk"}')
            return

        if self.path not in ["/", "/chat", "/query"]:
            self._send_cors_headers(404)
            self.wfile.write(b'{"error": "Endpoint not found. POST to /chat"}')
            return

        content_length = int(self.headers.get("Content-Length", 0))
        if content_length == 0:
            self._send_cors_headers(400)
            self.wfile.write(b'{"error": "Empty request body"}')
            return

        raw_body = self.rfile.read(content_length).decode("utf-8")
        try:
            body = json.loads(raw_body)
        except Exception:
            self._send_cors_headers(400)
            self.wfile.write(b'{"error": "Invalid JSON body"}')
            return

        prompt = (body.get("prompt") or "").strip()
        if not prompt:
            self._send_cors_headers(400)
            self.wfile.write(b'{"error": "Field \'prompt\' is required"}')
            return

        client_ip = self.headers.get("X-Forwarded-For") or self.client_address[0]
        context = body.get("context") or {}
        history = body.get("history") or []

        status_code, response_payload = process_chat_query(prompt, context, client_ip, history=history)
        self._send_cors_headers(status_code)
        self.wfile.write(json.dumps(response_payload).encode("utf-8"))

def run_server():
    server = HTTPServer((HOST, PORT), ChatProxyRequestHandler)
    print(f"Cockpit AI Chat Proxy running at http://{HOST}:{PORT}")
    print("Endpoints: POST /chat | GET /health")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nServer shutting down gracefully.")
        server.server_close()

if __name__ == "__main__":
    run_server()
