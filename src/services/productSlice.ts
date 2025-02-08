import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { TProduct } from "../utils/types";
import { getProductsApi } from "../utils/fakeStoreApi";
import { RootState } from './store';

export type TProductState = {
  products: TProduct[];
  loading: boolean;
  error: string | null;
};

export const initialState: TProductState = {
  products: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  getProductsApi
);

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<TProduct[]>) => {
          state.loading = false;
          state.error = null;
          state.products = action.payload;
        }
      );
  },
});

export const getProductsState = (state: RootState) =>
  state.products;

export const productsReducer = productSlice.reducer;
