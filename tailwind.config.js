/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily:{
        Paytone: "'Paytone One', sans-serif",
        island: "'Island Moments', cursive",
        lobstar: "'Lobster', cursive",
        poppins: "'Poppins', sans-serif",
        ubuntu: "'Ubuntu', sans-serif",
        blackHan: "'Black Han Sans', sans-serif"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
