/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: '480px', //https://tailwindcss.com/docs/screens
      md: '768px',
      lg: '976px',
      xl: '1440px',
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}