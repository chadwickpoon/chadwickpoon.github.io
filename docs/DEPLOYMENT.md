# Deployment

Current verified review: [open the site](https://chadwickpoon-personal-site-cpoon166-gmailcoms-projects.vercel.app). This is a public generated URL with indexing disabled. See [current implementation checkpoint](DOG-WALKER-GUIDE.md) and [provider receipt](deployment-receipt.json) for source and acceptance evidence.

## Selected setup

- Vercel Hobby only. No paid plan, add-on, model, database, analytics, or external map service is required.
- A separate personal-site project, not the Videoath project. Verify the linked project/team before each deploy.
- Node 24; install npm ci; framework Next.js; build npm run build. No static-export output override.
- vercel.json disables Git-triggered deployments so ordinary pushes cannot publish the site. Review deployments are explicit.
- SITE_INDEXING_ENABLED defaults false. No credentials are needed to build.
- Namecheap registration and current live DNS remain unchanged during scaffold work.

## Review workflow

1. Work in the existing personal repository and review the local site.
2. Run npm run check, npm run build, and npm test. Inspect the real UI on desktop and mobile.
3. Verify personal Git author, source remote, and active account. Checkpoint the candidate.
4. Verify the Vercel Hobby team and personal-site project. Deploy the candidate to its generated review address.
5. Verify the actual deployed pages and assets. Vercel classifies a new project’s first deployment as Production; that label does not mean the custom domain has moved. Do not describe a generated URL as private without checking deployment protection.

## Main-site publication, when requested

1. Confirm the reviewed candidate and substantive public content. Set SITE_INDEXING_ENABLED=true for that release.
2. Deploy/stage a production candidate. Keep automatic custom-domain assignment disabled so promotion is deliberate.
3. Add chadwickpoon.com and www.chadwickpoon.com to this verified project; use the exact DNS values Vercel supplies. Preserve unrelated Namecheap records.
4. Promote the reviewed deployment when requested. Verify HTTPS, apex, www redirect with path/query, direct stories, assets, robots, sitemap, and real 404s.
5. Record project ID, deployment ID, source commit, domain result, and date in the implementation receipt and Obsidian.

Keep the previous Sites deployment and DNS values through cutover. .openai/hosting.json and legacy/sites-v1 retain the former setup; do not run the Sites publisher for the new Next app. Recover the prior source from commit 5dd3e900fe1b13908af61c4395f5fa16986315d7 if needed.

Sources: [Next.js on Vercel](https://vercel.com/docs/frameworks/full-stack/nextjs), [environments and promotion](https://vercel.com/docs/deployments/environments), [custom domains](https://vercel.com/docs/domains/working-with-domains/add-a-domain).
