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
      },
      fontFamily: {
        Raleway: ["Raleway", ...defaultTheme.fontFamily.sans],
        Urbanist: ["Urbanist", ...defaultTheme.fontFamily.sans],
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
