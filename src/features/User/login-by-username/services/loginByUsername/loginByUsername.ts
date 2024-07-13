import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider/StateSchema';
import { setAuthData } from '@/entities/User/slice/user-slice';

import { LoginSchema } from '../../model/types/loginSchema';

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

    dispatch(setAuthData(response.data));
    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue('error');
  }
});
