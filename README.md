# strawberry

A responsive recreation of JamesMChristensen.com, built with React, Vinext, and the Cloudflare Vite plugin.

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

## Deployment

The production site is available at <https://strawberry.jamesmoroni.workers.dev/>. The source is also configured for Git-based deployment through the hosting metadata in this repository.
