# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site for Sourav Bhadra (souravbhadra.com), built with Astro 6 + Tailwind CSS v4 + TypeScript. It is a **single static page** (`src/pages/index.astro`) composed of section components, deployed to GitHub Pages.

## Commands

Requires Node >= 22.12.0.

```bash
npm run dev      # local dev server (astro dev)
npm run build    # static build → dist/
npm run preview  # serve the built site
npm run check    # astro check — type-checks .astro/.ts (the type gate)
npm run lint     # eslint over src, data, configs
npm run lint:fix # eslint --fix
```

There is no test runner. The verification gates are `npm run check` and `npm run lint`.

## Architecture

### Content is fully separated from presentation

**All site content lives in `data/site.ts`** — a single `as const` object covering meta, hero, about, experiences, education, awards, featuredProjects, publications, and contact. `data/nav.ts` holds the nav links. Components read from these and render; they contain no copy. To change what the site says (add a job, publication, project, etc.), edit `data/site.ts`, **not** the components. The `FeaturedProject` type is exported from `data/site.ts` and shared by the project components.

### Theming (the non-obvious part)

Color theme is selected by one string in `src/config.ts`: `SITE_CONFIG.baseTheme` (`'default' | 'strategic' | 'innovator' | 'midnight'`; currently `'strategic'`). The chain:

1. `Layout.astro` reads `baseTheme`, derives `${baseTheme}-dark`, and an inline `<script>` sets `data-theme` on `<html>` (persisted to `localStorage`, re-applied on Astro view transitions).
2. `src/styles/global.css` defines CSS custom properties (`--color-background`, `--color-accent`, `--color-maintext`, `--color-subtext`, `--color-textrain`) per `[data-theme="..."]` selector.
3. Those are mapped into Tailwind tokens in the `@theme` block, so components use **semantic utility classes** like `bg-background`, `text-maintext`, `text-accent`, `text-subtext` — never hardcoded colors.

To add a theme: add a `[data-theme="<name>-dark"]` block in `global.css` and a new option in `src/config.ts`.

### Tailwind v4

Configured **in CSS, not a config file** — `@import 'tailwindcss'` + `@theme {}` in `global.css`, wired via the `@tailwindcss/vite` plugin in `astro.config.mjs`. There is no `tailwind.config.js`. Reusable component classes (`.section-heading`, `.panel-card`, `.body-copy`, `.nav-link`, `.nav-link-active`, `.subtle-link`) live in `@layer components`; prefer these over re-deriving styles. `.section-heading` renders a `//` prefix and a trailing rule via `::before`/`::after`.

### Sections & scroll-spy — edit in lockstep

The page sections and the active-nav scroll-spy are coupled across **four** places. When adding/removing/renaming a section, update all of them or the nav highlight breaks:

1. `data/nav.ts` — the nav link + hash
2. `src/pages/index.astro` — import and place the component
3. The section component's root `id` (e.g. `id="projects"` + `scroll-mt-*`)
4. The hardcoded id array in the scroll-spy `<script>` in `Layout.astro` (`['about','experience','education','projects','publications']`)

### Other conventions

- **Path aliases** (`tsconfig.json`): `@/*` → `src/*`, `@data/*` → `data/*`. Both alias and relative imports appear in the codebase.
- **Icons**: `astro-icon` with the Phosphor set; referenced as `ph:github-logo`, `ph:leaf`, etc. (strings in `data/site.ts`). The `ph:*` set is whitelisted in `astro.config.mjs`.
- **Base path**: components prefix links/images with `import.meta.env.BASE_URL`; keep this when adding hrefs or asset paths.
- **Assets**: static files served from `public/` (e.g. `public/img/`, `public/avatar.jpg`). `data/site.ts` references them by path (e.g. `img/raster4ml.png`).
- ESLint forbids `set:html` in `.astro` files (`astro/no-set-html-directive`).

### Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml` (`withastro/action@v3`) to build and publish to GitHub Pages. `output: 'static'` and `site: 'https://souravbhadra.com'` are set in `astro.config.mjs`; the custom domain is in `public/CNAME`.
