import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TOrder, type TOrderProduct } from '../types/order';

import { OrderSchema } from '../types/order-schema';

const initialState: OrderSchema = {
  orders: [],
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addToOrders: (state, action: PayloadAction<TOrder>) => {
      state.orders = [...state.orders, action.payload];
      return state;
    },
  },
});

export const {
  actions: { addToOrders },
  reducer: orderReducer,
} = orderSlice;
