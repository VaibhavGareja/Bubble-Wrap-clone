/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      esm: "480px",

      sm: "640px",

      md: "768px",

      lg: "991px",

      xl: "1280px",

      "2xl": "1440px",
    },
    extend: {},
  },
  plugins: [],
};
