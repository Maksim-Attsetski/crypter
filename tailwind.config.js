/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textGrey: '#676767',
        dark: '#141416',
      }
    },
  },
  plugins: [],
}