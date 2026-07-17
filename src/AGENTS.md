<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-07-17 | Updated: 2026-07-17 -->

# src

## Purpose
The entire application. The render path is short and worth holding in your head:

```
main.tsx  →  ThemeProvider  →  I18nProvider  →  App
App.tsx   →  ScrollProgress + Navbar + <Routes>(/ → Home) + Footer
Home.tsx  →  hero + Archiving card, then About / Experience / Projects /
             Skills / Certificates / Activities as <section id="..."> blocks
```

Data flows one way and from one place: `data/content.ts` exports plain objects, pages import them directly, and presentational components in `components/` receive them as props. There is no fetching, no server, no client-side state beyond theme, language, and the contact form's local `useState`.

## Key Files
| File | Description |
|------|-------------|
| `main.tsx` | Entry point. Creates the root and wraps `<App />` in `ThemeProvider` → `I18nProvider` inside `StrictMode`. Imports `index.css`. |
| `App.tsx` | Layout shell: `ScrollProgress`, the fixed gradient background, `Navbar`, the router, and `Footer`. Only default export in the codebase. |
| `index.css` | The single stylesheet. `@import "tailwindcss"`, `@custom-variant dark` (class-based dark mode — required for the Navbar theme toggle to work in Tailwind v4), `@theme` with the Pretendard font stack, the shared design recipes (`.text-gradient`, `.card-glass`, `.card-glass-hover`, `.container-responsive`) inside `@layer components`, the `bg-move`/`float-slow` keyframes, custom scrollbar, and `::selection`. |

## Subdirectories
| Directory | Purpose |
|-----------|---------|
| `components/` | Reusable presentational and behavioral components (see `components/AGENTS.md`) |
| `contexts/` | Theme and i18n React contexts (see `contexts/AGENTS.md`) |
| `data/` | All portfolio content as typed literals (see `data/AGENTS.md`) |
| `pages/` | Page-sized sections composed by `Home` (see `pages/AGENTS.md`) |
| `assets/` | Holds only `react.svg`, the Vite scaffold leftover. Nothing imports it. |

## For AI Agents

### Working In This Directory

**Shared recipes must stay inside `@layer components`.** `.card-glass` and friends live in `@layer components` in `index.css` *deliberately*: Tailwind v4 utilities live in `@layer utilities`, and unlayered CSS always beats layered CSS, so recipes defined outside a layer would silently make utility overrides (e.g. `border-indigo-500/40` stacked on `card-glass`) dead code. If you add a new shared recipe, put it inside that same `@layer components` block. (Historical note: `App.css` no longer exists — it was a dead unimported file whose keyframes were merged into `index.css` during the 2026-07 redesign.)

**Adding a new section** means touching four places, in this order:
1. Add the content to `data/content.ts`.
2. Create the section component in `pages/`.
3. Render it in `Home.tsx` inside a `<section id="yourid">`, wrapped in `<Reveal>`.
4. Add a `scrollTo('yourid')` button to `components/Navbar.tsx` — the id string is the contract between the two, and nothing type-checks it.

**Do not reach for React Router** to add a page. The site is one document; `App.tsx` redirects every unmatched path back to `/`. If the user genuinely wants separate URLs, that is a deliberate architecture change to discuss first, not a detail to slip in — and note that `BrowserRouter` is mounted with no `basename` even though Vite builds with `base: '/Portfolio/'`, so real multi-route work has to reconcile those two.

### Testing Requirements
No tests exist. Verify with `npm run build` (this is the typecheck — strict mode plus `noUnusedLocals` means a stray import fails the build) and `npm run lint`, then confirm visually with `npm run dev`.

### Common Patterns
- Named function exports; props typed via a local `type XProps = {...}` declared directly above the component.
- `import type` is required for type-only imports — `verbatimModuleSyntax` is enabled.
- Tailwind utilities inline, always paired light/`dark:`.
- Card surfaces use the shared `.card-glass` class (plus `.card-glass-hover` for interactive tiles) from `index.css`, with `p-5 sm:p-6` added per use. Accent text uses `.text-gradient`. Match these rather than inventing a new card style; the accent palette is indigo/violet/cyan only.

## Dependencies

### Internal
Self-contained. `data/` depends on nothing; `contexts/` depends on nothing internal; `components/` and `pages/` depend on both.

### External
- `react`, `react-dom` — hooks, context, StrictMode
- `react-router-dom` — `BrowserRouter`, `Routes`, `Route`, `Navigate` in `App.tsx` only
- Tailwind CSS v4 via `index.css`'s `@import "tailwindcss"`

<!-- MANUAL: -->
