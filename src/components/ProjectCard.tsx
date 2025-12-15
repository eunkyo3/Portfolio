type ProjectCardProps = {
  title: string
  description: string
  tech: string[]
  link?: string
  repo?: string
}

export function ProjectCard({ title, description, tech, link, repo }: ProjectCardProps) {
  return (
    <div className="h-full rounded-2xl border border-neutral-200/80 bg-white/80 p-5 sm:p-6 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:border-blue-500/60 dark:border-neutral-800/80 dark:bg-neutral-900/60 flex flex-col">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-white leading-snug">
          {title}
        </h3>
        <div className="flex gap-3 text-sm">
          {link && (
            <a
              className="text-blue-700 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              바로가기
            </a>
          )}
          {repo && (
            <a
              className="text-blue-700 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
              href={repo}
              target="_blank"
              rel="noreferrer"
            >
              바로가기
            </a>
          )}
        </div>
      </div>
      <p className="mt-3 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed flex-1">
        {description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="text-[11px] sm:text-xs bg-neutral-100/80 text-neutral-800 px-2.5 py-1 rounded-full border border-neutral-200/70 dark:bg-neutral-800/80 dark:text-neutral-200 dark:border-neutral-700/80"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}


