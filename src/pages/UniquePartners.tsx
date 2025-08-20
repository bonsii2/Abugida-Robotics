import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.jpg";
import robofest from "../assets/robofest.png";
import aau from "../assets/aau.png";
import abrihot from "../assets/abrehot.png";
import lawre from "../assets/lawrence.png";
import stemi from "../assets/stemi.png";
import avishkra from "../assets/avishkar.png";

const UniqueFeaturesPartners = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Check system preference or saved preference
  useEffect(() => {
    const isDark =
      localStorage.getItem("darkMode") === "true" ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches &&
        localStorage.getItem("darkMode") !== "false");
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  // Toggle dark/light mode
  
  // Unique features data
  const features = [
    {
      icon: "👨‍🏫",
      title: "Experienced and Qualified Instructors",
      description:
        "Our team of experienced and qualified instructors are passionate about STEM education and dedicated to fostering a love of learning in their students.",
    },
    {
      icon: "🏢",
      title: "State-of-the-Art Facilities",
      description:
        "We provide a well-equipped learning environment with cutting-edge technology to ensure a stimulating and enriching learning experience.",
    },
    {
      icon: "🔬",
      title: "Project-Based Learning",
      description:
        "We emphasize project-based learning, allowing students to apply their acquired knowledge and skills to solve real-world problems.",
    },
    {
      icon: "👥",
      title: "Collaborative Learning Environment",
      description:
        "We foster a collaborative learning environment where students can learn from each other, share ideas, and build teamwork skills.",
    },
  ];

  // Partners data
  const partners = [
    {
      id: 1,
      name: "TechCorp",
      logo: avishkra,
    },
    {
      id: 2,
      name: "EduTech",
      logo: robofest,
    },
    {
      id: 3,
      name: "InnovateCo",
      logo: aau,
    },
    {
      id: 4,
      name: "FutureLabs",
      logo: abrihot,
    },
    {
      id: 5,
      name: "STEMWorks",
      logo: lawre,
    },
    {
      id: 6,
      name: "LearnTech",
      logo: stemi,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 p-6 transition-colors duration-300">
     
     

      <div className="max-w-7xl mx-auto pt-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Abugida Robotics
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We combine innovation, expertise, and passion to deliver exceptional
            STEM education experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Section: What Makes Us Unique */}
          <div className="h-full">
            <h2 className="text-3xl font-bold mb-12 text-gray-800 dark:text-white text-center lg:text-left">
              What Makes Us{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Unique
              </span>
            </h2>

            <div className="space-y-3 h-full flex flex-col justify-center">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-xl cursor-pointer overflow-hidden border border-gray-100 dark:border-gray-700 h-25"
                >
                  {/* Animated border */}
                  <div className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-blue-500 to-purple-500 group-hover:h-full transition-all duration-500 opacity-70 group-hover:opacity-100 rounded-l-md"></div>

                  <div className="flex items-start transition-all duration-300">
                    <div className="flex-shrink-0 mr-5">
                      <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 transition-all duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-200">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section: Our Partners */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-12 text-gray-800 dark:text-white text-center lg:text-center">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Partners
              </span>
            </h2>

            <div className="relative h-96 w-100 rounded-xl">
              {/* Main company logo in center */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 animate-pulse-slow">
                <div className="bg-green-700 dark:bg-gray-800 p-2 rounded-full shadow-2xl">
                  <img
                    src={Logo}
                    alt="Abugida Robotics"
                    className="w-40 h-40 object-contain rounded-full"
                  />
                </div>
              </div>

              {/* Animated orbit rings */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-blue-200 dark:border-blue-900 rounded-full w-80 h-80 animate-spin-slow"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-purple-200 dark:border-purple-900 rounded-full w-64 h-64 animate-spin-slow reverse"></div>

              {/* Partner logos arranged in a circle with motion */}
              {partners.map((partner, index) => {
                const angle = index * (360 / partners.length) * (Math.PI / 180);
                const radius = 170; // Distance from center
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);

                return (
                  <div
                    key={partner.id}
                    className="absolute top-1/2 left-1/2 z-0 transition-all duration-700 hover:scale-125 hover:z-20"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                  >
                    <div className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-lime-500 dark:hover:bg-gray-400 border border-gray-100 dark:border-gray-700">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-20 h-20 object-contain"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 dark:text-gray-300 italic text-lg">
                We're proud to collaborate with industry leaders to deliver
                exceptional STEM education
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.05);
          }
        }
        @keyframes spin-slow {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        @keyframes spin-slow-reverse {
          from {
            transform: translate(-50%, -50%) rotate(360deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(0deg);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }
        .animate-spin-slow.reverse {
          animation: spin-slow-reverse 20s linear infinite;
        }
      `}</style> */}
    </div>
  );
};

export default UniqueFeaturesPartners;
