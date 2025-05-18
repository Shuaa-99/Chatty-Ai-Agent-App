export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        bounce: "bounce 1s infinite",
        pulse: "pulse 2s ease-in-out infinite",
      },
    },
  },

  plugins: [],
};
