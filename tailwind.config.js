/** @type {import('tailwindcss').Config} */
module.exports = {
  //its include the path to implement the tailwind
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      //custom color setup
      colors: {
        "pale-black": "#151515",
        black: "#000000",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
