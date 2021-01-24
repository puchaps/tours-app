export const deleteChoosedTourFromCurrentTours = (currentTours, deleteTourId) => {
  return currentTours.filter( item => item.id !== deleteTourId);
};
