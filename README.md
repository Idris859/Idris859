# Horizon Atlas

Horizon Atlas is an independently designed spatial-exploration application. This repository contains its initial Vite, React, and TypeScript foundation; it does not reuse source code, proprietary assets, credentials, or branding from any reference product.

## Prerequisites

- Node.js 20 or later
- npm 10 or later

## Getting started

```bash
cp .env.example .env
npm install
npm run dev
```

Open the local URL printed by Vite. API credentials are optional at this stage; leave the values in `.env` blank until a provider is selected.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run build` | Type-check and create a production build. |
| `npm run preview` | Serve the production build locally. |
| `npm test` | Run Vitest unit and component tests. |
| `npm run test:e2e` | Run Playwright end-to-end tests. |
| `npm run lint` | Lint TypeScript and React source. |
| `npm run typecheck` | Run TypeScript without emitting files. |
| `npm run doctor` | Run type checks, linting, and unit tests. |

## Reference review

The required feature inventory is recorded in [`docs/reference-inventory.md`](docs/reference-inventory.md). The `reference/` directory is deliberately isolated from the application source tree for reference-only materials.
