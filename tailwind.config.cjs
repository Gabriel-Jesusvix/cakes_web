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
