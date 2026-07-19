<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-07-17 | Updated: 2026-07-17 -->

# pages

## Purpose
Despite the name, these are **not routed pages**. `Home` is the only component the router ever renders; it imports the other six and stacks them as `<section id="...">` blocks in one scrolling document. Read "pages" here as "the major sections of the single page."

Each section owns one concern: pull its slice from `data/content.ts`, render a heading and a grid or list, delegate the repeating unit to a component. They hold no state (the one exception is `Contact`'s form) and take no props.

## Key Files
| File | Description |
|------|-------------|
| `Home.tsx` | The composition root. Hero (name/role/summary + the animated tech card) and the GitHub "Archiving" card, then renders `About`, `Experience`, `Projects`, `Skills`, `Certificates`, `Activities` inside `<section id="...">` wrappers. **The `id`s here are what `Navbar` scrolls to.** |
| `About.tsx` | Two-column profile: an `ABOUT ME` definition list (name, birth date, position, education, interests, phone, email) beside the `profile.summary` prose. Several fields are hardcoded here rather than read from `profile`. |
| `Experience.tsx` | Maps `experiences` → `TimelineItem`. |
| `Projects.tsx` | Maps `projects` → `ProjectCard` in a 2-column grid, staggered via `Reveal delay={idx * 0.08}`. |
| `Skills.tsx` | Renders five skill-group cards from the `skillGroups` export in `content.ts` via `SkillBadge`. |
| `Certificates.tsx` | Maps `certificates` → cards with a gradient top rule. |
| `Activities.tsx` | Two subsections in one component: `activities` (대외활동) and `awards` (수상경력). |
| `Contact.tsx` | Link-based contact section (email `mailto:`, GitHub). Rendered by `Home` under `<section id="contact">`. |

## For AI Agents

### Working In This Directory

**`Contact.tsx` is a real, wired contact section.** `Home` renders it under `<section id="contact">` and `Navbar` scrolls to it. It shows link cards — email (`mailto:`) and GitHub, both from `profile` — with no form and no fake submit (the old non-functional form was removed). Add channels by editing the `channels` array.

**`Skills.tsx` is data-driven.** It renders from the `skillGroups` export in `data/content.ts`. Edit skills there, not in JSX.

**Section `id`s are an untyped contract with `Navbar`.** `Home.tsx`'s `<section id="about">` and `Navbar.tsx`'s `scrollTo('about')` are matched only by string equality. Rename in both, or the nav button silently no-ops.

**Sections are double-wrapped in `Reveal`.** `Home` wraps each section in `<Reveal>`, and `Projects`/`Certificates`/`Activities` wrap each *card* in `Reveal` again for stagger. That is intentional. Adding a third layer means an inner element may reveal before its container is visible.

**`About.tsx` mixes `profile` fields and literals.** `name`, `birthDate`, `role`, `summary`, and `email` come from `profile`; education, interests, and position are still literals in the JSX. The phone number was removed for privacy. Update the JSX for the literal fields.

**Section headings are hardcoded Korean.** Only the small uppercase eyebrow labels use `t.*`. See `../contexts/AGENTS.md` for why this makes the `en` translation mostly cosmetic.

### Testing Requirements
No tests exist. Run `npm run build` and `npm run lint`, then verify in `npm run dev`: scroll the full page, click every `Navbar` item (desktop nav and mobile hamburger menu), and check both light and dark rendering via the Navbar theme toggle.

### Common Patterns
- `export function Page()` — named export, no props, no state.
- Standard section header: an uppercase `text-xs` blue eyebrow, then an `h2` at `text-2xl sm:text-3xl font-bold`, inside `<section className="space-y-8">`.
- Grids: `grid sm:grid-cols-2 gap-5 lg:gap-6`, with `items-stretch` plus `h-full` on cards where equal heights matter.
- Stagger reveals with `delay={idx * 0.08}` (seconds).
- Card surface recipe: `rounded-2xl border border-neutral-200/80 bg-white/80 p-5 sm:p-6 shadow-sm backdrop-blur-sm` + `dark:border-neutral-800/80 dark:bg-neutral-900/70`.

## Dependencies

### Internal
- `../data/content.ts` — `profile`, `experiences`, `projects`, `certificates`, `activities`, `awards`
- `../components/` — `TimelineItem`, `ProjectCard`, `SkillBadge`, `Reveal`
- `../contexts/I18nContext` — `useI18n()` for eyebrow/nav labels

### External
- `react` — `useState` in `Contact.tsx` only

<!-- MANUAL: -->
