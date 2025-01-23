import React from "react";
import Navbar from "../../../reuseable/Navbar";
import Detail from "../../../reuseable/Detail";


const HeroSection = () => {
  return (
    <div className="bg-hero-image bg-cover  xl:h-[721px] md:h-[600px]  h-[75vh]  ">
      <Navbar />
      <div className="  ">
        <div className="container mx-auto px-4 relative xl:top-36 md:top-16 sm: top-16   ">
          <div className="grid grid-cols-12 ">
            <div className="lg:col-span-6 col-span-12  ">
              <h3 className="text-sm uppercase  text-white tracking-wider flex  ml-1 font-inter font-medium">
                <hr className="w-10 mt-3 mr-3 " />
                We are offering the
               
              </h3>
              <h1 className=" pt-4 text-3xl   flex  md:text-6xl font-bold  text-white  md:top-8 ,  ">
                Best Real Estate Deals
              </h1>

              <p className="  text-white leading-relaxed  pt-4   md:inline-block md:top-10    ">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet....
              </p>

              <div className=" pt-5">
                <button className="p-[8px_20px] bg-[#34E0A1] text-white rounded hover:bg-[#34e0a1cc] transition font-medium text-[20px] leading-8 ">
                  More Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <Detail />
      </div>
    </div>
  );
};

export default HeroSection;
