AGENTS — Repository Guidance for Autonomous Coding Agents

This file collects commands and code-style conventions for agents working in this repository. Additions or edits should be conservative: follow existing patterns and don't refactor unrelated code without an explicit task.

1) Project layout & quick facts
- Root orchestrates client + server: `package.json` scripts at project root run install/start for both subprojects.
- Client (React Create React App) lives in `client/`.
- Server (Express) lives in `server/`.
- No monorepo tooling (lerna, pnpm workspace) is used.

2) Build / start / test / install commands
- Install all deps (root):
  - `npm run install` — runs `cd server && npm i && cd ../client && npm i` (defined in root `package.json`).

- Development (root):
  - `npm start` — runs a production-or-dev switch; by default runs `npm run start:dev` which starts both server (nodemon) and client (react-scripts) concurrently.
  - `npm run start:dev` — concurrently runs `cd server && npm run watch` and `cd client && npm start`.

- Server only:
  - `cd server && npm start` — start production server (node server.js).
  - `cd server && npm run watch` — start development server under `nodemon`.

- Client only:
  - `cd client && npm start` — start CRA dev server.
  - `cd client && npm run build` — create production build.

- Tests (client):
  - `cd client && npm test` — runs the CRA test runner (Jest).
  - Run a single test by name (preferred):
    - `cd client && npm test -- -t "Your test name regex"`
      - Example: `cd client && npm test -- -t "renders Home page"`
  - Run a single test file directly (alternate):
    - `cd client && npm test -- src/components/MyComponent.test.js`
  - Run Jest once (no watch):
    - `cd client && npm test -- --watchAll=false`

Notes: There are currently no server-side automated tests in `server/`.

3) Linting & formatting
- There is an `eslintConfig` entry in `client/package.json` extending `react-app`.
- The repo does not include Prettier or an ESLint config in the server side; agents should avoid adding global tooling without a task request.

Suggested ad-hoc commands (safe to run via npx if not installed):
- Run ESLint on client files:
  - `cd client && npx eslint . --ext .js,.jsx` (will fetch eslint if needed; may prompt when run the first time)
- Run ESLint on server files:
  - `cd server && npx eslint . --ext .js`
- Format with Prettier (if you decide to add Prettier to the repo, prefer a follow-up PR):
  - `npx prettier --write "**/*.{js,jsx,json,css,md}"`

4) Coding style guidelines (JavaScript / React)
These guidelines aim to keep code consistent; follow existing patterns in the repo when in doubt.

- General
  - Use modern ES2017+ features (arrow functions, const/let, async/await) — but preserve code style in files you edit.
  - Prefer small functions with a single responsibility.
  - Keep changes minimal for simple fixes. Major refactors require an explicit task.

- Imports
  - Use named/default imports consistently with the module's export. Example:
    - `import React from 'react'` and `import { useState } from 'react'`.
  - Group imports in this order: 1) core/node_modules, 2) external libraries, 3) absolute project imports (none used widely here), 4) relative imports. Leave a blank line between groups.

- Formatting
  - Use 2 spaces or the project's existing file indentation (files use 2 spaces in client). Match the surrounding file.
  - End files with a single newline.
  - Wrap long lines sensibly; prefer breaking expressions over horizontal scrolling.
  - Keep JSX props one-per-line when a component has 3+ props or multi-line children.

- Types
  - This repository is JavaScript (not TypeScript). Use JSDoc comments for complex functions if helpful.
  - When adding new modules, prefer explicit runtime checks for shapes of objects where required (eg. validate request bodies in `server/` endpoints).

- Naming conventions
  - Files and folders: use kebab-case for filenames in client (existing files like `Home.js` are PascalCase for React components — keep that convention for components). Summary:
    - React components: PascalCase filenames and export default the component (eg. `Home.js`, `App.js`).
    - Utility modules: camelCase or kebab-case depending on existing usage (match local directory).
  - Variables and functions: camelCase.
  - Constants: UPPER_SNAKE_CASE only for true constants (rare here); otherwise use camelCase.

- React specifics
  - Use functional components with hooks (this repo uses function components).
  - Use `useEffect` for side effects; always declare dependencies explicitly and avoid disabling lint rules routinely.
  - Lift state up to the nearest common ancestor; prefer prop drilling over adding global state unless required.
  - Use `key` on list elements and choose stable keys (id when available).

- CSS & assets
  - Keep styles scoped to their existing files. The project uses plain CSS files (`index.css`). Avoid adding a new CSS methodology without a task.
  - Place static images in `client/public` or `assets/images/` following existing structure.

- Error handling
  - Server routes should validate inputs and return explicit HTTP statuses and JSON error objects. Example:
    - `res.status(400).json({ error: 'missing email' })`
  - Prefer try/catch around async/await in server controllers. Log errors with context but avoid leaking secrets in logs.
  - On client, surface user-facing errors via UI components and avoid console-only messages for recoverable flows.

- Async / Promises
  - Use async/await with try/catch blocks. If using Promise chains, return the Promise and handle errors at the top level.

- Tests
  - Tests live alongside the code in `client/src` using CRA/Jest. Follow the existing test naming `*.test.js`.
  - Keep tests deterministic and avoid network calls; mock `axios` or other HTTP clients when exercising components that call the API.

5) Commit & PR behavior for agents
- Do not create commits unless explicitly asked. If asked to commit, keep commits small and focused and use an imperative message (eg. `fix: validate mailer input`).
- Never alter or remove files outside the scope of the assigned task. Respect unrelated local changes in the working tree.
- Do not push force; do not change git config or credentials.

6) Cursor / Copilot / automation rules
- Repo does not contain Cursor rules in `.cursor/rules/` or a top-level `.cursorrules` file (none found).
- Repo does not include `.github/copilot-instructions.md` (none found).
- If these files are added later, follow them verbatim; list any higher-priority rules at the top of this file.

7) When you are blocked
- If a task is ambiguous in a way that materially changes outcome (API keys, behavior, destructive change), ask one targeted question. Include a recommended default in the question and what will change if the user picks the other option.

8) Helpful commands & troubleshooting
- Show uncommitted changes: `git status --porcelain` (agents should not run git commands unless asked).
- Install missing eslint / prettier locally when adding linters: `cd client && npm i -D eslint prettier`.

9) Contact / context
- The original author: `christopherConcannon` (see README). Preserve their code style where possible.

Appendix: example single-test runs
- By test name (recommended):
  - `cd client && npm test -- -t "renders Home"`
- By file path (alternate):
  - `cd client && npm test -- src/pages/Home.test.js`

If anything in this document looks wrong or you want project-wide linting/formatting added, open a PR describing the tooling and include configuration files (`.eslintrc`, `.prettierrc`) rather than making ad-hoc changes.
