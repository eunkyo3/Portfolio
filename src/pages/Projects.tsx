import { projects } from '../data/content'
import { ProjectCard } from '../components/ProjectCard'
import { useI18n } from '../contexts/I18nContext'
import { Reveal } from '../components/Reveal'

export function Projects() {
  const { t } = useI18n()
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-indigo-600 dark:text-indigo-400">
          <span className="font-mono">03</span>
          <span className="h-px w-8 bg-gradient-to-r from-indigo-500 to-transparent" />
          {t.projects.title}
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          백엔드 · 데이터 · 앱 전반을 아우르는 <span className="text-gradient">프로젝트</span>
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 gap-5 lg:gap-6 items-stretch">
        {projects.map((p, idx) => (
          <Reveal key={p.title} delay={idx * 0.08}>
            <ProjectCard {...p} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
