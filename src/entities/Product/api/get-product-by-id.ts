import { createAsyncThunk } from '@reduxjs/toolkit';

// eslint-disable-next-line
import { ThunkConfig } from '@/app/providers';

import { TProductDetailed } from '../model';

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

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error');
    }
  },
);
