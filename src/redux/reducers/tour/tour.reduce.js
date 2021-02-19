import {
  DELETE_CHOSEN_TOUR,
  GET_CURRENT_TOURS_FAILED,
  GET_CURRENT_TOURS_SUCCESS,
  TOGGLE_LOADER,
} from "./types/tour.types";

import deleteChosenTourFromCurrentTours from "./utils/tour.utils";

const INITIAL_STATE = {
  currentTours: null,
  error: null,
  loader: false,
};

const tourReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CURRENT_TOURS_SUCCESS:
      return {
        ...state,
        currentTours: action.payload,
        error: null,
      };
    case GET_CURRENT_TOURS_FAILED:
      return {
        ...state,
        currentTours: null,
        error: action.payload,
      };
    case DELETE_CHOSEN_TOUR:
      return {
        ...state,
        currentTours: deleteChosenTourFromCurrentTours(
          state.currentTours,
          action.payload
        ),
      };
    case TOGGLE_LOADER:
      return {
        ...state,
        loader: !state.loader,
      };
    default:
      return state;
  }
};

export default tourReducer;
