/** @type {import('tailwindcss').Config} */
export default {
  content: [
    ".src/app/**/*.{js,jsx}",
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nav-primary': '#191918',
        'nav-secondary': '#141414',
        'yellow-primary': '#e6bd21',
      },
      fontFamily: {
        'urbanist': ['Urbanist', 'sans-serif']
      },
      backgroundImage: {
        'cta-banner': "url('./assets/cta-banner.png')"
      }
    },
  },
  plugins: [],
}

