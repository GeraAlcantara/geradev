/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: "#f2f2f2",
            a: {
              color: "#f1d3ee",
              "&:hover": {
                color: "#f77fb5",
              },
            },
          },
        },
      },
      colors: {
        brand: {
          pink: {
            50: "#f1d3ee",
            100: "#d6bdcd",
            200: "#c5a8aa",
            300: "#b07890",
            400: "#ae7387",
            500: "#b86a80",
            600: "#7e4856",
            700: "#715665",
            800: "#42202e",
            accent: "#f77fb5",
          },
          blue: {
            100: "#8c9b91",
            300: "#70908f",
            900: "#588c86",
          },
          black: {
            100: "#201f22",
            300: "#0f0d10",
            900: "#0c0a0d",
          },
        },
      },
      fontFamily: {
        Raleway: ["Raleway", ...defaultTheme.fontFamily.sans],
        Urbanist: ["Urbanist", ...defaultTheme.fontFamily.sans],
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        jelloHorizontal: "jelloHorizontal 0.5s ease-out both infinite",
        scaleInCenter: "scaleincenter 0.3s cubic-bezier(0.175, 0.885, 0.320, 1.275) 0.3s both;",
      },
      keyframes: {
        scaleincenter: {
          "0%": {
            transform: "scale(0)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
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
  plugins: [require("@tailwindcss/typography")],
};
