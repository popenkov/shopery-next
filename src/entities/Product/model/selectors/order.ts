import { createSelector } from '@reduxjs/toolkit';

const selectBase = createSelector(
  (state: RootState) => state,
  (state) => state.products,
);

export const getProductDetailedData = createSelector(selectBase, (state) => state.product_detailed);
export const getProductDetailedIsLoading = (state: RootState) => state.products.isLoading || false;
export const getProductDetailedError = (state: RootState) => state.products.error;
