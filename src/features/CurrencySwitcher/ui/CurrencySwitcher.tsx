'use client';

import { FC, memo } from 'react';

import { Dropdown, TDropdownItem } from '@/shared/ui/Dropdown';

import { CHANGE_CURRENCY_DATA } from './constants';

export const CurrencySwitcher: FC = memo(() => {
  const handleCurrencyChange = (item: TDropdownItem) => {
    console.log(item);
  };

  return (
    <Dropdown
      data={CHANGE_CURRENCY_DATA}
      onChange={handleCurrencyChange}
      testid="HeaderTop.CurrencySwitcher"
    />
  );
});

CurrencySwitcher.displayName = 'CurrencySwitcher';
