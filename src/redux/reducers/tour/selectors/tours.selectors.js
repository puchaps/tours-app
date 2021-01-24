import { createSelector } from "reselect";

const selectorTour = state => state.tour;

export const selectorCurrentTours = createSelector(
  [selectorTour],
  (tour) => tour.currentTours
);
