# Building a Terminal Text Editor — Website

The online home of _Building a Terminal Text Editor: From First Principles to
Professional Architecture_. Built with [Starlight](https://starlight.astro.build/).

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

## About the site

This site publishes the manuscript in `book/` as a navigable documentation
site. It has three parts:

1. **Home page** — what the book is about, who it's for, and how to use it.
2. **Volumes & chapters** — the full outline, grouped by volume, with one page
   per chapter.
3. **Appendices** — reference material and supporting content.

The source of truth for the book's contents is the manuscript in `book/`
(`Outline.md`, `book/volume-*/chapter-*/chapter.yaml`). This site renders that
content; it does not replace it.

## Tech stack

- [Astro](https://astro.build/) + [Starlight](https://starlight.astro.build/)
- Markdown / MDX for page content
- pnpm as the package manager

## Project structure

.
├── public/ # Static assets (favicons, og-images)
├── src/
│ ├── assets/ # Images referenced from content
│ ├── content/
│ │ └── docs/
│ │ ├── index.mdx # Home / landing page
│ │ ├── outline.mdx # How the book is organized
│ │ ├── volume-01/ # Volumes I–X
│ │ │ └── chapter-01.mdx # one page per chapter
│ │ └── appendices/ # Appendices A–J
│ └── content.config.ts
├── astro.config.mjs # Starlight config + sidebar
├── package.json
└── tsconfig.json

Content is organized to mirror the book:

- **Volumes** map to sidebar groups (Volume I — Computing Foundations, etc.).
- **Chapters** map to individual pages. A chapter's sections (the
  `00-introduction.md`, `01-…`, etc. files in the manuscript) are concatenated
  into a single page, using the section titles from `chapter.yaml` as headings.
- **Appendices** map to a final sidebar group.

The sidebar is defined in `astro.config.mjs` and driven by the book's outline;
keep it in sync with `book/Outline.md` when chapters are added or retitled.

## Commands

All commands are run from the root of the site project, from a terminal:

| Command                | Action                                            |
| :--------------------- | :------------------------------------------------ |
| `pnpm install`         | Installs dependencies                             |
| `pnpm dev`             | Starts the local dev server at `localhost:4321`   |
| `pnpm build`           | Builds the production site to `./dist/`           |
| `pnpm preview`         | Previews the production build locally             |
| `pnpm astro ...`       | Runs CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Gets help using the Astro CLI                     |

## Adding or updating content

1. Edit the manuscript first (`book/`) — it is the source of truth.
2. Regenerate or update the corresponding page under `src/content/docs/`.
3. If a chapter was added, retitled, or moved, update `book/Outline.md`, the
   `chapter.yaml`, and the sidebar in `astro.config.mjs`.
4. Run `pnpm astro check` and `pnpm build` to verify the site still builds.

## Learn more

- [Starlight documentation](https://starlight.astro.build/)
- [Astro documentation](https://docs.astro.build/)
- [Astro Discord server](https://astro.build/chat)
