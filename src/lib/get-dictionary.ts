import 'server-only'
import type { Locale } from '@/lib/i18n-config'

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  pt: () => import('@/dictionaries/pt.json').then((module) => module.default),
  fr: () => import('@/dictionaries/fr.json').then((module) => module.default),
  
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()