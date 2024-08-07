import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CurrencySchema, TCurrencyVariant } from '../types/currency-schema';
import { CURRENCY_LOCALSTORAGE_KEY } from '@/shared/lib/constants/localstorage';
import { DEFAULT_CURRENCY } from '@/features/CurrencySwitcher/ui/constants';

const initialState: CurrencySchema = {
  currency:
    typeof window !== 'undefined' && localStorage.getItem(CURRENCY_LOCALSTORAGE_KEY)
      ? (localStorage.getItem(CURRENCY_LOCALSTORAGE_KEY) as TCurrencyVariant)
      : DEFAULT_CURRENCY,
};

const currencySlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateCurrentCurrency: (state, action: PayloadAction<TCurrencyVariant>) => {
      state.currency = action.payload;
      localStorage.setItem(CURRENCY_LOCALSTORAGE_KEY, JSON.stringify(state.currency));
      return state;
    },
  },
});

export const {
  actions: { updateCurrentCurrency },
  reducer: currencyReducer,
} = currencySlice;
