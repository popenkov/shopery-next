import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@/app/lib/store/store';

import { CartProduct } from '../types/cart';

const selectBase = createSelector(
  (state: RootState) => state,
  (state) => state.cart,
);

export const selectCart = createSelector(
  selectBase,
  (state: { cart: CartProduct[] }) => state.cart,
);

export const selectMenuState = createSelector(
  selectBase,
  (state: { isAsideCartOpen: boolean }) => state.isAsideCartOpen,
);

export const selectTotalPrice = createSelector(
  selectBase,
  (state: { totalPrice: number }) => state.totalPrice,
);

export const selectTotalAmount = createSelector(
  selectBase,
  (state: { totalAmount: number }) => state.totalAmount,
);
