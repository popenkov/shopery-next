'use client';

import { FC, memo, useEffect, useState } from 'react';

import { Dropdown, TDropdownItem } from '@/shared/ui/Dropdown';
import { type TLocale } from '@/app/configs/i18n/i18n.config';
import { getUserLocale, setUserLocale } from '@/app/lib/locale';

import { CHANGE_LANG_DATA } from './constants';

export const LangSwitcher: FC = memo(() => {
  const [currentLocale, setCurrentLocale] = useState<TDropdownItem>();

  const getCurrentLocale = async () => {
    const locale = await getUserLocale();
    const localeObj = CHANGE_LANG_DATA.find((item) => {
      return item.value.toLowerCase() === locale.toLowerCase();
    });
    setCurrentLocale(localeObj!);
  };

  useEffect(() => {
    getCurrentLocale();
  }, []);

  const handleLanguageChange = (item: TDropdownItem) => {
    console.log(item.value);
    const locale = item.value as TLocale;
    setUserLocale(locale);
  };

  if (!currentLocale) {
    return null;
  }

  return (
    <Dropdown
      defaultItem={currentLocale!}
      data={CHANGE_LANG_DATA}
      onChange={handleLanguageChange}
      testid="HeaderTop.LangSwitcher"
    />
  );
});

LangSwitcher.displayName = 'LangSwitcher';
