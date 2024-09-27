'use client';

import { FC, memo, useEffect, useState } from 'react';

import {
  CHANGE_CURRENCY_DATA,
  getUserCurrency,
  setUserCurrency,
  type TCurrencyVariant,
  updateCurrentCurrency,
} from '@/entities/Currency';
import { useAppDispatch } from '@/shared/lib/hooks';
import { Dropdown, TDropdownItem } from '@/shared/ui/Dropdown';

export const CurrencySwitcher: FC = memo(() => {
  const dispatch = useAppDispatch();
  const [currentCurrency, setCurrentCurrency] = useState<TDropdownItem>(CHANGE_CURRENCY_DATA[0]);

  const getCurrentCurrency = async () => {
    const currency = await getUserCurrency();
    const currencyObj = CHANGE_CURRENCY_DATA.find((item) => {
      return item.value.toLowerCase() === currency.toLowerCase();
    });
    setCurrentCurrency(currencyObj!);
    const formattedValue = currencyObj!.value.toUpperCase();
    dispatch(updateCurrentCurrency(formattedValue as TCurrencyVariant));
  };

  useEffect(() => {
    getCurrentCurrency();
  }, []);

  const handleCurrencyChange = (item: TDropdownItem) => {
    const currency = item.value as TCurrencyVariant;
    const currencyObj = CHANGE_CURRENCY_DATA.find((item) => {
      return item.value.toLowerCase() === currency.toLowerCase();
    });
    setCurrentCurrency(currencyObj!);
    setUserCurrency(currency);
    const formattedValue = item.value.toUpperCase();
    dispatch(updateCurrentCurrency(formattedValue as TCurrencyVariant));
    window.location.reload();
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
