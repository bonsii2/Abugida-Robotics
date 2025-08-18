/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class', 
  content: [
        "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        roboBlue: "",
        roboDark: "#0A0F1C",
        roboGray: "#1C1F26",
        gold: "#FFD703",
        roboLight: "#cAF3E2",  // Soft beige for light mode background
        roboText: "#2C2C2C",   // Dark gray text (light mode)
        roboTextLight: "#E5E5E5", // Light gray text (dark mode)
      },
    },
  },
  plugins: [],
}

