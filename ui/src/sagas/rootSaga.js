import { spawn } from "redux-saga/effects";

// Sagas
import uiSaga from "modules/ui/uiSaga";

// Export the root saga
export default function* rootSaga() {
  console.log("Hello From Redux-Saga!");

  yield spawn(uiSaga);
}
