import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@/app/lib/store/store';

import { type TFavoriteProduct } from '../types/favorites';

const selectBase = createSelector(
  (state: RootState) => state,
  (state) => state.favorites,
);

export const selectFavoritesProducts = createSelector(
  selectBase,
  (state: { products: TFavoriteProduct[] }) => state.products,
);
