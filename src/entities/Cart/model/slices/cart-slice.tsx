import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { type TCartProduct, CartSchema } from '../types';
import { getTotalAmount, getTotalPrice } from '../../lib';

const initialState: CartSchema = {
  isAsideCartOpen: false,
  cart: [],
  totalAmount: 0,
  totalPrice: { USD: 0, EUR: 0 },
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<TCartProduct>) => {
      const findItemIndex = state.cart?.findIndex((item) => item.id === action.payload.id);

      if (findItemIndex < 0) {
        state.cart = [...state.cart, action.payload];
      } else {
        state.cart[findItemIndex].amount += action.payload.amount;
      }
      state.totalPrice = getTotalPrice(state);
      state.totalAmount = getTotalAmount(state);
      return state;
    },
    changeNumItemsInCart: (state, action: PayloadAction<CartSchema>) => {
      state = action.payload;
      return state;
    },
    removeItemFromCart: (state, action: PayloadAction<{ id: string }>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      state.totalPrice = getTotalPrice(state);
      state.totalAmount = getTotalAmount(state);
      return state;
    },
    openAsideCartMenu: (state) => {
      state.isAsideCartOpen = true;
      return state;
    },
    closeAsideCartMenu: (state) => {
      state.isAsideCartOpen = false;
      return state;
    },
  },
});

export const {
  actions: {
    addToCart,
    changeNumItemsInCart,
    removeItemFromCart,
    openAsideCartMenu,
    closeAsideCartMenu,
  },
  reducer: cartReducer,
} = cartSlice;
