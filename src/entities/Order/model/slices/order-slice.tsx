import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TOrder } from '../types/order';
import { OrderSchema } from '../types/order-schema';
import { ORDERS_LOCALSTORAGE_KEY } from '../../lib/constants';

const initialState: OrderSchema = {
  orders: [],
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
});

export const {
  actions: { addToOrders },
  reducer: orderReducer,
} = orderSlice;
