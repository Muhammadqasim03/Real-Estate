// import React from 'react';

// const PropertyGallery = () => {
//   const properties = [
//     {
//       id: 1,
//       src: "../../../../Images/gallery1.png", // Replace with actual image URL
//       alt: "Property 1",
//     },
//     {
//       id: 2,
//       src: "../../../../Images/gallery2.png", // Replace with actual image URL
//       alt: "Property 2",
//     },
//     {
//       id: 3,
//       src: "../../../../Images/gallery3.png", // Replace with actual image URL
//       alt: "Property 3",
//     },
//   ];


 

//   return (
//     <div className='container mx-auto  px-4 bg-[rgba(52,224,161,0.04)] flex flex-col justify-center items-center  py-[40px] gap-[50px]  border-2 border-gray-700'>
//       <h1 className='text-[#0A0A0A] font-["inter"] text-[52px] font-semibold leading-[118.5%] pt-4 text-center border-2  '>Property Gallery</h1>
//       <div className=' grid grid-cols-3 justify-center items-center  border-2 border-red-500  h-[394px] w-full '  >
//         {properties.map((property) => (
//           <img
//             key={property.id}
//             src={property.src}
//             alt={property.alt}
//             className='object-contain rounded-xl h-[392px]'
              
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PropertyGallery;


import React from 'react';

const PropertyGallery = () => {
  const properties = [
    {
      id: 1,
      src: "../../../../Images/gallery1.png", // Replace with actual image URL
      alt: "Property 1",
    },
    {
      id: 2,
      src: "../../../../Images/gallery2.png", // Replace with actual image URL
      alt: "Property 2",
    },
    {
      id: 3,
      src: "../../../../Images/gallery3.png", // Replace with actual image URL
      alt: "Property 3",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20 bg-[rgba(52,224,161,0.04)]">
      <h1 className="text-black font-inter text-4xl font-semibold text-center mb-8">
        Property Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <img
            key={property.id}
            src={property.src}
            alt={property.alt}
            className="w-full h-96 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default PropertyGallery;
