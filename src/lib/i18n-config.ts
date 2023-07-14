export const i18n = {
    defaultLocale: 'pt',
    locales: ['en', 'pt', 'fr'],
  } as const
  
  export type Locale = (typeof i18n)['locales'][number]