/** @type {import('tailwindcss').Config} */
import { withUt } from "uploadthing/tw";

export default withUt({
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
        'below-tab': { 'max': '880px' }, // custom breakpoint for below 600px
        'hidde-nav': { 'max': '750px' }, // custom breakpoint for below 600px
        'below-sm': { 'max': '650px' },
      },
      colors: {
        "primary-blue": "rgb(39, 129, 239)", // corrected RGB syntax
      },
    },
  },
  plugins: [],
});
// module.exports =
//  {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
//     // Or if using `src` directory:
//     "./src/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       screens: {
//         'below-tab': { 'max': '880px' }, // custom breakpoint for below 600px
//         'below-sm': { 'max': '650px' },
//       },
//       colors: {
//         "primary-blue": "rgb(39, 129, 239)", // corrected RGB syntax
//       },
//     },
//   },
//   plugins: [],
// }
