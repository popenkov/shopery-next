import { StateSchema } from '@/app/providers';
import { createSelector } from '@reduxjs/toolkit';

//

const selectBase = createSelector(
  (state: StateSchema) => state,
  (state) => state.order,
);

export const selectOrdersData = createSelector(selectBase, (state) => state);
export const getOrderDetailedData = (state: StateSchema) => state.order?.order;
export const getUserOrdersData = (state: StateSchema) => state.order?.orders;
export const getOrderDetailedIsLoading = (state: StateSchema) => state.order?.isLoading || false;
export const getOrderDetailedError = (state: StateSchema) => state.order?.error;
