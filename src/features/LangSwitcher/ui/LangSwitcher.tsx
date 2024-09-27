'use client';

import { FC, memo, useEffect, useState } from 'react';

// eslint-disable-next-line
import { type TLocale } from '@/app/configs/i18n';
import { getUserLocale, setUserLocale } from '@/shared/lib/locale';
import { Dropdown, TDropdownItem } from '@/shared/ui/Dropdown';

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
    const locale = item.value as TLocale;
    setUserLocale(locale);
    window.location.reload();
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
