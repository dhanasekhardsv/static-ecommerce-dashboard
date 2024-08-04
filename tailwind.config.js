/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'navBg': '#202028',
      'searchBg': '#2a2b30',
      'iconClr': '#828387'
    },
    gridTemplateColumns: {
      'contentLayout': '2fr 1fr'
    },
    gridTemplateRows: {
      'contentHeight': 'auto auto auto auto auto auto'
    }
  },
  plugins: [],
}