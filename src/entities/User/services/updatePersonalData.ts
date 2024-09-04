import { createAsyncThunk } from '@reduxjs/toolkit';

// eslint-disable-next-line
import { ThunkConfig } from '@/app/providers';

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

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue('error');
  }
});
