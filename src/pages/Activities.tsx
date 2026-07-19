import { useContent } from '../data/useContent'
import { useI18n } from '../contexts/I18nContext'
import { Reveal } from '../components/Reveal'
import { TiltCard } from '../components/TiltCard'

export function Activities() {
  const { activities, awards } = useContent()
  const { t } = useI18n()
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-indigo-600 dark:text-indigo-400">
          <span className="font-mono">06</span>
          <span className="h-px w-8 bg-gradient-to-r from-indigo-500 to-transparent" />
          Activities
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          {t.activities.headingPre}<span className="text-gradient">{t.activities.headingHighlight}</span>
        </h2>
      </div>
      {/* Activities */}
      <section className="space-y-4">
        <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-white">{t.activities.activitiesLabel}</h3>
        <div className="grid sm:grid-cols-2 gap-4 lg:gap-6 items-stretch">
          {activities.map((a, idx) => (
            <Reveal key={a.title + a.detail} delay={idx * 0.08}>
              <TiltCard className="card-glass h-full p-5 sm:p-6 flex flex-col">
                <h4 className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-white">{a.title}</h4>
                <p className="mt-2 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed flex-1">
                  {a.detail}
                </p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>
      {/* Awards */}
      <section className="space-y-4">
        <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-white">{t.activities.awardsLabel}</h3>
        <div className="grid sm:grid-cols-2 gap-4 lg:gap-6 items-stretch">
          {awards.map((a, idx) => (
            <Reveal key={a.title + a.detail} delay={idx * 0.08}>
              <TiltCard className="card-glass h-full p-5 sm:p-6 flex flex-col">
                <h4 className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-white">{a.title}</h4>
                <p className="mt-2 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed flex-1">
                  {a.detail}
                </p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>
    </section>
  )
}
