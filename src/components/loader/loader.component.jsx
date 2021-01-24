import './loader.styles.scss';

const Loader = ({ loader, children }) => {
  if (!loader) {
    return (
      <img 
      className = 'loadre-image'
      src={'https://themoment-s3-bucket.s3-us-west-2.amazonaws.com/app/wait_animation_small.gif'}
      alt="loader"/>
    );
  };

  return(
    <div className="loader">
      {children}
    </div>
  );
};

export default Loader;