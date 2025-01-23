import React from 'react'
import HeroSection from '../single_property/component/HeroSection'
import PropertyCards from '../single_property/component/PropertyCards'
import PropertyGallery from './component/PropertyGallery'
import AssetCards from '../Property/component/AssetCards'
import SubscribeSection from "../landing_page/componenet/SubscribeSection"
import FAQs from '../landing_page/componenet/FAQs'
import Footer from '../../reuseable/Footer'
const SingleProperty = () => {

     
  return (
    <div>
      <HeroSection title="Single Property" backgroundImage="../../../Images/singleproperty.png"  />
      <PropertyCards></PropertyCards>
       <PropertyGallery></PropertyGallery>
       <AssetCards></AssetCards>
       <SubscribeSection></SubscribeSection>
       <FAQs></FAQs>
       <Footer></Footer>
    </div>

  )
}

export default SingleProperty
