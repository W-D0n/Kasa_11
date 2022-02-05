import './Accomodations.css';
import useFetch from '../../utils/useFetch';
import { useParams } from 'react-router-dom';
import Gallery from '../../components/ui/Gallery/Gallery';
import Info from '../../components/ui/Info/Info';
import Loading from '../../components/ui/Loading/Loading';
import Error from '../Error/Error';

//il faut récupérer l'id

const Accomodations = () => {
  const { data, loading, error } = useFetch('logements.json')
  let params = useParams();
  let accomodationInfo = null;
  console.log('Accomodations data :', data);
  console.log('params :', params.id)

  if (error) {
    console.error(error)
  }
  if (data) {
    accomodationInfo = data.find((e) => e.id === params.id);
    if (!accomodationInfo) {
      <Error />
    }
  }

  return (
    <>
      {loading && <Loading />}
      {accomodationInfo && (
        <section className="accomodation">
          <Gallery pictures={accomodationInfo.pictures} />
          <Info data={accomodationInfo} />
        </section>
      )}
    </>
  );
};

export default Accomodations;
