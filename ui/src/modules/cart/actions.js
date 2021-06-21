import * as uiAction from "modules/ui/actions";
const ADD_TO_CART = "ADD_TO_CART";
function addToCart(productId) {
  return async (dispatch) => {
    dispatch(uiAction.setFlashMessage("product added to cart succes"));
    dispatch({ type: ADD_TO_CART, payload: { productId } });
  };
}
export { ADD_TO_CART, addToCart };
