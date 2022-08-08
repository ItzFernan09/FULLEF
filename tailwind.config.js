/** @type {import('tailwindcss').Config} */

module.exports = {
  plugins: [

  ],
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Inter':['Inter', 'sans-serif'],
        'Lato':['Lato', 'sans-serif']
      },
    },
  },
}
