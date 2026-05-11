# Contributing to MoltClaw

Thanks for helping build MoltClaw, the L3 cloud gateway for the Clawland edge-agent network. This guide covers the expected local workflow for TypeScript, docs, tests, and pull requests.

## Prerequisites

Install one of these JavaScript runtimes/package managers:

- Node.js 22 or newer
- pnpm 9 or newer, recommended for regular development
- Bun 1.1 or newer, acceptable for quick local runs when dependencies support it
- Git

Docker is optional unless you are changing deployment files.

## Clone and install

```bash
git clone https://github.com/Clawland-AI/moltclaw.git
cd moltclaw
pnpm install
```

If you prefer Bun:

```bash
bun install
```

Use the same package manager for a branch once the lockfile exists. Do not mix `pnpm`, `npm`, and `bun` lockfiles in one PR.

## Run the development server

Start the TypeScript entrypoint in watch mode:

```bash
pnpm dev
# or
bun run dev
```

The gateway reads `PORT` from the environment and defaults to `3000`:

```bash
PORT=8080 pnpm dev
```

## Build and start

Compile TypeScript and run the built output:

```bash
pnpm build
pnpm start
```

Equivalent Bun commands are:

```bash
bun run build
bun run start
```

## Tests and checks

Run these before opening a PR:

```bash
pnpm test
pnpm lint
pnpm build
```

For documentation-only changes, at minimum check Markdown formatting, links, and code fences. If the change touches TypeScript, configuration, routes, schemas, or runtime behavior, run the full test/lint/build set.

## Code style

- Use TypeScript and ESM modules.
- Keep functions small and name them by gateway behavior, not implementation details.
- Prefer explicit request/response types for API boundaries.
- Keep environment variables documented when adding configuration.
- Do not commit `.env` files, API keys, local logs, `node_modules`, or build output.
- Run the formatter before committing:

```bash
pnpm format
```

## Pull request process

1. Create a branch from the latest `main`.
2. Keep the PR focused on one issue or one small behavior change.
3. Add or update tests when changing behavior.
4. Update README or docs for new commands, environment variables, endpoints, or deployment steps.
5. Run the relevant checks and include the commands/results in the PR body.
6. Link the issue with `Closes #<issue-number>` when the PR fully resolves it.
7. Respond to review feedback with small follow-up commits.

## Suggested PR checklist

- [ ] The change is scoped to one issue.
- [ ] TypeScript code is formatted.
- [ ] Tests/lint/build were run when applicable.
- [ ] Documentation was updated for user-facing behavior.
- [ ] No secrets, local config, or generated artifacts are committed.