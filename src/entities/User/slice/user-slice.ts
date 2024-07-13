import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { USER_LOCALSTORAGE_KEY } from '@/shared/lib/constants';

import { TUser, UserSchema } from '../model/types';
import { initAuthData } from '../services/initAuthData';

const initialState: UserSchema = {
  _inited: false,
  authData: undefined,
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
    builder.addCase(initAuthData.fulfilled, (state, { payload }: PayloadAction<TUser>) => {
      state.authData = payload;
      state._inited = true;
    });
    builder.addCase(initAuthData.rejected, (state) => {
      state._inited = true;
    });
  },
});

export const {
  actions: { setAuthData, logout },
  reducer: userReducer,
} = userSlice;
