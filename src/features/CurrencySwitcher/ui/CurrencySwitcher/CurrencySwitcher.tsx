'use client';

import { FC, memo } from 'react';

import { CHANGE_CURRENCY_DATA } from '../../model/constants';
import { Dropdown, DropdownItem } from '@/shared/ui/Dropdown';

export const CurrencySwitcher: FC = memo(() => {
    const handleCurrencyChange = (item: DropdownItem) => {
        console.log(item);
    };

    return (
        <Dropdown data={CHANGE_CURRENCY_DATA} onChange={handleCurrencyChange} />
    );
});

CurrencySwitcher.displayName = 'CurrencySwitcher';
