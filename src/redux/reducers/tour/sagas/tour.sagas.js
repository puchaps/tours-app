/* eslint-disable no-debugger */
import { takeLatest, put, call, all } from "redux-saga/effects";
import axios from "axios";

import {
  getCurrentToursFailedAC,
  getCurrentToursSuccessAC,
  toggleLoaderAC,
} from "../actions/tour.actions";

import { GET_CURRENT_TOURS_START } from "../types/tour.types";

function* getCurrentTours() {
  try {
    yield put(toggleLoaderAC());

    const resData = yield axios
      .get("https://course-api.com/react-tours-project")
      .then((response) => response.data);

    yield put(getCurrentToursSuccessAC(resData));
    yield put(toggleLoaderAC());
  } catch (error) {
    yield put(getCurrentToursFailedAC(error));
  }
}

function* getCurrentToursStart() {
  yield takeLatest(GET_CURRENT_TOURS_START, getCurrentTours);
}

export default function* tourSagas() {
  yield all([call(getCurrentToursStart)]);
}
