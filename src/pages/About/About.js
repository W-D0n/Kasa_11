import './About.css'
import Hero from '../../components/ui/Hero/Hero';
import imgPath from '../../assets/img/covers/cover-about.png';

const About = () => {
  return (
    <>
      {/* <Header activeItem="About" /> */}
      <Hero title="" coverImg={imgPath} />
      <main className='main__container'>
      </main>
    </>
  );
}
export default About