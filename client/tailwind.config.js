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
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
