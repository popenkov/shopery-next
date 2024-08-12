import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TWishlistProduct, WishlistSchema } from '../types';

const initialState: WishlistSchema = {
  products: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<TWishlistProduct>) => {
      state.products = [...state.products, action.payload];

      return state;
    },
    removeProductFromWishlist: (state, action: PayloadAction<{ id: string }>) => {
      state.products = state.products.filter((item) => item.id !== action.payload.id);
      return state;
    },
  },
});

export const {
  actions: { addToWishlist, removeProductFromWishlist },
  reducer: wishlistReducer,
} = wishlistSlice;
