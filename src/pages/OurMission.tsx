import React from "react";
import Logo from "../assets/logo.jpg";
import { Target, Eye, Goal, Sparkles } from "lucide-react";

const FancyMissionPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br md:py-16 from-blue-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-black dark:to-purple-900 py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12">
        {/* Logo Section with Animated Border */}
        <div className="relative w-full lg:w-2/5 flex justify-center">
          <div className="relative">
            {/* Animated border container */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full animate-spin-slow opacity-70"></div>

            {/* Glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full blur-xl opacity-30 animate-pulse"></div>

            {/* Logo image */}
            <div className="relative rounded-full p-2 bg-white dark:bg-gray-800 shadow-2xl">
              <img
                src={Logo}
                className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-white dark:border-gray-700 shadow-lg"
                alt="Abugida Robotics logo"
              />
            </div>

            {/* Floating elements around logo */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce opacity-80"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-bounce opacity-80 delay-300"></div>
            <div className="absolute -top-6 left-10 w-4 h-4 bg-pink-500 rounded-full animate-bounce opacity-80 delay-700"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-3/5 space-y-8">
          {/* Mission Card */}
          <div className="relative group">
            {/* Animated border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-border-glow"></div>

            <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-100 dark:border-gray-700">
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                  <Target
                    className="text-blue-600 dark:text-blue-300"
                    size={24}
                  />
                </div>
                <h1 className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Our Mission
                </h1>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quibusdam, iure reprehenderit voluptatum nisi facilis itaque
                repellat unde quo nulla, veniam accusantium illo quisquam fugit
                blanditiis eum a perspiciatis.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="relative group">
            {/* Animated border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-border-glow"></div>

            <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-100 dark:border-gray-700">
              <div className="flex items-start mb-4">
                <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full mr-4">
                  <Eye
                    className="text-purple-600 dark:text-purple-300"
                    size={24}
                  />
                </div>
                <h1 className="font-bold text-2xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Our Vision
                </h1>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quibusdam, iure reprehenderit voluptatum nisi facilis itaque
                repellat unde quo nulla, veniam accusantium illo quisquam fugit
                blanditiis eum a perspiciatis.
              </p>
            </div>
          </div>

          {/* Goal Card */}
          <div className="relative group">
            {/* Animated border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-border-glow"></div>

            <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-100 dark:border-gray-700">
              <div className="flex items-start mb-4">
                <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full mr-4">
                  <Goal
                    className="text-green-600 dark:text-green-300"
                    size={24}
                  />
                </div>
                <h1 className="font-bold text-2xl bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  Our Goal
                </h1>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quibusdam, iure reprehenderit voluptatum nisi facilis itaque
                repellat unde quo nulla, veniam accusantium illo quisquam fugit
                blanditiis eum a perspiciatis.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-400/20 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-400/20 rounded-full blur-xl"></div>

      {/* Add animation styles to your global CSS */}
      <style>
        {`
          @keyframes spin-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes border-glow {
            0%, 100% { opacity: 0.25; }
            50% { opacity: 0.5; }
          }
          .animate-spin-slow {
            animation: spin-slow 10s linear infinite;
          }
          .animate-border-glow {
            animation: border-glow 2s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default FancyMissionPage;
