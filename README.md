# Chadwick Poon’s personal site

A playful, non-commercial personal website: a character welcome, an explorable project gallery, and directly linkable stories. Built with the same frontend foundation as Videoath, simplified for this project.

## Run locally

Use Node 24 (see .nvmrc), then:

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:4327. No service credentials are required.

## Verify

```sh
npm run check
npm run build
npx playwright install chromium
npm test
```

Tests cover the guided choices, gallery ordering, direct links, keyboard controls, narrow layout, metadata, missing routes, and canonical redirect. They run against a separate production server at port 4328. Set TEST_BASE_URL to verify a hosted deployment where access allows.

## Project structure

| Directory | Purpose |
|---|---|
| src/app | Pages, metadata, and future route handlers |
| src/features/character | Local guide state, image presentation, speech bubble |
| src/features/guide | Accessible opening choices |
| src/features/gallery | Project grid and ordering |
| src/features/videoath | Illustrative practice walkthrough |
| src/features/boardy | Guided introduction explorer |
| src/content | Public stories and future actual trip data |
| public | Selected character and site assets |
| tests | Browser-level journey and routing checks |
| docs | Architecture, asset provenance, deployment, implementation record |
| legacy/sites-v1 | Preserved pre-migration site, excluded from deployment |

## Decisions and hosting

The canonical [Personal Site project](</Users/chadwick.poon/Library/Mobile Documents/iCloud~md~obsidian/Documents/alan-skills/Knowledge Base/20 Personal/Projects/Personal Site/Personal Site.md>) lives in Obsidian. Code lives in this existing repository and Codex project.

Vercel Hobby is the selected hosting destination. Namecheap retains the domain. The live domain remains on ChatGPT Sites until a separately requested cutover. Read [deployment instructions](docs/DEPLOYMENT.md), [architecture](docs/ARCHITECTURE.md), and [asset provenance](docs/ASSETS.md).

This foundation has no database, login, payments, analytics, live AI calls, or external map requests. Story summaries are based on the supplied profile and project brief. The Videoath story includes a complete illustrative practice walkthrough with original written feedback. Boardy has a separate introduction explorer with three reasons to connect and six original fictional scenarios. Deeper case studies, a real hiking trip, and any live AI demo remain content work. The Dog Walker portrait and original GIF represent Chadwick in the welcome; the Untitled UI integration and final logo choice are deferred. See [the completed experience and review receipt](docs/WELCOME-EXPERIENCE.md).

See [the Boardy experience](docs/BOARDY-EXPERIENCE.md) for that chapter. [Dog Walker and the open gallery](docs/DOG-WALKER-GUIDE.md) is the latest visual checkpoint.
