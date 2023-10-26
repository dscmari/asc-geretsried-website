/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
"./src/**/*.{vue,js}"],
  theme: {
    extend: {
      colors: {
        ascBlue: '#2B3248',
        ascLogoBlue: '#002166'
      }
    },
  },
  plugins: [],
}

