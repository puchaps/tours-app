import { 
  DELETE_CHOOSED_TOUR,
  GET_CURRENT_TOURS_FAILED,
  GET_CURRENT_TOURS_SUCCSES
} from "./types/tour.types";
import { deleteChoosedTourFromCurrentTours } from "./utils/tour.utils";

const INITIAL_STATE = {
  currentTours: null,
  error: null
};

const tourReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case GET_CURRENT_TOURS_SUCCSES:
      return {
        ...state,
        currentTours: action.payload,
        error: null
      };
    case GET_CURRENT_TOURS_FAILED:
      return {
        ...state,
        currentTours: null,
        error: action.payload
      };
    case DELETE_CHOOSED_TOUR:
      return {
        ...state,
        currentTours: deleteChoosedTourFromCurrentTours(state.currentTours, action.payload)
      }
    default:
      return state;
  };
};

export default tourReducer;