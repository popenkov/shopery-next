'use client';

import { FC, memo } from 'react';

import { Dropdown } from '@/shared/ui';
import { DropdownItem } from '@/shared/ui/Dropdown/Dropdown.interface';

const CHANGE_LANG_DATA = [
  {
    value: 'eng',
    label: 'Eng',
  },
  {
    value: 'de',
    label: 'De',
  },
];

export const LangSwitcher: FC = memo(() => {
  const handleLanguageChange = (item: DropdownItem) => console.log(item);

  return <Dropdown data={CHANGE_LANG_DATA} onChange={handleLanguageChange} />;
});
