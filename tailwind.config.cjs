/** @type {import('tailwindcss').Config} */

const brandColors = {
  white: "#FFFFFF",
  black: "#000000",

  primary: "#FE4878",
  secondary: "#6B4B3E",

  bg_button: "#FFE2E9",
  gray_background: "#F8F4F9",
};
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    screens: {
      tablet: { max: "767px" },
      // => @media (min-width: 640px) { ... }

      laptop: { max: "1024px" },
      // => @media (min-width: 1024px) { ... }

      desktop: { max: "1280px" },
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        ...brandColors,
        backgroundColor: brandColors.gray_background,
        text_primary: brandColors.text_primary,
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
