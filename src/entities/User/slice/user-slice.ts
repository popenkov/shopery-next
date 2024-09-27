import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { USER_LOCALSTORAGE_KEY } from '@/shared/lib/constants';

import { TUser, TUserAddress, TUserData, TUserPersonalData, UserSchema } from '../model';
import { getUserDataById, initAuthData, updatePersonalData } from '../services';
import { updateBillingAddress } from '../services';

const initialState: UserSchema = {
  _inited: false,
  authData: undefined,
  user: undefined,
  error: undefined,
  isLoading: false,
  addressData: undefined,
  personalData: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, { payload }: PayloadAction<TUser>) => {
      state.authData = payload;
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(payload));
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(initAuthData.fulfilled, (state, { payload }: PayloadAction<TUser>) => {
        state.authData = payload;
        state._inited = true;
      })
      .addCase(initAuthData.rejected, (state) => {
        state._inited = true;
      })
      .addCase(getUserDataById.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(getUserDataById.fulfilled, (state, action: PayloadAction<TUserData>) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(getUserDataById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateBillingAddress.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(updateBillingAddress.fulfilled, (state, action: PayloadAction<TUserAddress>) => {
        state.isLoading = false;
        state.addressData = action.payload;
      })
      .addCase(updateBillingAddress.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updatePersonalData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(updatePersonalData.fulfilled, (state, action: PayloadAction<TUserPersonalData>) => {
        state.isLoading = false;
        state.personalData = action.payload;
      })
      .addCase(updatePersonalData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  actions: { setAuthData, logout },
  reducer: userReducer,
} = userSlice;
