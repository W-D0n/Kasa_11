import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../styles/Home.css'
import coverImg from '../assets/img/covers/cover-home.png';
import { Header, Hero, Thumb, Footer } from '../components';
import FetchService from '../utils/FetchService';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    FetchService.get('logements.json')
      .then(logements => {
        setData(logements);
      })
  }, []);

  return (
    <>
      <div className='main'>
        <Header />
        <Hero title="Chez vous, partout et ailleurs" coverImg={coverImg} />
        {data && (
          <section className='home__grid'>
            {data.map((e) => (
              <Link key={e.id} to={`/accomodations/${e.id}`}>
                <Thumb title={e.title} imgCover={e.cover} />
              </Link>
            ))}
          </section>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Home;