import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';

const Home = () => {
  return (
    <>
      <Header activeItem="Home" />
      <main style={{ padding: "1rem 0" }}>
        {/* ici le contenu */}
        <h2>Houses</h2>
      </main>
      <Footer />
    </>
  );
}

export default Home