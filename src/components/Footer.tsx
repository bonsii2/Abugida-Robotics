import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedLink from "./AnimatedLink";

const Footer = () => {
  return (
    <footer className="bg-roboDark dark:bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-gold">
              Abugida Robotics
            </h3>
            <p className="text-gray-300 mb-4">
              Empowering the next generation of innovators through robotics and
              STEM education. We provide cutting-edge courses and activities to
              inspire young minds.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-gold transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-gold transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-gold transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-gold transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                {" "}
                <AnimatedLink to="/" children="home" />
              </li>
              <li>
                <AnimatedLink to="/about" children="About us " />
              </li>
              <li>
                <AnimatedLink to="/courses" children="courses" />
              </li>
              <li>
                <AnimatedLink to="/activities" children="activities" />
              </li>
              <li>
                <AnimatedLink to="/blog" children="Blogs" />
              </li>
              <li>
                <AnimatedLink to="/gstemi" children="G-STEMI" />
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex-col items-start">
                <span className="text-gray-300 flex">
                  <MapPin className="mt-1 mr-3 text-red-600" size={18} />
                  Winget Traffic Sefer, Addis Ababa, Ethiopia
                </span>
                <span className="text-gray-300 flex">
                  <MapPin className="mt-1 mr-3 text-red-600" size={18} />
                  4kilo, Abrehot library, Addis Ababa, Ethiopia
                </span>

                <span className="text-gray-300 flex">
                  <MapPin className="mt-1 mr-3 text-red-600" size={18} />
                  Bolebulbula, Kilimanjaro Trading Plc, Addis Ababa, Ethiopia
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3 text-gold" size={18} />
                <span className="text-gray-300">+251 91 145 0969</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-3 text-gold" size={18} />
                <span className="text-gray-300">abugidarobotics@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Abugida Robotics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
