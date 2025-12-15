import { profile } from '../data/content'
import { useI18n } from '../contexts/I18nContext'

export function About() {
  const { t } = useI18n()
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="text-xs font-medium tracking-wide text-blue-600 dark:text-blue-400 uppercase">
          {t.nav.about}
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
          AI와 데이터를 연결해 가치를 만드는 백엔드 개발자
        </h2>
      </div>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.6fr)] items-start">
        {/* 기본 정보 영역 - cdg 포트폴리오의 About Me 박스 느낌 */}
        <div className="rounded-2xl border border-neutral-200/80 bg-white/80 p-5 sm:p-6 shadow-sm backdrop-blur-sm transition-colors hover:border-blue-500/60 dark:border-neutral-800/80 dark:bg-neutral-900/70">
          <h3 className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-white mb-4">ABOUT ME</h3>
          <dl className="space-y-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
            <div className="flex justify-between gap-3">
              <dt className="font-medium text-neutral-500 dark:text-neutral-400">이름</dt>
              <dd className="text-right font-semibold text-neutral-900 dark:text-neutral-50">{profile.name}</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="font-medium text-neutral-500 dark:text-neutral-400">포지션</dt>
              <dd className="text-right text-neutral-900 dark:text-neutral-50">백엔드 개발자</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="font-medium text-neutral-500 dark:text-neutral-400">학력</dt>
              <dd className="text-right text-neutral-900 dark:text-neutral-50">
                성일정보고등학교 졸업<br />
                배화여자대학교 재학 중
              </dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="font-medium text-neutral-500 dark:text-neutral-400">관심 분야</dt>
              <dd className="text-right text-neutral-900 dark:text-neutral-50">
                백엔드, 보안, 클라우드 인프라, AI 기반 서비스
              </dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="font-medium text-neutral-500 dark:text-neutral-400">연락처</dt>
              <dd className="text-right text-neutral-900 dark:text-neutral-50">010-4242-8049</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="font-medium text-neutral-500 dark:text-neutral-400">이메일</dt>
              <dd className="text-right text-neutral-900 dark:text-neutral-50">dmsry060209@gmail.com</dd>
            </div>
          </dl>
        </div>
        {/* 자기 소개 / 가치관 영역 */}
        <div className="space-y-5 text-sm sm:text-base">
          <div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">{profile.name}</h3>
            <p className="text-base sm:text-lg text-blue-600 dark:text-blue-400 mb-3">{profile.role}</p>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">{profile.summary}</p>
          </div>
        </div>
      </div>
    </section>
  )
}


