type SkillBadgeProps = {
  label: string
}

export function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full bg-neutral-100/80 px-3 py-1 text-xs sm:text-sm text-neutral-800 border border-neutral-200/70 shadow-sm shadow-neutral-200/60 dark:bg-neutral-800/80 dark:text-neutral-100 dark:border-neutral-700/80 dark:shadow-none">
      {label}
    </span>
  )
}


