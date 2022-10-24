/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#1070e5",
        accent: "#00fb15",
        bg_primary: "#001322",
        bg_secondary: "#010d17",
      },
      fontFamily: {
        Raleway: ["Raleway", ...defaultTheme.fontFamily.sans],
        Urbanist: ["Urbanist", ...defaultTheme.fontFamily.sans],
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        jelloHorizontal: "jelloHorizontal 0.5s ease-out both infinite",
      },
      keyframes: {
        jelloHorizontal: {
          "0%": {
            transform: "scale3d(1, 1, 1)",
          },
          "30%": {
            transform: "scale3d(1.25, 0.75, 1)",
          },
          "40%": {
            transform: "scale3d(0.75, 1.25, 1)",
          },
          "50%": {
            transform: "scale3d(1.15, 0.85, 1)",
          },
          "65%": {
            transform: "scale3d(0.95, 1.05, 1)",
          },
          "75%": {
            transform: "scale3d(1.05, 0.95, 1)",
          },
          "100%": {
            transform: "scale3d(1, 1, 1)",
          },
        },
      },
    },
  },
  plugins: [],
};
