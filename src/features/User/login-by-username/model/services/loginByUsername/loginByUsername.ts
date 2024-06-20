import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAuthData } from '@/entities/User/slice/user-slice';
import { LoginSchema } from '../../types/loginSchema';
import { AppDispatch, RootState } from '@/app/lib/store/store';
import axios from 'axios';

interface LoginByUsernameProps extends LoginSchema {}

export const loginByUsername = createAsyncThunk<
  LoginSchema,
  LoginByUsernameProps,
  { rejectValue: { error: string } }
>('login/loginByUsername', async (data: LoginSchema, thunkApi) => {
  console.log('thunkApi', thunkApi);

  const dispatch = thunkApi.dispatch as AppDispatch;
  try {
    const response = await axios.post('/login', {
      data,
    });

    if (!response.data) {
      throw new Error();
    }

    dispatch(setAuthData(response.data));
    return response.data;
  } catch (e) {
    throw thunkApi.rejectWithValue({
      error: 'Error!',
    });
  }
});
