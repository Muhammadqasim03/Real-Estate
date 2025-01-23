import React from "react";

import HeroSection from "../landing_page/componenet/HeroSection";
import Properties from "./componenet/Properties";
import OurFeature from "./componenet/OurFeature";
import RecentPrperties from "./componenet/RecentPrperties";
import MeetOurTeam from "./componenet/MeetOurTeam";
import ClientSpeak from "./componenet/ClientSpeak";
import SubscribeSection from "./componenet/SubscribeSection";
import FAQs from "./componenet/FAQs";

import Footer from "../../reuseable/Footer";

const landingPage = ({ title, backgroundImage }) => {
  return (
    <div className="">
      <HeroSection title =""/>
      <Properties></Properties>
      <OurFeature></OurFeature>
      <RecentPrperties></RecentPrperties>
      <MeetOurTeam></MeetOurTeam>
      <ClientSpeak></ClientSpeak>
      <SubscribeSection></SubscribeSection>
      <FAQs></FAQs>
      <Footer></Footer>
    </div>
  );
};

export default landingPage;
