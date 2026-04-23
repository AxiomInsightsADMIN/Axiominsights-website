# Axiom Insights Website

Single-page marketing site for Axiom Insights LLC. Built with [Astro](https://astro.build) and deployed to Cloudflare Pages.

## Local development

```bash
npm install
npm run dev
```

Site runs at `http://localhost:4321`.

## Build

```bash
npm run build
```

Static output is emitted to `dist/`.

## Preview production build locally

```bash
npm run preview
```

## Deploy

This repo is wired to Cloudflare Pages. Pushes to `main` trigger an automatic build and deploy.

Cloudflare Pages build settings:

- Framework preset: **Astro**
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: `22` (set via `NODE_VERSION` environment variable)
- Root directory: `/`

## Project structure

```
.
├── public/              # Static assets served as-is
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── layouts/
│   │   └── Layout.astro # Base HTML shell + global styles
│   └── pages/
│       └── index.astro  # Single landing page
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

## Content updates

All copy lives in `src/pages/index.astro`. Edit directly, commit, push — Cloudflare Pages rebuilds in ~30 seconds.

## Rollback

Each content or styling change should be its own commit. To roll back a deploy, revert the commit on `main` or use the **Rollback** button in the Cloudflare Pages dashboard to redeploy a prior build.
