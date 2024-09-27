import { createAsyncThunk } from '@reduxjs/toolkit';

// eslint-disable-next-line
import { ThunkConfig } from '@/app/providers';

import { openStatusMessage } from '@/entities/StatusMessage';

import { TProductDetailed } from '.';

export const getProductById = createAsyncThunk<TProductDetailed, string, ThunkConfig<string>>(
  'order/geTProductDetailedById',
  async (id, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    if (!id) {
      throw new Error('');
    }

    try {
      const response = await extra.api.post<TProductDetailed>(`/product-detailed`, {
        id,
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
