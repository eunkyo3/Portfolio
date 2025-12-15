import { experiences } from '../data/content'
import { TimelineItem } from '../components/TimelineItem'
import { useI18n } from '../contexts/I18nContext'

export function Experience() {
  const { t } = useI18n()
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="text-xs font-medium tracking-wide text-blue-600 dark:text-blue-400 uppercase">
          {t.experience.title}
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
          가치 있는 실무 경험
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


