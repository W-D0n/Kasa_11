import '../styles/Hero.css';

const Hero = ({ title = '', coverImg, type }) => {
  return (
    <div className={'hero ' + (type === 'large' ? 'large' : '')}>
      <p className='hero__title'>{title}</p>
      <img src={coverImg} alt='Header landscape' className='hero__img' />
    </div>
  );
};

export default Hero;
