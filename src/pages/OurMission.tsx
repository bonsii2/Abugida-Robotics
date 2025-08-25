import React from "react";
import { Target, Eye, Goal } from "lucide-react";

const MissionSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Our Mission & Vision
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Driving innovation through robotics and technology education
          </p>
        </div>

        {/* Main Content Container */}
        <div className="relative flex items-center justify-center min-h-[600px]">
          {/* Central Logo Container with Gradient Border */}
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1 shadow-2xl">
            <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center p-8">
              {/* Logo Content */}
              <div className="text-center">
                <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  ARTC
                </div>
                <h2 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white">
                  Abugida Robotics and Technology Center
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  Fueled by a passion for robotics and technology
                </p>
              </div>
            </div>
          </div>

          {/* Circular Content Items */}
          <div className="absolute inset-0">
            {/* Mission Card */}
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-100 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border-2 border-blue-200 dark:border-blue-700 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                  <Target
                    className="text-blue-600 dark:text-blue-300"
                    size={24}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Our mission is to cultivate a diverse and inclusive learning
                environment where students can discover the wonders of robotics,
                coding, and programming. We aim to ignite their curiosity,
                nurture their creativity, and equip them with the necessary
                tools to become the future pioneers of technology.
              </p>
            </div>

            {/* Vision Card */}
            <div className="absolute left-1 w-80 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border-2 border-purple-200 dark:border-purple-700 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start mb-4">
                <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full mr-4">
                  <Eye
                    className="text-purple-600 dark:text-purple-300"
                    size={24}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                We envision a world where technology is not a barrier, but
                rather a bridge that connects individuals and communities.
                Through our interactive programs and workshops, we strive to
                bridge the digital divide and empower individuals to become
                responsible and innovative users of technology.
              </p>
            </div>

            {/* Goal Card */}
            <div className="absolute  right-3   w-64 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border-2 border-green-200 dark:border-green-700 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start mb-4">
                <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full mr-4">
                  <Goal
                    className="text-green-600 dark:text-green-300"
                    size={24}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Our Goal
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Our goal is to foster a thriving community of
                technologically-empowered individuals who can harness the power
                of robotics and coding to drive innovation and solve real-world
                challenges. We are committed to creating a nurturing environment
                where students can explore their passions and unlock their full
                potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
