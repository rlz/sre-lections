# SRE Lectures

This repository contains the presentation materials for the university SRE course.

## Stack

- TypeScript and React
- `web-slides`, consumed from the sibling `../web-slides` directory during local development
- Vite for development and production builds
- GitHub Pages for publishing

## Project conventions

- Use 4 spaces, single quotes, no semicolons, and no trailing commas. Run Prettier before finishing code changes.
- Do not set `line-height` or `letter-spacing` in styles; rely on the typography defaults from `web-slides` and the browser.
- Set slide font sizes through `SlidesTheme.typography`; use relative `em` values only for local typographic hierarchy. Declare slide CSS inside the slide render function so it can use `SlidesTheme` tokens.
- Write presentation copy in Russian unless a slide explicitly needs English terminology or source code.
- Illustration style: use slightly messy pencil sketches with visible graphite texture, uneven line weight, and restrained colored-pencil accents. Prefer the slide theme colors, especially muted blue, coral/orange, green, graphite, and warm off-white. Keep generated images sharp-edged and free of rounded frames; apply rounded corners only in slide CSS when the composition calls for a light panel.
- Keep slides focused: one main idea per slide, concise copy, and generous whitespace.
- Keep each lecture in its own directory under `src/lectures`. Its numbered notes module defines the notes as a React component with semantic HTML tags; do not represent lecture prose as JSON or arrays of strings. Keep slides in the lecture's `slides/` directory, with one TSX module per slide and an `index.ts` that orders them.
- A lecture directory may contain `dm-notes.md`. These are the author's personal notes and reflections for that lecture: read them when changing the lecture or slide context, commit them so the author can access them, but never include them in the build or display them directly on the site or slides. Do not edit their text.
- Number every lecture directory and lecture-specific file with a two-digit prefix and a descriptive kebab-case name, for example `01-what-is-sre/01-what-is-sre.tsx`. Number every slide file in its lecture's `slides/` directory the same way, for example `01-cover.tsx`.
- Name lecture and slide React components in PascalCase with their lecture and slide numbers, for example `Lecture01WhatIsSreNotes` and `Lecture01WhatIsSreSlide01Cover`. `index` files are the only exception: they assemble and order modules rather than define content.
- Keep shared course chrome and styles in `src` root or `src/components`.
- Organize shared components by their role: MDX-only components in `src/components/mdx/`, reusable parts placed inside slides in `src/components/slide-parts/`, and reusable components that define a complete slide in `src/components/slides/`.
- A lecture's numbered module in `src/lectures/<lecture>/slides/` remains responsible for the lecture-specific content and composes shared slide parts or complete-slide components; do not put it in the shared component directories.
- Use `web-slides` public imports rather than copying its implementation into this repository.
- Do not add dependencies unless they materially improve the lectures or the build.

### Established slide style

- Treat the first lecture's first two slides as the visual reference for the course: use a quiet, light slide canvas with generous whitespace, a restrained header/footer chrome, and one clear visual idea per slide.
- Cover slides should use a balanced two-column composition: the title and one-sentence summary on the left, and a large illustration plus a concise lecture roadmap on the right. Keep the roadmap short and scannable; do not turn it into a paragraph.
- Content slides should introduce the idea in a strong upper block, then make the reasoning visible through a small number of equally weighted lower blocks. Prefer a clear visual rhythm such as three columns, with one thought per block.
- Use composition and spacing to create hierarchy before adding decoration: large heading, short highlighted definition or claim, brief explanatory text, then compact numbered or colored takeaways.
- Preserve the established illustration language: reuse a coherent character/world across a lecture where appropriate; use sharp-edged pencil-and-colored-pencil artwork with visible graphite texture, expressive poses, dark neutral backgrounds inside the artwork, and restrained blue, coral, green, and warm skin/wood accents. Let the illustration communicate the emotional state or tension of the concept.
- Keep illustrations subordinate to the message: give them a dedicated area, use `object-fit: contain`, avoid cropping important gestures or props, and do not put text over the artwork unless the composition explicitly requires it.
- Use theme gradients and muted accent colors to separate conceptual blocks, not as decoration. Numbered markers should be compact, high-contrast, and consistent across sibling blocks.
- Keep slide copy conversational and explanatory in Russian. Bold only the key contrast or concept inside a sentence; avoid dense walls of text and repeated wording between the title and body.

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
