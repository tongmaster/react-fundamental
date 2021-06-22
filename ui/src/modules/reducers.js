import { combineReducers } from "redux";

import ui from "modules/ui/reducer";
import products from "modules/products/reducer";
import cart from "modules/cart/reducer";
import { connectRouter } from "connected-react-router";
export default (history) =>
  combineReducers({
    router: connectRouter(history),
    ui,
    products,
    cart,
  });
