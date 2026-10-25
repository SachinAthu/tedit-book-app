# AGENTS.md

Before making any change or decision, read these files first:

- `/book/Overview.md` — what the book is and who it's for.
- `/book/Outline.md` — the canonical outline (volumes, chapters, sections,
  appendices).

## This project's job

This is the Starlight website for _Building a Terminal Text Editor_. It renders
the manuscript in `../book/` as a documentation site. It is a consumer of the
manuscript, not the source of truth.

The manuscript in `/book/` is authoritative. Never edit book content here.
When content needs to change, update `../book/` first, then reflect the change
in this site.

## Content structure

Content lives in `src/content/docs/` and mirrors the book:

- `index.mdx` — home / landing page.
- `outline.mdx` — how the book is organized.
- `volume-01/` … `volume-10/` — one sidebar group per volume, one page per
  chapter.
- `appendices/` — one page per appendix.

Mapping rules:

- A chapter's sections (`00-introduction.md`, `01-…`, etc. in the manuscript)
  are concatenated into a single chapter page. Use the section titles from the
  chapter's `chapter.yaml` as headings.
- The sidebar is defined in `astro.config.mjs`. Keep it in sync with
  `../book/Outline.md` whenever chapters are added, retitled, or reordered.
- Volume and chapter names must match `chapter.yaml` and `Outline.md` exactly
  (punctuation included).

## Conventions

- Use the package manager `pnpm` only (no npm/yarn).
- Do not rephrase or editorialize book content when rendering it; preserve the
  manuscript text verbatim except for mechanical Markdown/MDX adjustments needed
  for the site (e.g., links, frontmatter, image paths).
- Images belong in `src/assets/` and are referenced with relative links.
  Copy chapter image assets from the manuscript's `assets/` folders without
  renaming them.
- Keep page frontmatter minimal: `title`, `description`, and sidebar-related
  fields only.

## Verifying your work

Before considering a change done, run from the site root:

- `pnpm astro check` — type-check and content validation.
- `pnpm build` — ensure the site builds without errors.

When in doubt about Starlight, Astro, or MDX behavior, consult the current
[Starlight docs](https://starlight.astro.build/) rather than relying on memory.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
