import './Hero.css';

const Hero = ({ title, imgCover }) => {
  return (
    <div className='hero'>
      <p className='hero_title'>{title}</p>
      <img src={imgCover} alt='Header landscape' className='hero_img' />
    </div>
  );
};

export default Hero;
