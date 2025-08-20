import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import robot1 from "../assets/robot-doing-peace-sign__1_-removebg-preview.png";
import robot2 from "../assets/robot-holding-light-bulb-removebg-preview.png";
import robot3 from "../assets/robot-writing-with-pen__1_-removebg-preview.png";
import robot4 from "../assets/robot-with-pliers-removebg-preview.png";
import EventsSection from "../components/EventSection";
import UniqueFeaturesPartners from "./UniquePartners";
import StudentSupportPage from "./supportStudent";

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Robotics images data
  const roboticsImages = [
    {
      id: 1,
      src: robot1,
      alt: "Humanoid robot",
      title: "WELL COME TO ABUGIDA ROBOTICS",
      description: "Where Dreams come to Real !!",
    },
    {
      id: 2,
      src: robot1,
      alt: "Humanoid robot",
      title: "Next-Gen Humanoids",
      description: "Our advanced humanoid robots with AI capabilities",
    },
    {
      id: 3,
      src: robot2,
      alt: "Industrial robot arm",
      title: "Precision Automation",
      description: "High-precision robotic arms for industrial applications",
    },
    {
      id: 4,
      src: robot3,
      alt: "Drone technology",
      title: "Aerial Robotics",
      description: "Cutting-edge drone technology for various applications",
    },
    {
      id: 5,
      src: robot4,
      alt: "Educational robots",
      title: "STEM Education",
      description: "Robotics kits for hands-on learning experiences",
    },
  ];

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        setCurrentSlide((prev) => (prev + 1) % roboticsImages.length);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [isHovering, roboticsImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % roboticsImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + roboticsImages.length) % roboticsImages.length
    );
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-16 ">
      {/* Hero Section with Animated Robotics Showcase */}
      <section className="relative h-[90vh] overflow-hidden ">
        <div
          className="absolute inset-0 bg-black/30 z-10"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Navigation Arrows */}
          {isHovering && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 p-2 rounded-full transition-all"
              >
                <ChevronLeft className="w-8 h-8 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 p-2 rounded-full transition-all"
              >
                <ChevronRight className="w-8 h-8 text-white" />
              </button>
            </>
          )}
        </div>

        {/* Animated Slides */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute  flex  inset-0"
          >
            <div className="absolute bottom-20 left-10 z-20 text-white max-w-lg">
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold text-black dark:text-gold mb-4"
              >
                {roboticsImages[currentSlide].title}
              </motion.h1>
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-xl md:text-2xl"
              >
                {roboticsImages[currentSlide].description}
              </motion.p>
            </div>
            <motion.img
              src={roboticsImages[currentSlide].src}
              alt={roboticsImages[currentSlide].alt}
              className="w-full h-full object-fill object-top"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {roboticsImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? "bg-white w-6" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>
      <EventsSection />
      <UniqueFeaturesPartners />
      <StudentSupportPage />
    </div>
  );
};

export default HomePage;
