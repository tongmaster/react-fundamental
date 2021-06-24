import { createSlice, createAction } from "@reduxjs/toolkit";
export const loadProducts = createAction("LOAD_PRODUCTS");
export const loadProductById = createAction("LOAD_PRODUCT_BY_ID");
const productSlice = createSlice({
  name: "productReducer",
  initialState: { isLoading: false, items: [] },
  reducers: {
    loadAllProduct(state, action) {
      console.log(`loaodProducts ${action.payload.products}`);

      return { ...state, isLoading: false, items: action.payload.products };
    },
    loadProductsRequest(state) {
      return { ...state, isLoading: true, items: [] };
    },
    loadProductsFailure(state) {
      return { ...state, isLoading: false };
    },
    loadProduct(state, action) {
      return {
        ...state,
        isLoading: false,
        items: [...action.payload.products],
      };
    },
  },
});

export const {
  loadAllProduct,
  loadProductsRequest,
  loadProductsFailure,
  loadProduct,
} = productSlice.actions;
export default productSlice.reducer;
