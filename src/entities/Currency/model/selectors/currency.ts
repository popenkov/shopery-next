import { createSelector } from '@reduxjs/toolkit';

import { TCurrencyVariant } from '../types/currency-schema';

const selectBase = createSelector(
  (state: RootState) => state,
  (state) => state.cart,
);

export const selectCurrencyData = createSelector(selectBase, (state) => state);

export const selectCurrentCurrency = createSelector(
  selectBase,
  (state: { currency: TCurrencyVariant }) => state.currency,
);
