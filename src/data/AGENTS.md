<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-07-17 | Updated: 2026-07-17 -->

# data

## Purpose
The site's content layer: one file of plain exported literals holding every résumé fact on the page. **This is where content edits belong.** Adding a project, updating a job description, or recording a new award is a change to `content.ts` alone — the pages that render it need no edit.

Types are inferred, not declared. There are no interfaces here; each consumer defines its own props type and relies on structural matching.

## Key Files
| File | Description |
|------|-------------|
| `content.ts` | All portfolio content. Exports `profile`, `experiences`, `projects`, `skills`, `certificates`, `activities`, `awards`. Written in Korean. |

### Exports and their consumers
| Export | Shape | Rendered by |
|--------|-------|-------------|
| `profile` | `{ name, birthDate, role, summary }` | `pages/Home.tsx` (hero), `pages/About.tsx` |
| `experiences` | `[{ role, company, period, summary, items: [{ title, description }] }]` | `pages/Experience.tsx` → `components/TimelineItem` |
| `projects` | `[{ title, description, tech: string[], link?, repo? }]` | `pages/Projects.tsx` → `components/ProjectCard` |
| `certificates` | `[{ title, issuer, date }]` | `pages/Certificates.tsx` |
| `activities` | `[{ title, detail }]` | `pages/Activities.tsx` |
| `awards` | `[{ title, detail }]` | `pages/Activities.tsx` |
| `skills` | `{ languages, frontend, backend, data, devops, etc }` | **Nobody — this export is dead.** See below. |

## For AI Agents

### Working In This Directory

**`skills` is not rendered.** `pages/Skills.tsx` does not import it; that page hardcodes its own `<SkillBadge label="..." />` list. The two have already drifted — `content.ts` lists AWS as `Lightsail, S3, EC2, VPC` while the page renders the same group and the README describes it as `ECS, EB`. Editing `skills` here changes nothing on the site. If asked to update skills, edit `pages/Skills.tsx`, and consider raising the duplication rather than silently updating one of the two.

**`repo` vs `link` render differently — the data must obey the field intent.** `ProjectCard` labels `repo` as "GitHub" and `link` as "Live", so a misfiled URL is user-visible. Use `repo` for source code, `link` for a live site. (SignGPT's product-site URL was moved from `repo` to `link` in 2026-07 for exactly this reason.)

**Personal data lives here.** `profile` and `pages/About.tsx` carry a real phone number, email, and birth date. Treat them as the owner's deliberate choice; never copy them into new files, logs, or examples, and don't publish them anywhere beyond this site.

**Field renames are silent breaks.** Consumers spread these objects into components typed independently (`<TimelineItem {...e} />`, `<ProjectCard {...p} />`). Renaming a field is caught at build only because those props types are required — but *adding* an unused field is not caught at all. Grep the consumer before renaming.

**Ordering is rendering order.** Arrays render top-to-bottom as written; there is no sort anywhere. Newest-first is the convention in `projects`; `certificates` and `activities` run chronologically. Insert accordingly.

**React keys depend on content uniqueness.** `Certificates` keys on `c.title`, `Projects` on `p.title`, and `Activities`/`Experience` on concatenations (`a.title + a.detail`, `e.role + e.company`). Two entries with identical values in those fields produce duplicate-key warnings and unstable rendering. Note that `activities` already contains two entries titled `화이트해커 양성교육` — they stay distinct only because their `detail` strings differ.

### Testing Requirements
No tests exist. After editing, run `npm run build` (catches shape mismatches) and check the affected section in `npm run dev`. Content is user-visible Korean prose — the build cannot tell you a sentence is wrong, so reread what you wrote.

### Common Patterns
- `export const x = [...]` / `= {...}` — plain literals, no `as const`, no explicit type annotations, no default export.
- Long Korean prose is written as multi-line template-free strings broken across lines by the formatter.
- Dates are `YYYY.MM.DD`; periods are `YYYY.MM ~ YYYY.MM` or `YYYY.MM ~ 현재`.
- `activities`/`awards` pack metadata into `detail` as `기간 · 기관 · 설명`, separated by `·`.

## Dependencies

### Internal
None — this file imports nothing. It is a leaf, and every other module depends on it rather than the reverse.

### External
None.

<!-- MANUAL: -->
