import { combineReducers } from 'redux';


import tourReducer from '../reducers/tour/tour.reduce';

export default combineReducers({
  tour: tourReducer
});