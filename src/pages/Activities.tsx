import { activities, awards } from '../data/content'
import { Reveal } from '../components/Reveal'

export function Activities() {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="text-xs font-medium tracking-wide text-blue-600 dark:text-blue-400 uppercase">
          Activities
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">보안 · 클라우드 · AI 대외활동 & 수상</h2>
      </div>
      {/* 대외활동 */}
      <section className="space-y-4">
        <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-white">대외활동</h3>
        <div className="grid sm:grid-cols-2 gap-4 lg:gap-6 items-stretch">
          {activities.map((a, idx) => (
            <Reveal key={a.title + a.detail} delay={idx * 0.08}>
              <div className="h-full rounded-2xl border border-neutral-200/80 bg-white/80 p-5 sm:p-6 shadow-sm backdrop-blur-sm hover:-translate-y-1 hover:shadow-xl transition-all hover:border-blue-500/60 dark:border-neutral-800/80 dark:bg-neutral-900/70 flex flex-col">
                <h4 className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-white">{a.title}</h4>
                <p className="mt-2 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed flex-1">
                  {a.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      {/* 수상경력 */}
      <section className="space-y-4">
        <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-white">수상경력</h3>
        <div className="grid sm:grid-cols-2 gap-4 lg:gap-6 items-stretch">
          {awards.map((a, idx) => (
            <Reveal key={a.title + a.detail} delay={idx * 0.08}>
              <div className="h-full rounded-2xl border border-neutral-200/80 bg-white/80 p-5 sm:p-6 shadow-sm backdrop-blur-sm hover:-translate-y-1 hover:shadow-xl transition-all hover:border-blue-500/60 dark:border-neutral-800/80 dark:bg-neutral-900/70 flex flex-col">
                <h4 className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-white">{a.title}</h4>
                <p className="mt-2 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed flex-1">
                  {a.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </section>
  )
}
