/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {fontFamily:{
      dance:["var(--font-dance)"],
      nunito:["var(--font-nunito)"],
      inter:["var(--font-inter)"],
       },},
    
  },
  plugins: [],
}