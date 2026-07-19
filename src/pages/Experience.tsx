import { useContent } from '../data/useContent'
import { TimelineItem } from '../components/TimelineItem'
import { useI18n } from '../contexts/I18nContext'

export function Experience() {
  const { experiences } = useContent()
  const { t } = useI18n()
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-indigo-600 dark:text-indigo-400">
          <span className="font-mono">02</span>
          <span className="h-px w-8 bg-gradient-to-r from-indigo-500 to-transparent" />
          {t.experience.title}
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          {t.experience.headingPre}<span className="text-gradient">{t.experience.headingHighlight}</span>
        </h2>
      </div>
      <div className="mt-2">
        {experiences.map((e) => (
          <TimelineItem key={e.role + e.company} {...e} />
        ))}
      </div>
    </section>
  )
}
