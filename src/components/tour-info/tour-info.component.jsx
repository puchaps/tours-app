import { useState } from 'react';

import './tour-info.styles.scss';

const TourInfo = ({ info }) => {
  const[showInfo, setShowInfo] = useState(true);
  
  const showAll = info;
  const showMaxLength = info.slice(0, 320) + '...';

  return(
    <>
      {showInfo ? showMaxLength : showAll}
      <span onClick = {() => setShowInfo(!showInfo)}>
        {showInfo ? 'Read More' : 'Show Less'}
      </span>
    </>
  );
};

export default TourInfo;
