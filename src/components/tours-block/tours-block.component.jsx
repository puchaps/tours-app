import { connect } from 'react-redux';

import './tours-block.style.scss';

import { selectorCurrentTours } from '../../redux/reducers/tour/selectors/tours.selectors';
import { deleteChoosedTourAC, getCurrentToursStartAC} from '../../redux/reducers/tour/actions/tour.actions';

import TourItem from '../tour-item/tour-item.componen';
import CustomButton from '../custom-button/custom-button.component';

const ToursBlock = ({ currentTours, deleteChoosedTour, getCurrentToursStart }) => {
  return (
    <div className="tours-block">
      <div className="tours-block-title">
        <h1>Our Tours</h1>
      </div>
      {
        currentTours.map( item => {
          return <TourItem key = {item.id} {...item} deleteChoosedTour = {deleteChoosedTour}/>
        })
      }
      {
        currentTours.length < 1 && (
          <CustomButton onClick = {getCurrentToursStart} typeBtn = 'refresh'>
            Refresh
          </CustomButton>
        )
      }
    </div>
  );
};

const mapStateToProps = state => ({
  currentTours: selectorCurrentTours(state),
})

const mapDispatchToProps = dispatch => ({
  deleteChoosedTour: (choosedTour) => dispatch(deleteChoosedTourAC(choosedTour)),
  getCurrentToursStart: () => dispatch(getCurrentToursStartAC())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToursBlock);