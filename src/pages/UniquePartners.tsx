import React from "react";
import Logo from "../assets/logo.jpg";
import robofest from "../assets/robofest.png";
import aau from "../assets/aau.png";
import abrihot from  "../assets/abrehot.png";
import lawre from "../assets/lawrence.png";
import stemi from "../assets/stemi.png";
import avishkra from "../assets/avishkar.png";

const UniqueFeaturesPartners = () => {
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

  // Main company logo
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Abugida Robotics
          </h1>
          <p className="text-gray-600 mt-2">
            Innovating STEM Education for the Future
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Section: What Makes Us Unique */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center lg:text-left">
              What Makes Us{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Unique
              </span>
            </h2>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-lg p-4 shadow-md transition-all duration-500 hover:scale-[1.02] hover:shadow-lg cursor-pointer overflow-hidden"
                >
                  {/* Animated border */}
                  <div className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-blue-500 to-purple-500 group-hover:h-full transition-all duration-500 opacity-70 group-hover:opacity-100 rounded-l-md"></div>

                  <div className="flex flex-col group-hover:flex-row group-hover:items-start transition-all duration-300">
                    <div className="flex-shrink-0 mb-2 group-hover:mb-0 group-hover:mr-4 transition-all duration-300">
                      <div className="text-3xl">{feature.icon}</div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 transition-all duration-300 group-hover:text-gray-700">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section: Our Partners */}
          <div className="m-20">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center lg:text-left">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Partners
              </span>
            </h2>

            <div className="relative h-80  rounded-xl p-6 ">
              {/* Main company logo in center */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-3 rounded-xl shadow-lg">
                  <img
                    src={Logo}
                    alt="Abugida Robotics"
                    className="w-32 h-32 object-contain "
                  />
                </div>
              </div>

              {/* Partner logos arranged in a circle */}
              {partners.map((partner, index) => {
                const angle = index * 60 * (Math.PI / 180); // 60 degrees between each logo
                const radius = 150; // Distance from center
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);

                return (
                  <div
                    key={partner.id}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 transition-all duration-500 hover:scale-110 hover:z-20 bg-blue-500"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                  >
                    <div className=" p-2 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:bg-white">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-20 h-20 object-contain "
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 italic text-sm">
                We're proud to collaborate with industry leaders to deliver
                exceptional STEM education
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniqueFeaturesPartners;
