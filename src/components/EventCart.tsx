import {motion} from "framer-motion";
import AnimatedButton from "../components/Button";

interface Event {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    image: string;
}

interface EventCartProps {
    event: Event;
    index: number;
}
const EventCart = ({event, index}: EventCartProps) => {
    return (
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-7000"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute top-4 right-4 bg-blue-600text-white px-3 py-1 rounded-full text-sm font-semibold">
            upcoming
          </div>
        </div>
        <div className="p-6 ">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {event.title}
            </h3>
            <div className="text-right">
              <p className="text-blue-600 dark:text-blue-400 font-semibold">
                {event.date}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {event.time}
              </p>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-2 flex items-center ">
            <svg
              className="w-4 h-4 mr-2 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 0 016 0z"
              />
            </svg>
            {event.location}
          </p>
          <p className="text-gray-700 dark:text-gray-400 mb-6">
            {event.description}
          </p>
          <div className="flex justify-between items-center">
            <AnimatedButton variant="primary"
              onClick={() => console.log(`join event: ${event.title}`)}
            >
              join Event
            </AnimatedButton>
            <button className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <svg
                className="w-6 h-6 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 5a2 2 0 012-2h1 0a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.div>
    );
};
export default EventCart