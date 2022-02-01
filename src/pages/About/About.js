import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';

const About = () => {
  return (
    <>
      <Header activeItem="About" />
      <main style={{ padding: "1rem 0" }}>
        {/* ici le contenu */}
        <h2>About</h2>
      </main>
      <Footer />
    </>
  );
}
export default About