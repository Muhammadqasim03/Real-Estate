// import React, {  } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaInstagram,FaFacebook, FaTwitter } from "react-icons/fa";

// // SocialIcon component

// const SocialIcon = ({ platform }) => {
//   const icons = {
//     instagram: <FaInstagram className="mx-1 text-gray-500" />,
//     facebook: <FaFacebook className="mx-1 text-gray-500" />,
//     twitter: <FaTwitter className="mx-1 text-gray-500" />,
//   };
//   return icons[platform] || null;
// };

// // Card component
// const Card = ({ name, role, img, socials }) => (
//   <div className=" lg:w-[px] md:w-[] rounded-lg  ">
//     <img className="  object-cover rounded-t-lg w-full" src={img} alt={name} />
//     <div className="flex flex-col p-4 gap-2 border-t border-gray-300  rounded-[5px] border-[0.5px] border-[rgba(10,10,10,0.4)]">
//       <h3 className="text-black font-inter text-lg font-semibold">{name}</h3>
//       <div className="flex justify-between items-center">
//         <p className="text-gray-500 font-inter text-sm">{role}</p>
//         <span className="flex space-x-2 border-2 ">
//           {socials.map((platform, index) => (
//             <SocialIcon key={index} platform={platform}  />
//           ))}
//         </span>
//       </div>
//     </div>
//   </div>
// );

// // SocialAgents component
// const SocialAgents = () => {
//   const navigate = useNavigate();

//   const handleCardClick = () => {
//     navigate("/");
//   };
//   console.log(handleCardClick);
//   const cardData = [
//     {
//       name: "Peter Parker",
//       role: "Land Seller",
//       img: "/Images/Rectangle 383.png",
//       socials: ["facebook", "instagram", "twitter"],
//     },
//     {
//       name: "Elena Gilberts",
//       role: "Land Seller",
//       img: "/Images/Rectangle 384.png",
//       socials: ["facebook", "instagram", "twitter"],
//     },
//     {
//       name: "Peter Parker",
//       role: "Land Seller",
//       img: "/Images/Rectangle 385.png",
//       socials: ["facebook", "instagram", "twitter"],
//     },
//     {
//       name: "Rosalina William",
//       role: "Land Seller",
//       img: "/Images/Rectangle 386.png",
//       socials: ["facebook", "instagram", "twitter"],
//     },
//     {
//       name: "Peter Parker",
//       role: "Land Seller",
//       img: "/Images/Rectangle 387.png",
//       socials: ["facebook", "instagram", "twitter"],
//     },
//     {
//       name: "Kelian Anderson",
//       role: "Land Seller",
//       img: "/Images/Rectangle 388.png",
//       socials: ["facebook", "instagram", "twitter"],
//     },
//     {
//       name: "Peter Parker",
//       role: "Land Seller",
//       img: "/Images/Rectangle 389.png",
//       socials: ["facebook", "instagram", "twitter"],
//     },
//     {
//       name: "Peter Parker",
//       role: "Land Seller",
//       img: "/Images/Rectangle 390.png",
//       socials: ["facebook", "instagram", "twitter"],
//     },
//   ];

//   return (
//     <div className="container mx-auto px-4 ">
//       <div className=" ">
//         <div
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4  gap-4 pt-20 pb-20  "
//           onClick={handleCardClick}
//         >
//           {cardData.map((card, index) => (
//             <Card key={index} {...card} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SocialAgents;


import React from "react";
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

// SocialIcon component
const SocialIcon = ({ platform }) => {
  const icons = {
    instagram: <FaInstagram className="mx-1 text-gray-500" />,
    facebook: <FaFacebook className="mx-1 text-gray-500" />,
    twitter: <FaTwitter className="mx-1 text-gray-500" />,
  };
  return icons[platform] || null;
};

// Card component
const Card = ({ name, role, img, socials }) => (
  <div className="lg:w-[px] md:w-[] rounded-lg">
    <img className="object-cover rounded-t-lg w-full" src={img} alt={name} />
    <div className="flex flex-col p-4 gap-2 border-t border-gray-300 rounded-[5px] border-[0.5px] border-[rgba(10,10,10,0.4)]">
      <h3 className="text-black font-inter text-lg font-semibold">{name}</h3>
      <div className="flex justify-between items-center">
        <p className="text-gray-500 font-inter text-sm">{role}</p>
        <span className="flex space-x-2 ">
          {socials.map((platform, index) => (
            <SocialIcon key={index} platform={platform} />
          ))}
        </span>
      </div>
    </div>
  </div>
);

// SocialAgents component
const SocialAgents = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/");
  };

  const cardData = [
    {
      name: "Peter Parker",
      role: "Land Seller",
      img: "/Images/Rectangle 383.png",
      socials: ["instagram", "twitter", "facebook"], // Order of icons changed here
    },
    {
      name: "Elena Gilberts",
      role: "Land Seller",
      img: "/Images/Rectangle 384.png",
      socials: ["instagram", "twitter", "facebook"], // Order of icons changed here
    },
    {
      name: "Peter Parker",
      role: "Land Seller",
      img: "/Images/Rectangle 385.png",
      socials: ["instagram", "twitter", "facebook"], // Order of icons changed here
    },
    {
      name: "Rosalina William",
      role: "Land Seller",
      img: "/Images/Rectangle 386.png",
      socials: ["instagram", "twitter", "facebook"], // Order of icons changed here
    },
    {
      name: "Peter Parker",
      role: "Land Seller",
      img: "/Images/Rectangle 387.png",
      socials: ["instagram", "twitter", "facebook"], // Order of icons changed here
    },
    {
      name: "Kelian Anderson",
      role: "Land Seller",
      img: "/Images/Rectangle 388.png",
      socials: ["instagram", "twitter", "facebook"], // Order of icons changed here
    },
    {
      name: "Peter Parker",
      role: "Land Seller",
      img: "/Images/Rectangle 389.png",
      socials: ["instagram", "twitter", "facebook"], // Order of icons changed here
    },
    {
      name: "Peter Parker",
      role: "Land Seller",
      img: "/Images/Rectangle 390.png",
      socials: ["instagram", "twitter", "facebook"], // Order of icons changed here
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-20 pb-20"
          onClick={handleCardClick}
        >
          {cardData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialAgents;
