<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-07-17 | Updated: 2026-07-17 -->

# contexts

## Purpose
Two React contexts, both mounted in `main.tsx` around the whole app: `ThemeProvider` (light/dark) and `I18nProvider` (Korean/English strings). Each follows the same shape — a provider, a `useX()` hook that throws outside its provider, and `useMemo`'d values.

Both are **half-wired**: the providers work, but no UI in the app ever calls the setters. See the warnings below before assuming either feature is live.

## Key Files
| File | Description |
|------|-------------|
| `ThemeContext.tsx` | `ThemeProvider` + `useTheme()`. Initial theme reads `localStorage.theme`, falling back to the `prefers-color-scheme: dark` media query. An effect adds/removes `.dark` on `<html>` and persists to `localStorage`. Exposes `{ theme, toggleTheme }`. |
| `I18nContext.tsx` | `I18nProvider` + `useI18n()`. Holds the full `translations` object for `ko` and `en`. Initial language reads `localStorage.lang`, defaulting to `'ko'`. Exposes `{ lang, setLang, t }`; `setLang` also persists. |

## For AI Agents

### Working In This Directory

**`useTheme()` is consumed by `Navbar`'s theme toggle button.** Class-based dark mode genuinely works now: `index.css` declares `@custom-variant dark (&:where(.dark, .dark *))`, which is what makes Tailwind v4's `dark:` variant follow the `.dark` class this provider toggles (v4's default is `prefers-color-scheme`, under which this provider's class was a no-op). Do not remove that `@custom-variant` line — the toggle dies silently without it.

**`setLang` has zero call sites either.** No language switcher exists, so `lang` is effectively frozen at whatever `localStorage.lang` holds, i.e. `'ko'` for every real visitor.

**Most visible copy bypasses `t` entirely.** Pages call `useI18n()` for section labels (`t.nav.about`, `t.projects.title`) but hardcode their Korean headings and body text inline. Switching to `en` today would produce a mostly-Korean page with English section titles. Any real i18n request means migrating that hardcoded copy into `translations`, not just adding a switcher — say so rather than shipping a switcher that appears broken.

**Both providers touch `localStorage` and `window.matchMedia` during render/initial state.** That is safe here (client-only SPA, no SSR), but it means these modules cannot be imported into a Node or prerender context without guards. Don't add SSR or a prerender step without addressing this.

**Adding a key to `translations.ko` is a typed contract.** `t` is typed as `typeof translations['ko']`, so `ko` is the source of truth for the shape: add to `ko` without adding to `en` and every `en` consumer is a type error at build. Update both.

### Testing Requirements
No tests exist. Verify with `npm run build` and `npm run lint`. For theme changes specifically, check both `localStorage.theme` values and a cleared-storage first visit under an OS dark-mode preference, since the fallback path only runs when nothing is stored.

### Common Patterns
- `createContext<T | null>(null)`, and the consumer hook throws `'useX must be used within XProvider'` when the context is null. Keep that guard on any new context.
- Context values are wrapped in `useMemo` keyed on their state so consumers don't re-render on every parent render.
- Setters persist to `localStorage` inside the same function that updates state.

## Dependencies

### Internal
None. These modules import nothing from the rest of `src/`.

### External
- `react` — `createContext`, `useContext`, `useMemo`, `useState`, `useEffect`
- Browser APIs: `localStorage`, `window.matchMedia`, `document.documentElement.classList`

<!-- MANUAL: -->
