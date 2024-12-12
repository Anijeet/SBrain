/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
       green:{
        300:"#d0f0bf",
        500:"#01563f",
        700:"#32cd33"
       } 
      }
    },
  },
  plugins: [],
}