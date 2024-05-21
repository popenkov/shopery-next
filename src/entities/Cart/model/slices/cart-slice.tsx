import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartProduct } from '../types/cart';
import { CartSchema } from '../types/cart-schema';

const initialState: CartSchema = {
  cart: [],
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
      return state;
    },
    changeNumItemsInCart: (state, action: PayloadAction<{ id: string; amount: number }>) => {
      const findItemIndex = state.cart?.findIndex((item) => item.isbn13 === action.payload.isbn13);

      state.cart[findItemIndex].amount = action.payload.amount;
    },
    removeItemFromCart: (state, action: PayloadAction<{ isbn13: string }>) => {
      state.cart = state.cart.filter((item) => item.isbn13 !== action.payload.isbn13);

      return state;
    },
  },
});

export const { actions: cartActions } = cartSlice;
export const { reducer: cartReducer } = cartSlice;
