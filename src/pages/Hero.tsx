import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import roboticimage from "../assets/robot-doing-peace-sign__1_-removebg-preview.png";

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  // Image animation variants
  const imageVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut" as const,
        delay: 0.3,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center py-16 px-4"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Welcome Text */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center lg:text-left space-y-8"
        >
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-4 leading-tight">
              Welcome to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Future Robotics
              </span>
            </h1>
            <p className="text-xl text-blue-200 font-light">
              Innovating tomorrow through cutting-edge robotics technology
            </p>
          </div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Explore Our Robots
          </motion.button>
        </motion.div>

        {/* Right Side: Animated Robot Image */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <motion.img
              src={roboticimage}
              alt="Advanced Robotics"
              className="w-full max-w-md lg:max-w-lg xl:max-w-xl  "
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            />

            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl opacity-20 blur-xl -z-10"></div>
          </div>
        </motion.div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-400/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default HeroSection;
