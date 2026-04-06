## 2026-04-06 - Prelaunch review hardening

- switched active app icons from WebP references to PNG for broader installability support.
- expanded service-worker core cache coverage to include active scripts, data files and OG image.
- improved `404.html` and `offline.html` metadata with canonical and noindex directives.
- added `docs/prelaunch-review.md` summarising checks, fixes and remaining non-blockers.

# Change Log

## 2026-04-06 — Cutover executed
- promoted the new multi-page implementation from `site/` to the repository root
- moved the previous runtime into `legacy/`
- added compatibility redirects for `/site/`, `/services.html`, and `/portfolio.html`
- updated canonical URLs, sitemap, robots, manifest, OG image paths, and service-worker registration for root deployment

## 2026-04-06 - Phase 9 final polish and cutover planning
- added a dedicated social preview image at `og-image.png`.
- switched all new-page Open Graph and Twitter image references to the new OG image.
- added `data/testimonials.js` and rendered testimonials on the home page.
- added `js/structured-data.js` and wired JSON-LD into all new pages.
- improved filter chips with `aria-pressed` state and tightened focus-visible styling.
- improved the brief form with a default service option, browser validation, and clearer submission guidance.
- added `docs/cutover-plan.md` documenting the exact move-from-`` process.

## 2026-04-06 - Phase 8 cleanup and launch readiness
- added `robots.txt` and `sitemap.xml`.
- added `404.html` and `offline.html`.
- upgraded `sw.js` for better offline fallback behavior.
- upgraded `js/navigation.js` to support Escape key, outside click, and resize-safe menu closing.
- upgraded `js/app-core.js` with more robust service-worker path resolution.
- added focus-visible styles and minor accessibility tightening in `css/base.css`.
- added `docs/rebuild-inventory.md` and `docs/launch-readiness.md`.
- updated roadmap and architecture docs to reflect the real current state.

## 2026-04-06 - Phase 7 content population and visual tightening
- populated `data/site.js` with real brand and contact data derived from the legacy project configuration.
- expanded `data/services.js`, `data/portfolio.js`, and `data/products.js` with practical service, work, and product entries based on the original repository data.
- upgraded the visual system in `css/` to better match the approved Dark Glassmorphism + Bento Grid direction.
- added new rendering modules: `js/home.js`, `js/services.js`, and `js/contact.js`, and upgraded the existing portfolio, products, brief, and core scripts.
- fixed service-worker registration logic in `js/app-core.js` so it resolves correctly from both the site root and nested pages.
- converted the Home, Services, Portfolio, Products, Brief, and Contact pages from placeholder layouts into populated, data-driven pages.
- verified local file references and JavaScript syntax for the `` implementation.

## 2026-04-06 - Initial rebuild track
- created a real `` foundation inside the correct `safigroup-main` project.
- added Dark Glassmorphism + Bento Grid CSS foundation.
- added structured local data files for services, portfolio, and products.
- added page-specific HTML files for services, portfolio, products, brief, and contact.
- added SEO/accessibility baseline: skip link, labels, canonical tags, Open Graph basics.
- added mobile navigation semantics and a simple service worker.
