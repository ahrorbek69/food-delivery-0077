/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        150: "150px",
      190: "190px",
      225: "225px",
      275: "275px",
      300: "300px",
      340: "340px",
      350: "350px",
      375: "375px",
      460: "460px",
      656: "656px",
      880: "880px",
      180: "180%",
      508: "508px",
      90: "90%",
      22: '20%'
      },
      left:{
        22: '20%'
      },
      height: {
        80: "80px",
      150: "150px",
      225: "225px",
      275: "275px",
      300: "300px",
      340: "150px",
      370: "150px",
      420: "150px",
      510: "150px",
      600: "150px",
      685: "150px",
      800: "150px",
      "90vh": "90vh",
      },
      minWidth: {
        210: "210px",
      350: "350px",
      620: "620px",
      },
      screens: {
        sm: "630px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2x1": "150px",
      },
      colors :{
        headingColor: "#2e2e2e",
        textColor: "#515151",
        cart: "#e80013",
        primary: "#f5f3f3",
      }
      
    },
  },
  plugins: [],
}
