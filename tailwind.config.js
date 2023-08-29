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
    require('daisyui'),
    require('tailwind-scrollbar')
  ],
  daisyui: {
    themes: [
      {
        custom: {
          primary: '#199cff',
          secondary: '#ff21f7',
          accent: '#c338ff',
          neutral: '#fff',
          'base-100': '#191b2b',
          'base-200': '#1f2133',
          'base-300': '',
        }
      }
    ],
  }
}

