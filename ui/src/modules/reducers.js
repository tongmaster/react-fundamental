import { combineReducers } from "@reduxjs/toolkit";
import uiReducer from "modules/ui/uiSlice";
// import products from "modules/products/reducer";
// import cart from "modules/cart/reducer";

export default combineReducers({
  ui: uiReducer,
  //   products,
  //   cart,
});
