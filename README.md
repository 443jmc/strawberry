# strawberry

A route-for-route recreation of JamesMChristensen.com, built with React, Vinext, and the Cloudflare Vite plugin.

The project preserves 252 legacy URLs, their page copy, titles, descriptions, canonical links, social metadata, internal links, and last-modified dates. It also generates a crawler-friendly sitemap and robots policy so the existing site can be migrated without changing indexed paths.

## Local development

```bash
pnpm install
pnpm dev
```

## Production build

```bash
pnpm build
```

The Cloudflare-compatible Worker output is written to `dist/server`, with browser assets in `dist/client`.

## SEO migration

- Keep the existing URL paths when the primary domain moves to this Worker.
- Verify the custom domain before changing DNS.
- Submit `https://jamesmchristensen.com/sitemap.xml` in Google Search Console after launch.
- Monitor crawl errors and keep any newly discovered legacy URLs as permanent redirects or matching pages.

## Deployment

The production site is available at <https://strawberry.jamesmoroni.workers.dev/>.
