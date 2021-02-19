/* eslint-disable consistent-return */
/* eslint-disable no-debugger */
import { createSelector } from "reselect";

const selectorTour = (state) => state.tour;

export const selectorLoader = createSelector(
  [selectorTour],
  (tour) => tour.loader
);

export const selectorCurrentTours = createSelector(
  [selectorTour],
  (tour) => tour.currentTours
);
