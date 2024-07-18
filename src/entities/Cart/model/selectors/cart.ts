import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@/app/lib/store/store';

import { type TCartProduct } from '../types/cart';

const selectBase = createSelector(
  (state: RootState) => state,
  (state) => state.cart,
);

export const selectCartData = createSelector(selectBase, (state) => state);

export const selectCartProducts = createSelector(
  selectBase,
  (state: { cart: TCartProduct[] }) => state.cart,
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
