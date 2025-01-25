/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textGrey: '#8D8D8D',
        dark: '#141416',
      }
    },
  },
  plugins: [],
}