/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#004A74",
        "secondary": "#FED400",
      },
      // extend font poppins
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      }
    },
    plugins: [],
  }
}