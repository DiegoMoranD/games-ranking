/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.jsx",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "Header-bg" : "url('/public/imgs/hero-image-wr.jpg')"
      }
    },
  },
  plugins: [],
}

