import React, {useState, useEffect} from "react";
import {Menu, X,Sun,Moon} from "lucide-react";
import Logo from "../assets/image.png";
import { Link } from "react-router-dom";



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() =>{
        if(darkMode) {
            document.documentElement.classList.add("dark");
        }else{
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);


return (
  <nav className="bg-red- dark:bg-roboDark shadow-md fixed w-full z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <div className="text-2xl font-bold text-roboDark dark:text-roboBlue">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src={Logo}
            alt="logo"
          />
          Abugida <span className="text-roboBlue">Robotics</span>
        </div>

        <div className="hidden md:flex space-x-8 text-gray-700 dark:text-gray-200">
          <Link to="/home" className="hover:text-roboBlue">
            Home{" "}
          </Link>
          <Link to="/about" className="hover:text-roboBlue">
            About
          </Link>
          <Link to="/courses" className="hover:text-roboBlue">
            Courses
          </Link>
          <Link to="/activities" className="hover:text-roboBlue">
            Activities
          </Link>
          <Link to="/blog" className="hover:text-roboBlue">
            Blog
          </Link>
          <Link to="/robotShop" className="hover:text-roboBlue">
            Robot Shop
          </Link>
          <Link to="/GSTEMI" className="hover:text-roboBlue">
            G-STEMI
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? (
              <Sun className="text-yellow-400" />
            ) : (
              <Moon className="text-gray-800 dark:text-gray-200" />
            )}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:bg-gray-700"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </div>

    {isOpen && (
      <div className="md:hidden bg-white dark:bg-roboGray text-gray-700 dark:text-gray-200 px-4 space-y-4">
        <Link to="/home" className="block hover:text-roboBlue">
          Home
        </Link>
        <Link to="/about" className="block hover:text-roboBlue">
          About
        </Link>
        <Link to="/courses" className="hover:text-roboBlue">
          Courses
        </Link>
        <Link to="/activities" className="hover:text-roboBlue">
          Activities
        </Link>
        <Link to="/blog" className="hover:text-roboBlue">
          Blog
        </Link>
        <Link to="/robotShop" className="hover:text-roboBlue">
          Robot Shop
        </Link>
        <Link to="/GSTEMI" className="hover:text-roboBlue">
          G-STEMI
        </Link>
      </div>
    )}
  </nav>
);
};
export default Navbar;