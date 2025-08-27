import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Calendar,
  MapPin,
  Heart,
  Award,
} from "lucide-react";



const ActivitiesPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  // Sample activity data with images
  const activities = [
    {
      id: 1,
      category: "2019 summer camp",
      year: 2019,
      image:
        "https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Robotics Fundamentals",
      description: "Students learning basic robotics concepts",
    },
    {
      id: 2,
      category: "2019 summer camp",
      year: 2019,
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Team Building",
      description: "Group activities and team projects",
    },
    {
      id: 3,
      category: "2020 summer camp",
      year: 2020,
      image:
        "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Virtual Learning",
      description: "Adapting to online education during pandemic",
    },
    {
      id: 4,
      category: "2020 summer camp",
      year: 2020,
      image:
        "https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Remote Projects",
      description: "Students working on remote robotics projects",
    },
    {
      id: 5,
      category: "2021 summer camp",
      year: 2021,
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Hybrid Learning",
      description: "Combining in-person and online sessions",
    },
    {
      id: 6,
      category: "2021 summer camp",
      year: 2021,
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Hands-on Workshops",
      description: "Practical robotics workshops",
    },
    {
      id: 7,
      category: "2022 summer camp",
      year: 2022,
      image:
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Advanced Programming",
      description: "Learning advanced coding techniques",
    },
    {
      id: 8,
      category: "2022 summer camp",
      year: 2022,
      image:
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Competition Prep",
      description: "Preparing for robotics competitions",
    },
    {
      id: 9,
      category: "2023 summer camp",
      year: 2023,
      image:
        "https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "AI Integration",
      description: "Incorporating AI into robotics projects",
    },
    {
      id: 10,
      category: "2023 summer camp",
      year: 2023,
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Innovation Showcase",
      description: "Students presenting their innovations",
    },
    {
      id: 11,
      category: "Field research visit",
      year: 2022,
      image:
        "https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Industry Visit",
      description: "Visiting tech companies for research",
    },
    {
      id: 12,
      category: "Field research visit",
      year: 2023,
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "University Collaboration",
      description: "Research collaboration with universities",
    },
    {
      id: 13,
      category: "Covid 19 projects",
      year: 2020,
      image:
        "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Health Tech Solutions",
      description: "Developing solutions during pandemic",
    },
    {
      id: 14,
      category: "Covid 19 projects",
      year: 2021,
      image:
        "https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Remote Learning Tools",
      description: "Creating tools for remote education",
    },
    {
      id: 15,
      category: "Robofest Ethiopia",
      year: 2022,
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "National Competition",
      description: "Annual robotics festival in Ethiopia",
    },
    {
      id: 16,
      category: "Robofest Ethiopia",
      year: 2023,
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Innovation Challenge",
      description: "Students competing in robotics challenges",
    },
  ];

  const filterButtons = [
    { id: "all", label: "All Activities", icon: <Calendar size={16} /> },
    {
      id: "2019 summer camp",
      label: "2019 Summer Camp",
      icon: <Calendar size={16} />,
    },
    {
      id: "2020 summer camp",
      label: "2020 Summer Camp",
      icon: <Calendar size={16} />,
    },
    {
      id: "2021 summer camp",
      label: "2021 Summer Camp",
      icon: <Calendar size={16} />,
    },
    {
      id: "2022 summer camp",
      label: "2022 Summer Camp",
      icon: <Calendar size={16} />,
    },
    {
      id: "2023 summer camp",
      label: "2023 Summer Camp",
      icon: <Calendar size={16} />,
    },
    {
      id: "Field research visit",
      label: "Field Research",
      icon: <MapPin size={16} />,
    },
    {
      id: "Covid 19 projects",
      label: "Covid-19 Projects",
      icon: <Heart size={16} />,
    },
    {
      id: "Robofest Ethiopia",
      label: "Robofest Ethiopia",
      icon: <Award size={16} />,
    },
  ];

  const filteredActivities =
    activeFilter === "all"
      ? activities
      : activities.filter((activity) => activity.category === activeFilter);

  const displayedActivities = showAll
    ? filteredActivities
    : filteredActivities.slice(0, 8);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Our Journey Through Years
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Capturing memorable moments from our robotics adventures and
            educational journey since 2019
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filterButtons.map((button) => (
            <button
              key={button.id}
              onClick={() => {
                setActiveFilter(button.id);
                setShowAll(false);
              }}
              className={`flex items-center px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === button.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700 shadow-md"
              }`}
            >
              {button.icon}
              <span className="ml-2">{button.label}</span>
            </button>
          ))}
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {displayedActivities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                  {activity.year}
                </div>
              </div>
              {/* <div className="p-4">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-1">
                  {activity.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {activity.description}
                </p>
                <div className="mt-2 text-xs text-blue-600 dark:text-blue-400 font-medium">
                  {activity.category}
                </div>
              </div> */}
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {filteredActivities.length > 8 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center mx-auto"
            >
              {showAll ? (
                <>
                  <ChevronUp className="mr-2" size={20} />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="mr-2" size={20} />
                  Show More ({filteredActivities.length - 8} more)
                </>
              )}
            </button>
          </div>
        )}

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">
              5+
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              Years of Activities
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <div className="text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400">
              8
            </div>
            <div className="text-gray-600 dark:text-gray-300">Categories</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <div className="text-2xl md:text-3xl font-bold text-green-600 dark:text-green-400">
              1000+
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              Students Reached
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <div className="text-2xl md:text-3xl font-bold text-red-600 dark:text-red-400">
              16+
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              Projects Completed
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesPage;
