import { useI18n } from '../contexts/I18nContext'

type ProjectLink = { label: string; href: string }

type ProjectCardProps = {
  title: string
  description: string
  tech: string[]
  link?: string
  repo?: string
  links?: ProjectLink[]
  problemSolving?: string[]
  category?: string
  compact?: boolean
}

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
    <path d="M7 17 17 7M7 7h10v10" />
  </svg>
)

export function ProjectCard({ title, description, tech, link, repo, links, problemSolving, category, compact }: ProjectCardProps) {
  const { t } = useI18n()
  return (
    <div className={`card-glass card-glass-hover h-full flex flex-col ${compact ? 'p-4' : 'p-5 sm:p-6'}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          {category && (
            <span className="mb-2 inline-block rounded-full border border-indigo-500/25 bg-indigo-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-indigo-700 dark:text-indigo-300">
              {category}
            </span>
          )}
          <h3 className={`font-semibold text-neutral-900 dark:text-white leading-snug ${compact ? 'text-sm' : 'text-base sm:text-lg'}`}>
            {title}
          </h3>
        </div>
        {(repo || link) && (
          <div className="flex shrink-0 gap-3 text-sm">
            {repo && (
              <a
                className="inline-flex items-center gap-1 text-neutral-600 hover:text-indigo-600 dark:text-neutral-300 dark:hover:text-indigo-400 whitespace-nowrap transition-colors"
                href={repo}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
                <ExternalIcon />
              </a>
            )}
            {link && (
              <a
                className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 whitespace-nowrap transition-colors"
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                Live
                <ExternalIcon />
              </a>
            )}
          </div>
        )}
      </div>
      <p
        className={`mt-3 text-neutral-700 dark:text-neutral-300 leading-relaxed flex-1 ${
          compact ? 'text-xs line-clamp-4' : 'text-sm sm:text-base'
        }`}
      >
        {description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-indigo-500/20 bg-indigo-500/5 px-2.5 py-1 text-[11px] sm:text-xs font-medium text-indigo-700 dark:border-indigo-400/20 dark:bg-indigo-400/10 dark:text-indigo-300"
          >
            {t}
          </span>
        ))}
      </div>
      {links && links.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-neutral-300 px-2.5 py-1 text-[11px] font-medium text-neutral-600 transition-colors hover:border-indigo-400 hover:text-indigo-600 dark:border-white/15 dark:text-neutral-300 dark:hover:border-indigo-400/60 dark:hover:text-indigo-300"
            >
              {l.label}
              <ExternalIcon />
            </a>
          ))}
        </div>
      )}
      {problemSolving && problemSolving.length > 0 && (
        <details className="group/ps mt-4">
          <summary className="flex cursor-pointer select-none list-none items-center gap-1.5 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 transition-transform duration-200 group-open/ps:rotate-90">
              <path d="m9 18 6-6-6-6" />
            </svg>
            {t.projects.problemSolving} · {problemSolving.length}
          </summary>
          <ul className="mt-3 space-y-2 border-l-2 border-indigo-500/20 pl-3">
            {problemSolving.map((item, i) => (
              <li key={i} className="text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
                {item}
              </li>
            ))}
          </ul>
        </details>
      )}
    </div>
  )
}
