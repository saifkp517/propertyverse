/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'nunito': ['nunito', 'sans-serif'],
      'MyFont': ['"My Font"', 'serif'] // Ensure fonts with spaces have " " surrounding it.
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin')
  ],
});
