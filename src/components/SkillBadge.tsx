import type { CSSProperties } from 'react'
import {
  siReact,
  siVuedotjs,
  siJavascript,
  siFlutter,
  siDart,
  siPython,
  siSpringboot,
  siNodedotjs,
  siMysql,
  siPostgresql,
  siRedis,
  siFirebase,
  siVercel,
  siDocker,
  siKubernetes,
  siLinux,
  siGit,
  siGradle,
} from 'simple-icons'

type Icon = { path: string; hex: string }

// Brand logos for the techs that have an official Simple Icons glyph.
// Items without a logo (Oracle, AWS, competency labels) fall back to text only.
const ICONS: Record<string, Icon> = {
  React: siReact,
  Vue: siVuedotjs,
  JavaScript: siJavascript,
  Flutter: siFlutter,
  Dart: siDart,
  Python: siPython,
  'Spring(Boot)': siSpringboot,
  'Node.js': siNodedotjs,
  MySQL: siMysql,
  PostgreSQL: siPostgresql,
  Redis: siRedis,
  Firebase: siFirebase,
  Vercel: siVercel,
  Docker: siDocker,
  Kubernetes: siKubernetes,
  Linux: siLinux,
  Git: siGit,
  Gradle: siGradle,
}

type SkillBadgeProps = {
  label: string
}

export function SkillBadge({ label }: SkillBadgeProps) {
  const icon = ICONS[label]
  return (
    <span
      className="group inline-flex items-center gap-1.5 rounded-full border border-neutral-200/70 bg-white/70 px-3 py-1 text-xs sm:text-sm font-medium text-neutral-700 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-400/50 hover:text-indigo-700 hover:shadow-[0_6px_18px_-6px_var(--glow)] dark:border-white/10 dark:bg-white/[0.04] dark:text-neutral-200 dark:hover:border-indigo-400/40 dark:hover:text-indigo-300"
      style={{ '--glow': icon ? `#${icon.hex}80` : 'rgba(99,102,241,0.45)' } as CSSProperties}
    >
      {icon && (
        <svg
          role="img"
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill={`#${icon.hex}`}
          className="h-3.5 w-3.5 shrink-0"
        >
          <path d={icon.path} />
        </svg>
      )}
      {label}
    </span>
  )
}
