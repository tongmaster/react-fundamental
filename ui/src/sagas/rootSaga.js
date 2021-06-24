import { spawn } from "redux-saga/effects";
import { fork, all } from "redux-saga/effects";

// Sagas
import uiSaga from "modules/ui/uiSaga";
import productSaga from "modules/products/productSaga";

// Export the root saga
export default function* rootSaga() {
  console.log("Hello From Redux-Saga!");

  yield all([fork(uiSaga), fork(productSaga)]);
  // yield spawn(uiSaga);
}
