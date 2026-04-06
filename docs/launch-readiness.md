# Launch Readiness

## Current state
The new implementation is now at the repository root and is suitable for preview deployment.

## Done
- Root cutover executed
- Legacy runtime isolated under `legacy/`
- Redirects added for old `/site/` preview paths and root HTML legacy routes
- Canonical URLs, sitemap, robots, manifest, and OG image paths updated
- Service worker registration updated for root deployment

## Remaining before final public launch
- Replace placeholder/demo content with approved final copy
- Replace demo/representative images with production-approved assets
- Run live smoke test on GitHub Pages after push
- Verify WhatsApp, email, maps, and any external CTA destinations


## Prelaunch review complete

A final local integrity and syntax review was completed after cutover. No active-file reference errors remain. The remaining work before launch is editorial approval and a post-deploy smoke test.
