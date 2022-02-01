import './About.css'
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import Hero from '../../components/ui/Hero/Hero';
import imgPath from '../../assets/img/covers/cover-about.png';

const About = () => {
  return (
    <>
      <Header activeItem="About" />
      <Hero title="" coverImg={imgPath} />
      <main className='main_container'>
      </main>
      <Footer />
    </>
  );
}
export default About