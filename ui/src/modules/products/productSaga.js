import {
  loadProducts as loadProductReq,
  loadAllProduct,
  loadProductsRequest,
  loadProductsFailure,
  loadProductById,
  loadProduct,
} from "modules/products/productSlice";
import axios from "axios";
import { put, call, takeLatest, takeEvery } from "redux-saga/effects";
function* loadProductsSaga(action) {
  console.log("test ", action.payload);
  try {
    yield put(loadProductsRequest());
    //   const { data } = await axios.get(`/products${query}`);
    const { data } = yield call(getProducts, action.payload);
    console.log(data);
    yield put(loadAllProduct({ products: data }));
    // yield put(loadProductsStatus());
    // put({ type: LOAD_PRODUCTS_SUCCESS, payload: { products: data } });
  } catch (error) {
    console.log(error);
    yield put(loadProductsFailure());
    //   dispatch({ type: LOAD_PRODUCTS_FAILURE });
  }
}

function* loadProductSaga(action) {
  console.log("test saga");
  try {
    yield put(loadProductsRequest());
    //   const { data } = await axios.get(`/products${query}`);
    const { data } = yield call(getProduct, action.payload);
    console.log(data);
    yield put(loadProduct({ products: [data] }));
    // yield put(loadProductsStatus());
    // put({ type: LOAD_PRODUCTS_SUCCESS, payload: { products: data } });
  } catch (error) {
    console.log(error);
    yield put(loadProductsFailure());
    //   dispatch({ type: LOAD_PRODUCTS_FAILURE });
  }
}
function getProducts(search) {
  return axios.get(`/products${search}`);
}

function getProduct(id) {
  return axios.get(`/products/${id}`);
}
export default function* productsSaga() {
  yield takeEvery(loadProductReq.type, loadProductsSaga);
  yield takeEvery(loadProductById.type, loadProductSaga);
}
