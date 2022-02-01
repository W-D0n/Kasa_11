import './Home.css'
import Hero from '../../components/ui/Hero/Hero';
import imgPath from '../../assets/img/covers/cover-home.png';

const Home = () => {
  return (
    <>
      <Hero title="Chez vous, partout et ailleurs" coverImg={imgPath} />
      <main className='gallery_container'>
      </main>
    </>
  );
}

export default Home;