import React from 'react'
import HeroSection from '../MeetOurAgents/component/HeroSection'
import SocialAgents from './component/SocialAgents'
import ServiceAgent from './component/ServiceAgent'
import FAQs from '../landing_page/componenet/FAQs'
import Footer from '../../reuseable/Footer'

const MeetOurAgents = () => {
   

    
    
  return (
    <div>
        <HeroSection title="Meet Our Agents" backgroundImage="../../../Images/MeetOurAgents.png"></HeroSection>
        <SocialAgents></SocialAgents>
        <ServiceAgent></ServiceAgent>
        <FAQs></FAQs>
        <Footer></Footer>
        
        
    </div>
  )
}

export default MeetOurAgents
