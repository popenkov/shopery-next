import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider/StateSchema';

import { TUserData } from '../model';

export const getUserDataById = createAsyncThunk<TUserData, string, ThunkConfig<string>>(
  'order/getUserDataById',
  async (userId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    if (!userId) {
      throw new Error('');
    }

    try {
      const response = await extra.api.post<TUserData>(`/user_data`, {
        userId,
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error');
    }
  },
);
