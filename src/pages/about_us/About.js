import React from "react";

import HeroSection from "../../pages/about_us/component/HeroSection";

import PropertySection from "./component/PropertySection";
import MainFocus from "./component/MainFocus";
import RealEstateSection from "./component/RealEstateSection";
import MeetOurTeam from "../../pages/landing_page/componenet/MeetOurTeam"
import SubscribeSection from "../landing_page/componenet/SubscribeSection";
import FAQs from "../landing_page/componenet/FAQs"
import Footer from "../../reuseable/Footer"
const About = () => {
  return (
    <div>
      <HeroSection
        title="About Us"
        backgroundImage="../../../Images/about.png"
      ></HeroSection>
      <PropertySection></PropertySection>
      <MainFocus/>
      <RealEstateSection></RealEstateSection>
      <MeetOurTeam></MeetOurTeam>
      <SubscribeSection></SubscribeSection>
      <FAQs></FAQs>
      <Footer></Footer>

    </div>
  );
};

export default About;
