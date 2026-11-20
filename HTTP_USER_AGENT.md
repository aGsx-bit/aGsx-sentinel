# HTTP Request Identifier Configuration

This document specifies the User-Agent and client identification strategy across backend Go HTTP requests, Python/JavaScript helper scripts, installation routines, and the integrated Norma SDK.

## Overview & Policy

To maintain realistic traffic profiles and prevent automated fingerprinting:
1. **Random Desktop Pool**: A rotating pool of standard desktop browser User-Agents (Chrome, Edge, Firefox, Safari across Windows, macOS, and Linux) is utilized by default.
2. **Standard UA Format**: Follows modern Chromium and Firefox UA reduction guidelines without appending tool signatures or artificial suffixes.
3. **Explicit Header Precedence**: Any User-Agent header explicitly specified in custom HTTP tools, scripts, or traffic replay takes precedence over the default pool.
4. **Environment Override**: The `AGSX_HTTP_USER_AGENT` environment variable can be set to enforce a static identifier when required by engagement rules.

## Rotation Behavior
- **Backend Core**: Selects a fresh User-Agent on logical session initialization.
- **Web Fetch / Proxy**: Preserves the session User-Agent across redirects and authentication hops.
- **Header Sanitization**: Validates printable ASCII characters to prevent header injection vulnerabilities.
