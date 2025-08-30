import { motion } from "framer-motion";
import AnimatedButton from "../components/Button";
import { Calendar, Clock, MapPin, Bookmark } from "lucide-react";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
}

interface EventCardProps {
  event: Event;
  index: number;
}

const EventCard = ({ event, index }: EventCardProps) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 h-full flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Upcoming
        </div>
      </div>

      {/* Content Section - Flex column for proper spacing */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Header with Title and Date */}
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-2 flex-grow mr-4">
            {event.title}
          </h3>
          <div className="text-right flex-shrink-0">
            <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm">
              {event.date}
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-xs">
              {event.time}
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
          <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
          <span className="text-sm line-clamp-1">{event.location}</span>
        </div>

        {/* Description with limited height and scroll */}
        <div className="mb-6 flex-grow overflow-hidden">
          <p className="text-gray-700 dark:text-gray-400 text-sm line-clamp-3">
            {event.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-auto">
          <AnimatedButton
            variant="primary"
            onClick={() => console.log(`Join event: ${event.title}`)}
            size="sm"
            className="flex-shrink-0"
          >
            Join Event
          </AnimatedButton>

          <button className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2">
            <Bookmark className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
