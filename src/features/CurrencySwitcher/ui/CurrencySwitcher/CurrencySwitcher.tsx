'use client';

import { FC, memo } from 'react';

import { Dropdown } from '@/shared';
import { DropdownItem } from '@/shared/UI/Dropdown/Dropdown.interface';

const CHANGE_CURRENCY_DATA = [
  {
    value: 'USD',
    label: 'USD',
  },
  {
    value: 'EUR',
    label: 'EUR',
  },
];

export const CurrencySwitcher: FC = memo(() => {
  const handleCurrencyChange = (item: DropdownItem) => {
    console.log(item);
  };

  return (
    <Dropdown data={CHANGE_CURRENCY_DATA} onChange={handleCurrencyChange} />
  );
});
