const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
module.exports = {
  
  purge:{
    content: ['./src/**/*/.html','./src/**/*/.js'],
    options:{
      safeList: ['bg-matte-black']
    }
  } ,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'Nunito': ['Nunito', ...defaultTheme.fontFamily.sans]
      }, 
      colors: {
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
