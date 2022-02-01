import * as React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './index.css';
import './styles/base/reset.css';
import App from './App';
import Home from "./pages/Home/Home";
import Houses from "./pages/Houses/Houses";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="home" element={<Home />} />
        <Route path="houses" element={<Houses />} />
        <Route path="about" element={<About />} />
        <Route path="error" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);