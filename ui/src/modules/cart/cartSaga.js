import { addToCartAction, addToCart } from "modules/cart/cartSlice";
import { put, call, takeLatest, takeEvery } from "redux-saga/effects";

function* addToCartSaga({ payload }) {
  console.log(`addToCartSaga ${payload.productId}`);
  yield put(addToCart(payload));
}
export default function* cartSaga() {
  yield takeEvery(addToCartAction.type, addToCartSaga);
}
