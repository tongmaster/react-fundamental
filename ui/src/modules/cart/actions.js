import * as uiAction from "modules/ui/actions";
import * as productsAction from "modules/products/actions";
import axios from "axios";
import { push } from "connected-react-router";
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const CHECKOUT_SUCCESS = "CHECKOUT_SUCCESS";
function addToCart(productId) {
  return async (dispatch) => {
    dispatch(uiAction.setFlashMessage("product added to cart succes"));
    dispatch({ type: ADD_TO_CART, payload: { productId } });
  };
}
function loadCart() {
  return async (dispatch, getState) => {
    const {
      cart: { productIds },
    } = getState();
    if (productIds.length === 0) {
      return dispatch(productsAction.clearProducts());
    }
    const query = productIds.map((id) => `id=${id}`).join("&");

    dispatch(productsAction.loadProducts(`?${query}`));
  };
}
function removeFromCart(productId) {
  return (dispatch) => {
    dispatch({ type: REMOVE_FROM_CART, payload: { productId } });
    dispatch(loadCart());
  };
}
function checkout(deliveryInfo) {
  return async (dispatch, getState) => {
    const {
      cart: { productIds, price },
    } = getState();

    const { data } = await axios.post("/orders", {
      deliveryInfo,
      productIds,
      price,
    });

    dispatch({ type: CHECKOUT_SUCCESS, payload: { order: data } });
    dispatch(uiAction.setFlashMessage("Your order has been placed"));
    dispatch(push("/"));
  };
}
export {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHECKOUT_SUCCESS,
  addToCart,
  removeFromCart,
  loadCart,
  checkout,
};
