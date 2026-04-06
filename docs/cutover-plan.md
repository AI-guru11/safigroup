# Cutover Plan — Executed

The new multi-page implementation has been promoted from `site/` to the repository root.

## What changed
- New implementation moved to root: `index.html`, `services/`, `portfolio/`, `products/`, `brief/`, `contact/`, `css/`, `js/`, `data/`, `icons/`, `manifest.json`, `sw.js`, `robots.txt`, `sitemap.xml`, `404.html`, `offline.html`, `og-image.png`.
- Legacy implementation was isolated under `legacy/`.
- Compatibility redirects were added for:
  - `/site/` and `/site/*`
  - `/services.html`
  - `/portfolio.html`

## Current public entry path
- Home: `/`
- Services: `/services/`
- Portfolio: `/portfolio/`
- Products: `/products/`
- Brief: `/brief/`
- Contact: `/contact/`

## Post-cutover checks
- Verify navigation on desktop and mobile
- Verify service worker registration from root and nested pages
- Verify canonical and OG URLs
- Verify redirects from old preview paths and legacy HTML routes
