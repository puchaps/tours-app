import './tour-item.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import TourInfo from '../tour-info/tour-info.component';

const TourItem = ({ id, name, info, image, price, deleteChoosedTour }) => {
  return (
    <div className="tour-item">
      <div className="tour-item-image">
        <img src={image} alt="scenery"/>
      </div>
      <div className="tour-item-descr">
        <div className="tour-item-name-price">
          <span className="name">{name}</span>
          <span className="price">${price}</span>
        </div>
        <div className="tour-item-info">
          <TourInfo info = {info}/>
        </div>
        <div className="tour-item-btn">
        <CustomButton onClick = {() => deleteChoosedTour(id)}>
          Not Interested
        </CustomButton>
        </div>
      </div>
    </div>  
  );
};


export default TourItem;