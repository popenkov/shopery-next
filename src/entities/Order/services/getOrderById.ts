import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider/StateSchema';

import { TOrder } from '../model';

export const getOrderById = createAsyncThunk<TOrder, string, ThunkConfig<string>>(
  'order/getOrderById',
  async (orderId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    if (!orderId) {
      throw new Error('');
    }

    try {
      const response = await extra.api.get<TOrder>(`/order-detailed/${orderId}`, {});

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
