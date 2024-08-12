'use server';

import { cookies } from 'next/headers';

import { TLocale, defaultLocale } from '@/app/configs/i18n/i18n.config';

// In this example the locale is read from a cookie. You could alternatively
// also read it from a database, backend service, or any other source.
const COOKIE_NAME = 'NEXT_LOCALE';

export async function getUserLocale() {
  return cookies().get(COOKIE_NAME)?.value || defaultLocale;
}

export async function setUserLocale(locale: TLocale) {
  cookies().set(COOKIE_NAME, locale);
}
