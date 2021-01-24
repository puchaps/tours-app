import { call, all } from 'redux-saga/effects';

import tourSagas from '../reducers/tour/sagas/tour.sagas';

export default function* rootSaga() {
  yield all([
    call(tourSagas)
  ]);
};