import { useI18n } from '../contexts/I18nContext'
import { SkillBadge } from '../components/SkillBadge'
import { skillGroups } from '../data/content'

export function Skills() {
  const { t } = useI18n()
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-indigo-600 dark:text-indigo-400">
          <span className="font-mono">04</span>
          <span className="h-px w-8 bg-gradient-to-r from-indigo-500 to-transparent" />
          {t.skills.title}
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          안정적인 백엔드와 인프라를 위한 <span className="text-gradient">기술 스택</span>
        </h2>
      </div>
      <div className="space-y-6">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className={
              group.highlight
                ? 'card-glass card-glass-hover border-indigo-500/40 dark:border-indigo-400/40 p-5 sm:p-6'
                : 'card-glass p-5 sm:p-6'
            }
          >
            <h3
              className={`mb-3 flex items-center gap-2 text-sm sm:text-base font-semibold ${
                group.highlight ? 'text-indigo-700 dark:text-indigo-300' : 'text-neutral-900 dark:text-white'
              }`}
            >
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
              {group.title}
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
              {group.rows.map((row, i) => (
                <div key={row.label || i} className="flex flex-wrap items-center gap-2">
                  {row.label && (
                    <span className="font-semibold text-neutral-900 dark:text-neutral-100">{row.label}</span>
                  )}
                  {row.items.map((item) => (
                    <SkillBadge key={item} label={item} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
