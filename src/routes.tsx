import React from 'react'
import {Routes, Route} from "react-router-dom";
import HomePage from './pages/home';
import About from './pages/About';
import Courses from './pages/Courses';
import GSTEMI from './pages/GSTEMI';

function routes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/gstemi" element={<GSTEMI />} />
    </Routes>
  );
}

export default routes