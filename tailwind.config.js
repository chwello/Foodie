/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mergeOne: ['"Merge One"', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        marcellus: ['Marcellus', 'serif'],
        libreBaskerville: ['"Libre Baskerville"', 'serif'],
        libreCaslonText: ['"Libre Caslon Text"', 'serif'],
      },
    },
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    }
  },
  plugins: [],
}
