import { createSelector } from '@reduxjs/toolkit';

const selectBase = createSelector(
  (state: RootState) => state,
  (state) => state.statusMessage,
);

export const getStatusMessageData = createSelector(selectBase, (state) => state);
