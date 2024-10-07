/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'below-sm': { 'max': '600px' }, // custom breakpoint for below 600px
      },
      colors: {
        "primary-blue": "rgb(39, 129, 239)", // corrected RGB syntax
      },
    },
  },
  plugins: [],
}
