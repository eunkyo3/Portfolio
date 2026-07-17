<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-07-17 | Updated: 2026-07-17 -->

# components

## Purpose
Seven flat, single-file components. They split into three kinds: **layout chrome** (`Navbar`, `Footer`), **scroll behavior** (`Reveal`, `ScrollProgress`), and **presentational cards/atoms** driven entirely by props (`ProjectCard`, `SkillBadge`, `TimelineItem`). None of them fetch or own domain data — everything arrives as props, or from `useI18n()` for label strings.

There is no `index.ts` barrel; import each component by its own path.

## Key Files
| File | Description |
|------|-------------|
| `Navbar.tsx` | Sticky translucent header. Navigates by `document.getElementById(id).scrollIntoView()`, **not** by router links. Section ids live in the `navItems` array (`about`…`activities`) plus `home` on the logo button. Also owns the **theme toggle** (`useTheme()`, sun/moon inline SVG) and a **mobile hamburger menu** (`useState`, closes on navigation). |
| `Footer.tsx` | Bottom bar: current year via `new Date().getFullYear()` and a GitHub link. Fully static. |
| `Reveal.tsx` | Fade-and-rise-on-scroll wrapper. `IntersectionObserver` at `threshold: 0.15`, unobserves after first intersection (reveals once, never re-hides). Accepts `delay` in **seconds** (applied as `transitionDelay`). |
| `ScrollProgress.tsx` | 2px gradient bar fixed at the top, width driven by a passive `scroll` listener. Guards `docHeight <= 0`. Mounted once in `App.tsx`. |
| `ProjectCard.tsx` | Project tile: title, description, tech pills, plus optional `link`/`repo` anchors. Props: `{ title, description, tech, link?, repo? }`. |
| `SkillBadge.tsx` | Pill for a single skill. Props: `{ label }`. |
| `TimelineItem.tsx` | Vertical timeline entry for one job, with a gradient dot and an optional nested `items[]` list of accomplishments. Props: `{ role, company, period, summary, items? }`. |

## For AI Agents

### Working In This Directory
- **`Navbar`'s ids must match `Home.tsx`.** Nothing type-checks the `scrollTo('about')` strings against the `<section id="about">` in `Home.tsx`. A typo fails silently — the button just does nothing. Grep both files together when renaming a section.
- **`ProjectCard` labels its two links distinctly**: `repo` renders as "GitHub", `link` renders as "Live" (each with a ↗ icon). Keep that distinction if you touch the link markup.
- **`Reveal`'s `delay` is seconds, not milliseconds.** Callers pass `idx * 0.08` to stagger grids. Passing `300` would mean a five-minute delay.
- **`Reveal` renders a plain `<div>` wrapper.** It participates in layout, so wrapping a flex/grid child in it can break the parent's layout. Existing grids wrap each *item* in `Reveal` and let the wrapper be the grid child.
- Props types are declared locally in each file, not shared. `TimelineItem`'s props are structurally the shape of an `experiences` entry from `data/content.ts`, and `Experience.tsx` spreads them in — so changing that data shape breaks this component, with no shared type to warn you.
- `Navbar`'s `navLinkClass` and `mobileNavLinkClass` carry proper light/`dark:` pairs — keep both halves in sync if you edit one.

### Testing Requirements
No tests exist. Verify with `npm run build` and `npm run lint`, then check behavior in `npm run dev`. Scroll-driven components (`Reveal`, `ScrollProgress`) have no meaningful static verification — actually scroll the page.

### Common Patterns
- `export function Name()` — named exports only.
- `type NameProps = {...}` immediately above the component; destructure props in the signature.
- Tailwind utilities inline, every color paired with a `dark:` variant.
- External links always carry `target="_blank" rel="noreferrer"`.
- Hooks (`useEffect`) always return a cleanup that disconnects the observer / removes the listener. Keep that when editing.

## Dependencies

### Internal
- `../contexts/I18nContext` — `Navbar` uses `useI18n()` for nav labels
- `../data/content.ts` — indirectly: `ProjectCard` and `TimelineItem` are shaped by the `projects` and `experiences` literals

### External
- `react` — `useState`, `useEffect`, `useRef`
- Browser APIs: `IntersectionObserver`, `window.scrollY`, `Element.scrollIntoView`

<!-- MANUAL: -->
