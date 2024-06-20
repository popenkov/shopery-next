import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider/StateSchema';
import { USER_LOCALSTORAGE_KEY } from '@/shared/lib/constants';
import { TUser } from '../model/types';
import { getUserDataByIdQuery } from '../api/userApi';

export const initAuthData = createAsyncThunk<TUser, void, ThunkConfig<string>>(
  'user/initAuthData',
  async (newJsonSettings, thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi;

    const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

    if (!userId) {
      return rejectWithValue('');
    }

    try {
      const response = await dispatch(getUserDataByIdQuery(userId)).unwrap();

      return response;
    } catch (e) {
      console.log(e);
      return rejectWithValue('');
    }
  },
);
