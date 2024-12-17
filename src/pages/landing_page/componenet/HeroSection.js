import React from "react";
import Navbar from "../../../reuseable/Navbar";
import Detail from "../../landing_page/componenet/Detail";
const HeroSection = () => {

  return (
    <div className="bg-hero-image bg-cover bg-center h-screen">
      <Navbar></Navbar>

     
     <div className="">
     <div className="relative max-w-3xl mx-auto px-4 top-32 right-72">
        <h3 className="text-sm uppercase text-gray-200 tracking-wider flex   ">
         <hr className="w-14 mt-3 mr-3 "></hr>
          We are offering the
        </h3>
        <h1 className="text-4xl md:text-6xl font-bold mt-4 text-white ">
          Best Real Estate Deals
        </h1>
        <p className="mt-4 text-gray-200 leading-relaxed">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <button className="mt-6 px-8 py-3 bg-[#34E0A1] text-white rounded hover:bg-green-600 transition">
          More Details
        </button>
     </div>
     
       <Detail></Detail>
     </div>
    
    </div> 
  );
};

export default HeroSection;
