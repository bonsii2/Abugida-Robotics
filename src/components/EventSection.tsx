// components/EventsSection.tsx
import { motion } from "framer-motion";
import EventCard from "./EventCart";
import codingcall from "../assets/roboticstrainer.jpg";
import image2 from "../assets/robofest.jpg";
import image3 from "../assets/summercamp.jpg";
import image4 from "../assets/wintertraning.jpg";

const EventsSection = () => {
  // Sample events data
  const events = [
    {
      id: 1,
      title:
        "Robotics & Coding call for trainees ( Registration Deadline July 12 2025 )",
      date: "June 15, 2023",
      time: "10:00 AM - 4:00 PM",
      location: "Abugida Innovation Center",
      description:
        "Build Innovative projects using Al and Robotics. Take part in different international tournaments and gain guidance to launch your startup ",
      image: codingcall,
    },
    {
      id: 2,
      title: "Robofest Ethiopia 2025",
      date: "June 22, 2023",
      time: "9:00 AM - 5:00 PM",
      location: "Tech Conference Hall",
      description:
        "Join us for an exhilarating day at Robofest Ethiopia 2025! This premier robotics competition will bring together innovators, creators, and enthusiasts from across the country to showcase their skills and creativity.",
      image: image2,
    },
    {
      id: 3,
      title: "Drone Racing Championship",
      date: "July 5, 2023",
      time: "1:00 PM - 6:00 PM",
      location: "City Sports Arena",
      description:
        "Registration for the 2024/2025 winter trainning season and participation in International Robotics Competitions at Abugida Partner Institutions.",
      image: image3,
    },
    {
      id: 4,
      title: "Robotics & Coding call for Trainees",
      date: "July 15, 2023",
      time: "11:00 AM - 3:00 PM",
      location: "Community Education Center",
      description:
        "TRAINNINGS DELIVERED â€¢ Robotics with arduino â€¢ Advanced Robotics with Al â€¢ Mobile App Development â€¢ Coding for kids â€¢ Robotics for kids â€¢ 3D modelling & 3D printing OPPORTUNITIES Compete at the International Robotics Championship, Michigan USA and get a chance to win a scholarship.",
      image: image4
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Upcoming Events
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join our exciting events and workshops to learn more about robotics,
            AI, and technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {events.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button className="px-6 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors">
            View All Events
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
