import { useContent } from '../data/useContent'
import { ProjectCard } from '../components/ProjectCard'
import { useI18n } from '../contexts/I18nContext'
import { Reveal } from '../components/Reveal'

export function Projects() {
  const { projects } = useContent()
  const { t } = useI18n()
  const featured = projects.filter((p) => p.tier === 'featured')
  const practice = projects.filter((p) => p.tier !== 'featured')

  return (
    <section className="space-y-10">
      <div className="space-y-3">
        <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-indigo-600 dark:text-indigo-400">
          <span className="font-mono">03</span>
          <span className="h-px w-8 bg-gradient-to-r from-indigo-500 to-transparent" />
          {t.projects.title}
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          {t.projects.headingPre}<span className="text-gradient">{t.projects.headingHighlight}</span>
        </h2>
      </div>

      {/* Featured projects */}
      <div className="space-y-5">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-neutral-900 dark:text-white">
          {t.projects.featured}
          <span className="rounded-full bg-indigo-500/10 px-2 py-0.5 text-[11px] font-medium text-indigo-600 dark:text-indigo-300">
            {featured.length}
          </span>
        </h3>
        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6 items-stretch">
          {featured.map((p, idx) => (
            <Reveal key={p.title} delay={idx * 0.08}>
              <ProjectCard {...p} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* Learning / practice */}
      <div className="space-y-5">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-neutral-500 dark:text-neutral-400">
          {t.projects.practice}
          <span className="rounded-full bg-neutral-500/10 px-2 py-0.5 text-[11px] font-medium text-neutral-500 dark:text-neutral-400">
            {practice.length}
          </span>
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
          {practice.map((p, idx) => (
            <Reveal key={p.title} delay={idx * 0.06}>
              <ProjectCard {...p} compact />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
