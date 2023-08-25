/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", ...defaultTheme.fontFamily.sans],
        quicksand: ["Quicksand", ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: ['winter'],
  }
}

