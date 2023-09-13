/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-gray': '#1E1E1E',
        'dark-yellow': '#A6A001',
        'main-bg': '#101113',
      },
    },
  },
  plugins: [],
};
