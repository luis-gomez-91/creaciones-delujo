/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,js,ts,jsx,tsx,vue,svelte}"
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Raleway', 'sans-serif'],
        display: ['Raleway', 'sans-serif'], // puedes usar la misma fuente para títulos
      },
    },
  },
  plugins: [],
}
