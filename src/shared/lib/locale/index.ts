'use server';

import { cookies } from 'next/headers';

// eslint-disable-next-line
import { TLocale, defaultLocale } from '@/app/configs/i18n';

const COOKIE_NAME = 'NEXT_LOCALE';

export async function getUserLocale() {
  return cookies().get(COOKIE_NAME)?.value || defaultLocale;
}

export async function setUserLocale(locale: TLocale) {
  cookies().set(COOKIE_NAME, locale);
}
