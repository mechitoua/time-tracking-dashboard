/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
      },
      colors: {
        'dark-blue': '#0f1424',
        'card-blue': '#1c1f4a',
        'card-hover': '#34397B',
        'profile-blue': '#5847eb',
      },
    },
  },
  plugins: [],
}