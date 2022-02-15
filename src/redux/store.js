import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { userLoginReducer } from "./reducers/userReducer";
import { watcherSaga } from "./sagas/rootSagas";

import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  form: formReducer,
});

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

// then run the saga
sagaMiddleware.run(watcherSaga);
export default store;
