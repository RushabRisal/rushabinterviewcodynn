/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{
        'log':'520px',
      },
      height:{
        'log':'305px'
      }
    },
  },
  plugins: [],
}

