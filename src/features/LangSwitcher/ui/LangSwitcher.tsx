'use client';

import { FC, memo } from 'react';

import { Dropdown, TDropdownItem } from '@/shared/ui/Dropdown';
import { type TLocale } from '@/app/configs/i18n/i18n.config';
import { setUserLocale } from '@/app/lib/locale';

import { CHANGE_LANG_DATA } from './constants';

export const LangSwitcher: FC = memo(() => {
  // todo i18
  const handleLanguageChange = (item: TDropdownItem) => {
    console.log(item.value);
    const locale = item.value as TLocale;
    setUserLocale(locale);
  };

  return (
    <Dropdown
      data={CHANGE_LANG_DATA}
      onChange={handleLanguageChange}
      testid="HeaderTop.LangSwitcher"
    />
  );
});

LangSwitcher.displayName = 'LangSwitcher';
