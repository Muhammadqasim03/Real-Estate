/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('/public/Images/Hero.png')", 
       "about-image":  "url('/public/Images/Background.png",
      },
    },
  },
  plugins: [],
}

