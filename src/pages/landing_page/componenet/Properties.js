







import React from "react";
import {Arrows } from  "../../../reuseable/Icons"

const Properties = () => {
  const properties = [
    {
      id: 1,
      image: "/Images/Image 1.png", // Replace with actual image URL
    },
    {
      id: 2,
      image: "Images/Image 2.png", // Replace with actual image URL
      title: "New Property",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet",
    },
    {
      id: 3,
      image: "/Images/Image 3.png",
      title: "New Property",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet", // Replace with actual image URL
    },
    {
      id: 4,
      image: "/Images/Image 4.png",
      title: "New Property",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet", // Replace with actual image URL
    },
    {
      id: 5,
      image: "/Images/Image 6.png",
      title: "New Property",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet", // Replace with actual image URL
    },
  ];

  return (  
    <div className="bg-white  lg:pt-16 md:pt-40 pt-80  sm:pt-80 ">
      <div className="relative container px-4 mx-auto ">
        
   <div className="grid grid-cols-12 pt-5">
  <div className="col-span-">
   
  </div>

  <div className="col-span-12   sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-10">
    <h2 className="text-center md:text-5xl text-4xl  font-semibold leading-normal tracking-wide   text-[#34E0A1] font-inter">
    Featured{" "} 
      <span className=" text-[#0A0A0A] lg:text-5xl font-semibold leading-normal tracking-wide  font-inter">
      Properties
      </span>
    </h2>
    <p className="text-[rgba(10,10,10,0.40)] text-center text-[20px] font-normal leading-normal font-inter font-feature-off pt-5">
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
       Exercitation veniam consequat sunt nostrud amet.
    </p>
  </div>

  <div className="col-span-2">
  
  </div>
</div>
  </div>


      <div className="container mx-auto px-4 py-12 sm:px-4 md:px lg:px-4   ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className={`relative overflow-hidden rounded-lg group ${
                index === 0 ? "row-span-2 sm:row-span-1" : "" // First image spans two rows on small screens
              }`}
            >
              <img
                src={property.image}
                alt="Property"
                className="object-cover w-full h-full transition duration-300"
              />

              {property.title && (
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-white p-4">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-center">{property.title}</h3>
                  <p className="text-sm sm:text-base mb-4 text-center">{property.description}</p>
                   
                   <div className=" rounded-full w-10 h-10  flex items-center justify-center transition duration-300  shadow-[0px_0px_0px_8px_rgba(52,224,161,0.14)]">
                   <button className="w-10 h-10 bg-[#34E0A1] hover:bg-[#34e0a1d1] rounded-full flex items-center justify-center transition duration-300">
                    {/* <span className="text-white text-lg">&#10148;</span> */}
                    <Arrows></Arrows>
                  </button>
                   </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
