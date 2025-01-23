import React from 'react'
import HeroSection from '../SingleAgentDetail/component/HeroSection'
import AssetCards from '../Property/component/AssetCards'
import SubscribeSection from '../landing_page/componenet/SubscribeSection'
import FAQs from '../landing_page/componenet/FAQs'
import Footer from '../../reuseable/Footer'

const SingleAgentDetail = () => {
     
  return (
    <div>
      <HeroSection title="" backgroundImage="../../../Images/SingleAgentImage.png" ></HeroSection>
       <AssetCards  className="lg:pt-[120px] md:pt-[380px] sm:pt-[400px] xs:pt-[570px] xxs:pt-[670px]"  />
       <SubscribeSection className="pt-0"></SubscribeSection>
       <FAQs></FAQs>
       <Footer></Footer>
    </div>
  )
}

export default SingleAgentDetail
