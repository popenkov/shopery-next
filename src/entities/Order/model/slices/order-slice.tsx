import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TOrder } from '../types/order';
import { OrderSchema } from '../types/order-schema';
import { ORDERS_LOCALSTORAGE_KEY } from '../../lib/constants';
import { getOrderById } from '../../services/getOrderById';

const initialState: OrderSchema = {
  orders: localStorage?.getItem(ORDERS_LOCALSTORAGE_KEY)
    ? JSON.parse(localStorage.getItem(ORDERS_LOCALSTORAGE_KEY)!)
    : [],
  order: undefined,
  error: undefined,
  isLoading: true,
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
