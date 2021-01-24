import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';


import rootReducer from '../root-reduce/root.reducer';

import rootSaga from '../root-saga/root.saga';

const sagaMiddleware = createSagaMiddleware();

const middleWareAll = [
  logger,
  sagaMiddleware
];

const STORE = createStore(rootReducer, applyMiddleware(...middleWareAll));

sagaMiddleware.run(rootSaga);

export default STORE;
