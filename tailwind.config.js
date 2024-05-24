/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      container:{
        center: true
      }
    },
  },
  plugins: [  require("tailwind-scrollbar"),],
}


