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
        'yellow': ' #FFCF00',
        'blogBtn': ' #F3F3F3',
        'blogSearch': '#999999',
        "footer":"#6600660D",
      },
      width:{
        nav:"28rem"
      },     
       height:{
        feature:"28rem",
        sm:"40rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}


