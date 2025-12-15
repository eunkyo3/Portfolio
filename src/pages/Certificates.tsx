import { certificates } from '../data/content'
import { Reveal } from '../components/Reveal'

export function Certificates() {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="text-xs font-medium tracking-wide text-blue-600 dark:text-blue-400 uppercase">Certificates</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
          문제 해결의 폭을 넓혀주는 기술 자격
        </h2>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 max-w-2xl">
          다양한 문제를 다룰 수 있는 기초 체력을 탄탄히 다졌습니다.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
        {certificates.map((c, idx) => (
          <Reveal key={c.title} delay={idx * 0.08}>
            <div className="relative overflow-hidden rounded-2xl border border-neutral-200/80 bg-white/80 p-5 sm:p-6 shadow-sm backdrop-blur-sm hover:-translate-y-1 hover:shadow-xl transition-all hover:border-blue-500/60 dark:border-neutral-800/80 dark:bg-neutral-900/70">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400" />
              <h3 className="mt-2 text-base sm:text-lg font-semibold text-neutral-900 dark:text-white">{c.title}</h3>
              <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                발급 기관 <span className="font-medium text-neutral-900 dark:text-neutral-100">{c.issuer}</span>
              </p>
              <p className="mt-1 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">취득 날짜 {c.date}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
