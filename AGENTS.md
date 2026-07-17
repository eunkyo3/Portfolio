<!-- Generated: 2026-07-17 | Updated: 2026-07-17 -->

# Portfolio

## Purpose
Personal portfolio site for 정은교 (Jung Eunkyo), a backend developer. Built with React 19 + TypeScript + Vite + Tailwind CSS v4, and deployed to GitHub Pages out of the committed `docs/` folder.

Despite the `src/pages/` directory and the React Router dependency, this is **a single scrolling page**, not a multi-route app. `App.tsx` declares exactly one route (`/` → `Home`) plus a catch-all redirect; `Home.tsx` composes every other "page" as a `<section id="...">`, and `Navbar` navigates by `scrollIntoView`, not by links. Treat `src/pages/*` as page-sized sections of one document.

## Key Files
| File | Description |
|------|-------------|
| `package.json` | Dependencies and scripts (`dev`, `build`, `lint`, `preview`). No test script or test framework is installed. |
| `vite.config.ts` | React plugin; `base: '/Portfolio/'` and `build.outDir: 'docs'` — both exist to serve GitHub Pages from `docs/`. |
| `index.html` | Vite entry document; holds `<title>` and the OG/description meta tags. Mounts `#root` and loads `/src/main.tsx`. |
| `tsconfig.app.json` | Strict TS config for `src/`. Notably `noUnusedLocals`/`noUnusedParameters` are on, so unused imports break `npm run build`. |
| `tsconfig.node.json` | TS config for the Vite config file itself. |
| `tsconfig.json` | Solution-style root config referencing the two above. |
| `eslint.config.js` | Flat ESLint config: JS + typescript-eslint recommended, react-hooks, react-refresh. Ignores `dist` (note: build output is `docs`, not `dist`). |
| `postcss.config.js` | Registers `@tailwindcss/postcss` — this is how Tailwind v4 is wired in. There is no `tailwind.config.js`. |
| `README.md` | Korean-language overview of the site's sections and stack. Written for humans, and partly aspirational — prefer the code when they disagree. |

## Subdirectories
| Directory | Purpose |
|-----------|---------|
| `src/` | All application source (see `src/AGENTS.md`) |
| `docs/` | **Build output, committed on purpose.** GitHub Pages serves the site from here. Never hand-edit; regenerate with `npm run build`. |
| `public/` | Static assets copied verbatim to the build root. Currently only `vite.svg` (the favicon referenced by `index.html`). |

## For AI Agents

### Working In This Directory
- **Content edits almost never belong here.** Résumé text, projects, certificates, and awards all live in `src/data/content.ts`. Start there.
- **`docs/` is generated.** If a change must appear on the live site, run `npm run build` and commit the resulting `docs/` alongside the source change. Editing `docs/` by hand produces changes that the next build silently destroys.
- **Do not change `base` or `outDir`** in `vite.config.ts` without also changing the GitHub Pages settings — the repo is served from `/Portfolio/`, so a wrong `base` yields a blank page with 404s on every asset.
- There is no CI workflow in this repo (no `.github/`); the build is run locally and committed.

### Testing Requirements
There is no test suite, no test runner, and no test dependency here. Do not claim tests pass, and do not invent a `npm test` invocation. The available verification is:

```bash
npm run build   # tsc -b && vite build — this is the real typecheck gate
npm run lint    # eslint .
npm run dev     # manual check at http://localhost:5173
```

`npm run build` is the strongest automated signal available. Run it before claiming a change works.

### Common Patterns
- Named exports for components (`export function Home()`), not default exports. `App.tsx` is the sole default export.
- Styling is Tailwind utility classes inline. There are no CSS modules and no styled-components.
- Dark mode is class-based: `ThemeProvider` toggles `.dark` on `<html>`, and every component pairs light utilities with `dark:` variants. Preserve both halves when editing markup.
- Korean is the primary display language; much UI copy is hardcoded Korean rather than routed through the i18n layer (see `src/contexts/AGENTS.md`).

## Dependencies

### External
- React 19 + React DOM — UI
- react-router-dom 7 — installed and mounted, but carrying only one route
- Tailwind CSS 4 (via `@tailwindcss/postcss`) — styling
- Vite 7 + `@vitejs/plugin-react` — dev server and build
- TypeScript 5.9, ESLint 9, typescript-eslint 8 — types and linting

<!-- MANUAL: Any manually added notes below this line are preserved on regeneration -->
