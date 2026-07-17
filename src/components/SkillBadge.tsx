type SkillBadgeProps = {
  label: string
}

export function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-200/70 bg-white/70 px-3 py-1 text-xs sm:text-sm font-medium text-neutral-700 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-400/50 hover:text-indigo-700 hover:shadow-lg hover:shadow-indigo-500/10 dark:border-white/10 dark:bg-white/[0.04] dark:text-neutral-200 dark:hover:border-indigo-400/40 dark:hover:text-indigo-300 dark:hover:shadow-indigo-500/20">
      {label}
    </span>
  )
}
