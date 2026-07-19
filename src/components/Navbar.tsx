import { useState } from 'react'
import { useI18n } from '../contexts/I18nContext'
import { useTheme } from '../contexts/ThemeContext'

const navLinkClass =
  'px-3 py-2 rounded-md text-sm font-medium transition-colors text-neutral-600 hover:text-neutral-900 hover:bg-neutral-900/5 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-white/10'

const mobileNavLinkClass =
  'w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors text-neutral-600 hover:text-neutral-900 hover:bg-neutral-900/5 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-white/10'

export function Navbar() {
  const { t, lang, setLang } = useI18n()
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleNavClick = (id: string) => {
    scrollTo(id)
    setMenuOpen(false)
  }

  const navItems: [string, string][] = [
    ['about', t.nav.about],
    ['experience', t.nav.experience],
    ['projects', t.nav.projects],
    ['skills', t.nav.skills],
    ['certificates', t.nav.certificates],
    ['activities', t.nav.activities],
    ['contact', t.nav.contact],
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/70 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-neutral-800/60 dark:bg-neutral-950/60">
      <div className="container-responsive flex items-center justify-between h-16">
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="text-left font-semibold tracking-tight text-gradient"
        >
          Eunkyo&apos;s portfolio
        </button>
        <div className="flex items-center gap-1">
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(([id, label]) => (
              <button key={id} type="button" className={navLinkClass} onClick={() => handleNavClick(id)}>
                {label}
              </button>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')}
            aria-label={lang === 'ko' ? t.aria.toEnglish : t.aria.toKorean}
            className="inline-flex h-9 min-w-9 items-center justify-center rounded-full px-2.5 text-xs font-semibold text-neutral-600 hover:text-neutral-900 hover:bg-neutral-900/5 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-white/10 transition-colors"
          >
            {t.langToggleLabel}
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t.aria.toLight : t.aria.toDark}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-neutral-600 hover:text-neutral-900 hover:bg-neutral-900/5 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-white/10 transition-colors"
          >
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z" />
              </svg>
            )}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? t.aria.closeMenu : t.aria.openMenu}
            aria-expanded={menuOpen}
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full text-neutral-600 hover:text-neutral-900 hover:bg-neutral-900/5 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-white/10 transition-colors"
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="md:hidden border-t border-neutral-200/70 bg-white/90 backdrop-blur px-4 py-3 flex flex-col gap-1 dark:border-neutral-800/60 dark:bg-neutral-950/90">
          {navItems.map(([id, label]) => (
            <button key={id} type="button" className={mobileNavLinkClass} onClick={() => handleNavClick(id)}>
              {label}
            </button>
          ))}
        </nav>
      )}
    </header>
  )
}
