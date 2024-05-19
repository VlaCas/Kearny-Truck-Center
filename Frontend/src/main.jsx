import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import ContactUs from './pages/ContactUs';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs.jsx';
import './assets/styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact-us' element={<ContactUs />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/about-us' element={<AboutUs />}></Route>
        {/* <Route path='/*' element={<Services />}></Route> */}        
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);