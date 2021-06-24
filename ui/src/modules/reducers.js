import { combineReducers } from "@reduxjs/toolkit";
import uiReducer from "modules/ui/uiSlice";
import productReducer from "modules/products/productSlice";
import cartReducer from "modules/cart/cartSlice";

export default combineReducers({
  ui: uiReducer,
  products: productReducer,
  cart: cartReducer,
});
