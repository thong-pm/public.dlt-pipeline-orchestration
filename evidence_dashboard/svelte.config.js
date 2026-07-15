import fs from 'fs';
import path from 'path';

function loadSecrets() {
    const secretsPath = path.resolve('../.dlt/secrets.toml');
    if (!fs.existsSync(secretsPath)) return {};
    const content = fs.readFileSync(secretsPath, 'utf8');
    
    const secrets = {};
    let currentSection = '';
    
    for (const line of content.split('\n')) {
        const trimmed = line.trim();
        if (trimmed.startsWith('#') || trimmed === '') continue;
        
        if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
            currentSection = trimmed.slice(1, -1);
            continue;
        }
        
        if (trimmed.includes('=')) {
            const parts = trimmed.split('=');
            const rawKey = parts[0].trim();
            let val = parts.slice(1).join('=').trim();
            // Strip quotes if present
            if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
                val = val.slice(1, -1);
            }
            const key = `${currentSection}.${rawKey}`;
            secrets[key] = val;
        }
    }
    return secrets;
}

const secrets = loadSecrets();

// Default to local Postgres unless overridden by the environment
process.env.EVIDENCE_DB_TYPE = process.env.EVIDENCE_DB_TYPE || 'postgres';

if (process.env.EVIDENCE_DB_TYPE === 'postgres') {
    process.env.EVIDENCE_DB_HOST = process.env.EVIDENCE_DB_HOST || secrets['destination.postgres.credentials.host'] || 'localhost';
    process.env.EVIDENCE_DB_PORT = process.env.EVIDENCE_DB_PORT || secrets['destination.postgres.credentials.port'] || '5432';
    process.env.EVIDENCE_DB_NAME = process.env.EVIDENCE_DB_NAME || secrets['destination.postgres.credentials.database'] || '';
    process.env.EVIDENCE_DB_USER = process.env.EVIDENCE_DB_USER || secrets['destination.postgres.credentials.username'] || '';
    process.env.EVIDENCE_DB_PASSWORD = process.env.EVIDENCE_DB_PASSWORD || secrets['destination.postgres.credentials.password'] || '';
    process.env.EVIDENCE_DB_SSL = process.env.EVIDENCE_DB_SSL || 'false';
}

/** normalize a base path env var: remove leading/trailing slashes, return empty string if not provided */
function normalizedBasePathFromEnv(varName) {
    const raw = process.env[varName] || '';
    const trimmed = raw.toString().trim();
    if (!trimmed) return '';
    return '/' + trimmed.replace(/^\/+|\/+$/g, '');
}

const BASE_PATH = normalizedBasePathFromEnv('SVELTE_BASE_PATH'); // set this in the workflow to "public.dlt-pipeline-orchestration" (no slashes)

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        paths: {
            base: BASE_PATH
        },
        prerender: {
            crawl: true,
            // allow prerender to continue on reasonable 404/5xx responses encountered while crawling dynamic routes
            handleHttpError: ({ status, path }) => {
                // skip pages that return 404 or server errors during prerender crawl
                if (status === 404 || status >= 500) {
                    console.warn(`Prerender: skipping ${path} (status ${status})`);
                    return 'continue';
                }
                // otherwise use default behaviour (fail)
            }
        }
    }
};

export default config;
