/** @type {import('tailwindcss').Config} */

const tailwindSettings = {
  // === FLUID TYPO === //
  fluidTypeSettings: {},
  fluidType: {
    settings: {
      fontSizeMin: 1.125,
      fontSizeMax: 1.25,
      ratioMin: 1.125,
      ratioMax: 1.2,
      screenMin: 20,
      screenMax: 96,
      unit: 'rem',
      prefix: '',
    },
    values: {
      xs: [-2, 1.6],
      sm: [-1, 1.6],
      base: [0, 1.6],
      lg: [1, 1.6],
      xl: [2, 1.2],
      '2xl': [3, 1.2],
      '3xl': [4, 1.2],
      '4xl': [5, 1.1],
      '5xl': [6, 1],
      '6xl': [7, 1.1],
      '7xl': [8, 1],
      '8xl': [9, 1],
      '9xl': [10, 1],
    },
  },

  // === EXTEND CLASSES === //
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
      // '3xl': '2.5rem',
      // '4xl': '3.3rem',
      // '8xl': '8rem',
      // '10xl': '10rem',
    },
    fontFamily: {
      raleway: ['Raleway'],
      sourceCode: ['Source Code Pro'],
      roboto: ['Roboto'],
    },

    // === CUSTOM COLORS === //
    colors: {
      darkGreen: '#03DAC6',
      darkPurple: '#BB86FC',
      background: { dark: '#121212', light: '#fff' },
      secondaryBackground: { dark: '#3d3d3d', light: '#FFAF50' },
      tertiaryBackground: { dark: '#575757', light: '#FFBA6A' },
      primary: {
        dark: '#03DAC6',
        light: '#333A56',
      },
    },
  },
};

module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/3_components/**/*.{js,jsx,ts,tsx}',
  ],

  theme: tailwindSettings,
  corePlugins: {
    // fontSize: false,
  },
  plugins: [require('tailwindcss-fluid-type')],
  variants: {
    fluidType: ['responsive'],
  },
};
