/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minWidth: {
        '1/6': '16.67vw'
      },
      colors: {
        'blue1': '#A5D7E8',
        'blue2': '#576CBC',
        'blue3': '#19376D',
        'blue4': '#0B2447'
      }
    }
  },
  plugins: [],
}