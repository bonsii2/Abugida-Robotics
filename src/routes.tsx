import React from 'react'
import {Routes, Route} from "react-router-dom";
import HomePage from './pages/home';
import About from './pages/About';
import CoursesPage from "./pages/Courses";
import GSTEMI from './pages/GSTEMI';
import Activities from './pages/Activities';
import Blog from './pages/Blog';
import RobotShop from './pages/RoboticShop';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/activities" element={<Activities />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/RobotShop" element={<RobotShop />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/gstemi" element={<GSTEMI />} />
    </Routes>
  );
}

export default Routers