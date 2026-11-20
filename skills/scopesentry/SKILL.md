---
name: scopesentry-mcp
description: Manage security scanning platform (projects, tasks, templates, assets, nodes) via ScopeSentry MCP.
---

# ScopeSentry MCP Guide

Intended for users with a deployed ScopeSentry instance. Connect to the scanning platform via MCP clients without local source code.

## 1. Setup

### 1.1 Service Accessibility
- Default Web UI: `http://<host>`
- MCP Endpoint: `http://<host>/mcp`

### 1.2 Generate API Key
1. Sign in to the ScopeSentry web interface.
2. Navigate to **API Key Management** and generate a new key.
3. Save the returned `ssk_...` token.

### 1.3 Configure MCP Client
Configure your MCP settings file:

```json
{
  "mcpServers": {
    "scopesentry": {
      "url": "http://<host>:8082/mcp",
      "headers": {
        "X-API-Key": "ssk_your_key_here"
      }
    }
  }
}
```

---

## 2. Tools Overview

| Tool | Description |
|---|---|
| `list_projects` | List all security projects |
| `get_project` | Get detailed project configuration and statistics |
| `list_tasks` | List scan tasks and progress status |
| `create_task` | Launch an automated scan task |
| `pause_task` | Pause a running scan task |
| `resume_task` | Resume a paused scan task |
| `stop_task` | Abort a scan task |
| `list_assets` | Query discovered assets with DSL filtering |
| `get_asset` | Retrieve specific asset details |
| `list_vulnerabilities` | List verified vulnerabilities |
| `list_nodes` | View scanner worker cluster nodes and status |

---

## 3. Best Practices
- Query projects first using `list_projects` before creating tasks.
- Use structured DSL queries with `list_assets` to avoid volumetric data overloads.
- Verify node availability using `list_nodes` before scheduling intensive tasks.
