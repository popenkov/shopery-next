import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CartProduct } from '../types/cart';
import { CartSchema } from '../types/cart-schema';

const initialState: CartSchema = {
  isAsideCartOpen: false,
  cart: [],
  totalAmount: 0,
  totalPrice: 0,
};

const getTotalPrice = (state: CartSchema) => {
  return state.cart.reduce((acc, item) => {
    return acc + item.price * item.amount;
  }, 0);
};

const getTotalAmount = (state: CartSchema) => {
  return state.cart.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartProduct>) => {
      const findItemIndex = state.cart?.findIndex((item) => item.id === action.payload.id);

      if (findItemIndex === -1) {
        state.cart = [...state.cart, action.payload];
      } else {
        state.cart[findItemIndex].amount += action.payload.amount;
      }
      state.totalPrice = getTotalPrice(state);
      state.totalAmount = getTotalAmount(state);
      return state;
    },
    changeNumItemsInCart: (state, action: PayloadAction<{ id: string; amount: number }>) => {
      const findItemIndex = state.cart?.findIndex((item) => item.id === action.payload.id);

      state.cart[findItemIndex].amount = action.payload.amount;
      state.totalPrice = getTotalPrice(state);
      state.totalAmount = getTotalAmount(state);
      return state;
    },
    removeItemFromCart: (state, action: PayloadAction<{ id: string }>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      state.totalPrice = getTotalPrice(state);
      state.totalAmount = getTotalAmount(state);
      return state;
    },
    // cart menu
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
