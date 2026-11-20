---
name: api-recon
description: Harvest website API endpoints, parameters, and frontend routes.
---

# Frontend API Reconnaissance

Systematically discover and harvest **Backend APIs** (paths, HTTP methods, parameters, response formats), **Frontend Routes**, and **UI Interaction Triggers** (tabs, dialogs, table actions) under an authorized assessment.

---

## Boundaries & Operational Constraints

This skill is strictly for **API and attack-surface discovery**, not active exploitation.

### Operational Boundaries

| Scope | Permitted | Prohibited |
|---|---|---|
| **Objective** | Enumerate paths, methods, parameters, routes, and triggers | SQLi/XSS/IDOR exploitation, brute force, destructive actions |
| **Authentication** | Client-side mock/stub to access post-auth UI views | Requesting credentials from users; unauthorized real submissions |
| **Runtime** | Hook interfaces with mock payloads to inspect SPA shell | Operations depending on real production sessions |

---

## Workflow Phases

### Phase 1: Static Harvesting
- Parse frontend bundles (JavaScript chunks, source maps if present).
- Extract declared API routes, URL patterns, query parameters, and endpoints.
- Save structured static endpoints to `OUTDIR/apis_static.json`.

### Phase 2: Route & Component Analysis
- Map client-side router configurations (`react-router`, `vue-router`, etc.).
- Identify navigation hierarchy, view permissions, and hidden admin views.

### Phase 3: Dynamic Runtime Observation
- Preload interception scripts to record outbound XHR and Fetch requests.
- Trigger UI components (buttons, dropdowns, navigation menus) to surface dynamic calls.
- Record outbound parameters and schema requirements.

### Phase 4: Correlation & Output
- Consolidate static and dynamic findings into a unified inventory.
- Document methods, parameter types, required headers, and authentication tiers.
