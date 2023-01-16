/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
    ]
  }
};