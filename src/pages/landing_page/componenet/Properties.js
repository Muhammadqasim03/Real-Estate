import React from "react";

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
    <div className="bg-white  mx-24  m-7">
      <div className=" w-[700px]  ml-80 mt-14 ">
        <div className=" text-center">
          <h2 className="font-sans font-medium text-2xl">
            <span className="text-[#34E0A1]  ">Featured</span> Properties
          </h2>
        </div>
        <div className="text-[#0A0A0A66]">
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat{" "}
            <span className="ml-20">
              {" "}
              duis enim velit mollit.Exercitation veniam consequat sunt nostrud
              amet.
            </span>
          </p>
        </div>
      </div>

     <div className="container mx-auto  py-8 px-9 ">
               
                <div className="grid grid-cols-3  gap-4 ">
                    {properties.map((property,index) => (
                
                        <div
              key={property.id}
              className={`relative overflow-hidden  rounded-lg group ${
                index === 0 ? "row-span-2" : "" // First image spans two rows
              }`}
            >
                            <img src={property.image} alt="Property" className=" object-cover "/>
                    
                            {property.title && (
                                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-white p-4">
                                    <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                                    <p className="text-sm mb-4 text-center">{property.description}</p>
                                    <button className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition duration-300">
                                        <span className="text-white text-lg">&#10148;</span>
                                    </button>
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

