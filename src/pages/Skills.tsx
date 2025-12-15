import { useI18n } from '../contexts/I18nContext'
import { SkillBadge } from '../components/SkillBadge'

export function Skills() {
  const { t } = useI18n()
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="text-xs font-medium tracking-wide text-blue-600 dark:text-blue-400 uppercase">
          {t.skills.title}
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
          안정적인 백엔드와 인프라를 위한 기술 스택
        </h2>
      </div>
      <div className="space-y-6">
        {/* Client Side */}
        <div className="rounded-2xl border border-neutral-200/80 bg-white/80 p-5 sm:p-6 shadow-sm backdrop-blur-sm transition-colors hover:border-blue-500/60 dark:border-neutral-800/80 dark:bg-neutral-900/70">
          <h3 className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-white mb-3">Client Side</h3>
          <div className="space-y-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold text-neutral-900 dark:text-neutral-100">Web</span>
              <SkillBadge label="React" />
              <SkillBadge label="Vue" />
              <SkillBadge label="JavaScript" />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold text-neutral-900 dark:text-neutral-100">Mobile</span>
              <SkillBadge label="Flutter" />
              <SkillBadge label="Dart" />
            </div>
          </div>
        </div>
        {/* Server Side & Security */}
        <div className="rounded-2xl border border-blue-500/40 bg-white/80 p-5 sm:p-6 shadow-sm backdrop-blur-sm transition-colors hover:border-blue-500/80 dark:border-blue-500/50 dark:bg-neutral-900/80">
          <h3 className="text-sm sm:text-base font-semibold text-blue-700 dark:text-blue-300 mb-3">
            Server Side
          </h3>
          <div className="space-y-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold text-neutral-900 dark:text-neutral-100">Core</span>
              <SkillBadge label="Java" />
              <SkillBadge label="Python" />
              <SkillBadge label="Spring(Boot)" />
              <SkillBadge label="Node.js" />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold text-neutral-900 dark:text-neutral-100">Key Competency</span>
              <SkillBadge label="RESTful API 설계" />
              <SkillBadge label="시큐어 코딩" />
            </div>
          </div>
        </div>
        {/* Data Layer */}
        <div className="rounded-2xl border border-neutral-200/80 bg-white/80 p-5 sm:p-6 shadow-sm backdrop-blur-sm transition-colors hover:border-blue-500/60 dark:border-neutral-800/80 dark:bg-neutral-900/70">
          <h3 className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-white mb-3">Data Layer</h3>
          <div className="space-y-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold text-neutral-900 dark:text-neutral-100">Database</span>
              <SkillBadge label="MySQL" />
              <SkillBadge label="PostgreSQL" />
              <SkillBadge label="Oracle" />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold text-neutral-900 dark:text-neutral-100">Cache &amp; BaaS</span>
              <SkillBadge label="Redis" />
              <SkillBadge label="Firebase" />
            </div>
          </div>
        </div>
        {/* Infrastructure & DevOps */}
        <div className="rounded-2xl border border-neutral-200/80 bg-white/80 p-5 sm:p-6 shadow-sm backdrop-blur-sm transition-colors hover:border-blue-500/60 dark:border-neutral-800/80 dark:bg-neutral-900/70">
          <h3 className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-white mb-3">
            Infrastructure &amp; DevOps
          </h3>
          <div className="space-y-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold text-neutral-900 dark:text-neutral-100">Deployment</span>
              <SkillBadge label="AWS (ECS, EB, 인프라 구축)" />
              <SkillBadge label="Vercel" />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold text-neutral-900 dark:text-neutral-100">Operations</span>
              <SkillBadge label="Docker" />
              <SkillBadge label="Kubernetes" />
              <SkillBadge label="Linux" />
            </div>
          </div>
        </div>
        {/* Etc */}
        <div className="rounded-2xl border border-neutral-200/80 bg-white/80 p-5 sm:p-6 shadow-sm backdrop-blur-sm transition-colors hover:border-blue-500/60 dark:border-neutral-800/80 dark:bg-neutral-900/70">
          <h3 className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-white mb-3">Etc</h3>
          <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
            <SkillBadge label="Git" />
            <SkillBadge label="Gradle" />
            <SkillBadge label="이슈 트래킹" />
            <SkillBadge label="리버스 엔지니어링" />
          </div>
        </div>
      </div>
    </section>
  )
}


