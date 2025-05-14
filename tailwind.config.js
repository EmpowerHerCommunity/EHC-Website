const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
      colors: {
        primary: "#660066",
        light: "#F8F8F8",
        dark: " #363636",
        yellow: " #FFCF00",
        blogBtn: " #F3F3F3",
        blogSearch: "#999999",
        footer: "#6600660D",
        slug: "#444444",
        event: "#6600660D",
        payment: "#0F0F29",
        grey: "#FBFBF",
        blogshd: "#c9b6ce",
        support: "#DDDDDD",
        supportb: "#FBFBFB",
      },
      width: {
        nav: "28rem",
      },
      height: {
        feature: "28rem",
        sm: "40rem",
      },
      fontFamily: {
        font: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
