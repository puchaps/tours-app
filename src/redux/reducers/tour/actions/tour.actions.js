import { 
  GET_CURRENT_TOURS_FAILED,
  GET_CURRENT_TOURS_START,
  GET_CURRENT_TOURS_SUCCSES,
  DELETE_CHOOSED_TOUR
} from "../types/tour.types";

//////////////////--CURRNET-TOURS--//////////////////
export const getCurrentToursStartAC = () => ({
  type: GET_CURRENT_TOURS_START
});
export const getCurrentToursSuccsesAC = (tours) => ({
  type: GET_CURRENT_TOURS_SUCCSES,
  payload: tours
});
export const getCurrentToursFailedAC = (error) => ({
  type: GET_CURRENT_TOURS_FAILED,
  payload: error
});
//////////////////--CURRNET-TOURS--//////////////////


//////////////////--DELETE-TOURS--//////////////////
export const deleteChoosedTourAC = (choosedTour) => ({
  type: DELETE_CHOOSED_TOUR,
  payload: choosedTour
});
//////////////////--DELETE-TOURS--//////////////////