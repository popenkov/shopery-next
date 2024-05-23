'use client';

import { FC, memo } from 'react';

import { Dropdown, DropdownItem } from 'shared/ui/Dropdown';

import { CHANGE_LANG_DATA } from './constants';

export const LangSwitcher: FC = memo(() => {
  // todo i18
  const handleLanguageChange = (item: DropdownItem) => console.log(item);

  return <Dropdown data={CHANGE_LANG_DATA} onChange={handleLanguageChange} />;
});

LangSwitcher.displayName = 'LangSwitcher';
