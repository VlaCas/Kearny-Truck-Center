import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx'
import './assets/styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        {/* <Route path='/services' element={<Services />}></Route> */}
        {/* <Route path='/About-us' element={<About-us />}></Route> */}
        {/* <Route path='/Contact-us' element={<Contact-us />}></Route> */}
        {/* <Route path='/*' element={<Services />}></Route> */}        
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);