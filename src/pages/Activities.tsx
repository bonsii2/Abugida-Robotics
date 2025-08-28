import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Calendar,
  MapPin,
  Heart,
  Award,
} from "lucide-react";
import smc20191 from  "../assets/2019-1.jpg"
import smc20192 from  "../assets/2019-2.jpg"
import smc20193 from  "../assets/2019-3.jpg"
import smc20194 from  "../assets/2019-4.jpg"
import smc20211 from  "../assets/2021-1.jpg"
import smc20212 from  "../assets/2021-2.jpg"
import smc20213 from  "../assets/2021-3.jpg"
import smc20214 from  "../assets/2021-4.jpg"
import smc20215 from  "../assets/2021-4.jpg"
import smc20231 from  "../assets/2023-1.jpg"
import smc20232 from  "../assets/2023-2.jpg"
import smc20233 from  "../assets/2023-3.jpg"
import smc20234 from  "../assets/2023-4.jpg"
import smc20235 from  "../assets/2023-5.jpg"
import smc20236 from  "../assets/2023-6.jpg"
import research1 from "../assets/research-1.jpg"
import research2 from "../assets/research-2.jpg"
import research3 from "../assets/research-3.jpg"
import research4 from "../assets/research-4.jpg"
import research5 from "../assets/research-5.jpg"
import research6 from "../assets/research-6.jpg"
import covid1 from "../assets/covid-1.jpg"
import covid2 from "../assets/covid-2.jpg"
import covid3 from "../assets/covid-3.jpg"
import covid4 from "../assets/covid-4.jpg"
import covid5 from "../assets/covid-5.jpg"
import covid6 from "../assets/covid-6.jpg"
import covid7 from "../assets/covid-7.jpg"
import robofest1 from "../assets/robofest-1.jpg"
import robofest2 from "../assets/robofest-2.jpg"
import robofest3 from "../assets/robofest-3.jpg"
import robofest4 from "../assets/robofest-4.jpg"
import robofest5 from "../assets/robofest-5.jpg"
import robofest6 from "../assets/robofest-6.jpg"
import robofest7 from "../assets/robofest-7.jpg"
import robofest8 from "../assets/robofest-8.jpg"









const ActivitiesPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  // Sample activity data with images
  const activities = [
    {
      id: 1,
      category: "2019 summer camp",
      year: 2019,
      image: smc20191,
      title: "Robotics Fundamentals",
      description: "Students learning basic robotics concepts",
    },
    {
      id: 2,
      category: "2019 summer camp",
      year: 2019,
      image: smc20192,
      title: "Team Building",
      description: "Group activities and team projects",
    },
    {
      id: 3,
      category: "2019 summer camp",
      year: 2019,
      image: smc20193,
      title: "Team Building",
      description: "Group activities and team projects",
    },
    {
      id: 4,
      category: "2019 summer camp",
      year: 2019,
      image: smc20194,
      title: "Team Building",
      description: "Group activities and team projects",
    },

    {
      id: 5,
      category: "2020 summer camp",
      year: 2020,
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Virtual Learning",
      description: "Adapting to online education during pandemic",
    },
    {
      id: 6,
      category: "2020 summer camp",
      year: 2020,
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Remote Projects",
      description: "Students working on remote robotics projects",
    },
    {
      id: 7,
      category: "2021 summer camp",
      year: 2021,
      image: smc20211,
      title: "Hybrid Learning",
      description: "Combining in-person and online sessions",
    },
    {
      id: 8,
      category: "2021 summer camp",
      year: 2021,
      image: smc20212,
      title: "Hands-on Workshops",
      description: "Practical robotics workshops",
    },
    {
      id: 9,
      category: "2021 summer camp",
      year: 2021,
      image: smc20213,
      title: "Advanced Programming",
      description: "Learning advanced coding techniques",
    },
    {
      id: 10,
      category: "2021 summer camp",
      year: 2021,
      image: smc20214,
      title: "Competition Prep",
      description: "Preparing for robotics competitions",
    },
    {
      id: 11,
      category: "2021 summer camp",
      year: 2021,
      image: smc20215,
      title: "AI Integration",
      description: "Incorporating AI into robotics projects",
    },
    {
      id: 12,
      category: "2023 summer camp",
      year: 2023,
      image: smc20231,
      title: "Innovation Showcase",
      description: "Students presenting their innovations",
    },
    {
      id: 13,
      category: "2023 summer camp",
      year: 2023,
      image: smc20232,
      title: "Industry Visit",
      description: "Visiting tech companies for research",
    },
    {
      id: 14,
      category: "2023 summer camp",
      year: 2023,
      image: smc20233,
      title: "University Collaboration",
      description: "Research collaboration with universities",
    },
    {
      id: 15,
      category: "2023 summer camp",
      year: 2023,
      image: smc20234,
      title: "Health Tech Solutions",
      description: "Developing solutions during pandemic",
    },
    {
      id: 16,
      category: "2023 summer camp",
      year: 2023,
      image: smc20235,
      title: "Remote Learning Tools",
      description: "Creating tools for remote education",
    },
    {
      id: 15,
      category: "2023 summer camp",
      year: 2023,
      image: smc20236,
      title: "National Competition",
      description: "Annual robotics festival in Ethiopia",
    },
    {
      id: 16,
      category: "2020 summer camp",
      year: 2023,
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Innovation Challenge",
      description: "Students competing in robotics challenges",
    },
    {
      id: 17,
      category: "Field research visit",
      year: 2023,
      image: research1,
      title: "National Competition",
      description: "Annual robotics festival in Ethiopia",
    },
    {
      id: 18,
      category: "Field research visit",
      year: 2023,
      image: research2,
      title: "National Competition",
      description: "Annual robotics festival in Ethiopia",
    },
    {
      id: 19,
      category: "Field research visit",
      year: 2023,
      image: research3,
      title: "National Competition",
      description: "Annual robotics festival in Ethiopia",
    },
    {
      id: 20,
      category: "Field research visit",
      year: 2023,
      image: research4,
      title: "National Competition",
      description: "Annual robotics festival in Ethiopia",
    },
    {
      id: 21,
      category: "Field research visit",
      year: 2023,
      image: research5,
      title: "National Competition",
      description: "Annual robotics festival in Ethiopia",
    },
    {
      id: 22,
      category: "Field research visit",
      year: 2023,
      image: research6,
      title: "National Competition",
      description: "Annual robotics festival in Ethiopia",
    },
    {
      id: 21,
      category: "Field research visit",
      year: 2023,
      image: research5,
      title: "National Competition",
      description: "Annual robotics festival in Ethiopia",
    },
    {
      id: 22,
      category: "Field research visit",
      year: 2023,
      image: research5,
      title: "National Competition",
      description: "Annual robotics festival in Ethiopia",
    },
    {
      id: 23,
      category: "Field research visit",
      year: 2023,
      image: research5,
      title: "National Competition",
      description: "Annual robotics festival in Ethiopia",
    },
    {
      id: 21,
      category: "Field research visit",
      year: 2023,
      image: research5,
      title: "National Competition",
      description: "Annual robotics festival in Ethiopia",
    },
    {
      id: 23,
      category: "Covid 19 projects",
      year: 2023,
      image: covid1,
      title: "National Competition",
      description: "Annual robotics festival in Ethiopia",
    },
    {
      id: 24,
      category: "Covid 19 projects",
      year: 2023,
      image: covid2,
      title: "National Competition",
      description: "Annual robotics festival in Ethiopia",
    },
    {
      id: 25,
      category: "Covid 19 projects",
      year: 2023,
      image: covid3,
      title: "National Competition",
      description: "Annual robotics festival in Ethiopia",
    },
    {
      id: 26,
      category: "Covid 19 projects",
      year: 2023,
      image: covid4,
      title: "National Competition",
      description: "Annual robotics festival in Ethiopia",
    },
    {
      id: 27,
      category: "Covid 19 projects",
      year: 2023,
      image: covid5,
      title: "National Competition",
      description: "Annual robotics festival in Ethiopia",
    },
    {
      id: 28,
      category: "Covid 19 projects",
      year: 2023,
      image: covid6,
      title: "National Competition",
      description: "Annual robotics festival in Ethiopia",
    },
    {
      id: 29,
      category: "Covid 19 projects",
      year: 2023,
      image: covid7,
      title: "National Competition",
      description: "Annual robotics festival in Ethiopia",
    },
    {
      id: 30,
      category: "Robofest Ethiopia",
      year: 2023,
      image: robofest1,
      title: "National Competition",
      description: "Annual robotics festival in Ethiopia",
    },
    {
      id: 31,
      category: "Robofest Ethiopia",
      year: 2023,
      image: robofest2,
      title: "National Competition",
      description: "Annual robotics festival in Ethiopia",
    },
    {
      id: 32,
      category: "Robofest Ethiopia",
      year: 2023,
      image: robofest3,
      title: "National Competition",
      description: "Annual robotics festival in Ethiopia",
    },
    {
      id: 33,
      category: "Robofest Ethiopia",
      year: 2023,
      image: robofest4,
      title: "National Competition",
      description: "Annual robotics festival in Ethiopia",
    },
    {
      id: 34,
      category: "Robofest Ethiopia",
      year: 2023,
      image: robofest5,
      title: "National Competition",
      description: "Annual robotics festival in Ethiopia",
    },
    {
      id: 35,
      category: "Robofest Ethiopia",
      year: 2023,
      image: robofest6,
      title: "National Competition",
      description: "Annual robotics festival in Ethiopia",
    },
    {
      id: 36,
      category: "Robofest Ethiopia",
      year: 2023,
      image: robofest7,
      title: "National Competition",
      description: "Annual robotics festival in Ethiopia",
    },
    {
      id: 37,
      category: "Robofest Ethiopia",
      year: 2023,
      image: robofest8,
      title: "National Competition",
      description: "Annual robotics festival in Ethiopia",
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
