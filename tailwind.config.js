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
        // Primary colors
        'primary-blue': 'hsl(246, 80%, 60%)',
        'light-red-work': 'hsl(15, 100%, 70%)',
        'soft-blue-play': 'hsl(195, 74%, 62%)',
        'light-red-study': 'hsl(348, 100%, 68%)',
        'lime-green-exercise': 'hsl(145, 58%, 55%)',
        'violet-social': 'hsl(264, 64%, 52%)',
        'soft-orange-self': 'hsl(43, 84%, 65%)',
        
        // Neutral colors
        'very-dark-blue': 'hsl(226, 43%, 10%)',
        'dark-blue': 'hsl(235, 46%, 20%)',
        'desaturated-blue': 'hsl(235, 45%, 61%)',
        'pale-blue': 'hsl(236, 100%, 87%)'
      }
    }
  },
  plugins: []
}