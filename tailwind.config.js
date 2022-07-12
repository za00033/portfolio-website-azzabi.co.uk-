/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './index.html'
  ],
  theme: {
    screens:{// Here we can specify the screen sizes
      'xs': '320px',
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors:{
        blue: {
          300: '#c8fcea',
          400: '#00e3b3',
          500: '#00bdbf',
          600: '#0095c0',
          700: '#006db1',
          800: '#004590',
          900: '#011c61',
        },
        purple: {
          100: '#fff0ff',
          200: '#ffd7ff',
          300: '#ffbdff',
          400: '#f5a3ef',
          500: '#dc8ad6',
          600: '#c371bd',
          700: '#a957a3',
          800: '#903e8a',
          900: '#762470',
        },
        pink: {
          200: '#fff1ff',
          300: '#ffd7ff',
          400: '#ffbde9',
          500: '#ffa4d0',
          600: '#ff8bb7',
          700: '#f3719d',
          800: '#da5884',
          900: '#c03e6a',
        },
        grey: {
          100: '#fbfbfb',
          200: '#f5f5f5',
          300: '#efefef',
          400: '#eaeaea',
          500: '#e4e4e4',
          600: '#dedede',
          700: '#d9d9d9',
          800: '#c0c0c0',
          900: '#a6a6a6',
        },
        coral: {
          400: '#fff1da',
          500: '#ffd8c1',
          600: '#ffbfa8',
          700: '#ffa58e',
          800: '#ff8c75',
          900: '#f0725b',
        },
        orange: {
          600: '#ffffa0',
          700: '#ffe686',
          800: '#ffcd6d',
          900: '#ffb353',
        },
        yellow: {
          600: '#ffffbe',
          700: '#ffffa4',
          800: '#ffff8b',
          900: '#f9f871',
        },
        black: '#000000',
        white: '#ffffff'
      },
      fontFamily: {
        mono: ['Roboto Mono', ...defaultTheme.fontFamily.mono],
      },
      animation: {
        fadeIn1: "fadeIn 1s ease-in forwards",
        fadeIn2: "fadeIn 2s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      },
      variants: {
        animation: ["motion-safe"]
    }
    },
  },
  plugins: [],
}
