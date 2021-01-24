import { useEffect } from 'react';
import { connect } from 'react-redux';

import { getCurrentToursStartAC } from './redux/reducers/tour/actions/tour.actions';
import { selectorCurrentTours } from './redux/reducers/tour/selectors/tours.selectors';

import TourBlock from './components/tours-block/tours-block.component';
import Loader from './components/loader/loader.component';

const App = ({getCurrentToursStart, currentTours}) => {
  useEffect(() => {
    getCurrentToursStart();
  }, []);

  return (
    <div className="app">
      <Loader loader = {currentTours}>
        <TourBlock>
        </TourBlock>
      </Loader>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  getCurrentToursStart: () => dispatch(getCurrentToursStartAC())
});

const mapStateToProps = state => ({
  currentTours: selectorCurrentTours(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
