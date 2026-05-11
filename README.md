# MoltClaw

**Full-featured TypeScript AI Gateway with multi-Agent routing, session management, and cloud orchestration.**

> Part of the [Clawland](https://github.com/Clawland-AI) ecosystem.

---

## Overview

MoltClaw is the **cloud brain** of the Clawland ecosystem — a TypeScript-based AI Gateway that orchestrates multiple AI agents, routes requests intelligently, and manages sessions across distributed edge nodes.

## Key Features

- **Multi-Agent Routing** — Route requests to the best AI model/agent based on task type, cost, and latency
- **Session Management** — Persistent conversations with context across multiple interactions
- **Fleet Orchestration** — Command and monitor edge Claw agents (picclaw, nanoclaw, microclaw)
- **Plugin System** — Extensible architecture for custom integrations
- **Multi-Provider Support** — OpenAI, Anthropic, Google Gemini, local models, and more

## Architecture

```
┌─────────────────────────────────────────────┐
│                 MoltClaw (Cloud)             │
│  ┌──────────┐ ┌──────────┐ ┌──────────────┐│
│  │  Router   │ │ Sessions │ │Fleet Manager ││
│  └──────────┘ └──────────┘ └──────────────┘│
│  ┌──────────┐ ┌──────────┐ ┌──────────────┐│
│  │ Plugins  │ │  Auth    │ │  Analytics   ││
│  └──────────┘ └──────────┘ └──────────────┘│
└─────────┬───────────┬───────────┬───────────┘
          │           │           │
     ┌────▼───┐  ┌────▼───┐  ┌───▼────┐
     │PicClaw │  │NanoClaw│  │MicroClaw│
     │ Edge 1 │  │ Edge 2 │  │ Edge 3  │
     └────────┘  └────────┘  └─────────┘
```

## Tech Stack

- **Language:** TypeScript / Node.js
- **Runtime:** >1GB RAM, Cloud / Mac Mini / any server
- **Framework:** TBD (contributions welcome!)

## Status

🚧 **Pre-Alpha** — Architecture design phase. Looking for contributors!

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for MoltClaw setup, development, test, style, and PR guidelines. The shared [Clawland Contributing Guide](https://github.com/Clawland-AI/.github/blob/main/CONTRIBUTING.md) also applies.

**Core contributors share 20% of product revenue.** Read the [Contributor Revenue Share](https://github.com/Clawland-AI/.github/blob/main/CONTRIBUTOR-REVENUE-SHARE.md) terms.

## License

Apache License 2.0 — see [LICENSE](LICENSE) for details.
