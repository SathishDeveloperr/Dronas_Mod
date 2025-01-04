/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '10xl': '10rem', 
        '11xl': '12rem', 
      },
      screens: {
        mobile: '360px',      
        tablet: '640px',     
        laptop: '1024px',     
        pc: '1280px',        
      },
    },
  },
  plugins: [],
}
