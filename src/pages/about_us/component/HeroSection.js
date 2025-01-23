


import React from "react";
import Navbar from "../../../reuseable/Navbar";

const HeroSection = ({ title, backgroundImage }) => {
  return (
    <div
      className="bg-cover bg-center h-screen relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
     
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl  tracking-wide  px-4 py-2  text-white font-inter text-[72px] font-semibold leading-normal">
          {title}
        </h1>
      </div>
      <Navbar />
    </div>
  );
};

export default HeroSection;
