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
        roboBlue: "#00F0FF",
        roboDark: "#0A0F1C",
        roboGray: "#1C1F26",
      },
    },
  },
  plugins: [],
}

