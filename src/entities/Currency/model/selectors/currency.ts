import { createSelector } from '@reduxjs/toolkit';

import { TCurrencyVariant } from '../types';

const selectBase = createSelector(
  (state: RootState) => state,
  (state) => state.currency,
);

export const selectCurrencyData = createSelector(selectBase, (state) => state);

export const selectCurrentCurrency = createSelector(
  selectBase,
  (state: { currency: TCurrencyVariant }) => state.currency,
);
