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
    <div className="  px-28  ml-3 ">
      <h2 className="font-sans font-semibold text-3xl py-2 ">
        Our <span className="text-[#34E0A1]">Features</span>
      </h2>
      <div className="flex  ">
        <div className=" ">
          {dataList.map((item, index) => (
            <div key={index} className="shadow-md p-4 my-6  w-[570px]  h-[120px] border-2">
              <h3 className="text-lg font-semibold text-[#0A0A0A] ">
                {item.title}
              </h3>
              <p className="text-base text-[#0A0A0A66] py-3">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="ml-60 h-[420px] w-[570px] ">
          <img
            src="../../../../Images/Cover.png"
            alt="reloading "
            className=" h-[420px] w-[410px]  "
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Our_Feature;
