import React from "react";

import Navbar from "../../../reuseable/Navbar";
const HeroSection = ({ title, backgroundImage }) => {
  // console.log("backgroundImage:",backgroundImage);
  // console.log("title:",title);
  return (
    <div
      className="bg-about-image  bg-cover  h-screen border-2  border-gray-400"
      style={{
        backgroundImage: `url(${backgroundImage})`,}}>
      <Navbar />

      <div className="relative max-w-3xl mx-auto px-4 top-32 right-72 ">
        <h1 className="text-4xl md:text-6xl font-bold mt-4 justify-center flex text-[#FFFFFF]">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
