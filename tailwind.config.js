// Example `tailwind.config.js` filecorePlugins  from ('./tailwind/core');
const spacing = require('./tailwind/spacing');
const colors = require('./tailwind/colors');
const fontSize = require('./tailwind/fontsize');
const screens = require('./tailwind/screens');
const width = require('./tailwind/width');
const height = require('./tailwind/height');
const core = require('./tailwind/core');
const shadow = require('./tailwind/shadow');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  corePlugins: core,
  variants: {
    extend: {
      ringColor: ['hover'],
      ringWidth: ['hover'],
      borderColor: ['active', 'hover'],
      borderWidth: ['active', 'hover'],
      opacity: ['disabled'],
    },
  },
  theme: {
    spacing: spacing,
    colors: colors,
    screens: screens,
    minWidth: width,
    maxWidth: width,
    width: width,
    height: height,
    minHeight: height,
    maxHeight: height,
    fontFamily: {
      icon: ['fontawesome'],
      body: ['Roboto', 'sans-serif'],
    },
    boxShadow: shadow,
    fontSize: fontSize,
    container: {padding: spacing},
  },

  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
