import { createAsyncThunk } from '@reduxjs/toolkit';

// eslint-disable-next-line
import { ThunkConfig } from '@/app/providers';
import { openStatusMessage } from '@/entities/StatusMessage';
import { USER_LOCALSTORAGE_KEY } from '@/shared/lib/constants';

import { getUserDataByIdQuery } from '../api';
import { TUser } from '../model';

export const initAuthData = createAsyncThunk<TUser, void, ThunkConfig<string>>(
  'user/initAuthData',
  async (_, thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi;

    const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

    if (!userId) {
      return rejectWithValue('');
    }

    try {
      const response = await dispatch(getUserDataByIdQuery(userId)).unwrap();

      thunkApi.dispatch(openStatusMessage(true));
      return response;
    } catch (e) {
      console.log(e);
      thunkApi.dispatch(openStatusMessage(false));
      return rejectWithValue('');
    }
  },
);
