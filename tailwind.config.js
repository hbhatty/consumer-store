/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  
  theme: {
    extend: {
      colors: {
        "background-dark": "#121212",
        menubar: "#181818",
        "secondary-text": "#B3B3B3",
        "primary-text": "#FFFFFF",
        "gray-dark": "#273444",
        gray: "#8492a6",
        "gray-light": "#d3dce6",
      },
    },
  },
  plugins: [],
};
