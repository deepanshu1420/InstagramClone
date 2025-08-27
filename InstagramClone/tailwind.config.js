module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide'), require('tailwind-scrollbar')],
}