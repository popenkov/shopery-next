import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { type TFavoriteProduct } from '../types/favorites';
import { FavoritesSchema } from '../types/favorites-schema';

const initialState: FavoritesSchema = {
  products: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<TFavoriteProduct>) => {
      state.products = [...state.products, action.payload];

      return state;
    },
    removeProductFromFavorites: (state, action: PayloadAction<{ id: string }>) => {
      state.products = state.products.filter((item) => item.id !== action.payload.id);
      return state;
    },
  },
});

export const {
  actions: { addToFavorites, removeProductFromFavorites },
  reducer: favoritesReducer,
} = favoritesSlice;
