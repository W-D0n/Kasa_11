import './Loading.css';
import LoaderSvg from '../../../assets/img/loader.svg';

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader__content">
        <object type="image/svg+xml" data={LoaderSvg}>
          loading-animation
        </object>
        <p>Loading data...</p>
      </div>
    </div>
  );
};

export default Loader;
