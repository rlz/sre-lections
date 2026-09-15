# SRE Lectures

This repository contains the presentation materials for the university SRE course.

## Stack

- TypeScript and React
- `web-slides`, consumed from the sibling `../web-slides` directory during local development
- Vite for development and production builds
- GitHub Pages for publishing

## Project conventions

- Use 4 spaces, single quotes, no semicolons, and no trailing commas. Run Prettier before finishing code changes.
- Write presentation copy in Russian unless a slide explicitly needs English terminology or source code.
- Keep slides focused: one main idea per slide, concise copy, and generous whitespace.
- Keep each lecture in its own directory under `src/lectures`. Its numbered notes module defines the notes as a React component with semantic HTML tags; do not represent lecture prose as JSON or arrays of strings. Keep slides in the lecture's `slides/` directory, with one TSX module per slide and an `index.ts` that orders them.
- Number every lecture directory and lecture-specific file with a two-digit prefix and a descriptive kebab-case name, for example `01-what-is-sre/01-what-is-sre.tsx`. Number every slide file in its lecture's `slides/` directory the same way, for example `01-cover.tsx`.
- Name lecture and slide React components in PascalCase with their lecture and slide numbers, for example `Lecture01WhatIsSreNotes` and `Lecture01WhatIsSreSlide01Cover`. `index` files are the only exception: they assemble and order modules rather than define content.
- Keep shared course chrome and styles in `src` root or `src/components`.
- Use `web-slides` public imports rather than copying its implementation into this repository.
- Do not add dependencies unless they materially improve the lectures or the build.

## GitHub Pages and custom domain

- `.github/workflows/deploy-pages.yml` is the only deployment path. Do not publish manually.
- GitHub Pages must be configured to use GitHub Actions as its source.
- Before the first deployment, create `public/CNAME` containing the production domain and point that domain's DNS to GitHub Pages. Never commit a guessed domain.

## Verification

After source changes, run:

```sh
npm run format:check
npm run build
```
