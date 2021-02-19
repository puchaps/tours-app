const deleteChosenTourFromCurrentTours = (currentTours, deleteTourId) =>
  currentTours.filter((item) => item.id !== deleteTourId);

export default deleteChosenTourFromCurrentTours;
