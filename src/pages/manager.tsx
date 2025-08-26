import React, { useEffect, useRef, useState } from "react";
import { Users, Target, BookOpen, ArrowUp } from "lucide-react";
import ManagerImage from "../assets/Professional Portrait of Middle-Aged Man.png";

const ManagerSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 py-16 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Our Management Team
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Meet the dedicated professionals behind our operations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section: Manager Image with Animation */}
          <div className="relative flex justify-center">
            <div
              className={`transform transition-all duration-1000 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              {/* Image Container with Border */}
              <div className="relative rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                <img
                  src={ManagerImage}
                  alt="Tariku Fekadu - Manager"
                  className="w-full h-auto max-w-md object-cover"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>

              {/* Title under image */}
              <div className="text-center mt-6">
                <h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-2">
                  Tariku Fekadu
                </h3>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-0.5 bg-blue-500 mx-2"></div>
                  <span className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                    Manager
                  </span>
                  <div className="w-12 h-0.5 bg-blue-500 mx-2"></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  Assistant Professor
                </p>
              </div>
            </div>
          </div>

          {/* Right Section: Description */}
          <div className="space-y-6">
            {/* Role Highlight */}
            <div className="flex items-start mb-6">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                <Users className="text-blue-600 dark:text-blue-300" size={24} />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
                  Operational Leadership
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              </div>
            </div>

            {/* Description Content */}
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                Tariku Fekadu is our dedicated manager, responsible for
                overseeing the day-to-day operations of the organization. With
                his expertise in project management and his commitment to
                excellence, he ensures that our programs run smoothly and
                effectively.
              </p>

              {/* Expertise */}
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                  <Target className="mr-2" size={18} />
                  Key Responsibilities
                </h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Overseeing daily operations and program management</li>
                  <li>Ensuring operational excellence and efficiency</li>
                  <li>Strategic planning and implementation</li>
                  <li>Team leadership and coordination</li>
                </ul>
              </div>

              <p className="text-lg leading-relaxed">
                Tariku's leadership has been instrumental in helping us achieve
                our goals and expand our reach to serve more students. As an
                Assistant Professor, his academic background and experience have
                been invaluable in guiding the organization's strategic
                direction.
              </p>

              {/* Academic Background */}
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2 flex items-center">
                  <BookOpen className="mr-2" size={18} />
                  Academic Contribution
                </h4>
                <p className="text-sm">
                  Bringing academic rigor and research-based approaches to our
                  educational initiatives, ensuring the highest quality of
                  program delivery.
                </p>
              </div>

              <p className="text-lg leading-relaxed">
                His experience has been crucial in ensuring the successful
                implementation of our educational initiatives and maintaining
                our commitment to excellence in STEM education.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  100%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Program Success
                </div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  50+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Initiatives Led
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-blue-200/30 dark:bg-blue-800/20 rounded-full blur-xl"></div>
        <div className="absolute top-20 right-20 w-20 h-20 bg-purple-200/30 dark:bg-purple-800/20 rounded-full blur-xl"></div>
      </div>
    </div>
  );
};

export default ManagerSection;
