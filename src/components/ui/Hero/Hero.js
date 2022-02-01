import './Hero.css';
import { useLocation } from 'react-router-dom';

const Hero = ({ title, coverImg }) => {
  const location = useLocation();
  console.log(location)
  return (
    <div className='hero'>
      <p className='hero_title'>{title}</p>
      <img src={coverImg} alt='Header landscape' className='hero_img' />
    </div>
  );
};

export default Hero;
