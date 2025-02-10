import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { TProduct } from "../utils/types";
import {
  getProductById,
  getProductsApi,
  createProductApi,
  deleteProductById,
} from "../utils/fakeStoreApi";
import { RootState } from "./store";

export type TProductState = {
  products: TProduct[];
  filter: "all" | "favorites";
  loading: boolean;
  error: string | null;
  productDetails: TProduct | null;
};

export const initialState: TProductState = {
  products: [],
  filter: "all",
  loading: false,
  error: null,
  productDetails: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    return await getProductsApi();
  }
);

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id: number) => {
    return await getProductById(id);
  }
);

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (product: Omit<TProduct, "id">) => {
    return await createProductApi(product);
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id: number) => {
    return await deleteProductById(id);
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    likeProduct(state, action: PayloadAction<number>) {
      const product = state.products.find(
        (product) => product.id === action.payload
      );
      if (product) {
        product.isLiked = !product.isLiked;
      }
    },
    setFilter(state, action: PayloadAction<"all" | "favorites">) {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // get all products
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
      )

      // get product by id
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      })
      .addCase(
        fetchProductById.fulfilled,
        (state, action: PayloadAction<TProduct>) => {
          state.loading = false;
          state.error = null;
          state.productDetails = action.payload;
        }
      )

      // create product
      .addCase(createProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      })
      .addCase(
        createProduct.fulfilled,
        (state, action: PayloadAction<TProduct>) => {
          state.loading = false;
          state.error = null;
          state.products.push(action.payload);
        }
      )

      // delete product
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      })
      .addCase(
        deleteProduct.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.loading = false;
          state.error = null;
          state.products = state.products.filter(
            (product) => product.id !== action.payload
          );
        }
      );
  },
});

export const getProductsState = (state: RootState) => state.products;
export const getProductByIdState = (state: RootState) => state.productDetails;
export const getFilterState = (state: RootState) => state.filter;

export const { likeProduct, setFilter } = productSlice.actions;

export const productsReducer = productSlice.reducer;
