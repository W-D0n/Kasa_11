import './App.css';

import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Home from './pages/Home/Home';



const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;