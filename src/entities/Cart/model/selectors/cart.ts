import { createSelector } from '@reduxjs/toolkit';

import { CartProduct } from '../types/cart';
import { RootState } from '@/shared/lib/store/store';

const selectBase = createSelector(
  (state: RootState) => state,
  (state) => state.cart,
);

export const selectCart = createSelector(
  selectBase,
  (state: { cart: CartProduct[] }) => state.cart,
);
