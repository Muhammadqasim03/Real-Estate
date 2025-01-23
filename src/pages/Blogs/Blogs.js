import React from 'react'
import HeroSection from '../Blogs/component/HeroSection'
import LatestBlogs from './component/LatestBlogs'
import SubscribeSection from '../landing_page/componenet/SubscribeSection'
import FAQs from '../landing_page/componenet/FAQs'
import Footer from '../../reuseable/Footer'

const Blogs = () => {
        
   

  return (
    <div>
         <HeroSection
        title="About Us"
        backgroundImage="../../../Images/blogsbg.png"
      ></HeroSection>
      <LatestBlogs></LatestBlogs>
      <SubscribeSection></SubscribeSection>
      <FAQs></FAQs>
      <Footer></Footer>
    </div>
  )
}

export default Blogs
