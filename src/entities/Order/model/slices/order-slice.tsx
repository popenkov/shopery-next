import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getOrderById } from '../orderThunk';
import { TOrder, OrderSchema } from '../types';
import { ORDERS_LOCALSTORAGE_KEY } from '../../lib';

const initialState: OrderSchema = {
  orders: [],
  order: undefined,
  error: undefined,
  isLoading: false,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addToOrders: (state, action: PayloadAction<TOrder>) => {
      state.orders = [...state.orders, action.payload];
      localStorage.setItem(ORDERS_LOCALSTORAGE_KEY, JSON.stringify(state.orders));
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrderById.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(getOrderById.fulfilled, (state, action: PayloadAction<TOrder>) => {
        state.isLoading = false;
        state.order = action.payload;
      })
      .addCase(getOrderById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  actions: { addToOrders },
  reducer: orderReducer,
} = orderSlice;
