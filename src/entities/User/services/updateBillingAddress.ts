import { createAsyncThunk } from '@reduxjs/toolkit';

// eslint-disable-next-line
import { ThunkConfig } from '@/app/providers';

import { openStatusMessage } from '@/entities/StatusMessage';

import { TUserAddress } from '../model';

export const updateBillingAddress = createAsyncThunk<
  TUserAddress,
  TUserAddress,
  ThunkConfig<string>
>('profile/updateBillingAddress', async (data, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  try {
    const response = await extra.api.put<TUserAddress>(`/update-billing-address`, data);

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
});
