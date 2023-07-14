export const i18n = {
    defaultLocale: 'pt',
    locales: ['en','fr', 'pt' ],
  } as const
  
  export type Locale = (typeof i18n)['locales'][number]