type TimelineItemProps = {
  role: string
  company: string
  period: string
  summary: string
}

export function TimelineItem({ role, company, period, summary }: TimelineItemProps) {
  return (
    <div className="relative pl-10 pb-10 border-l border-neutral-200/70 dark:border-neutral-800/70 last:pb-0 group">
      <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 dark:from-blue-400 dark:to-sky-300 shadow-md shadow-blue-500/40" />
      <div className="absolute -left-px top-2 h-px w-6 bg-gradient-to-r from-blue-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <h3 className="text-lg md:text-xl text-neutral-900 dark:text-white font-semibold">
        {role}
      </h3>
      <div className="mt-1 text-xs md:text-sm text-neutral-600 dark:text-neutral-400">
        {company} · {period}
      </div>
      <p className="mt-3 text-sm md:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
        {summary}
      </p>
    </div>
  )
}


