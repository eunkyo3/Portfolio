import { profile } from '../data/content'
import { About } from './About'
import { Experience } from './Experience'
import { Projects } from './Projects'
import { Skills } from './Skills'
import { Certificates } from './Certificates'
import { Activities } from './Activities'
import { Reveal } from '../components/Reveal'

export function Home() {
  return (
    <>
      <section id="home" className="relative space-y-12">
        <Reveal>
        <div className="relative grid gap-12 md:grid-cols-2 items-center">
          <div className="text-center md:text-left space-y-6">
            <div className="inline-flex flex-wrap justify-center md:justify-start gap-2">
              <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                항상 배우는 것을 즐기는
              </span>
              <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                호기심이 많은
              </span>
              <span className="inline-flex items-center rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700 dark:bg-purple-500/10 dark:text-purple-300">
                문제를 끝까지 파고드는
              </span>
            </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            {profile.name}
          </h1>
          <p className="text-lg text-blue-600 dark:text-blue-400">{profile.role}</p>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">{profile.summary}</p>
          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4" />
        </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500 via-purple-500 to-cyan-400 opacity-70 animate-pulse" />
              <div className="absolute inset-[12%] rounded-3xl bg-neutral-950/90 dark:bg-neutral-900/90 border border-white/10 flex items-center justify-center">
                <div className="space-y-3 text-center text-xs sm:text-sm text-neutral-200">
                  <p className="font-semibold text-neutral-50">Backend · Data · AI</p>
                  <p>API와 데이터 흐름을 설계하고,</p>
                  <p>AI 모델을 서비스에 녹여내는 일을 좋아합니다.</p>
                  <div className="mt-3 flex flex-wrap justify-center gap-2 text-[11px] sm:text-xs">
                    <span className="rounded-full border border-blue-400/60 px-2 py-1">Java</span>
                    <span className="rounded-full border border-purple-400/60 px-2 py-1">Python</span>
                    <span className="rounded-full border border-cyan-400/60 px-2 py-1">Node.js</span>
                    <span className="rounded-full border border-emerald-400/60 px-2 py-1">SQL</span>
                    <span className="rounded-full border border-pink-400/60 px-2 py-1">AI Projects</span>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 rounded-3xl border border-white/10 opacity-40 animate-ping" />
            </div>
          </div>
        </div>
        </Reveal>
        {/* Archiving 섹션 - cdg 포트폴리오의 Archiving 구조 참고 */}
        <Reveal>
        <div className="rounded-2xl border border-neutral-200/80 bg-white/80 p-5 sm:p-6 shadow-sm backdrop-blur-sm dark:border-neutral-800/80 dark:bg-neutral-900/70 space-y-4">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="space-y-1">
              <p className="text-xs font-medium tracking-wide text-blue-600 dark:text-blue-400 uppercase">
                Archiving
              </p>
              <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-white">
                공부와 프로젝트를 기록하는 공간
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
                백엔드, 데이터, AI와 관련된 학습과 프로젝트를 꾸준히 기록하고 공유하고 있습니다.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="https://github.com/eunkyo3"
              target="_blank"
              rel="noreferrer"
              className="group rounded-xl border border-neutral-200/80 bg-neutral-50/80 p-4 sm:p-5 hover:border-blue-500/70 hover:bg-blue-50/60 transition-colors dark:border-neutral-700/80 dark:bg-neutral-900/80 dark:hover:border-blue-400/70 dark:hover:bg-neutral-900"
            >
              <p className="text-sm font-semibold text-neutral-900 dark:text-white mb-1">GitHub</p>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
                소스 코드를 관리하는 저장소입니다.
              </p>
              <p className="mt-2 text-xs text-blue-600 dark:text-blue-400 group-hover:underline">
                깃허브로 이동
              </p>
            </a>
            <a
              href="https://kyo-0209.notion.site/2caeed92c4108090bccfccd2f56b3c6d"
              target="_blank"
              rel="noreferrer"
              className="group rounded-xl border border-neutral-200/80 bg-neutral-50/80 p-4 sm:p-5 hover:border-purple-500/70 hover:bg-purple-50/60 transition-colors dark:border-neutral-700/80 dark:bg-neutral-900/80 dark:hover:border-purple-400/70 dark:hover:bg-neutral-900"
            >
              <p className="text-sm font-semibold text-neutral-900 dark:text-white mb-1">Notion</p>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
                학습 내용을 정리하고 공간입니다.
              </p>
              <p className="mt-2 text-xs text-purple-600 dark:text-purple-400 group-hover:underline">
                노션으로 이동
              </p>
            </a>
          </div>
        </div>
        </Reveal>
      </section>
      {/* Single-page sections */}
      <div className="mt-16 space-y-16">
        <section id="about">
          <Reveal>
            <About />
          </Reveal>
        </section>
        <section id="experience">
          <Reveal>
            <Experience />
          </Reveal>
        </section>
        <section id="projects">
          <Reveal>
            <Projects />
          </Reveal>
        </section>
        <section id="skills">
          <Reveal>
            <Skills />
          </Reveal>
        </section>
        <section id="certificates">
          <Reveal>
            <Certificates />
          </Reveal>
        </section>
        <section id="activities">
          <Reveal>
            <Activities />
          </Reveal>
        </section>
      </div>
    </>
  )
}


