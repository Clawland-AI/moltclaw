# Contributing to MoltClaw

Thank you for your interest in contributing to MoltClaw! This document provides guidelines and instructions for setting up your development environment and submitting contributions.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Development Setup](#development-setup)
- [Building and Running](#building-and-running)
- [Running Tests](#running-tests)
- [Code Style Guide](#code-style-guide)
- [Submitting Changes](#submitting-changes)
- [Getting Help](#getting-help)

## Code of Conduct

This project adheres to the [Clawland Code of Conduct](https://github.com/Clawland-AI/.github/blob/main/CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Development Setup

### Prerequisites

- **Node.js**: v18.x or later (LTS recommended)
- **npm**: v9.x or later (comes with Node.js)
- **Git**: Any recent version
- **TypeScript**: v5.x or later (installed via npm)

### Installation

1. **Fork the repository** on GitHub
2. **Clone your fork**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/moltclaw.git
   cd moltclaw
   ```

3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/Clawland-AI/moltclaw.git
   ```

4. **Install dependencies**:
   ```bash
   npm install
   ```

5. **Verify installation**:
   ```bash
   npm run build
   ```

## Building and Running

### Development Mode

Run MoltClaw in development mode with hot-reloading:

```bash
npm run dev
```

This will:
- Watch for file changes
- Automatically recompile TypeScript
- Restart the server on changes

### Production Build

Create an optimized production build:

```bash
npm run build
```

The compiled JavaScript will be output to the `dist/` directory.

### Run Production Build

```bash
npm start
```

### Environment Variables

Create a `.env` file in the project root:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# AI Provider API Keys (optional for testing)
OPENAI_API_KEY=your_key_here
ANTHROPIC_API_KEY=your_key_here

# Fleet Configuration (optional)
EDGE_API_URL=http://localhost:4000
```

## Running Tests

### Run All Tests

```bash
npm test
```

### Run Tests in Watch Mode

```bash
npm run test:watch
```

### Run Tests with Coverage

```bash
npm run test:coverage
```

### Linting

Check code style and potential errors:

```bash
npm run lint
```

Auto-fix linting issues:

```bash
npm run lint:fix
```

### Type Checking

Verify TypeScript types without building:

```bash
npm run typecheck
```

## Code Style Guide

### TypeScript

- Use **TypeScript strict mode** (already enabled in `tsconfig.json`)
- Prefer `interface` over `type` for object shapes
- Use **explicit return types** for public functions
- Avoid `any`; use `unknown` if type is truly unknown

#### Example

```typescript
// Good ✅
interface AgentRequest {
  message: string;
  userId: string;
}

async function routeRequest(req: AgentRequest): Promise<AgentResponse> {
  // ...
}

// Bad ❌
async function routeRequest(req: any) {
  // ...
}
```

### Naming Conventions

- **Files**: kebab-case (`agent-router.ts`, `session-manager.ts`)
- **Classes**: PascalCase (`SessionManager`, `AgentRouter`)
- **Functions/Variables**: camelCase (`routeRequest`, `agentId`)
- **Constants**: UPPER_SNAKE_CASE (`MAX_RETRIES`, `DEFAULT_TIMEOUT`)
- **Interfaces**: PascalCase with no prefix (`AgentConfig`, not `IAgentConfig`)

### Code Organization

```
src/
├── core/          # Core gateway logic (router, sessions)
├── agents/        # Agent implementations
├── plugins/       # Plugin system
├── utils/         # Utility functions
├── types/         # TypeScript type definitions
└── index.ts       # Entry point
```

### Comments

- Use **JSDoc** for public APIs:
  ```typescript
  /**
   * Routes an AI request to the best available agent.
   * @param request - The agent request object
   * @returns Promise resolving to agent response
   * @throws {AgentError} If no agent is available
   */
  async function routeRequest(request: AgentRequest): Promise<AgentResponse> {
    // ...
  }
  ```

- Use `//` for inline comments (sparingly)
- Explain **why**, not **what**

### Formatting

This project uses **Prettier** for consistent formatting. The CI will check formatting automatically.

Run Prettier manually:

```bash
npm run format
```

Check formatting without changing files:

```bash
npm run format:check
```

## Submitting Changes

### Workflow

1. **Create a branch** from `main`:
   ```bash
   git checkout main
   git pull upstream main
   git checkout -b feat/your-feature-name
   ```

2. **Make your changes** and commit:
   ```bash
   git add .
   git commit -m "feat: add agent routing logic"
   ```

3. **Push to your fork**:
   ```bash
   git push origin feat/your-feature-name
   ```

4. **Open a Pull Request** on GitHub against `Clawland-AI/moltclaw:main`

### Commit Message Format

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style (formatting, missing semi-colons, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(router): add multi-model routing
fix(session): resolve memory leak in session cleanup
docs(contributing): update development setup instructions
```

### Pull Request Guidelines

- **Title**: Use Conventional Commits format
- **Description**: 
  - Describe **what** changed and **why**
  - Reference related issues (`Closes #123`)
  - Include screenshots for UI changes
- **Checklist**:
  - [ ] Code follows style guide
  - [ ] Tests pass (`npm test`)
  - [ ] Linting passes (`npm run lint`)
  - [ ] Type checking passes (`npm run typecheck`)
  - [ ] Documentation updated (if needed)

### PR Review Process

1. **Automated Checks**: CI will run tests, linting, and type checking
2. **Code Review**: A maintainer will review your code
3. **Feedback**: Address any requested changes
4. **Approval**: Once approved, a maintainer will merge your PR

## Getting Help

- **Issues**: Check [existing issues](https://github.com/Clawland-AI/moltclaw/issues) or open a new one
- **Discussions**: Join [GitHub Discussions](https://github.com/orgs/Clawland-AI/discussions)
- **Discord**: (Link TBD)

## License

By contributing, you agree that your contributions will be licensed under the same license as the project (see [LICENSE](LICENSE)).

---

**Thank you for contributing to MoltClaw!** 🎉
