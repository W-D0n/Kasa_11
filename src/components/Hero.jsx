import '../styles/Hero.css';

const Hero = ({ title = '', coverImg }) => {
  return (
    <div className='hero'>
      <p className='hero_title'>{title}</p>
      <img src={coverImg} alt='Header landscape' className='hero_img' />
    </div>
  );
};

export default Hero;
