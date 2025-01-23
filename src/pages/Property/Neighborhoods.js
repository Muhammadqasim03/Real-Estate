import React from "react";

const neighborhoods = [
  {
    city: "New York",
    properties: "250 Property",
    image: "../../../Images/1.png",
  },
  {
    city: "Atlanta",
    properties: "120 Property",
    image: "../../../Images/2.png",
  },
  {
    city: "Singapore",
    properties: "53 Property",
    image: "../../../Images/3.png",
  },
  {
    city: "Paris",
    properties: "99 Property",
    image: "../../../Images/4.png",
  },
];

const Neighborhoods = () => {
  return (
    <div className="bg-white py-8   ">
      <div className="container mx-auto px-4   ">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center mb-8">
          Discover The Neighborhoods
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {neighborhoods.map((neighborhood, index) => (
            <div
              key={index}
              className="relative bg-black rounded-lg overflow-hidden shadow-lg group "
            >
              <img
                src={neighborhood.image}
                alt={neighborhood.city}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 "></div>
              {/* <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-xl font-bold">{neighborhood.city}</h2>
                <p className="text-sm text-[#34E0A1]">{neighborhood.properties}</p>
              </div> */}
              <div className="absolute top-3.4 right-3.5">
                <button className="bg-white text-[#34E0A1] p-2 rounded-full shadow-md hover:bg-[#6cd5afd8] hover:text-white transition duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5l6 6m0 0l-6 6m6-6H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Neighborhoods;