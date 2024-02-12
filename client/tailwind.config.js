/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        mini: ['ui-monospace', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
        sans: ['Open Sans', 'sans-serif'],
        candara: ['Candara', 'sans-serif'],
        roboto:['Roboto','sans-serif'],
        nunito:['Nunito Sans', 'sans-serif'],
        plex:['IBM Plex Sans','sans-serif'],
        dev:['IBM Plex Sans Devanagari', 'sans-serif'],
        martel:['Martel Sans', 'sans-serif'],
        alegreya:['Alegreya', 'serif'],
      },
      boxShadow:{
        sh1:"rgba(0, 0, 0, 0.15) 0px 2px 8px"
      },
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
      },
    },
  },
  plugins: [],
}
