/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    require('@tailwindcss/typography'),
  ],
  theme: {
    extend: {
      typography: ({theme}) => ({
        pink: {
          css: {
            '--tw-prose-pre-bg': 'rgb(29, 31, 33)',
          }
        }
      })
    }
  }
}