import { createAsyncThunk } from '@reduxjs/toolkit';

// eslint-disable-next-line
import { ThunkConfig } from '@/app/providers';

import { TOrder } from '../model';

export const getOrderById = createAsyncThunk<TOrder, string, ThunkConfig<string>>(
  'order/getOrderById',
  async (id, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    if (!id) {
      throw new Error('');
    }

    try {
      const response = await extra.api.post<TOrder>(`/order-detailed`, {
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
