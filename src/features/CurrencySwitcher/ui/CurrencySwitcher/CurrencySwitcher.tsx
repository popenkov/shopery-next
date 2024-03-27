'use client';

import { FC, memo } from 'react';

import { Dropdown } from '@/shared/ui';
import { DropdownItem } from '@/shared/ui/Dropdown/Dropdown.interface';

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
  const handleCurrencyChange = (item: DropdownItem) => console.log(item);

  return (
    <Dropdown data={CHANGE_CURRENCY_DATA} onChange={handleCurrencyChange} />
  );
});
