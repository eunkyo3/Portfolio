import { projects } from '../data/content'
import { ProjectCard } from '../components/ProjectCard'
import { useI18n } from '../contexts/I18nContext'
import { Reveal } from '../components/Reveal'

export function Projects() {
  const { t } = useI18n()
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="text-xs font-medium tracking-wide text-blue-600 dark:text-blue-400 uppercase">
          {t.projects.title}
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
          백엔드 · 데이터 · 앱 전반을 아우르는 프로젝트
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


