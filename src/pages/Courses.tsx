import React from "react";
import {
  Brain,
  Smartphone,
  Cpu,
  Code,
  
  MessageCircle,
  ArrowRight,
  Star,
  Clock,
  Users,
} from "lucide-react";

const CoursesPage = () => {
  const courses = [
    {
      id: 1,
      title: "Introduction to AI",
      icon: <Brain className="text-blue-600" size={24} />,
      description: "Robotics Engineering and Artificial intelligence diploma",
      duration: "12 weeks",
      level: "Beginner",
      students: "1.2k",
      rating: "4.9",
      telegramLink: "https://t.me/yourtelegram",
    },
    {
      id: 2,
      title: "Flutter Development",
      icon: <Smartphone className="text-purple-600" size={24} />,
      description:
        "Flutter and Dart development for building iOS/Android apps with Machine learning integration",
      duration: "10 weeks",
      level: "Intermediate",
      students: "890",
      rating: "4.8",
      telegramLink: "https://t.me/yourtelegram",
    },
    {
      id: 3,
      title: "Raspberry Pi & IoT",
      icon: <Cpu className="text-green-600" size={24} />,
      description: "The complete Raspberry Pi bootcamp with IoT integration",
      duration: "8 weeks",
      level: "Intermediate",
      students: "650",
      rating: "4.7",
      telegramLink: "https://t.me/yourtelegram",
    },
    {
      id: 4,
      title: "Full Stack Web Development",
      icon: <Code className="text-red-600" size={24} />,
      description:
        "HTML, CSS, JavaScript, and modern frameworks complete web development course",
      duration: "14 weeks",
      level: "Beginner",
      students: "2.1k",
      rating: "4.9",
      telegramLink: "https://t.me/yourtelegram",
    },
    {
      id: 5,
      title: "Python & AI",
      icon: <Code className="text-yellow-600" size={24} />,
      description:
        "Python programming from beginners to expert with AI, Data Science, Machine Learning, Deep Learning, and Natural Language Processing",
      duration: "16 weeks",
      level: "All Levels",
      students: "3.5k",
      rating: "4.95",
      telegramLink: "https://t.me/yourtelegram",
    },
  ];

  return (
    <div
      className="min-h-screen py-16 px-4 relative bg-white dark:bg-black"
      
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Our New Courses
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto drop-shadow-md">
            Discover cutting-edge technology courses designed to boost your
            skills and career
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Course Header with Icon */}
              <div
                className="relative h-40 p-6"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Overlay for header */}
                <div className="absolute inset-0 bg-blue-900/70"></div>

                <div className="absolute top-6 right-6 bg-white/20 p-3 rounded-full backdrop-blur-sm">
                  {course.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mt-8 relative z-10">
                  {course.title}
                </h3>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500"></div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {course.description}
                </p>

                {/* Course Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="mr-2" size={16} />
                    {course.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="mr-2" size={16} />
                    {course.students} students
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-2">Level:</span>
                    <span className="font-semibold text-blue-600">
                      {course.level}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Star className="mr-1 text-yellow-500" size={16} />
                    {course.rating}
                  </div>
                </div>

                {/* Register Button */}
                <a
                  href={course.telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:from-blue-700 hover:to-purple-700 flex items-center justify-center group/button shadow-lg"
                >
                  <MessageCircle className="mr-2" size={20} />
                  Register on Telegram
                  <ArrowRight
                    className="ml-2 group-hover/button:translate-x-1 transition-transform"
                    size={16}
                  />
                </a>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/50 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 rounded-2xl p-8 text-center text-white backdrop-blur-md bg-black/50 border border-white/20">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Start Your Learning Journey Today
          </h2>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers with
            our comprehensive technology courses
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <Users className="text-white" size={24} />
              </div>
              <div className="text-2xl font-bold">5,000+</div>
              <div className="text-gray-200">Active Students</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <Star className="text-white" size={24} />
              </div>
              <div className="text-2xl font-bold">4.8/5</div>
              <div className="text-gray-200">Average Rating</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <Clock className="text-white" size={24} />
              </div>
              <div className="text-2xl font-bold">100+</div>
              <div className="text-gray-200">Hours of Content</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-400/20 rounded-full blur-xl"></div>
    </div>
  );
};

export default CoursesPage;
