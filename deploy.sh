#!/usr/bin/env sh
# Refresh the saved release list (the page's fallback), then deploy public/ to Cloudflare Pages.
set -e
cd "$(dirname "$0")"
gh api repos/gfsaaser24/BetterLET/releases --paginate --jq '[.[] | {tag: .tag_name, date: .published_at, body: .body}]' > public/releases.json
npx wrangler pages deploy public --project-name betterle-win --branch main
