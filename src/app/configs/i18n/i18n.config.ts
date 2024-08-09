export type TLocale = (typeof locales)[number];

export const locales = ['en', 'de'] as const;
export const defaultLocale: TLocale = 'en';
