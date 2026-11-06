# betterle.win

The website for [BetterLET](https://github.com/gfsaaser24/BetterLET), the Chrome extension for LowEndTalk and LowEndSpirit.

Live at **https://betterle.win** (Cloudflare Pages project `betterle-win`).

## What's here

- `public/`: the whole site. Static HTML, CSS and JS, no build step.
- `public/releases.json`: a saved copy of the extension's GitHub releases. The page loads releases live from GitHub and uses this file only if that fails.
- `deploy.sh`: refreshes `releases.json` and deploys `public/`.

## Deploy

Needs the GitHub CLI (`gh`) and a wrangler login for the Cloudflare account that owns the `betterle-win` project.

```sh
./deploy.sh
```

Run it after each extension release, so the saved release list stays current.

## Design

Same palette as the extension (tinted greens, one accent), General Sans from Fontshare, Phosphor icons. Light and dark follow the visitor's system setting. Reduced motion, reduced transparency and high contrast are respected.

## Links

- Extension: https://github.com/gfsaaser24/BetterLET
- LowEndTalk: https://lowendtalk.com
- LowEndSpirit: https://lowendspirit.com
- X: https://x.com/gabefletcher
