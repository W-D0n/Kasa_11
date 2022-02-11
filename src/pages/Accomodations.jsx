import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../styles/Accomodations.css';
import FetchService from '../utils/FetchService';
import { Footer, Gallery, Info } from '../components';


const Accomodations = () => {
  const [accomodationInfo, setAccomodationInfo] = useState();
  let { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    FetchService.get('../logements.json')
      .then(accomodations => {
        const accomodation = accomodations.find(item => item.id === id);
        setAccomodationInfo(accomodation);
        if (!accomodation) {
          navigate('/error');
        }
      })
      .catch(error => {
        console.log(error)
      })
  }, [id, navigate]);
  return (
    <>
      <div className='main'>
        {accomodationInfo && (
          <section className="accomodation">
            <Gallery pictures={accomodationInfo.pictures} />
            <Info {...accomodationInfo} />
          </section>)}
      </div>
      <Footer />
    </>
  );
};

export default Accomodations;
