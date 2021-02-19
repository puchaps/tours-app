/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, onTypeBtn = "", ...otherProps }) => (
  <div className={`custom-button ${onTypeBtn}`}>
    <button {...otherProps} type="button">
      {children}
    </button>
  </div>
);

export default CustomButton;
