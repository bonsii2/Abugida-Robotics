import React from "react";
import { Award, BookOpen, Users, Brain, Sparkles } from "lucide-react";
import founderIMage from "../assets/Confident Elegance in Portrait Style (1).png";

const FounderSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-45 via-purple-45 to-pink-45 dark:from-gray-900 dark:via-black dark:to-gray-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Our Leadership
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Meet the visionary behind Abugida Robotics and Technology Center
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section: Founder Image with Animations */}
          <div className="relative flex justify-center">
            {/* Main Image Container */}
            <div className="relative z-10">
              {/* Animated border */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full animate-spin-slow opacity-70"></div>

              {/* Glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 rounded-full blur-xl opacity-50"></div>

              {/* Image */}
              <div className="relative  rounded-2xl overflow-hidden border-4 border-white rounded-full dark:border-gray-800 shadow-2xl">
                <img
                  src={founderIMage}
                  alt="Mihiret Walga - Founder and CEO"
                  className="w-full h-84 max-w-sm rounded-full object-cover transform hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center animate-float">
              <Award className="text-white" size={20} />
            </div>
            <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center animate-float delay-1000">
              <BookOpen className="text-white" size={18} />
            </div>
            <div className="absolute top-1/2 -right-8 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center animate-float delay-2000">
              <Brain className="text-white" size={16} />
            </div>

            {/* Title under image */}
            <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="text-center">
                <h3 className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Founder and CEO
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Mihiret Walga
                </p>
              </div>
            </div>
          </div>

          {/* Right Section: Description */}
          <div className="space-y-6">
            {/* Name and Title */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">
                Mihiret Walga
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-4"></div>
              <p className="text-xl text-purple-600 dark:text-purple-400 font-semibold">
                Founder and CEO of Abugida Robotics
              </p>
            </div>

            {/* Description Content */}
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <p className="leading-relaxed">
                With over{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  9 years of experience
                </span>{" "}
                in the education industry, Mihiret is passionate about providing
                quality education in the field of robotics and technology to
                underserved communities.
              </p>

              {/* Education */}
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                  <BookOpen className="mr-2" size={18} />
                  Education
                </h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Master's degree in Mechanical Engineering</li>
                  <li>Bachelor's degree in Health Officer (H.O.)</li>
                  <li>Certified robotics and STEM trainer</li>
                </ul>
              </div>

              <p className="leading-relaxed">
                Under her leadership, Abugida Robotics and Technology Center has
                grown to reach many students, from children to high school, and
                has made a{" "}
                <span className="font-semibold text-purple-600 dark:text-purple-400">
                  significant impact
                </span>{" "}
                in the lives of many.
              </p>

              {/* Programs */}
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2 flex items-center">
                  <Sparkles className="mr-2" size={18} />
                  Programs Offered
                </h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span className="bg-white dark:bg-gray-800 px-2 py-1 rounded">
                    Robotics
                  </span>
                  <span className="bg-white dark:bg-gray-800 px-2 py-1 rounded">
                    STEM for Kids
                  </span>
                  <span className="bg-white dark:bg-gray-800 px-2 py-1 rounded">
                    3D Modeling
                  </span>
                  <span className="bg-white dark:bg-gray-800 px-2 py-1 rounded">
                    ROBOMED
                  </span>
                  <span className="bg-white dark:bg-gray-800 px-2 py-1 rounded">
                    OOP
                  </span>
                  <span className="bg-white dark:bg-gray-800 px-2 py-1 rounded">
                    Innovation Workshops
                  </span>
                </div>
              </div>

              <p className="leading-relaxed">
                Mihiret's dedication and expertise have been instrumental in the
                organization's success, as it continues to{" "}
                <span className="font-semibold text-pink-600 dark:text-pink-400">
                  inspire and empower
                </span>{" "}
                the next generation of innovators and technologists.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  9+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  1000+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Students Reached
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">
                  6+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Programs
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add animation styles to your global CSS */}
      <style>
        {`
          @keyframes spin-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          .animate-spin-slow {
            animation: spin-slow 15s linear infinite;
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default FounderSection;
