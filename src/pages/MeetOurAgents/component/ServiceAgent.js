import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const ServiceAgent = () => {
  return (
    <div className="container mx-auto   relative  bg-gradient-image  ">
      <div className="grid  lg:grid-cols-2   inset-0  h-full z-10       ">
        <div className=" relative pt-32 lg:pl-20 pl-10 space-y-7  md:pb-9 ">
          <h1 className="text-white font-inter lg:text-[55.218px]  md:text-[45px] font-semibold leading-[118.5%]">
            42+ years of helping you find the right Properties
          </h1>

          <p className=" text-white font-inter lg:text-[23.361px] md:text-[20px] font-normal leading-snug">
            Distinctively re-engineer revolutionary meta-services and premium.
            Distinctively re-engineer revolutionary meta-services and premium At
            vero eos et accusamus et iusto </p>
            <p className="text-white font-inter lg:text-[23.361px] font-normal leading-snug  md:text-[20px] ">
              Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores et quas molestias excepturi.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
        
          <button className="border-2 bg-white   justify-center items-center gap-[10.619px] w-[202.819px] h-[74.331px] p-[24.423px_29.733px] flex-shrink-0 text-[#34E0A1] font-inter text-[21.238px] font-medium leading-[118.5%] ">
            Learn More
            <FontAwesomeIcon icon={faArrowRight} className="ml-3" /> 
          </button>
            
        </div>

        <div className="relative z-[-1] ">
          <img
            src="../../../../Images/laptoop.png"
            alt="Hero Section Illustration"
            className="  bg-no-repeat "
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceAgent;
