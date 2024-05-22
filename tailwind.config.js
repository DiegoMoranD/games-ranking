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
        "Header-bg" : "url('/public/imgs/hero-image-wr.jpg')",
        "Games" : "url('/public/imgs/games.jpg')",
        "profile" : "url('/public/imgs/fondo.png')",
        "profile-2" : "url('/public/imgs/fondo2.jpg')",
        "profile-3" : "url('/public/imgs/fondo3.jpg')"
      }
    },
  },
  plugins: [],
}

