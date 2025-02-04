

import React from "react";

const Our_Feature = () => {
  const dataList = [
    {
      title: "Living Inside a Nature",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget diam habitant massa in..",
    },
    {
      title: "Royal Touch Paint",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget diam habitant massa in..",
    },
    {
      title: "Luxurious Fittings",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget diam habitant massa in..",
    },
  ];

  return (
    <div className="relative container px-5 mx-auto pt-24 bg-[rgba(208, 213, 221, 1)]  ">
      <h2 className="font-[inter] font-semibold text-5xl  text-[rgba(10, 10, 10, 1)]   ">
        Our <span className="text-[#34E0A1] font-semibold text-5xl font-[inter]"> Features</span>
      </h2>
      <div className=" lg:grid grid-cols-2 pt-16  gap-14 ">
        <div className=" ">
          {dataList.map((item, index) => (
            <div
              key={index}
              className=" h-[209.67px]  p-[32px] mt-5    rounded-lg border  border-[0.5px] border-[rgba(10,10,10,0.10)] bg-white shadow-[0px_14px_65px_0px_rgba(41,41,42,0.08)]
   "
            >
              <h3 className="  font-inter text-2xl font-semibold leading-[42.67px] tracking-[0.02em] text-left underline-offset-[from-font] decoration-none text-[rgba(10,10,10,1)]">
                {item.title}
              </h3>
              <p className="font-inter text-[19px] font-normal leading-[32px] text-left underline-offset-[from-font] decoration-none text-[rgba(10,10,10,0.4)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className=" object-contain flex items-center justify-center  md:pt-16  sm:pt-16 pt-16">
          <img
            src="../../../../Images/Cover.png"
            alt="Cover"
            className=" "
          />
        </div>
      </div>
    </div>
  );
};

export default Our_Feature;
