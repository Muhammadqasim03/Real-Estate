import React from 'react'
import HeroSection from '../../pages/Property/component/HeroSection'
import AssetCards from '../../pages/Property/component/AssetCards';
import Neighborhoods from './Neighborhoods.js';
import FAQs from "../landing_page/componenet/FAQs"
import Footer from "../../reuseable/Footer"

const Property = () => {
  return (
    <div>
        <HeroSection   title="Properties"
        backgroundImg="../../../Images/ProImage.png"></HeroSection>
        <AssetCards className="pt-0"></AssetCards>
        <Neighborhoods></Neighborhoods>
        <FAQs></FAQs>
        <Footer></Footer>
      
    </div>
  )
}

export default Property
