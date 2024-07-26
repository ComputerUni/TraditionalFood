/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",  
    ],
    theme: {
      extend: {
        backgroundImage: {
          'banner-image': "url('./src/assets/food-bg2.jpg')", 
        },
        colors: {
          'regal-blue': '#FFFFFF',
        },
  
      },
    },
    plugins: [],
  }
  