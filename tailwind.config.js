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
  darkMode: 'class',
  corePlugins: core,
  variants: {
    extend: {
      ringColor: ['hover'],
      ringWidth: ['hover'],
      borderColor: ['active', 'hover', 'disabled'],
      borderWidth: ['active', 'hover'],
      opacity: ['disabled', 'dark'],
      backgroundColor: ['disabled'],
      cursor: ['hover', 'focus', 'disabled'],
      boxShadow: ['dark', 'hover'],
    },
  },
  theme: {
    spacing: spacing,
    ringColor: colors,
    colors: colors,
    screens: screens,
    minWidth: width,
    maxWidth: width,
    width: width,
    height: height,
    minHeight: height,
    maxHeight: height,
    inset: width,
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    boxShadow: shadow,
    fontSize: fontSize,
    container: {padding: spacing},
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': {transform: 'rotateZ(-0.3deg)'},
          '50%': {transform: 'rotateZ(0.3deg)'},
        },
        bounce: {
          '0%, 100%': {transform: 'translateY(4px) translateX(4px)'},
          '50%': {transform: 'translateY(0px) translateX(4px)'},
        },
        rotate: {
          '0%': {transform: 'rotateZ(1deg)'},
          '50%': {transform: 'rotateZ(90deg)'},
          '100%': {transform: 'rotateZ(180deg)'},
        },
        up: {
          '0%': {transform: 'rotateZ(10deg) rotateX(90deg)'},
          '100%': {transform: 'rotateZ(0deg) rotateX(0deg)'},
        },
        down: {
          '0%': {transform: 'translateY(0px)'},
          '100%': {transform: 'translateY(500px)'},
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        bounce: 'bounce 3s ease-out infinite',
        rotateSlow: 'rotate 8s infinite',
        rotateFast: 'rotate 4s infinite',
        up: 'up 0.3s ease-out',
        down: 'down 0.3s ease-out',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
