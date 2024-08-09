import { createSelector } from '@reduxjs/toolkit';

const selectBase = createSelector(
  (state: RootState) => state,
  (state) => state.user,
);

export const selectAuthData = createSelector(selectBase, (state) => state.authData);
export const getUserData = createSelector(selectBase, (state) => state.user);
export const getPersonalUserData = createSelector(selectBase, (state) => state.user.personalData);
export const getUserBillingAddress = createSelector(
  selectBase,
  (state) => state.user.billingAddress,
);
export const getUserShippingAddress = createSelector(
  selectBase,
  (state) => state.user.shippingAddress,
);
export const getUserIsLoading = createSelector(selectBase, (state) => state.isLoading);
export const getUserError = createSelector(selectBase, (state) => state.error);
