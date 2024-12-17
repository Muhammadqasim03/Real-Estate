import React from 'react'

import HeroSection from "../../pages/about_us/component/HeroSection"

import PropertySection from './component/PropertySection'

;
const About = () => {
  
  return (
    <div>
        <HeroSection title="About Us" backgroundImage="../../../Images/Background.png"></HeroSection>
        <PropertySection></PropertySection>
      
    </div>
  )
}

export default About
