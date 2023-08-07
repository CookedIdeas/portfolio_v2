/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/3_components/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    fluidTypography: {},
    extend: {
      minHeight: {
        85: '85vh',
        35: '35vh',
      },
      width: {
        150: '50rem',
      },
      spacing: {
        '172px': '172px', //for sidebar = footer height + mb-3
      },
      fontSize: {
        '3xl': '2.5rem',
        '4xl': '3.3rem',
        '8xl': '8rem',
        '10xl': '10rem',
      },
      fontFamily: {
        raleway: ['Raleway'],
        sourceCode: ['Source Code Pro'],
      },
      colors: {
        darkGreen: '#03DAC6',
        darkPurple: '#BB86FC',
        background: { dark: '#121212', light: '#fff' },
        secondaryBackground: { dark: '#3d3d3d', light: '#ff0000' },
        primary: {
          dark: '#03DAC6',
          // rgb(3,218,198)
          light: '#333A56',
          // rgb(51,58,86)
        },
      },
    },
  },
  plugins: [require('tailwind-fluid-typography')],
};
