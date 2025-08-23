import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import Logo from "../assets/image.png";
import { Link } from "react-router-dom";
import AnimatedLink from "./AnimatedLink";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  const closeMobileMenu =() =>{
    setIsOpen(false);
  }

  return (
    <nav className="bg-white dark:bg-roboGray text-gray-700 shadow-md fixed top-0 left-0 w-full z-50   ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex justify-start gap-4 align-center text-2xl font-bold text-roboDark dark:text-roboBlue">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src={Logo}
              alt="logo"
            />
            <h1 className="text-2xl font-bold  text-roboDark dark:text-gold">
              Abugida <span className="text-gold">Robotics</span>
            </h1>
          </div>

          <div className="hidden md:flex space-x-8 text-gray-700 dark:text-gray-200">
            <AnimatedLink to="/" children="Home" />
            <AnimatedLink to="/about" children="About" />
            <AnimatedLink to="/courses" children="Courses" />
            <AnimatedLink to="/activities" children="Activities" />
            <AnimatedLink to="/blog" children="Blog" />
            <AnimatedLink to="/RobotShop" children="RObot Shop" />
            <AnimatedLink to="/gstemi" children="G-STEMI" />
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
        <div className="md:hidden flex flex-col bg-white dark:bg-roboGray text-gray-700 dark:text-gray-200 px-4 space-y-4">
          <AnimatedLink to="/home" children="Home" onclick={closeMobileMenu} />
          <AnimatedLink
            to="/about"
            children="About"
            onclick={closeMobileMenu}
          />
          <AnimatedLink
            to="/courses"
            children="Courses"
            onclick={closeMobileMenu}
          />
          <AnimatedLink
            to="/activities"
            children="Activities"
            onclick={closeMobileMenu}
          />
          <AnimatedLink to="/blog" children="Blog" onclick={closeMobileMenu} />
          <AnimatedLink
            to="/RobotShop"
            children="RObot Shop"
            onclick={closeMobileMenu}
          />
          <AnimatedLink
            to="/GSTEMI"
            children="G-STEMI"
            onclick={closeMobileMenu}
          />
        </div>
      )}
    </nav>
  );
};
export default Navbar;
