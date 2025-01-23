import React from "react";
import MainHeading from "../../../reuseable/MainHeading";

const MainFocus = () => {
  const focusItems = [
    {
      id: 1,
      title: "Planning stage",
      description:
        "High level overviews, approaches lverall value proposition. Organically grow the holistic world view of disruptive.",
      image: "../../../../Images/bgPlanning.png",
    },
    {
      id: 2,
      title: "Development",
      description:
        "High level overviews, approaches lverall value proposition. Organically grow the holistic world view of disruptive.",
      image: "../../../../Images/bgDevelopment.png",
    },
    {
      id: 3,
      title: " New way of living",
      description:
        "High level overviews, approaches lverall value proposition. Organically grow the holistic world view of disruptive.",
      image: "../../../../Images/bgNewway.png",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="    ">
      
        <MainHeading title={"Our Main Focus"} />
        <div className="grid md:grid-cols-3 grid-cols-1 w-full gap-5  pt-12">
          {focusItems.map((item) => (
            <div
              key={item.id}
              className="relative  rounded-lg shadow-lg  bg-red-700 py-10  h-full w-full border-2" 
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover", 
                backgroundPosition: "center",  
              }}
              >
             
                 
              <div className="  p-6 text-white">
           
                <div className="bg-[#34E0A1] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm mb-5">
                  0{item.id}
                </div>
           
                <div className=" flex flex-col ml-3">
                  <h3 className="text-2xl font-semibold mb-2 m-0 p-0 text-left text-[#FFFFFF]">
                    {item.title}
                  </h3>
             
                  <p className="text-sm leading-relaxed  m-0 p-0 text-start text-[#FFFFFF] font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainFocus;






