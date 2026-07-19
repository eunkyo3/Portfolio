import { useContent } from '../data/useContent'
import { useI18n } from '../contexts/I18nContext'

export function About() {
  const { profile } = useContent()
  const { t } = useI18n()
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-indigo-600 dark:text-indigo-400">
          <span className="font-mono">01</span>
          <span className="h-px w-8 bg-gradient-to-r from-indigo-500 to-transparent" />
          {t.nav.about}
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          {t.about.headingPre}<span className="text-gradient">{t.about.headingHighlight}</span>
        </h2>
      </div>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.6fr)] items-start">
        {/* Basic info block */}
        <div className="card-glass card-glass-hover p-5 sm:p-6">
          <h3 className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-white mb-4">ABOUT ME</h3>
          <dl className="divide-y divide-neutral-200/60 dark:divide-white/5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
            <div className="flex justify-between gap-3 py-2.5 first:pt-0">
              <dt className="font-semibold uppercase tracking-wider text-[10px] sm:text-xs text-neutral-500 dark:text-neutral-400">{t.about.labels.name}</dt>
              <dd className="text-right font-semibold text-neutral-900 dark:text-neutral-50">{profile.name}</dd>
            </div>
            <div className="flex justify-between gap-3 py-2.5">
              <dt className="font-semibold uppercase tracking-wider text-[10px] sm:text-xs text-neutral-500 dark:text-neutral-400">{t.about.labels.birth}</dt>
              <dd className="text-right text-neutral-900 dark:text-neutral-50">{profile.birthDate}</dd>
            </div>
            <div className="flex justify-between gap-3 py-2.5">
              <dt className="font-semibold uppercase tracking-wider text-[10px] sm:text-xs text-neutral-500 dark:text-neutral-400">{t.about.labels.position}</dt>
              <dd className="text-right text-neutral-900 dark:text-neutral-50">{t.about.positionValue}</dd>
            </div>
            <div className="flex justify-between gap-3 py-2.5">
              <dt className="font-semibold uppercase tracking-wider text-[10px] sm:text-xs text-neutral-500 dark:text-neutral-400">{t.about.labels.education}</dt>
              <dd className="text-right text-neutral-900 dark:text-neutral-50">
                {t.about.educationLine1}<br />
                {t.about.educationLine2}
              </dd>
            </div>
            <div className="flex justify-between gap-3 py-2.5">
              <dt className="font-semibold uppercase tracking-wider text-[10px] sm:text-xs text-neutral-500 dark:text-neutral-400">{t.about.labels.interests}</dt>
              <dd className="text-right text-neutral-900 dark:text-neutral-50">
                {t.about.interestsValue}
              </dd>
            </div>
            <div className="flex justify-between gap-3 py-2.5 last:pb-0">
              <dt className="font-semibold uppercase tracking-wider text-[10px] sm:text-xs text-neutral-500 dark:text-neutral-400">{t.about.labels.email}</dt>
              <dd className="text-right text-neutral-900 dark:text-neutral-50">
                <a href={`mailto:${profile.email}`} className="hover:text-indigo-600 dark:hover:text-indigo-400">
                  {profile.email}
                </a>
              </dd>
            </div>
          </dl>
        </div>
        {/* Self-introduction block */}
        <div className="space-y-5 text-sm sm:text-base">
          <div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">{profile.name}</h3>
            <p className="text-base sm:text-lg text-indigo-600 dark:text-indigo-400 mb-3">{profile.role}</p>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">{profile.summary}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
