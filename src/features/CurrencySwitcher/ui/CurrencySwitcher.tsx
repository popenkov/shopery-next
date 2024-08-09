'use client';

import { FC, memo, useState } from 'react';

import { Dropdown, TDropdownItem } from '@/shared/ui/Dropdown';

import { CHANGE_CURRENCY_DATA } from './constants';
import { useAppDispatch } from '@/shared/lib/hooks';
import { type TCurrencyVariant, updateCurrentCurrency } from '@/entities/Currency';

export const CurrencySwitcher: FC = memo(() => {
  const dispatch = useAppDispatch();
  const [currentCurrency, setCurrentCurrency] = useState<TDropdownItem>(CHANGE_CURRENCY_DATA[0]);

  const handleCurrencyChange = (item: TDropdownItem) => {
    const formattedValue = item.value.toUpperCase();
    dispatch(updateCurrentCurrency(formattedValue as TCurrencyVariant));
    setTimeout(() => {
      window.location.reload();
    }, 0);
  };

  return (
    <Dropdown
      defaultItem={currentCurrency}
      data={CHANGE_CURRENCY_DATA}
      onChange={handleCurrencyChange}
      testid="HeaderTop.CurrencySwitcher"
    />
  );
});

CurrencySwitcher.displayName = 'CurrencySwitcher';
