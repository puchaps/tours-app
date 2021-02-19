import React from "react";

import "./loader.styles.scss";

const Loader = ({ onLoader, children }) => {
  if (onLoader) {
    return (
      <img
        className="loader-img"
        src="https://www.flaticon.com/svg/vstatic/svg/455/455589.svg?token=exp=1613754365~hmac=f9537809513aec9bcc02f86d6737116c"
        alt="loader"
      />
    );
  }

  return children;
};

export default Loader;
