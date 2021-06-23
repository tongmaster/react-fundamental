import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "modules/reducers";
import rootSaga from "../sagas/rootSaga";
const sagaMiddleware = createSagaMiddleware();

// const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

// const store = configureStore(
//   rootReducer,
//   {},
//   // composeWithDevTools(applyMiddleware(...middleware))
//   middleware,
// );
const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export default store;
