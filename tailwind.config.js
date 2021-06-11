const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
module.exports = {
  mode:'jit',
  purge:['./**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImager:theme =>({
        'hero-pattern': "url('/src/svg/circuit-board.svg')"
      }),
      fontFamily: {
        'Nunito': ['Nunito', ...defaultTheme.fontFamily.sans]
      }, 
      colors: {
        'matte-black': '#1b1b1b',
        'gold': '#ccb400',
        black: colors.black,
        gray: colors.trueGray,
        indigo: colors.indigo,
        cyan: colors.cyan
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
