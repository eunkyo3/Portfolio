import { profile } from '../data/content'
import { About } from './About'
import { Experience } from './Experience'
import { Projects } from './Projects'
import { Skills } from './Skills'
import { Certificates } from './Certificates'
import { Activities } from './Activities'
import { Contact } from './Contact'
import { Reveal } from '../components/Reveal'

export function Home() {
  return (
    <>
      <section id="home" className="relative space-y-12">
        <Reveal>
        <div className="relative grid gap-12 md:grid-cols-2 items-center">
          <div className="text-center md:text-left space-y-6">
            <div className="inline-flex flex-wrap justify-center md:justify-start gap-2">
              <span className="rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 p-[1px]">
                <span className="flex items-center rounded-full bg-[#fafafa] px-3 py-1 text-xs font-medium text-neutral-700 dark:bg-[#060913] dark:text-neutral-200">
                  항상 배우는 것을 즐기는
                </span>
              </span>
              <span className="rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 p-[1px]">
                <span className="flex items-center rounded-full bg-[#fafafa] px-3 py-1 text-xs font-medium text-neutral-700 dark:bg-[#060913] dark:text-neutral-200">
                  호기심이 많은
                </span>
              </span>
              <span className="rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 p-[1px]">
                <span className="flex items-center rounded-full bg-[#fafafa] px-3 py-1 text-xs font-medium text-neutral-700 dark:bg-[#060913] dark:text-neutral-200">
                  문제를 끝까지 파고드는
                </span>
              </span>
            </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-gradient">
            {profile.name}
          </h1>
          <p className="text-lg text-indigo-600 dark:text-indigo-400">{profile.role}</p>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">{profile.summary}</p>
          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
            <button
              type="button"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/30"
            >
              프로젝트 보기
            </button>
            <a
              href="https://github.com/eunkyo3"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 px-6 py-2.5 text-sm font-semibold text-neutral-700 transition-colors duration-300 hover:border-indigo-400 hover:text-indigo-600 dark:border-white/15 dark:text-neutral-200 dark:hover:border-indigo-400/60 dark:hover:text-indigo-300"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.43-2.7 5.4-5.26 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              <div className="absolute inset-0 rounded-3xl opacity-70 blur-xl [background:conic-gradient(from_0deg,#6366f1,#8b5cf6,#22d3ee,#6366f1)] animate-spin [animation-duration:12s]" />
              <div className="absolute inset-0 rounded-3xl [background:conic-gradient(from_0deg,#6366f1,#8b5cf6,#22d3ee,#6366f1)] animate-spin [animation-duration:12s]" />
              <div className="absolute inset-[3px] rounded-3xl bg-[#060913] border border-white/10 flex items-center justify-center">
                <div className="space-y-3 text-center text-xs sm:text-sm text-neutral-200">
                  <p className="font-semibold text-neutral-50">Backend · Data · AI</p>
                  <p>API와 데이터 흐름을 설계하고,</p>
                  <p>AI 모델을 서비스에 녹여내는 일을 좋아합니다.</p>
                  <div className="mt-3 flex flex-wrap justify-center gap-2 text-[11px] sm:text-xs">
                    <span className="rounded-full border border-indigo-400/60 px-2 py-1">Java</span>
                    <span className="rounded-full border border-violet-400/60 px-2 py-1">Python</span>
                    <span className="rounded-full border border-cyan-400/60 px-2 py-1">Node.js</span>
                    <span className="rounded-full border border-emerald-400/60 px-2 py-1">SQL</span>
                    <span className="rounded-full border border-pink-400/60 px-2 py-1">AI Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Reveal>
        {/* Archiving 섹션 - cdg 포트폴리오의 Archiving 구조 참고 */}
        <Reveal>
        <div className="card-glass p-5 sm:p-6 space-y-4">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="space-y-1">
              <p className="text-xs font-medium tracking-wide text-indigo-600 dark:text-indigo-400 uppercase">
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
          <a
            href="https://github.com/eunkyo3"
            target="_blank"
            rel="noreferrer"
            className="card-glass card-glass-hover group block p-4 sm:p-5"
          >
            <p className="mb-1 flex items-center gap-2 text-sm font-semibold text-neutral-900 dark:text-white">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.43-2.7 5.4-5.26 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
              </svg>
              GitHub
            </p>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
              소스 코드를 관리하는 저장소입니다.
            </p>
            <p className="mt-2 text-xs text-indigo-600 dark:text-indigo-400 group-hover:underline">
              깃허브로 이동
            </p>
          </a>
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
        <section id="contact">
          <Reveal>
            <Contact />
          </Reveal>
        </section>
      </div>
    </>
  )
}


