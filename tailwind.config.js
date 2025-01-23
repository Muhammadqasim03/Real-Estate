/** @type {import('tailwindcss').Config} */
module.exports = {

     
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      width: {
        'custom': 'calc(100%-880px)',
      },
      backgroundGradient: {
        'custom-gradient': 'linear-gradient(90deg, #34E0A1 0.15%, rgba(52, 224, 161, 0.00) 99.86%)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        
      },
     
      screens: {
        'xxs': '375px',
        'xs': '475px', // New custom breakpoint (extra small devices)
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        
      },
      backgroundImage: {
        "hero-image": "url('/public/Images/Hero.png')", 
       "about-image":  "url('/public/Images/Background.png",
        "property-image": "url('/public/Images/ProImage.png')", 
        "single-image": "url('/public/Images/singleproperty.png",
        "Agents-image": "url('/public/Images/MeetOurAgents.png')",
        "laptop-image": "url('/public/Images/laptoop.png')",
        "gradient-image":"url('/public/Images/AgentService.png')",
        "SingleAgent-image": "url('/public/Images/SingleAgentImage.png')",
      },
    },
  },


  
  plugins: [],
}

