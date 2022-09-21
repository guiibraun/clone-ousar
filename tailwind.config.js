/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1140px',
        }
      },
      backgroundImage: {
        'bg-section-home': "url('/images/bg-section-one.png')",
      },
      colors: {
        'red': '#ff0000',
        'blackOusar': '#0c0003',
        'blackSubmit': '#131414'
      }
    },
  },
  plugins: [],
}