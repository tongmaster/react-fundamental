import { put, call, takeLatest, takeEvery } from "redux-saga/effects";
import {
  toggleDarkMode,
  toggleDarkModeRequest,
  setDarkModeRequest,
  setDarkMode,
} from "modules/ui/uiSlice";
function* setDarkModeChange({ payload }) {
  console.log("toggleDarkModeChange", payload);
  yield put(setDarkMode(payload));
}
function* toggleDarkModeChange({ payload }) {
  yield put(toggleDarkMode());
}
export default function* uiSaga() {
  console.log("uiSaga");
  yield takeEvery(toggleDarkModeRequest.type, toggleDarkModeChange);
  yield takeEvery(setDarkModeRequest.type, setDarkModeChange);
}
