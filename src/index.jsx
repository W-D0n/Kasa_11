import * as React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './styles/reset.css';
import './styles/index.css';
import App from "./App";
import Home from "./pages/Home/Home";
import Accomodations from "./pages/Accomodations/Accomodations";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="accomodations/:id" element={<Accomodations />} />
          <Route path="about" element={<About />} />
          <Route index element={<Home />} />
          <Route path="error" element={<Error />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);