import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Houses from "./pages/Houses/Houses";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div>
        <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/houses" element={<Houses />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/error" element={<Error />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
      </div>
        <Footer />
    </div>
  );
}

export default App;