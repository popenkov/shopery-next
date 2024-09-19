import { createAsyncThunk } from '@reduxjs/toolkit';

// eslint-disable-next-line
import { ThunkConfig } from '@/app/providers';

import { openStatusMessage } from '@/entities/StatusMessage';

import { TUserPersonalData } from '../model';

export const updatePersonalData = createAsyncThunk<
  TUserPersonalData,
  TUserPersonalData,
  ThunkConfig<string>
>('profile/updatePersonalData', async (data, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  try {
    const response = await extra.api.put<TUserPersonalData>(`/update-personal-data`, data);

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
