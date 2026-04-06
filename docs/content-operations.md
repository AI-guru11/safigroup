# Content Operations

## Current mode
Content is currently managed locally in:
- `site/data/site.js`
- `site/data/services.js`
- `site/data/portfolio.js`
- `site/data/products.js`

## Product schema
Each product should include:
- `id`
- `name`
- `category`
- `price`
- `shortDescription`
- `status`
- `features`
- `featured`

## Portfolio schema
Each portfolio item should include:
- `id`
- `title`
- `category`
- `summary`
- `outcome`
- `tags`
- `featured`

## Recommendation
Keep local data during structure/design stabilization, then migrate products to Google Sheets + Apps Script when the UI is settled.

## Operational rule
Do not reintroduce Airtable keys or any client-side secret-based integration into the new implementation path.
