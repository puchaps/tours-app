/* eslint-disable react/jsx-props-no-spreading */
import React, { connect } from "react-redux";

import "./tours-block.style.scss";

import { selectorCurrentTours } from "../../redux/reducers/tour/selectors/tours.selectors";
import {
  deleteChosenTourAC,
  getCurrentToursStartAC,
} from "../../redux/reducers/tour/actions/tour.actions";

import TourItem from "../tour-item/tour-item.component";
import CustomButton from "../custom-button/custom-button.component";

const ToursBlock = ({
  onCurrentTours,
  handleDeleteChosenTour,
  handleGetCurrentToursStart,
}) => (
  <div className="tours-block">
    { onCurrentTours && onCurrentTours.map((item) => (
      <TourItem
        key={item.id}
        {...item}
        handleDeleteTour={handleDeleteChosenTour}
      />
    ))}
    {!onCurrentTours || onCurrentTours.length < 1 && (
      <CustomButton onClick={handleGetCurrentToursStart} onTypeBtn="refresh">
        Refresh
      </CustomButton>
    )}
  </div>
)


const mapStateToProps = (state) => ({
  onCurrentTours: selectorCurrentTours(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleDeleteChosenTour: (tour) => dispatch(deleteChosenTourAC(tour)),
  handleGetCurrentToursStart: () => dispatch(getCurrentToursStartAC()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToursBlock);
