import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Cpu,
  Code,
  Atom,
  Zap,
  Brain,
  Microscope,
} from "lucide-react";

const InstructorsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Instructor data
  const instructors = [
    {
      id: 1,
      name: "Tesfaye Asefa",
      specialty: "Robotics",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description:
        "Tesfaye holds a Bachelors degree in Electrical Engineering and a Masters degree in Computer Science. With over 7 years of experience in robotics and STEM education, he is passionate about inspiring students to explore the world of technology.",
      icon: <Cpu className="text-blue-600" size={20} />,
    },
    {
      id: 2,
      name: "Alemnesh Kassahun",
      specialty: "Programming",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description:
        "Alemnesh specializes in Object-Oriented Programming with 5 years of teaching experience. She holds a Masters in Software Engineering and loves making coding accessible to beginners.",
      icon: <Code className="text-purple-600" size={20} />,
    },
    {
      id: 3,
      name: "Dawit Mekonnen",
      specialty: "3D Modeling",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description:
        "With a background in Industrial Design and 6 years of experience, Dawit brings complex 3D concepts to life. He's certified in multiple CAD software platforms.",
      icon: <Atom className="text-green-600" size={20} />,
    },
    {
      id: 4,
      name: "Eyerusalem Teshome",
      specialty: "STEM Education",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654856?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description:
        "Eyerusalem holds a PhD in Education Technology and has 8 years of experience developing STEM curricula. She's passionate about making science engaging for all ages.",
      icon: <Microscope className="text-red-600" size={20} />,
    },
    {
      id: 5,
      name: "Solomon Getachew",
      specialty: "Electronics",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description:
        "Solomon is an Electronics Engineer with 9 years of experience in circuit design and embedded systems. He loves teaching students how to bring their ideas to life through electronics.",
      icon: <Zap className="text-yellow-600" size={20} />,
    },
    {
      id: 6,
      name: "Marta Haile",
      specialty: "AI & Machine Learning",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description:
        "Marta specializes in Artificial Intelligence and holds a Masters in Data Science. With 6 years of experience, she makes complex AI concepts understandable and exciting.",
      icon: <Brain className="text-pink-600" size={20} />,
    },
  ];

  const slidesToShow = 4;
  const totalSlides = Math.ceil(instructors.length / slidesToShow);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const visibleInstructors = instructors.slice(
    currentSlide * slidesToShow,
    currentSlide * slidesToShow + slidesToShow
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Our Expert Instructors
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Meet the passionate educators who bring technology to life
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:bg-blue-100 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            <ChevronLeft
              className="text-blue-600 dark:text-blue-400"
              size={24}
            />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:bg-blue-100 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            <ChevronRight
              className="text-blue-600 dark:text-blue-400"
              size={24}
            />
          </button>

          {/* Instructors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {visibleInstructors.map((instructor) => (
              <div
                key={instructor.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md">
                    {instructor.icon}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                    {instructor.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
                    {instructor.specialty}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {instructor.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-12 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-blue-600 w-6"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              6+
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              Expert Instructors
            </div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              40+
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              Years Combined Experience
            </div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              1000+
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              Students Taught
            </div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
            <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">
              6+
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              Specializations
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-blue-200/30 dark:bg-blue-800/20 rounded-full blur-xl"></div>
      <div className="absolute top-20 right-20 w-20 h-20 bg-purple-200/30 dark:bg-purple-800/20 rounded-full blur-xl"></div>
    </div>
  );
};

export default InstructorsSection;
