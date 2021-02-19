import React, { useCallback, useEffect } from "react";
import { connect } from "react-redux";

import { getCurrentToursStartAC } from "./redux/reducers/tour/actions/tour.actions";
import { selectorLoader } from "./redux/reducers/tour/selectors/tours.selectors";

import TourBlock from "./components/tours-block/tours-block.component";
import Loader from "./components/loader/loader.component";

const App = ({ handleGetCurrentToursStart, onLoader }) => {
  const handleUseEffect = useCallback(() => {
    handleGetCurrentToursStart();
  }, [handleGetCurrentToursStart]);

  useEffect(() => {
    handleUseEffect();
  }, [handleUseEffect]);

  return (
    <>
      <div className="tours-title">
        <h1>Our Tours</h1>
      </div>
      <Loader onLoader={onLoader}>
        <TourBlock />
      </Loader>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleGetCurrentToursStart: () => dispatch(getCurrentToursStartAC()),
});

const mapStateToProps = (state) => ({
  onLoader: selectorLoader(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
