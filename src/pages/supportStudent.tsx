import React, { useEffect, useState } from "react";
import supportrobot from "../assets/robot-blank-sign-removebg-preview.png";

const StudentSupportPage = () => {
  const [visibleCards, setVisibleCards] = useState([false, false, false]);

  // Sponsorship options data
  const sponsorshipOptions = [
    {
      title: "Sponsor Our Students",
      description:
        "Help us provide educational opportunities to those in need.",
      buttonText: "Sponsor a Student",
      telegramLink: "https://t.me/yourtelegram",
      icon: "🎓",
    },
    {
      title: "Sponsor a Classroom",
      description:
        "Support an entire classroom of students with a one-time donation.",
      buttonText: "Sponsor a Classroom",
      telegramLink: "https://t.me/yourtelegram",
      icon: "🏫",
    },
    {
      title: "Corporate Sponsorship",
      description:
        "Become a corporate sponsor and support our educational initiatives.",
      buttonText: "Become a Corporate Sponsor",
      telegramLink: "https://t.me/yourtelegram",
      icon: "💼",
    },
  ];

  // Animate cards in one by one
  useEffect(() => {
    const timers = sponsorshipOptions.map((_, index) => {
      return setTimeout(() => {
        setVisibleCards((prev) => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, index * 300);
    });

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-br from-gray-900 to-blue-900 p-6 dark">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
            Sponsor Our Students
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Join us in empowering the next generation of innovators through
            robotics education
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Section: Image with Glow Effect */}
          {/* <div className="relative rounded-2xl overflow-hidden shadow-2xl"> */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex items-end">
              <div className="p-8 text-center w-full">
                <h2 className="text-4xl font-bold text-white mb-3">
                  Shape the Future
                </h2>
                <p className="text-blue-200 text-lg">
                  Your support makes innovation accessible to all
                </p>
              </div>
            </div>
            <div className="  rounded-2xl">
            <img
              src={supportrobot}
              alt="Student with robot"
              className="w-full h-full object-contain min-h-[600px] transform hover:scale-105 transition-transform duration-700"
            />
            {/* Floating elements */}
            <div className="absolute top-6 right-6 w-6 h-6 rounded-full bg-blue-500 animate-pulse"></div>
            <div className="absolute bottom-20 left-8 w-4 h-4 rounded-full bg-purple-500 animate-ping"></div>
          </div>

          {/* Right Section: Sponsorship Cards */}
          <div className="flex flex-col justify-center space-y-6">
            {sponsorshipOptions.map((option, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-xl transition-all duration-700 transform hover:scale-[1.02] hover:shadow-2xl ${
                  visibleCards[index]
                    ? "translate-x-0 opacity-100"
                    : "translate-x-20 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start">
                  <div className="text-3xl mr-4 text-blue-400">
                    {option.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {option.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm">
                      {option.description}
                    </p>
                    <a
                      href={option.telegramLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg transition-all duration-300 hover:from-blue-500 hover:to-purple-500 hover:shadow-lg group"
                    >
                      {option.buttonText}
                      <svg
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Additional Info */}
            <div className="mt-4 rounded-xl p-5 bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-700/30">
              <div className="flex items-center">
                <div className="text-2xl mr-3">✨</div>
                <div>
                  <h3 className="text-sm font-semibold text-blue-300 mb-1">
                    Your Impact
                  </h3>
                  <p className="text-blue-200 text-xs">
                    Every sponsorship provides resources, equipment, and
                    opportunities for students to explore robotics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-600/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-600/10 rounded-full blur-xl"></div>
      </div>
    </div>
  );
};

export default StudentSupportPage;
