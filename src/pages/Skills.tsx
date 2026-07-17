import { useI18n } from '../contexts/I18nContext'
import { SkillBadge } from '../components/SkillBadge'

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
        {/* Client Side */}
        <div className="card-glass p-5 sm:p-6">
          <h3 className="mb-3 flex items-center gap-2 text-sm sm:text-base font-semibold text-neutral-900 dark:text-white">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
            Client Side
          </h3>
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
        <div className="card-glass card-glass-hover border-indigo-500/40 dark:border-indigo-400/40 p-5 sm:p-6">
          <h3 className="mb-3 flex items-center gap-2 text-sm sm:text-base font-semibold text-indigo-700 dark:text-indigo-300">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
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
        <div className="card-glass p-5 sm:p-6">
          <h3 className="mb-3 flex items-center gap-2 text-sm sm:text-base font-semibold text-neutral-900 dark:text-white">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
            Data Layer
          </h3>
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
        <div className="card-glass p-5 sm:p-6">
          <h3 className="mb-3 flex items-center gap-2 text-sm sm:text-base font-semibold text-neutral-900 dark:text-white">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
            Infrastructure &amp; DevOps
          </h3>
          <div className="space-y-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold text-neutral-900 dark:text-neutral-100">Deployment</span>
              <SkillBadge label="AWS (Lightsail, S3, EC2, VPC)" />
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
        <div className="card-glass p-5 sm:p-6">
          <h3 className="mb-3 flex items-center gap-2 text-sm sm:text-base font-semibold text-neutral-900 dark:text-white">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
            Etc
          </h3>
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
