import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ProductSchema, TProductDetailed } from '../types';
import { getProductById } from '../../api/get-product-by-id';

const initialState: ProductSchema = {
  product_detailed: undefined,
  error: undefined,
  isLoading: true,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductById.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(getProductById.fulfilled, (state, action: PayloadAction<TProductDetailed>) => {
        state.isLoading = false;
        state.product_detailed = action.payload;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: productsReducer } = productsSlice;
