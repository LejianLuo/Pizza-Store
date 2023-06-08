/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        verdana: ['Verdana', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: 0 },
          'to': { opacity: 1 },
        },
      },
      animation: {
        'fadeIn': 'fadeIn 1s ease-in-out',
      }
    },
  },
  plugins: [],
}

