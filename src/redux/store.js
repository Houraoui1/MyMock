import { applyMiddleware, Store } from "redux";
import { legacy_createStore as createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootsaga";
import rootReducer from "./rootreducer";


const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
