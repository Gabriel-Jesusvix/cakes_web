/** @type {import('tailwindcss').Config} */

const brandColors = {
  white: "#FFFFFF",
  black: "#000000",

  primary: "#F99456",
  text_primary: "#333333",

  gray_background: "#eceff1",
};
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
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
  plugins: [],
};
