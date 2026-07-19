import { createContext, useContext, useEffect, useMemo, useState } from 'react'

type Lang = 'ko' | 'en'

const translations = {
  ko: {
    siteTitle: 'Backend Portfolio',
    nav: { about: '소개', experience: '경력', projects: '프로젝트', skills: '스킬', certificates: '자격증', activities: '활동', contact: '연락' },
    aria: {
      toLight: '라이트 모드로 전환',
      toDark: '다크 모드로 전환',
      openMenu: '메뉴 열기',
      closeMenu: '메뉴 닫기',
      toEnglish: 'Switch to English',
      toKorean: '한국어로 전환',
    },
    langToggleLabel: 'EN',
    home: {
      chips: ['항상 배우는 것을 즐기는', '호기심이 많은', '문제를 끝까지 파고드는'],
      viewProjects: '프로젝트 보기',
      github: 'GitHub',
      cardTitle: 'Backend · Data · AI',
      cardLine1: 'API와 데이터 흐름을 설계하고,',
      cardLine2: 'AI 모델을 서비스에 녹여내는 일을 좋아합니다.',
      archiving: {
        label: 'Archiving',
        title: '공부와 프로젝트를 기록하는 공간',
        subtitle: '백엔드, 데이터, AI와 관련된 학습과 프로젝트를 꾸준히 기록하고 공유하고 있습니다.',
        repoDesc: '소스 코드를 관리하는 저장소입니다.',
        goToGithub: '깃허브로 이동',
      },
    },
    about: {
      title: '소개',
      headingPre: 'AI와 데이터를 연결해 가치를 만드는 ',
      headingHighlight: '백엔드 개발자',
      sectionLabel: 'ABOUT ME',
      labels: {
        name: '이름',
        birth: '생년월일',
        position: '포지션',
        education: '학력',
        interests: '관심 분야',
        email: '이메일',
      },
      positionValue: '백엔드 개발자',
      educationLine1: '성일정보고등학교 졸업',
      educationLine2: '배화여자대학교(P-TECH) 재학 중',
      interestsValue: '백엔드, 보안, 클라우드 인프라, AI 기반 서비스',
    },
    experience: {
      title: '경력',
      headingPre: '가치 있는 ',
      headingHighlight: '실무 경험',
    },
    projects: {
      title: '프로젝트',
      headingPre: '백엔드 · 데이터 · 앱 전반을 아우르는 ',
      headingHighlight: '프로젝트',
      featured: '주요 프로젝트',
      practice: '학습 · 실습',
      problemSolving: '문제 해결',
    },
    skills: {
      title: '기술 스택',
      headingPre: '안정적인 백엔드와 인프라를 위한 ',
      headingHighlight: '기술 스택',
    },
    certificates: {
      title: 'Certificates',
      headingPre: '문제 해결의 폭을 넓혀주는 ',
      headingHighlight: '기술 자격',
      subtitle: '다양한 문제를 다룰 수 있는 기초 체력을 탄탄히 다졌습니다.',
      issuer: '발급 기관',
      date: '취득 날짜',
    },
    activities: {
      title: 'Activities',
      headingPre: '대외활동 & ',
      headingHighlight: '수상',
      activitiesLabel: '대외활동',
      awardsLabel: '수상경력',
    },
    contact: {
      title: '연락',
      email: '이메일',
      headingPre: '함께 성장할 ',
      headingHighlight: '기회',
      headingPost: '를 기다립니다',
      subtitle: '제안·협업·채용 등 어떤 이야기든 편하게 연락 주세요. 빠르게 답변드리겠습니다.',
    },
    footer: {
      github: 'GitHub · 소스 코드 저장소',
    },
  },
  en: {
    siteTitle: 'Backend Portfolio',
    nav: { about: 'About', experience: 'Experience', projects: 'Projects', skills: 'Skills', certificates: 'Certificates', activities: 'Activities', contact: 'Contact' },
    aria: {
      toLight: 'Switch to light mode',
      toDark: 'Switch to dark mode',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      toEnglish: 'Switch to English',
      toKorean: 'Switch to Korean',
    },
    langToggleLabel: '한국어',
    home: {
      chips: ['Always enjoys learning', 'Deeply curious', 'Digs into problems to the end'],
      viewProjects: 'View Projects',
      github: 'GitHub',
      cardTitle: 'Backend · Data · AI',
      cardLine1: 'I love designing APIs and data flows',
      cardLine2: 'and weaving AI models into real services.',
      archiving: {
        label: 'Archiving',
        title: 'A space to record my studies and projects',
        subtitle: 'I steadily record and share my learning and projects related to backend, data, and AI.',
        repoDesc: 'The repository where I manage my source code.',
        goToGithub: 'Go to GitHub',
      },
    },
    about: {
      title: 'About',
      headingPre: 'A backend developer creating value by connecting AI and ',
      headingHighlight: 'data',
      sectionLabel: 'ABOUT ME',
      labels: {
        name: 'Name',
        birth: 'Date of Birth',
        position: 'Position',
        education: 'Education',
        interests: 'Interests',
        email: 'Email',
      },
      positionValue: 'Backend Developer',
      educationLine1: 'Graduated from Sungil Information High School',
      educationLine2: 'Enrolled at Baewha Women\'s University (P-TECH)',
      interestsValue: 'Backend, security, cloud infrastructure, AI-powered services',
    },
    experience: {
      title: 'Experience',
      headingPre: 'Meaningful ',
      headingHighlight: 'hands-on experience',
    },
    projects: {
      title: 'Projects',
      headingPre: 'Projects spanning backend, data, and ',
      headingHighlight: 'apps',
      featured: 'Featured Projects',
      practice: 'Learning · Practice',
      problemSolving: 'Problem Solving',
    },
    skills: {
      title: 'Skills',
      headingPre: 'A tech stack for stable backend and ',
      headingHighlight: 'infrastructure',
    },
    certificates: {
      title: 'Certificates',
      headingPre: 'Certifications that broaden my ',
      headingHighlight: 'problem-solving',
      subtitle: 'I built a solid foundation for tackling a wide range of problems.',
      issuer: 'Issuer',
      date: 'Date Acquired',
    },
    activities: {
      title: 'Activities',
      headingPre: 'Activities & ',
      headingHighlight: 'Awards',
      activitiesLabel: 'Activities',
      awardsLabel: 'Awards',
    },
    contact: {
      title: 'Contact',
      email: 'Email',
      headingPre: 'Looking forward to ',
      headingHighlight: 'opportunities',
      headingPost: ' to grow together',
      subtitle: 'Feel free to reach out about anything—proposals, collaboration, or hiring. I will get back to you quickly.',
    },
    footer: {
      github: 'GitHub · Source Code Repository',
    },
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
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])
  const value = useMemo(() => ({ lang, setLang: (l: Lang) => { localStorage.setItem('lang', l); setLang(l) }, t }), [lang, t])
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
