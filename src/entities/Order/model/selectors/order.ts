import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@/app/lib/store/store';

const selectBase = createSelector(
  (state: RootState) => state,
  (state) => state.orders,
);

export const selectOrdersData = createSelector(selectBase, (state) => state);
