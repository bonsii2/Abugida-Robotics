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
import AwardsTestimonialsPage from "../pages/AwardTestimonial";
import ContactPage from "../pages/contactPage";
import HeroSection from "./Hero";

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
     <HeroSection />
      <EventsSection />
      <UniqueFeaturesPartners />
      <StudentSupportPage />
      <AwardsTestimonialsPage />
      <ContactPage />
    </div>
  );
};

export default HomePage;
