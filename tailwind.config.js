// Example `tailwind.config.js` file
const colors = require('tailwindcss/colors')

module.exports = {
  //  purge: ['./pages/**/*.js', './components/**/*.js'],
   darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
}



// module.exports = {
//   purge: ['./pages/**/*.js', './components/**/*.js'],
//   darkMode: false, // or 'media' or 'class'
//  theme: {
//    screens: {
//      'sm': '640px',
//      'md': '768px',
//      'lg': '1024px',
//      'xl': '1280px',
//      '2xl': '1536px',
//    },
//    colors: {
//      gray: colors.coolGray,
//      gray: {
//        darkest: '#1f2d3d',
//        dark: '#3c4858',
//        DEFAULT: '#c0ccda',
//        light: '#e0e6ed',
//        lightest: '#f9fafc',
//      },
//      indigo: {
//        light: '#b3bcf5',
//        DEFAULT: '#5c6ac4',
//        dark: '#202e78',
//      },      
//      primary: 'var(--color-primary)',
//      secondary: 'var(--color-secondary)',
//    },
//    fontFamily: {
//      sans: ['Graphik', 'sans-serif'],
//      serif: ['Merriweather', 'serif'],
//    },
//    spacing: {
//      sm: '8px',
//      md: '12px',
//      lg: '16px',
//      xl: '24px',
//    },
//    borderRadius: {
//      'none': '0',
//      'sm': '.125rem',
//      DEFAULT: '.25rem',
//      'lg': '.5rem',
//      'full': '9999px',
//    },
//    extend: {
//      spacing: {
//        '128': '32rem',
//        '144': '36rem',
//      },
//      borderRadius: {
//        '4xl': '2rem',
//      }
//    }
//  },
//  variants: {
//    extend: {
//      borderColor: ['focus-visible'],
//      opacity: ['disabled'],
//    }
//  }
// }