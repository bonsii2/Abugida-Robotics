// components/EventsSection.tsx
import { motion } from "framer-motion";
import EventCard from "./EventCart";

const EventsSection = () => {
  // Sample events data
  const events = [
    {
      id: 1,
      title: "Robotics Workshop",
      date: "June 15, 2023",
      time: "10:00 AM - 4:00 PM",
      location: "Abugida Innovation Center",
      description:
        "Hands-on workshop on building and programming your first robot. Perfect for beginners and enthusiasts.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    },
    {
      id: 2,
      title: "AI & Machine Learning Summit",
      date: "June 22, 2023",
      time: "9:00 AM - 5:00 PM",
      location: "Tech Conference Hall",
      description:
        "Learn about the latest advancements in AI and machine learning from industry experts.",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6",
    },
    {
      id: 3,
      title: "Drone Racing Championship",
      date: "July 5, 2023",
      time: "1:00 PM - 6:00 PM",
      location: "City Sports Arena",
      description:
        "Watch professional drone pilots compete in an exciting race through challenging obstacles.",
      image: "https://images.unsplash.com/photo-1513084779736-d6d66169c2d9",
    },
    {
      id: 4,
      title: "STEM Education Fair",
      date: "July 15, 2023",
      time: "11:00 AM - 3:00 PM",
      location: "Community Education Center",
      description:
        "Discover innovative STEM programs and resources for students of all ages.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
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
