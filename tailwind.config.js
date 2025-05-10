/** @type {import('tailwindcss').Config} */
import PrimeUI from "tailwindcss-primeui";

module.exports = {
  content: ["./src/*/.{html,ts}"],
  theme: {
    extend: {
      container: {
        padding: "1rem",
        center: true,
        screens: {
          sm: "100%",
          md: "780px",
          lg: "920px",
          xl: "1120px",
          "2xl": "1280px",
        },
      },
      textUnderlineOffset: {
        6: "6px",
      },
    },
  },
  plugins: [PrimeUI],
};
