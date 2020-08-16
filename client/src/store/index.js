import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas/rootSaga";
import rootReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware, thunk)));
sagaMiddleware.run(rootSaga);
