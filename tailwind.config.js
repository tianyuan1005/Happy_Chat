/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-100': '#a7bcff',
        'primary-50': '#dce4ff',
        'primary-200': '#8696cc',
        'primary-300': '#7b96ec',
        'primary-400': '#8da4f1',
        'primary-500': '#6f87d4',
        'second-100': '#5d5b8d',
        'dark-purple-100': '#3e3c61',
        'dark-purple-200': '#2f2d52',
        'light-white-100': '#ddddf7',
      },
      screens: {
        xs: '300px',
        sm: '768px',
        md: '1060px',
      },
      fontFamily: {
        dmsans: ['DM Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
