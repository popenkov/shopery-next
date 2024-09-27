import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getProductById } from '../productThunk';
import { ProductSchema, TProductDetailed } from '../types';

const initialState: ProductSchema = {
  product_detailed: null,
  error: null,
  isLoading: false,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductById.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(getProductById.fulfilled, (state, action: PayloadAction<TProductDetailed>) => {
        state.isLoading = false;
        state.product_detailed = action.payload;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.isLoading = false;
        if (action.payload) {
          state.error = action.payload;
        }
      });
  },
});

export const { reducer: productsReducer } = productsSlice;
