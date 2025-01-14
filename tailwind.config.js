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
        'white-20': 'rgba(255, 255, 255, 0.2)',
      },
      borderWidth: {
        '1': '1px',
        '2': '2px',
      }

    },
  },
  plugins: [],
};
