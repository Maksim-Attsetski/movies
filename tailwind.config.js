/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'dark-main': '#3b3939',
        'light-main': '#e5e0e0',
        'dark-block': '#1c1b1b',
        'light-block': '#fcf9f9',
      },
      colors: {
        'dark-text': '#ececec',
        'light-text': '#000',
        'dark-text-hover': '#3b3939',
        'light-text-hover': '#e5e0e0',
        'brand-red': '#c9083c',
      },
      boxShadow: {
        'dark-btn': '1px 10px 20px rgba(0, 0, 0, 0.7)',
        'light-btn': '1px 10px 20px rgba(162, 162, 162, 0.7)',
        'dark-btn-active': '1px 3px 5px rgba(0, 0, 0, 0.7)',
        'light-btn-active': '1px 3px 5px rgba(162, 162, 162, 0.7)',
      },
      borderRadius: {
        'circle': '50%',
      }
    },
  },
  plugins: [],
}