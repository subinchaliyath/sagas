import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { userLoginReducer } from "./reducers/userReducer";
import { watcherSaga } from "./sagas/rootSagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  userLoginReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

// then run the saga
sagaMiddleware.run(watcherSaga);
export default store;
