'use client';

import { FC, memo } from 'react';

import { Dropdown } from '@/shared';
import { DropdownItem } from '@/shared/UI/Dropdown/Dropdown.interface';

import { CHANGE_LANG_DATA } from '../../model/constants';

export const LangSwitcher: FC = memo(() => {
  const handleLanguageChange = (item: DropdownItem) => console.log(item);

  return <Dropdown data={CHANGE_LANG_DATA} onChange={handleLanguageChange} />;
});

LangSwitcher.displayName = 'LangSwitcher';
