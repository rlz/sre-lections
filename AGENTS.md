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
- Illustration style: use slightly messy pencil sketches with visible graphite texture, uneven line weight, and restrained colored-pencil accents. Use a light warm off-white or lightly textured paper background by default; use a dark graphite background only when the requested composition explicitly calls for it. Prefer the slide theme colors, especially muted blue, coral/orange, green, graphite, and warm off-white. Keep generated images sharp-edged and free of rounded frames; apply rounded corners only in slide CSS when the composition calls for a light panel.
- Keep slides focused: one main idea per slide, concise copy, and generous whitespace.
- Keep each lecture in its own directory under `src/lectures`. Its numbered notes module defines the notes as a React component with semantic HTML tags; do not represent lecture prose as JSON or arrays of strings. Keep slides in the lecture's `slides/` directory, with one TSX module per slide and an `index.tsx` that orders them using JSX.
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
- Preserve the established illustration language: reuse a coherent character/world across a lecture where appropriate; use sharp-edged pencil-and-colored-pencil artwork with visible graphite texture, expressive poses, light warm off-white or subtly textured paper backgrounds, and restrained blue, coral, green, graphite, and warm skin/wood accents. Use a dark graphite background only when the requested composition explicitly calls for it. Let the illustration communicate the emotional state or tension of the concept.
- Keep illustrations subordinate to the message: give them a dedicated area, use `object-fit: contain`, avoid cropping important gestures or props, and do not put text over the artwork unless the composition explicitly requires it.
- Use theme gradients and muted accent colors to separate conceptual blocks, not as decoration. Numbered markers should be compact, high-contrast, and consistent across sibling blocks.
- Keep slide copy conversational and explanatory in Russian. Bold only the key contrast or concept inside a sentence; avoid dense walls of text and repeated wording between the title and body.

### Panel language and layouts

- Treat a panel as a rectangular visual surface that groups one idea. Use the
  `Panel` component from `rlz-web-slides` for ordinary surfaces; use a `div` or
  semantic element with the same spacing and theme background only when the
  element is part of a custom grid or a deliberately flat colored block.
- A “серая панель” or “нейтральная панель” means the standard quiet `Panel`:
  place it in the requested grid area, let its default neutral background and
  padding carry the surface treatment, and keep the surrounding slide canvas
  light and spacious. In a two-column composition, “панель справа” means a
  `1fr 1fr` grid with the explanatory text in column 1 and the panel in column
  2, separated by `theme.spacing`; do not add a decorative border or a second
  card inside it unless the content requires one.
- A “цветная панель” means a content block with a theme gradient such as
  `theme.backgrounds.gradient('accent-1')`, `accent-2`, `accent-3`, or
  `neutral`. Use accent panels for contrasting concepts, comparisons, steps,
  or takeaways. Give sibling panels equal visual weight with equal grid tracks,
  consistent padding, and a small gap; align short labels or key phrases
  predictably, usually at the top or bottom of every sibling.
- For “панели на весь слайд” or “накладывающиеся панели”, make the content
  region a full-height CSS Grid with explicit rows and columns and `padding: 0`.
  Put the broad background panel first, spanning the complete grid (for
  example `gridRow: '1 / 4', gridColumn: '1 / 3'`), then place the foreground
  panel(s) over the same or overlapping tracks. The later grid items are
  painted above earlier ones, so use DOM order to express the layers rather
  than absolute positioning.
- “Одна большая сверху и три снизу” means a two-dimensional grid with one
  upper content area spanning all columns and a lower row split into three
  equal columns, typically `gridTemplateColumns: 'repeat(3, 1fr)'` and
  `gridTemplateRows: '1.2fr 1fr'`. Put the large upper panel/content block on
  `gridColumn: '1 / 4', gridRow: '1'`; put the three lower panels in columns 1,
  2, and 3 on row 2. If the lower panels are meant to overlap, add the broad
  lower background first with `gridColumn: '1 / 4', gridRow: '2'`, then add
  narrower panels over it with later DOM order.
- Use small margins such as `4` or `8` on inset foreground panels when the
  underlying layer should remain visible as a border or reveal. Use
  `theme.spacings.half` for panel content padding and flex alignment for short
  labels or questions. Avoid rounded cards, heavy borders, and arbitrary
  shadows: depth should come from the neutral/gradient layers and the visible
  overlap.
- Interpret positional shorthand from the requested composition, not as a
  request for a generic reusable component: “справа” is a grid placement,
  “снизу три” is three equal lower tracks, and “накладывающиеся” is an ordered
  stack of grid items with overlapping areas. Keep the content-bearing layer
  separate from decorative background panels so text remains readable.

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
