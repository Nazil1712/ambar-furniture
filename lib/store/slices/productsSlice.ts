import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, mockProducts } from '../../mockData';

interface ProductsState {
  items: Product[];
  isLoading: boolean;
  error: string | null;
  searchQuery: string;
}

const initialState: ProductsState = {
  items: mockProducts,
  isLoading: false,
  error: null,
  searchQuery: '',
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    // Adding standard reducers for potential future external API connection
    setProductsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
    },
    setProductsError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    }
  },
});

export const { setSearchQuery, setProductsLoading, setProducts, setProductsError } = productsSlice.actions;

export default productsSlice.reducer;
