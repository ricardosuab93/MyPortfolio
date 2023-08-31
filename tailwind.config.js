/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        centra: ['Centra', 'sans-serif'],
        montserrat:['Montserrat', 'sans-serif'],
        rem:['REM', 'sans-serif']
      },
      backgroundImage: {
        'banner': "url('./src/assets/img/banner-bg.png')",
      },
      animation: {
        'bounce-slow': 'bounce 3s linear infinite',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

