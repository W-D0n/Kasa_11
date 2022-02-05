import './Home.css'
import imgCover from '../../assets/img/covers/cover-home.png';
import Hero from '../../components/ui/Hero/Hero';
import Thumb from '../../components/ui/Thumb/Thumb';
import Loading from '../../components/ui/Loading/Loading';
import useFetch from '../../utils/useFetch';
import { Link } from 'react-router-dom';

const Home = () => {
  const { data, loading, error } = useFetch('logements.json')

  if (error) {
    console.error(error)
  }
  console.log('Home data :', data);
  return (
    <>
      <Hero title="Chez vous, partout et ailleurs" imgCover={imgCover} />
      {loading && <Loading />}
      {data && (
        <section className='home__grid'>
          {data.map((e) => (
            <Link key={e.id} to={`/accomodations/${e.id}`}>
              <Thumb title={e.title} imgCover={e.cover} />
            </Link>
          ))}
        </section>
      )}
    </>
  );
}

export default Home;