import { useI18n } from '../contexts/I18nContext'

const navLinkClass =
  'px-3 py-2 rounded-md text-sm font-medium transition-colors text-neutral-300 hover:text-white hover:bg-neutral-800'

export function Navbar() {
  const { t } = useI18n()

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/70 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-neutral-800/60 dark:bg-neutral-950/60">
      <div className="container-responsive flex items-center justify-between h-16">
        <button
          type="button"
          onClick={() => scrollTo('home')}
          className="text-left text-neutral-900 dark:text-white font-semibold tracking-tight"
        >
          Eunkyo&apos;s portfolio
        </button>
        <nav className="hidden md:flex items-center gap-1">
          <button type="button" className={navLinkClass} onClick={() => scrollTo('about')}>
            {t.nav.about}
          </button>
          <button type="button" className={navLinkClass} onClick={() => scrollTo('experience')}>
            {t.nav.experience}
          </button>
          <button type="button" className={navLinkClass} onClick={() => scrollTo('projects')}>
            {t.nav.projects}
          </button>
          <button type="button" className={navLinkClass} onClick={() => scrollTo('skills')}>
            {t.nav.skills}
          </button>
          <button type="button" className={navLinkClass} onClick={() => scrollTo('certificates')}>
            {t.nav.certificates}
          </button>
          <button type="button" className={navLinkClass} onClick={() => scrollTo('activities')}>
            {t.nav.activities}
          </button>
        </nav>
      </div>
    </header>
  )
}


