import { createSelector } from '@reduxjs/toolkit';

const selectBase = createSelector(
  (state: RootState) => state,
  (state) => state.user,
);

export const selectAuthData = createSelector(selectBase, (state) => state.authData);
