/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "sm": "640px",
      // => @media (min-width: 640px)

      "md": "768px",
      // => @media (min-width: 768px)

      "lg": "1024px",
      // => @media (min-width: 1024px)

      "xl": "1280px",
      // => @media (min-width: 1280px)
      
      "2xl": "1536px"
      // => @media (min-width: 1536px)
    },
    extend: {},
    colors: {
      "background": "hsl(228, 100%, 84%)",
      "Alabaster": "hsl(231, 100%, 99%)",
      "grey": "hsl(0, 0%, 93%)",
      "paleBlue": "hsl(228, 39%, 58%)",
      "White": "hsl(0, 0%, 100%)",
      "error-red": "hsl(354, 84%, 57%)"
    }
  },
  plugins: [],
}