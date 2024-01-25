/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      'phone':'300px',
      'xl':'1200px',
      'tablet':'500px'
    }
  },
  plugins: [],
}