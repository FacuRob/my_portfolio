module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#2563eb", // blue-600 light mode
          dark: "#3b82f6", // blue-500 dark mode
        },
        secondary: {
          light: "#1e40af", // blue-700 light mode
          dark: "#1e3a8a", // blue-800 dark mode
        },
      },
    },
  },
  plugins: [],
};
