import './custom-button.styles.scss';

const CustomButton = ({ children, typeBtn = '', ...otherProps }) => {
  return(
    <div className={`custom-button ${typeBtn}`}>
      <button {...otherProps}>
        {children}
      </button>
    </div>
  );
};

export default CustomButton;