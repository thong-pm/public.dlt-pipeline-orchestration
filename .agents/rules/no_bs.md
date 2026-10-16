# Anti-Corporate / No-BS Writing & Engineering Rules

## 1. Absolute Prohibition on Corporate Fluff & Overclaims
- NEVER use marketing buzzwords or unsubstantiated claims in READMEs, documentation, social posts, or code comments.
  - FORBIDDEN words: "production-ready", "enterprise-grade", "zero-latency", "seamless", "cutting-edge", "game-changing", "guarantee duplicate-free", "battle-tested".
  - FORBIDDEN phrases: "eliminating expensive monthly subscriptions", "before stakeholders/CFO notice", "wall of text" corporate preambles.
- Speak plain, grounded, matter-of-fact engineering English. Describe what the code actually does, how it works, and its limitations.

## 2. Technical Accuracy & Failure Mode Verification
- NEVER assume or claim a system handles a failure mode without verifying the exact implementation:
  - If claiming alerts on failure, verify the error trap / exit code logic actually dispatches the alert on abnormal termination.
  - If claiming idempotency, verify table write dispositions (`merge` vs `append`) and primary keys across every resource.
- When generating infrastructure, scripts, or orchestrators, explicitly inspect and explain failure paths (what happens when an API drops, network timeouts, credentials expire).

## 3. Clear Separation of Concerns
- Maintain clear boundaries between:
  - Data ingestion & extraction (`dlt` / Python)
  - Data transformation & modeling (`dbt` / SQL)
  - Runtime execution & container entrypoints (Python / Docker)
  - Infrastructure provisioning (Terraform / IaC vs CLI scripts)
- Do not blur runtime orchestration with cloud provisioning.

## 4. Documentation & Post Standards
- Keep READMEs and posts concise, direct, and developer-first:
  - State the problem, the tools used, the architecture, and the honest roadmap / known gaps.
  - Use short checklists (`- [ ]`) instead of walls of text.
  - Never apologize for scale or create defensive excuses; present factual engineering trade-offs.

## 5. Strict Prohibition on Defensive & Epistemic Buzzwords
- NEVER use defensive or epistemic posturing adjectives to prove authenticity:
  - FORBIDDEN terms: "ground truth", "deterministic", "golden record", "single source of truth", "canonical", "audit-proof", "observability", "resilience", "self-healing".
  - Use plain technical nouns and verbs: "SaaS APIs" (not "ground truth sources"), "lookup table" (not "deterministic spine"), "retry loop" (not "resilient self-healing engine"), "alerts" (not "observability framework").
- Ban on Ephemeral Snapshot Data in Documentation:
  - NEVER paste transient query outputs, point-in-time row counts, dollar amounts, or specific date variances into READMEs or architectural docs.
  - Docs describe schema, mechanics, and invariant entity relationships, NOT snapshot dashboard values.
- The "Spec, Not Pitch" Standard:
  - Write documentation like an internal systems manual, not a vendor pitch deck or case study defense. If a library feature does something standard (dlt evolves schemas, dbt runs SQL, tenacity retries), state what it does in 5 words or omit it entirely.
