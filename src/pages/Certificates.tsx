import { useContent } from '../data/useContent'
import { useI18n } from '../contexts/I18nContext'
import { Reveal } from '../components/Reveal'
import { TiltCard } from '../components/TiltCard'

export function Certificates() {
  const { certificates } = useContent()
  const { t } = useI18n()
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-indigo-600 dark:text-indigo-400">
          <span className="font-mono">05</span>
          <span className="h-px w-8 bg-gradient-to-r from-indigo-500 to-transparent" />
          Certificates
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          {t.certificates.headingPre}<span className="text-gradient">{t.certificates.headingHighlight}</span>
        </h2>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 max-w-2xl">
          {t.certificates.subtitle}
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
        {certificates.map((c, idx) => (
          <Reveal key={c.title} delay={idx * 0.08}>
            <TiltCard className="card-glass relative overflow-hidden p-5 sm:p-6">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400" />
              <h3 className="mt-2 text-base sm:text-lg font-semibold text-neutral-900 dark:text-white">{c.title}</h3>
              <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                {t.certificates.issuer} <span className="font-medium text-neutral-900 dark:text-neutral-100">{c.issuer}</span>
              </p>
              <p className="mt-1 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">{t.certificates.date} {c.date}</p>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
