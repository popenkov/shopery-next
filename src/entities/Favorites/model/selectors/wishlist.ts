import { createSelector } from '@reduxjs/toolkit';

//

import { type TWishlistProduct } from '../types/wishlist';

const selectBase = createSelector(
  (state: RootState) => state,
  (state) => state.wishlist,
);

export const selectWishlistProducts = createSelector(
  selectBase,
  (state: { products: TWishlistProduct[] }) => state.products,
);
