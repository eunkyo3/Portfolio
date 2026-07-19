import { useI18n } from '../contexts/I18nContext'
import { contentEn, contentKo } from './content'
import type { SiteContent } from './content'

export function useContent(): SiteContent {
  const { lang } = useI18n()
  return lang === 'en' ? contentEn : contentKo
}
