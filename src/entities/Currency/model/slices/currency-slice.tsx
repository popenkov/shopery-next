import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CurrencySchema, TCurrencyVariant } from '../types';
import { DEFAULT_CURRENCY } from '../../lib';

const initialState: CurrencySchema = {
  currency: DEFAULT_CURRENCY, //todo
};

const currencySlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateCurrentCurrency: (state, action: PayloadAction<TCurrencyVariant>) => {
      state.currency = action.payload;
      return state;
    },
  },
});

export const {
  actions: { updateCurrentCurrency },
  reducer: currencyReducer,
} = currencySlice;
