# Chadwick Poon personal website

This is a personal, non-commercial portfolio. Use only public or user-approved biographical content. Do not invent roles, dates, outcomes, trip data, or metrics, and do not import private employer or Videoath operational material.

## Product direction

Read the canonical [Personal Site brief](</Users/chadwick.poon/Library/Mobile Documents/iCloud~md~obsidian/Documents/alan-skills/Knowledge Base/20 Personal/Projects/Personal Site/Personal Site.md>) and decision record before design/content work. The selected direction combines Neal.fun’s thumbnail gallery and a Duolingo-inspired optional welcome. The astronaut was rejected; Untitled UI logo integration and final selection are deferred. Chadwick selected the Dog Walker PFP and original GIF as his personal guide on September 13 because he has a corgi. Keep the gallery unfiltered; welcome choices can prioritize order but must retain every panel. Keep logo work separate and deferred. Videoath is the first detailed interactive experience, with original written examples rather than a live assessment.

## Architecture

- Next.js App Router, React, strict TypeScript, Tailwind, Motion, and selected React Aria controls. Node 24; exact dependencies in package-lock.json.
- Edit src/app for routes, src/features for interactions, src/components for shared presentation, src/content for typed public content, and public for curated assets.
- Keep public pages prerendered; use narrow client components for interaction. No Convex, authentication, billing, analytics, model API, or map service is configured initially.
- Reuse selected Videoath presentation patterns without importing its providers, live backend, credentials, or learner data.
- Preserve original character bytes. docs/ASSETS.md records provenance and provisional selection. Do not publish the full archive.
- legacy/sites-v1 preserves the former implementation; it is not part of the active app or Vercel upload. .openai/hosting.json identifies the existing Sites deployment for recovery, not the new deployment target.

## Verification

Use Node 24. Run npm ci, npm run check, npm run build, and npm test. Playwright needs a Chromium installation. Inspect the actual local page and meaningful interactions on desktop and a narrow viewport before calling it ready. Development runs at http://127.0.0.1:4327. Tests use a separate production server at port 4328.

## Identity and release

- Personal repository-local identity: Chadwick Poon <chadwickpoon@gmail.com>, user.useConfigOnly=true. Preserve global Alan identity.
- Before committing/pushing, verify origin is chadwickpoon/chadwickpoon.github.io, gh api user is chadwickpoon, and outgoing author/committer emails contain no employer identity.
- Selected infrastructure: a separate personal-site project on Vercel Hobby. Chadwick explicitly requires free, non-commercial use; do not upgrade or add paid services.
- Ordinary pushes must not update the main website. Git deployments are disabled in vercel.json; review deployments are explicit. Production/custom-domain publication requires Chadwick’s request.
- Namecheap remains the registrar. Keep chadwickpoon.com canonical and preserve www path/query redirects. Do not change live DNS as part of scaffolding or local review.
- Keep SITE_INDEXING_ENABLED=false for this scaffold. Enable indexing only for an approved public release.
- Follow docs/DEPLOYMENT.md. Check exact project/team and release result; never deploy this app into Videoath’s project or change Videoath’s infrastructure.
