import { takeLatest, put, call, all } from 'redux-saga/effects';
import axios from 'axios';

import {
  getCurrentToursFailedAC,
  getCurrentToursSuccsesAC
} from '../actions/tour.actions';

import { GET_CURRENT_TOURS_START } from '../types/tour.types';

function* getCurrentTours() {
  try {
    const data = yield axios.get('https://course-api.com/react-tours-project')
      .then(responese => responese.data);
    yield put(getCurrentToursSuccsesAC(data));
  } catch(error) {
    yield put(getCurrentToursFailedAC(error));
  }
};

function* getCurrentToursStart() {
  yield takeLatest(GET_CURRENT_TOURS_START, getCurrentTours);
};

export default function* tourSagas() {
  yield all([
    call(getCurrentToursStart)
  ]);
};