import { combineReducers } from "@reduxjs/toolkit";
import uiReducer from "modules/ui/uiSlice";
import productReducer from "modules/products/productSlice";
// import products from "modules/products/reducer";
// import cart from "modules/cart/reducer";

export default combineReducers({
  ui: uiReducer,
  products: productReducer,
  //   cart,
});
