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
- Illustration style: use slightly messy pencil sketches with visible graphite texture, uneven line weight, and restrained colored-pencil accents. Save illustrations as compressed JPEG files; use PNG only for the author's personal images when they need transparency. Use a light warm off-white or lightly textured paper background by default; use a dark graphite background only when the requested composition explicitly calls for it. Prefer the slide theme colors, especially muted blue, coral/orange, green, graphite, and warm off-white. Give every illustration a 4px inset from its containing panel, a low theme shadow (`theme.shadows.low`), and rounded corners using `theme.radius` in CSS; do not generate a rounded frame into the image itself.
- Keep slides focused: one main idea per slide, concise copy, and generous whitespace.
- Write lecture notes as a complete, self-contained textbook chapter for independent study. Explain ideas directly without framing them as remarks from a lecture, transcript, speaker, or recording. Include substantive examples and illustrations that clarify meaningful concepts in the lecture text; omit anecdotes that are only entertaining and do not support learning. Keep examples tied to the exact concept being taught. Add real incidents only when they directly illuminate that concept; do not insert unrelated incidents merely because they are interesting.
- Keep each lecture in its own directory under `src/lectures`. Its numbered notes module defines the notes as a React component with semantic HTML tags; do not represent lecture prose as JSON or arrays of strings. Keep slides in the lecture's `slides/` directory, with one TSX module per slide and an `index.tsx` that orders them using JSX.
- A lecture directory may contain `dm-notes.md`. These are the author's personal notes and reflections for that lecture: read them when changing the lecture or slide context, commit them so the author can access them, but never include them in the build or display them directly on the site or slides. Do not edit their text.
- When asked to make a slide plan for a lecture, create or update `slides-plan.md` in that lecture's directory. The plan must be only a numbered list of slides, each with exact copy intended to appear on the slide and, when useful, a precise illustration description that is ready to use for creating the image. Use this format: `1. Слайд о ...`, followed by indented numbered entries such as `1. Текст: ...`, `2. Текст: ...`, `3. Иллюстрация: ...`. Describe only the illustration's subject and scene; do not repeat the standard course illustration style or other established visual defaults. Slides may omit illustrations when the copy is dense or no clear visual would help. Do not add analysis, process notes, or other commentary to the plan. The user reviews the copy before slide implementation.
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
- Illustration workflow: first compose the slide and reserve the illustration area with a plain `div` placeholder. Let the user review and approve that composition. Only after approval, measure the placeholder's rendered width and height in the browser, then generate the illustration to match that exact aspect ratio. GPT Image supports aspect ratios only up to 3:1; prompt text cannot override that limit, and the image-generation tool available in this workspace does not expose an explicit pixel-size parameter. If the measured placeholder exceeds 3:1, revise the slide composition to the nearest supported ratio (at most 3:1), render and measure the updated placeholder, then generate the image. Never crop, stretch, or pad a generated illustration to force it into the placeholder; verify the generated image's actual dimensions before replacing the placeholder. Custom pixel dimensions through the OpenAI image API must use sides divisible by 16.
- Complete the slide workflow in reviewable stages: first render the slide plan for the user to edit; after the plan review, build the slide design with its exact illustration description and all text and visual blocks, then let the user review and revise that composition. Generate illustrations only after this slide review, using the final illustration description from the slide source and the measured dimensions of its rendered placeholder. The slide is authoritative because the approved composition may differ from the plan.
- While building or revising slides, do not generate illustrations in advance. Illustration placeholders are temporary; a plain `div` is sufficient, and do not create a dedicated placeholder component. When useful, the `div` may visibly contain the label «Иллюстрация будет здесь» and the illustration prompt copied from the slide plan. Give the placeholder a clear, consistent fill color that is distinct from the course's warm paper backgrounds and accent panels (use a muted lavender such as `#d8d2f0`), so it is easy to recognize as unfinished artwork. Keep the placeholder at the intended size and aspect ratio. Generate artwork only after the user has reviewed and approved the composed slide and its placeholder dimensions.
- When a slide contains only an illustration and no slide copy, omit the light content `Panel`; place the illustration placeholder directly on the slide canvas.
- Keep every inner `Panel`, illustration, and illustration placeholder 4px inside the edge of its containing light panel. In a grid, use `margin: 4` on that item and let the containing grid reach the light panel's bounds; do not add a second large wrapper margin or padding that compounds the inset. When an illustration wrapper uses explicit dimensions, account for the inset in its size (for example `width: 'calc(100% - 8px)'`, `height: 'calc(100% - 8px)'`, `boxSizing: 'border-box'`) so the 4px margins do not make it overflow. Keep text padding separate from panel and illustration placement.
- For most slides in the middle of a lecture, make one light `Panel` the base surface for the entire work area. Use an explicit CSS Grid for that region with `padding: 0`; put the base panel first in DOM order and span it across all rows and columns (for example, `gridRow: '1 / 3', gridColumn: '1 / 4'`). Place headings, copy, illustrations, and any accent panels in later grid items. Do not put a neutral or gray `Panel` inside this light base panel as an extra surface. A nested panel is appropriate only when it has a clear content or layering role.
- Create adjacent visual areas by layering panels in the same grid cells, not by placing two independent card panels side by side. First add a background `Panel` spanning both areas (for example, `gridColumn: '1 / 3', gridRow: '2'`) with a `4px` inset (`margin: 4`) and its own theme gradient. Then add the foreground `Panel` over the area that should read as the second region (for example, `gridColumn: '2 / 3', gridRow: '2'`) later in DOM order, with an additional `4px` inset on each exposed edge (`margin: 8`) and a contrasting theme gradient. The later panel paints above the broad panel, leaving the first region exposed as area one and the foreground panel visible as area two. Put each area's text in separate later grid items aligned to its own column/row; keep text out of decorative panels unless the panel itself is the content-bearing surface.
- For three or more nested bands or regions, keep the same ordered-layer principle: add the broadest panel first, then progressively narrower/shorter panels over the same grid area; increase the inset by `4px` for each layer (`4`, `8`, `12`, …) so each earlier layer remains visible as a consistent reveal. Use explicit grid spans to control which side or band is covered. Keep sibling content areas on equal tracks when they have equal importance, and make panel backgrounds—not extra card borders, shadows, or arbitrary gaps—define the regions. Use DOM order for stacking; do not use absolute positioning for this panel language.
- Author character workflow: use the user's photos in the repository-root `my_photos/` directory as identity references when drawing the lecturer. Keep the character recognizably consistent in face, hair, build, and age while choosing a fresh pose and topic-appropriate casual clothing for each illustration. For closing-slide portraits, use waist-up framing by default; use full-body framing only when requested or required by the composition. Vary poses across slides; do not default to an outstretched hand or repeat the same pose. Use unbranded clothing only: no logos, brand names, signature marks, or recognizable branded products unless the user explicitly requests them. Use `src/lectures/01-reliability-basics/assets/09-closing-author.png` as the established drawn-character reference, together with relevant photos from `my_photos/`, for future illustrations unless the user chooses another reference. When placing the character in a larger scene, match that scene's perspective and illustration style while preserving the character's identity. Never alter or include the source photos in the site build.
- Transparent author cutouts: when an illustration needs a transparent background, request actual transparency with the image-generation tool's transparent-background option. Never draw or bake a checkerboard, white, or colored matte into the image. Verify the saved PNG has an alpha channel and inspect its edges before use. Keep the full silhouette, hands, props, and clothing inside the canvas with safe margins. Save lecture-specific images in that lecture's `assets/` directory and use natural aspect-ratio sizing so CSS does not crop them.
- For a request for one illustration, invoke image generation once. Immediately persist the returned result (use `store()` when calling through `functions.exec`) before inspecting, previewing, or placing it. If displaying or saving the image fails, retrieve that same result with `load()` and retry only the failed step. Generate another image only when the user requests a revision or the generation call produced no image.
- Keep illustrations subordinate to the message: give them a dedicated area, use `object-fit: contain`, avoid cropping important gestures or props, and do not put text over the artwork unless the composition explicitly requires it.
- Never set `object-fit: contain` or `object-fit: cover` on illustrations. Place each image at its natural aspect ratio, without cropping or adding blank bands; generate or regenerate it to fit the intended layout area. In grid layouts, let the illustration determine its column width with an `auto` track, while text columns use flexible `fr` tracks; size the image by height and preserve its intrinsic aspect ratio. When a slide places an illustration by itself, without text or other content grouped with it, do not wrap the image in a `Panel`.
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
