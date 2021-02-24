const colors = require('tailwindcss/colors');

module.exports = {
  transparent: 'transparent',
  gray: {
    darkest: colors.coolGray['900'],
    dark: colors.coolGray['800'],
    DEFAULT: colors.coolGray['400'],
    light: colors.coolGray['200'],
    lightest: colors.coolGray['100'],
  },
  green: {
    darkest: colors.green['900'],
    dark: colors.green['800'],
    DEFAULT: colors.green['500'],
    light: colors.green['100'],
    lightest: colors.green['50'],
  },
  red: {
    darkest: colors.red['900'],
    dark: colors.red['800'],
    DEFAULT: colors.red['500'],
    light: colors.red['100'],
    lightest: colors.red['50'],
  },
  white: {
    DEFAULT: 'var(--color-white)',
  },
  primary: {
    darkest: colors.teal['900'],
    dark: colors.teal['600'],
    DEFAULT: colors.teal['500'],
    light: colors.teal['300'],
    lightest: colors.teal['50'],
  },
  secondary: {
    darkest: colors.indigo['900'],
    dark: colors.indigo['800'],
    DEFAULT: '#19B6FF',
    light: colors.indigo['300'],
    lightest: colors.indigo['50'],
  },
  blue: {
    darkest: colors.blue['900'],
    dark: colors.blue['800'],
    DEFAULT: colors.blue['500'],
    light: colors.blue['100'],
    lightest: colors.blue['50'],
  },
  yellow: {
    darkest: colors.yellow['900'],
    dark: colors.yellow['800'],
    DEFAULT: colors.yellow['500'],
    light: colors.yellow['100'],
    lightest: colors.yellow['50'],
  },
};
