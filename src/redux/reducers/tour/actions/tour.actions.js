import {
  GET_CURRENT_TOURS_FAILED,
  GET_CURRENT_TOURS_START,
  GET_CURRENT_TOURS_SUCCESS,
  DELETE_CHOSEN_TOUR,
  TOGGLE_LOADER,
} from "../types/tour.types";

export const getCurrentToursStartAC = () => ({
  type: GET_CURRENT_TOURS_START,
});
export const getCurrentToursSuccessAC = (tours) => ({
  type: GET_CURRENT_TOURS_SUCCESS,
  payload: tours,
});
export const getCurrentToursFailedAC = (error) => ({
  type: GET_CURRENT_TOURS_FAILED,
  payload: error,
});

export const deleteChosenTourAC = (chosenTour) => ({
  type: DELETE_CHOSEN_TOUR,
  payload: chosenTour,
});

export const toggleLoaderAC = () => ({
  type: TOGGLE_LOADER,
});
