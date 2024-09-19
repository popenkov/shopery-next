import { createAsyncThunk } from '@reduxjs/toolkit';

// eslint-disable-next-line
import { ThunkConfig } from '@/app/providers';

import { openStatusMessage } from '@/entities/StatusMessage';

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

      thunkApi.dispatch(openStatusMessage(true));
      return response.data;
    } catch (e) {
      console.log(e);
      thunkApi.dispatch(openStatusMessage(false));
      return rejectWithValue('error');
    }
  },
);
