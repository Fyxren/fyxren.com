/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poly: ["Poly", ...defaultTheme.fontFamily.sans],
        montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        logo: {
          start: '#0386FF',
          end: '#FF00CC'
        }
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#111111",
          secondary: "#333333",
          accent: "#7654FF",
          "base-100": "#F9F9F9",
          "base-200": "#FFFFFF"
        },
      },
      // {
      //   dark: {
      //     ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
      //     primary: "#F9F9F9",
      //     secondary: "#C7C7C7",
      //     accent: "#7654FF",
      //     "base-100": "#111111",
      //     "base-200": "#1A1A1A"
      //   },
      // },
      {
        corn: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          primary: "#F9F9F9",
          secondary: "#C7C7C7",
          accent: "#FFA31A",
          "base-100": "#000000",
          "base-200": "#0C0C0C"
        },
      },
    ]
  }
};