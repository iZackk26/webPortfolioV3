/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#ffffff',
      },
      boxShadow: {
        'instagram': '0 0 5px 3px rgba(225, 48, 108, 0.5)',
        'github': '0 0 5px 4px rgba(55, 55, 55, 0.5)',
        'linkedin': '0 0 5px 4px rgba(0, 119, 181, 0.5)',
      }
    },
  },
  plugins: [],
}