import { useI18n } from '../contexts/I18nContext'

export function Footer() {
  const { t } = useI18n()
  return (
    <footer className="relative border-t border-neutral-200/70 dark:border-white/10">
      <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400" />
      <div className="container-responsive py-8 text-sm text-neutral-500 dark:text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="tracking-wide">© {new Date().getFullYear()} Eunkyo&apos;s Portfolio</p>
        <div className="flex items-center gap-4">
          <a
            className="font-medium text-neutral-600 transition-colors hover:text-indigo-600 dark:text-neutral-300 dark:hover:text-indigo-400"
            href="https://github.com/eunkyo3"
            target="_blank"
            rel="noreferrer"
          >
            {t.footer.github}
          </a>
        </div>
      </div>
    </footer>
  )
}


