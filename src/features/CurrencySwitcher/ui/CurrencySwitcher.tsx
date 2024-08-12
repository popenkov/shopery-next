'use client';

import { FC, memo, useState } from 'react';

import {
  CHANGE_CURRENCY_DATA,
  type TCurrencyVariant,
  updateCurrentCurrency,
} from '@/entities/Currency';
import { useAppDispatch } from '@/shared/lib/hooks';
import { Dropdown, TDropdownItem } from '@/shared/ui/Dropdown';

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
