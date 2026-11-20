# Changelog

All notable changes to the **aGsx** platform are documented in this file.

## [1.0.0] - 2026-11-20

### Added
- **Autonomous Multi-Agent Architecture**: Introduced Goal Decomposer, Strategic Planner, Offensive Workers, and Specialist Agents (Solo Pentest, Asset Recon, Vulnerability Retester, Credential Harvester, Report Writer).
- **Interactive Security Firewall**: 20 static regex interception rules and an LLM contextual referee for operational security (OPSEC).
- **Dual-Graph Engine**: Full asset topology tracking across three network tiers (`internet`, `boundary`, `internal`) and live exploration graph lineage.
- **59 Built-in Security Tools**: Native integration for reconnaissance, probing, DNS resolution, HTTP requests, command execution, and vulnerability management.
- **MITM Traffic Capture & Evidence Binding**: Local proxy recording raw HTTP requests and binding verifiable traffic evidence directly to findings.
- **Automated Report Generation**: Structured Markdown reporting with step-by-step reproduction instructions, PoC payloads, and remediation guidance.
- **Modern Web Console**: Next.js 15 interface with dark mode, real-time logs, live telemetry, and multi-language support (English default with Kurdish language pack).
