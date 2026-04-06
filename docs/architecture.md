# Architecture

## Current architecture
The repository now serves the new multi-page implementation directly from the root.

### Public routes
- `/` → home
- `/services/` → services
- `/portfolio/` → portfolio
- `/products/` → products
- `/brief/` → project brief
- `/contact/` → contact

### Shared layers
- `css/` → tokens, base, components, sections, pages
- `js/` → app-core, navigation, page modules, structured data, helpers
- `data/` → site config, services, portfolio, products, testimonials
- `icons/` → PWA and favicon assets

### Legacy isolation
The previous implementation remains under `legacy/` for reference and rollback only. It is no longer the public runtime.

### Compatibility
Redirects are present for old preview routes under `/site/` and for older HTML routes such as `/services.html` and `/portfolio.html`.
