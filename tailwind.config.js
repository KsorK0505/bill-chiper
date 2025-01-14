/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Lota: ["Lota Grotesque"],
        Ocean: ["Oceanwide"],
      },
      colors: {
        "white-20": "rgba(255, 255, 255, 0.2)",
        "white-40": "rgba(255, 255, 255, 0.4)",
      },
      borderWidth: {
        1: "1px",
        2: "2px",
      },
      backgroundImage: {
        "globalStats-bg": 'url("@assets/img/globalStats-bg.png")',
        "pluseChain-bg": 'url("@assets/img/pluseChain-bg.png")',
        "avalanche-bg": 'url("@assets/img/avalancheStats-bg.png")',
      },
      borderColor: {
        "light-blue": "rgb(60,67,107)",
      },
    },
  },
  plugins: [],
};
