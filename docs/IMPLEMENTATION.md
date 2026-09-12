# Foundation checkpoint — September 12, 2026

## Implemented

Next.js 16.3.5, React 19.2.8, strict TypeScript 5.9.3, Tailwind 4.3.3, Motion 12.43.0, React Aria 1.20.0, and Node 24. The existing repository now contains a working welcome, local character reactions, accessible route choices, six gallery panels, five work/play story pages, About, and an empty first-trip collection. Public content remains concise and grounded in the supplied profile.

The guide uses a provisional, unmodified original PNG. Thumbnails are conceptual covers. No case-study metrics, trips, live AI features, or backend records were fabricated. No paid service is configured.

## Infrastructure

The separate Vercel project is recorded in vercel-project.json. Its verified plan is Hobby, Node 24, Next.js framework, automatic custom-domain assignment disabled, and standard Vercel deployment protection enabled. It has no Git auto-deploy connection; repository configuration also disables Git deployment triggers. The custom domain remains on the previous Sites host until a requested cutover.

## Verification

- npm run verify passed: lint, strict type checking, production build, and all 10 Playwright checks on desktop/mobile.
- Browser checks exercised guided interest selection, gallery filtering, direct stories, reload, browser Back, keyboard controls, reduced motion, asset loading, actual 404s, robots, canonical metadata, and www path/query redirect.
- Actual in-app browser inspection at desktop and 390px width verified the welcome, choice controls, filtered gallery, and hiking page. It found a decorative waveform overflow, which was corrected.
- Vercel upload inspection excludes the legacy site, docs, tests, credentials, caches, and previous build artifacts. Hosted verification is recorded below.

## Verified hosted review — September 12, 2026

[Open the working site](https://chadwickpoon-personal-site-cpoon166-gmailcoms-projects.vercel.app). This generated review alias is publicly accessible; search indexing remains disabled. The immutable deployment URL retains Vercel sign-in protection. Do not describe the review alias as private.

- Vercel state: READY; project `prj_Jzsu0sdAhwMEyAlh8gl1YhJOLvdX`; plan re-verified Hobby.
- Deployment: `dpl_GNP9JGbM7RignYMTXazaCVeLLDsX`.
- Deployed source: `ec08c41c2db19cf2037007597a9a557d0ac75591` on `codex/personal-site-foundation`.
- Vercel labels this first bootstrap deployment Production. Neither `chadwickpoon.com` nor `www.chadwickpoon.com` is attached to the new project; automatic custom-domain assignment remains disabled. No DNS cutover occurred.
- Hosted acceptance: 8 checks passed on desktop/mobile. The two custom-Host redirect checks are intentionally local-only and passed in the 10-check local run. They require verification again on the real domain at cutover.
- Hosted homepage visually inspected in the in-app browser; character and choice controls render correctly.
- Provider receipt: `docs/deployment-receipt.json`. It records source commit, deployment status, aliases, plan, and project controls without credentials.

## Next content/design work

Choose the final character; refine the opening and each panel’s visual direction; expand the first substantive case study with attributable decisions/outcomes; supply one actual hiking trip and photographs; choose a bounded AI demo if desired. These are next experiences to build on the completed foundation, not hidden scaffold dependencies.
