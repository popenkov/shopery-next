'use client';

import { FC, memo } from 'react';

import { Dropdown, DropdownItem } from 'shared/ui/Dropdown';

import { CHANGE_CURRENCY_DATA } from './constants';

export const CurrencySwitcher: FC = memo(() => {
  // todo может в сторе хранить язык и в функции форматедПрайс менять локализацию
  const handleCurrencyChange = (item: DropdownItem) => {
    console.log(item);
  };

  return <Dropdown data={CHANGE_CURRENCY_DATA} onChange={handleCurrencyChange} />;
});

CurrencySwitcher.displayName = 'CurrencySwitcher';
