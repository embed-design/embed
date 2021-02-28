const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        chocolate: {
          '50':  '#faf5e8',
          '100': '#fbeccc',
          '200': '#f8de99',
          '300': '#f5c756',
          '400': '#f2a322',
          '500': '#f17e0e',
          '600': '#fa620e',
          '700': '#c6430e',
          '800': '#a43515',
          '900': '#872c16',
        },
        black: colors.black,
        white: colors.white,
        gray: colors.gray
      },
      keyframes: {
        nav_in: {
          '0%': {opacity:0, transform: 'translateX(100%)'},
          '100%': {opacity:1, transform: 'translateX(0%)'}
        },
        nav_out: {
          '0%': {opacity:1, transform: 'translateX(0%)'},
          '100%': {opacity:0, transform: 'translateX(100%)'}
        }
      },
      animation: {
        nav_in: 'nav_in 1s ease-in-out',
        nav_out: 'nav_out 1s ease-in-out',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
