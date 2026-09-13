# Main-site publication — September 13, 2026

The approved personal site is live at [chadwickpoon.com](https://chadwickpoon.com/), hosted on the separate Vercel Hobby project. Namecheap remains the registrar and DNS provider. [www.chadwickpoon.com](https://www.chadwickpoon.com/) returns a permanent 308 redirect to the apex, preserving paths and query strings. Both addresses passed HTTPS checks with certificate validation enabled.

Chadwick approved the current design with: “go ahead and first publish this … good enough as is.” The release preserves the Dog Walker portrait and original GIF, the optional welcome, all six gallery panels without filtering, and the Videoath and Boardy walkthroughs. Logo work, actual hiking trips, deeper case studies, and a live AI demo remain future work.

## Release identity

- Source: `50c598b7cd5c58c01ac4ab9da14521d6a401361e`, branch `codex/personal-site-foundation`.
- Deployment: `dpl_45PEHbbUMH5dVQKQC3mocM2fP6eZ`, READY.
- Immutable deployment: https://chadwickpoon-personal-site-10eirfglu.vercel.app
- Project: `prj_Jzsu0sdAhwMEyAlh8gl1YhJOLvdX` (`chadwickpoon-personal-site`).
- Team: `team_Q6wqr96efVViMyF4FVYLJv2H`, plan Hobby.
- Verified September 13, 2026 at 22:20 UTC.

Public indexing is enabled on this deployment at build time and runtime. All eight public pages declare their canonical chadwickpoon.com URLs; robots.txt permits crawling and points to an eight-page sitemap. Future review builds retain the default indexing-disabled setting.

## Verification

24 local checks passed. On the staged deployment, all 22 applicable desktop and mobile checks passed. Ten additional checks passed on the actual custom domain. Two local Host-override checks were skipped in each remote run; the real www HTTPS redirect was separately verified at the root and at `/explore/boardy?source=hello&b=2`.

All eight public routes returned 200; two missing-route checks returned 404. Both original Dog Walker files served from the main domain matched their source SHA-256 hashes. The live homepage was visually inspected. Vercel's individual alias records verified that both custom domains point to the exact deployment above; its deployment summary only listed the generated alias. Both DNS configurations reported valid.

## DNS migration and recovery

| Record | Previous Sites value | Current Vercel value |
|---|---|---|
| A, @ | 162.159.143.30 | 216.198.79.1 |
| A, @ | 172.66.3.26 | 64.29.17.1 |
| CNAME, www | custom-domains.chatgpt.site. | 9255dd35e6493113.vercel-dns-017.com. |

The two A values and CNAME came from this project's current Vercel domain configuration. TTL remains Automatic. Saved values were verified after reloading Namecheap and through authoritative DNS. The existing CAA record, four site-verification TXT records, and email-forwarding SPF record were compared before and after and remained unchanged. Nameservers and email-forwarding settings were retained.

The previous ChatGPT Sites deployment, its domain-verification records, `.openai/hosting.json`, and `legacy/sites-v1` remain available for recovery. To restore that host, restore the three previous DNS values above. The former source is commit `5dd3e900fe1b13908af61c4395f5fa16986315d7`.

## Future publishing

Make changes in the Personal site Codex project, review them, then ask to publish. Ordinary Git pushes do not deploy. Git integration and automatic custom-domain assignment remain disabled.

For a requested release, run the checks with `SITE_INDEXING_ENABLED=true`, checkpoint the candidate, deploy with `--target=production --skip-domain --build-env SITE_INDEXING_ENABLED=true --env SITE_INDEXING_ENABLED=true`, and verify it. Promote the candidate, then explicitly assign both custom domains using `vercel alias set` and verify the individual alias records and live domain. In this configuration, promotion alone did not assign the custom domains. Future releases do not need DNS changes while this project and these targets remain in use.
