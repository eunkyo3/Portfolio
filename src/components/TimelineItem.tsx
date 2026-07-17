type ExperienceItem = {
  title: string
  description: string
}

type TimelineItemProps = {
  role: string
  company: string
  period: string
  summary: string
  items?: ExperienceItem[]
}

export function TimelineItem({ role, company, period, summary, items }: TimelineItemProps) {
  return (
    <div className="relative pl-10 pb-10 last:pb-0 group">
      <span className="absolute left-[7px] top-1 bottom-0 w-px bg-gradient-to-b from-indigo-500/60 via-violet-500/30 to-transparent" />
      <span className="absolute -left-[1px] top-1.5 h-4 w-4 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 shadow-[0_0_0_4px_rgba(99,102,241,0.15)] dark:from-indigo-400 dark:to-cyan-300 dark:shadow-[0_0_0_4px_rgba(129,140,248,0.2)]" />
      <h3 className="text-lg md:text-xl text-neutral-900 dark:text-white font-semibold">
        {role}
      </h3>
      <div className="mt-2 flex flex-wrap items-center gap-2 text-xs md:text-sm text-neutral-600 dark:text-neutral-400">
        <span>{company}</span>
        <span className="rounded-full border border-indigo-500/20 bg-indigo-500/5 px-2.5 py-0.5 text-[11px] font-medium text-indigo-700 dark:border-indigo-400/20 dark:bg-indigo-400/10 dark:text-indigo-300">
          {period}
        </span>
      </div>
      <p className="mt-3 text-sm md:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
        {summary}
      </p>
      {items && items.length > 0 && (
        <ul className="mt-4 space-y-4">
          {items.map((item) => (
            <li key={item.title} className="text-sm md:text-base text-neutral-700 dark:text-neutral-300">
              <p className="font-semibold text-neutral-900 dark:text-neutral-100">{item.title}</p>
              <p className="mt-1 leading-relaxed">{item.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
