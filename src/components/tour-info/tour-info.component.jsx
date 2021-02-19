/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";

import "./tour-info.styles.scss";

const TourInfo = ({ onInfo }) => {
  const [showInfo, setShowInfo] = useState(true);

  const showMaxLength = `${onInfo.slice(0, 320)}...`;
  const showAll = onInfo;

  return (
    <>
      {showInfo ? showMaxLength : showAll}
      <span onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? "Read More" : "Show Less"}
      </span>
    </>
  );
};

export default TourInfo;
