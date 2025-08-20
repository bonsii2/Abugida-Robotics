import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedButtonsProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  className?: string;
}
const AnimatedButton = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}: AnimatedButtonsProps) => {
  const baseClasses =
    "px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center";
  const variantCLasses = {
    primary:
      "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700",
    secondary:
      "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600",
  };
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantCLasses[variant]} ${className}`}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{opacity:1, y:0}}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.button>
  );
};
export default AnimatedButton;
