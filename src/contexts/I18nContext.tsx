import { createContext, useContext, useMemo, useState } from 'react'

type Lang = 'ko' | 'en'

const translations = {
  ko: {
    siteTitle: 'Backend Portfolio',
    nav: { about: '소개', experience: '경력', projects: '프로젝트', skills: '스킬', certificates: '자격증', activities: '활동', contact: '연락' },
    home: { viewProjects: '프로젝트 보기', contact: '연락하기' },
    about: { title: '소개', interests: '관심사', values: '가치관' },
    experience: { title: '경력' },
    projects: { title: '프로젝트' },
    skills: { title: '기술 스택' },
    certificates: { title: '자격증' },
    activities: { title: '외부 활동' },
    contact: { title: '연락하기', email: '이메일', message: '메세지', send: '보내기', sent: '메세지가 전송되었습니다. 빠르게 답변드릴게요!' },
    toggles: { theme: '테마', lang: '언어' },
  },
  en: {
    siteTitle: 'Backend Portfolio',
    nav: { about: 'About', experience: 'Experience', projects: 'Projects', skills: 'Skills', certificates: 'Certificates', activities: 'Activities', contact: 'Contact' },
    home: { viewProjects: 'View Projects', contact: 'Contact' },
    about: { title: 'About', interests: 'Interests', values: 'Values' },
    experience: { title: 'Experience' },
    projects: { title: 'Projects' },
    skills: { title: 'Skills' },
    certificates: { title: 'Certificates' },
    activities: { title: 'Activities' },
    contact: { title: 'Contact', email: 'Email', message: 'Message', send: 'Send', sent: 'Your message has been sent. I will reply soon!' },
    toggles: { theme: 'Theme', lang: 'Lang' },
  },
}

type I18nContextValue = {
  lang: Lang
  setLang: (l: Lang) => void
  t: typeof translations['ko']
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>((localStorage.getItem('lang') as Lang) || 'ko')
  const t = useMemo(() => translations[lang], [lang])
  const value = useMemo(() => ({ lang, setLang: (l: Lang) => { localStorage.setItem('lang', l); setLang(l) }, t }), [lang, t])
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}


