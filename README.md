<div align="center">

# aGsx Sentinel — Autonomous AI Security & Penetration Testing Console

**Enterprise-grade autonomous penetration testing platform powered by multi-agent AI reasoning and strict operational security.**

[![Go](https://img.shields.io/badge/Backend-Go%201.24+-00ADD8?style=for-the-badge&logo=go&logoColor=white)](https://golang.org)
[![Next.js](https://img.shields.io/badge/Frontend-Next.js%2015-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org)
[![License](https://img.shields.io/badge/License-AGPL--3.0-purple?style=for-the-badge)](LICENSE)

Maintained by [aGsx-bit](https://github.com/aGsx-bit)

</div>

---

> ### ⚠️ Legal & Ethical Security Disclaimer
> This software is designed and provided strictly for authorized security auditing, threat modeling, and defensive vulnerability research.
> - **Authorized Use Only**: Do not probe, scan, or execute attacks against any application, server, or network without prior written authorization from the system owner.
> - **Compliance**: The authors and contributors assume no liability for misuse or unauthorized activities conducted with this software.

---

## 🌟 Overview

**aGsx** is an end-to-end autonomous penetration testing platform. It integrates large language models (LLMs) with specialized offensive security tools, an attack-surface exploration graph, and real-time command interception guards.

Unlike basic script runners or raw chat interfaces, **aGsx** breaks down complex security assessments into structured graphs, tracks state across multi-turn exploration loops, captures verified HTTP traffic evidence, and generates reproducible penetration testing reports.

```text
┌────────────────────────────────────────────────────────────────────────┐
│                        aGsx Web Console (:3000)                        │
│               Next.js 15 · Tailwind CSS · shadcn/ui · i18n             │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ REST / SSE API
┌───────────────────────────────────▼────────────────────────────────────┐
│                        aGsx Backend Core (:8787)                       │
│                     Go 1.24+ · Norma Engine Router                     │
├───────────────────┬───────────────────┬────────────────────────────────┤
│   Multi-Agent     │   Dual Graphs     │       Security Guard           │
│   Orchestrator    │   (Assets + Path) │  (Command Intercept & Referee) │
└─────────┬─────────┴─────────┬─────────┴────────────────┬───────────────┘
          │                   │                          │
┌─────────▼─────────┐ ┌───────▼────────┐        ┌────────▼────────┐
│  59 System Tools  │ │ PostgreSQL     │        │ MITM Proxy      │
│  & MCP Servers    │ │ (Dual Graph)   │        │ (:8788)         │
└───────────────────┘ └────────────────┘        └─────────────────┘
```

---

## 🚀 Key Features

### 1. Autonomous Multi-Agent Hierarchy
- **Goal Decomposition**: Analyzes high-level scopes and breaks them into measurable, deliverable assessment objectives.
- **Strategic Planner**: Dispatches parallel workers, maintains exploration state, and tracks goal completion.
- **Offensive Workers**: Autonomous agents that conduct recon, fuzzing, and exploitation using bounded toolsets.
- **Specialist Roles**: Dedicated agents for Solo Pentest, Asset Recon, Vulnerability Retesting, Credential Harvesting, and Reporting.

### 2. Built-in Security Firewall & Command Interception
- **Real-Time Guard**: Static regex and behavioral rules intercept dangerous, destructive, or out-of-scope commands (`rm -rf`, `DROP DATABASE`, disk wipes, fork bombs).
- **LLM Fallback Referee**: Evaluates ambiguous tool calls for reversibility and asset ownership before execution.
- **Human-in-the-Loop**: Interactive approval queue when decisions require human verification.

### 3. Dual-Graph Knowledge Engine
- **Asset Graph**: Real-time topology tracking across three network tiers: `internet`, `boundary`, and `internal`.
- **Exploration Graph**: Maintains provenance and lineage from initial reconnaissance to root-cause exploitation and proof-of-concept (PoC).

### 4. Verified Traffic Binding & Automated Reporting
- **MITM Proxy**: Captures raw HTTP requests and responses generated during testing.
- **Traffic Evidence**: Verifiable HTTP evidence is bound directly to findings.
- **Executive & Technical Reports**: Generates structured Markdown reports with reproduction steps, PoC payloads, root cause analyses, and remediation advice.

---

## 🛠️ Architecture & Tech Stack

| Component | Technology | Description |
|---|---|---|
| **Backend Core** | Go 1.24+ | High-throughput agent router, task runner, and API server |
| **Frontend Web Console** | Next.js 15 (React 19) | Modern cybersecurity operations dashboard |
| **State & Database** | PostgreSQL | Relational graph storage for assets, findings, and events |
| **Styling & UI** | Tailwind CSS + Radix UI | Dark-mode native interface with custom branding |
| **Interception Proxy** | Go TLS MITM Engine | Local traffic recording and evidence preservation |

---

## 📦 Quickstart

### Prerequisites
- **Go**: 1.24 or higher
- **Node.js**: 20.x or higher (with `npm`)
- **PostgreSQL**: 15+

### 1. Database Setup
Ensure PostgreSQL is running and initialize the database:
```bash
createdb agsx
```

### 2. Backend Installation & Run
```bash
# Clone the repository
git clone https://github.com/aGsx-bit/aGsx-sentinel.git
cd aGsx-sentinel

# Build and start the backend
go build -o agsx ./cmd/artex
./agsx -addr :8787
```

### 3. Frontend Setup & Run
```bash
cd web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Default login: `aGsx` / `aGsx`.

---

## 📄 License

This project is licensed under the **GNU Affero General Public License v3.0 (AGPL-3.0)**. See the [LICENSE](LICENSE) file for details.
