const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#660066',
        'light': '#F8F8F8',
        'dark': ' #363636',
      },
    },
  },
  plugins: [],
}


