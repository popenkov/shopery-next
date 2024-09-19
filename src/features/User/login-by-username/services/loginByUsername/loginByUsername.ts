import { createAsyncThunk } from '@reduxjs/toolkit';

// eslint-disable-next-line
import { ThunkConfig } from '@/app/providers/StoreProvider/StateSchema';
import { openStatusMessage } from '@/entities/StatusMessage';
import { setAuthData } from '@/entities/User';

import { LoginSchema } from '../../model';

interface LoginByUsernameProps extends LoginSchema {}

export const loginByUsername = createAsyncThunk<
  LoginSchema,
  LoginByUsernameProps,
  ThunkConfig<string>
>('login/loginByUsername', async (data: LoginSchema, thunkApi) => {
  const { extra, dispatch, rejectWithValue } = thunkApi;
  try {
    const response = await extra.api.post('/login', {
      data,
    });

    if (!response.data) {
      throw new Error();
    }
    thunkApi.dispatch(openStatusMessage(true));
    dispatch(setAuthData(response.data));
    return response.data;
  } catch (e) {
    console.log(e);
    thunkApi.dispatch(openStatusMessage(false));
    return rejectWithValue('error');
  }
});
