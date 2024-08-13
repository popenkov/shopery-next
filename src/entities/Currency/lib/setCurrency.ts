'use server';

import { cookies } from 'next/headers';

import { defaultCurrency, TCurrencyVariant } from '../model';

const COOKIE_NAME = 'NEXT_CURRENCY';

export async function getUserCurrency() {
  return cookies().get(COOKIE_NAME)?.value || defaultCurrency;
}

export async function setUserCurrency(Currency: TCurrencyVariant) {
  cookies().set(COOKIE_NAME, Currency);
}
