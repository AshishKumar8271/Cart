/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    boxShadow: {
      'xl': "0px 0px 12px -1px #c3bebe",
    },
    fontFamily: {
      'poppins': '"Poppins",  sans-serif'
    }
  },
  plugins: [],
}