import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@/app/lib/store/store';

const selectBase = createSelector(
  (state: RootState) => state,
  (state) => state.user,
);

export const selectAuthData = createSelector(selectBase, (state) => state.authData);
