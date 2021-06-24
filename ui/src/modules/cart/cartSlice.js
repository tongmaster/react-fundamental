import { createSlice, createAction } from "@reduxjs/toolkit";

export const addToCartAction = createAction(
  "ADD_TO_CART_ACTION",
  (productId) => {
    return { payload: { productId } };
  }
);
const cartSlice = createSlice({
  name: "cartReducer",
  initialState: {
    price: 0,
    productIds: [],
  },
  reducers: {
    addToCart(state, action) {
      console.log(JSON.stringify(action));
      const { productId } = action.payload;
      console.log(`addToCart ${action.payload.productId}`);
      if (state.productIds.includes(productId)) return state;
      return {
        ...state,
        productIds: [...state.productIds, productId],
      };
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
