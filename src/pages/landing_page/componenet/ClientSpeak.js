
import React, { } from "react";
import {Commas}  from "../../../reuseable/Icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {  } from "@fortawesome/free-solid-svg-icons/fa0";

const ClientSpeak = () => {
  const cardData = [
    [
      {
        title: "Professional Partner",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor non sit sed magna pharetra in amet porta enim.",
        img: "../../../../Images/Avatar 1.png",
        name: "Lorri Warf",
        role: "UX Designer",
      },
      {
        title: "Great Collaboration",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor non sit sed magna pharetra in amet porta enim.",
        img: "../../../../Images/Profile (1).png",
        name: "John Doe",
        role: "Project Manager",
      },
      {
        title: "Excellent Support",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        img: "../../../../Images/profile.png",
        name: "Jane Smith",
        role: "Product Owner",
      },
    ],
    [
      {
        title: "Innovative Ideas",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        img: "../../../../Images/Avatar 1.png",
        name: "Alice Brown",
        role: "Software Engineer",
      },
      {
        title: "Timely Delivery",
        text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        img: "../../../../Images/Profile (1).png",
        name: "Bob White",
        role: "Team Lead",
      },
      {
        title: "Great Outcome",
        text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.",
        img: "../../../../Images/profile.png",
        name: "Charlie Green",
        role: "Marketing Specialist",
      },
    ],
  ];

  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 700,
    autoplaySpeed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    
    responsive: [
      {
        breakpoint: 1440,  
        settings: {
          slidesToShow: 3,  
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,  
        settings: {
          slidesToShow: 2,  
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,  // Jab screen width 768px se kam ho
        settings: {
          slidesToShow: 2,  // 768px se kam screen par sirf 1 slide show karen
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,  // Jab screen width 768px se kam ho
        settings: {
          slidesToShow: 1,  // 768px se kam screen par sirf 1 slide show karen
          slidesToScroll: 1
        }
      }
    ]
  };
  

  return (
    <div className="container mx-auto px-4 bg-white pt-12  ">
      <div className="relative container  mx-auto bg-white">
        <div className="grid grid-cols-12 ">
          <div className="col-span-2"></div>
          <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-8">
            <h2 className="text-center font-sans font-medium text-4xl sm:text-2xl md:text-5xl">
              Our Clients <span className="text-[#34E0A1]">Speak</span>
            </h2>
            <div className="text-[#0A0A0A66] text-center pt-4">
              <p className="text-[rgba(10,10,10,0.40)] text-center text-[20px] font-normal leading-normal font-inter font-feature-off lg:pt-5 md:pt-4">
                We have been working with clients around the world
              </p>
            </div>
          </div>
          <div className="col-span-2"></div>
        </div>
      </div>

     
      <div className="    ">
        <Slider {...settings}>
          {cardData.flat().map((card, index) => (
            <div
              key={index}
              className="inner-div relative  px-6 py-24  bg-white rounded-lg text-center h-[]    "
            >
              <div className="  w-[466.66] h-[256px] border shadow-xl rounded-[10.66px]   ">
                <div className="text-4xl text-teal-300 flex justify-center items-center py-4">
                  <b> <Commas></Commas> </b>
               
                </div>
                <h2 className="text-lg font-bold text-black mb-2">{card.title}</h2>
                <p className="text-sm text-gray-500 mb-4 px-8 py-2">{card.text}</p>
              </div>
              <div className="absolute 2xl:left-[237px] xl:left-[217px] lg:left-[245px] md:left-[180px] top-[338.6px]  left-[160px] transform -translate-x-1/2 w-5 h-5 bg-white shadow-lg rotate-45"></div>
              <img
                src={card.img}
                alt="Profile"
                className="w-16 h-16 rounded-full shadow-md mt-6 2xl:ml-[183px] xl:ml-[165px] lg:ml-[190px] md:ml-[130px] ml-[110px]"
              />
              <h3 className="text-sm font-semibold text-black mt-1">{card.name}</h3>
              <p className="text-xs text-gray-400  ">{card.role}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ClientSpeak;

