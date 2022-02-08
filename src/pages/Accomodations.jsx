import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../styles/Accomodations.css';
import FetchService from '../utils/FetchService';
import { Header, Footer, Gallery, Info } from '../components';


const Accomodations = () => {
  const [accomodationInfo, setAccomodationInfo] = useState(null);
  let params = useParams();

  useEffect(() => {
    FetchService.get('../logements.json')
      .then(accomodations => {
        const accomodation = accomodations.find(item => item.id === params.id);
        setAccomodationInfo(accomodation);
      })
      .catch(error => {
        console.log(error)
      })
  }, [params.id]);

  return (
    <>
      <div className='main'>
        <Header />
        {accomodationInfo && (
          <section className="accomodation">
            <Gallery pictures={accomodationInfo.pictures} />
            <Info {...accomodationInfo} />
          </section>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Accomodations;
