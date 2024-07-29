import { createSelector } from '@reduxjs/toolkit';

//

const selectBase = createSelector(
  (state: RootState) => state,
  (state) => state.orders,
);

export const selectOrdersData = createSelector(selectBase, (state) => state);
export const getOrderDetailedData = (state: RootState) => state.orders?.order;
export const getOrderDetailedIsLoading = (state: RootState) => state.orders?.isLoading || false;
export const getOrderDetailedError = (state: RootState) => state.orders?.error;
