import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faCar,
  faRulerCombined,
} from "@fortawesome/free-solid-svg-icons";
const properties = [
  {
    price: "$4500/Mo",
    status: "For Sale",
    title: "Comfortable Apartment",
    address: "700 West Drive Chicago, IL 60608",
    details: { beds: 3, baths: 2, parking: 1, area: "1200sqft" },
    image: "../../../../Images/Comfortable.png",
  },
  {
    price: "$2500/Mo",
    status: "For Sale",
    title: "Comfortable Apartment",
    address: "700 West Drive Chicago, IL 60608",
    details: { beds: 3, baths: 2, parking: 1, area: "1200sqft" },

    image: "../../../../Images/Appartment.png",
  },
  {
    price: "$3500/Mo",
    status: "For Sale",
    title: "Luxury Family Loft by Victoria Park",
    address: "700 West Drive Chicago, IL 60608",
    details: { beds: 3, baths: 2, parking: 1, area: "1200sqft" },
    image: "../../../../Images/luxury.png",
  },
  {
    price: "$2500/Mo",
    status: "For Sale",
    title: "Best apartments on sale",
    address: "700 West Drive Chicago, IL 60608",
    details: { beds: 3, baths: 2, parking: 1, area: "1200sqft" },
    image: "../../../../Images/BestAppartment.png",
  },
  {
    price: "$3200/Mo",
    status: "For Sale",
    title: "Luxury Family Loft by Victoria Park ",
    address: "700 West Drive Chicago, IL 60608",
    details: { beds: 3, baths: 2, parking: 1, area: "1200sqft" },
    image: "../../../../Images/luxuryfamily.png",
  },
  {
    price: "$3500/Mo",
    status: "For Sale",
    title: "Luxury Family Loft by Victoria Park",
    address: "700 West Drive Chicago, IL 60608",
    details: { beds: 3, baths: 2, parking: 1, area: "1200sqft" },
    image: "../../../../Images/luxuryVictoria.png",
  },
];

const AssetCards = ({ className }) => {
  return (
    <div className={className}>
      <div className="bg-[#F7FEFB] min-h-screen  ">
        <div className="container mx-auto   grid grid-rows-1 ">
          <div className=" p-12">
            <h1 className="text-[#0A0A0A] text-center font-inter lg:text-[52px]  md:text-[52px] text-[30px] xxs:text-[25px] font-semibold lg:leading-[61.62px] ">
              Properties For Sale In <br></br>Your Favorite Area
            </h1>
          </div>
          <div className="container mx-auto px-4 ">
            <div className=" p-4 bg-white rounded-md">
              <div className="grid  grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  rounded-lg  justify-items-center   ">
                {properties.map((property, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-[550px]  "
                  >
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full object-cover"
                    />
                    <div className="p-4 ">
                      <div className="flex justify-between items-center ">
                        <h2 className="text-xl font-bold ">{property.price}</h2>
                        <span className="font-medium p-[22px_19px] items-center justify-center flex text-white bg-[#34E0A1] h-9 rounded-md cursor-pointer ">
                          {property.status}
                        </span>
                      </div>
                      <h3 className=" text-[#0A0A0A] font-inter text-[25px]  font-semibold leading-[29.625px] pt-4">
                        {property.title}
                      </h3>
                      <p className="text-[rgba(10,10,10,0.40)] font-inter text-[20px] font-normal leading-[23.7px] pt-4">
                        {property.address}
                      </p>
                     

                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4  lg:grid-cols-3 gap-2  pt-4 whitespace-pre overflow-ellipsis ">
                        <div className=" p-[14px_17px] flex justify-center items-center rounded-[5px] border-[1px] border-solid border-[rgba(10,10,10,0.40)] bg-white">
                          <span className="items-center text-sm">
                            <FontAwesomeIcon
                              icon={faBed}
                              style={{ color: "black" }}
                            />
                            <span className="text-[#0A0A0A66] px-1">|</span>
                            {property.details.beds}Beds
                          </span>
                        </div>

                        <div className="p-[14px_17px] flex justify-center gap-[10px] rounded-[5px] border-[1px] border-solid border-[rgba(10,10,10,0.40)] bg-white">
                          <span>
                            <FontAwesomeIcon
                              icon={faBath}
                              style={{ color: "black" }}
                            />
                            <span className="text-[#0A0A0A66] px-1 ">|</span>
                            {property.details.baths} Baths
                          </span>
                        </div>

                        <div className="p-[14px_17px] flex justify-center  gap-[10px] rounded-[5px] border-[1px] border-solid border-[rgba(10,10,10,0.40)] bg-white">
                          <span className="cursor-pointer ">
                            <FontAwesomeIcon
                              icon={faCar}
                              style={{ color: "black" }}
                            />
                            <span className="text-[#0A0A0A66] px-1">|</span>
                            {property.details.parking} Parking
                          </span>
                        </div>

                        <div className="p-[14px_17px] flex justify-center gap-[10px] rounded-[5px] border-[1px] border-solid border-[rgba(10,10,10,0.40)] bg-white">
                          <span className="cursor-pointer">
                            <FontAwesomeIcon
                              icon={faRulerCombined}
                              style={{ color: "black" }}
                            />
                            <span className="text-[#0A0A0A66] px-1">|</span>
                            {property.details.area}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-2.5 p-6">
            <button className="flex items-center justify-center bg-[#34E0A1] py-2 px-4 rounded-lg shadow-md hover:bg-[#43f3b2] cursor-pointer text-white font-inter text-lg font-medium">
              Touch With Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                className="ml-2"
              >
                <path
                  d="M17.5 8C17.5 3.58192 13.6942 0 9 0C4.30579 0 0.5 3.58192 0.5 8C0.5 12.4181 4.30579 16 9 16C13.6942 16 17.5 12.4181 17.5 8ZM8.80998 11.5138C8.749 11.4569 8.70054 11.3893 8.66736 11.3147C8.63417 11.2402 8.61692 11.1602 8.61658 11.0794C8.61623 10.9985 8.63281 10.9184 8.66537 10.8437C8.69792 10.7689 8.74581 10.7008 8.8063 10.6435L10.9444 8.61539H5.48558C5.31217 8.61539 5.14586 8.55055 5.02324 8.43514C4.90062 8.31974 4.83173 8.16321 4.83173 8C4.83173 7.83679 4.90062 7.68026 5.02324 7.56486C5.14586 7.44945 5.31217 7.38462 5.48558 7.38462H10.9444L8.8063 5.35654C8.74582 5.29911 8.69795 5.23103 8.66542 5.15619C8.63289 5.08135 8.61635 5.00122 8.61673 4.92036C8.61711 4.8395 8.6344 4.7595 8.66763 4.68494C8.70086 4.61037 8.74937 4.54269 8.81038 4.48577C8.8714 4.42885 8.94374 4.38379 9.02325 4.35318C9.10277 4.32257 9.18792 4.30699 9.27383 4.30735C9.44733 4.30807 9.61343 4.37363 9.73558 4.48962L12.9799 7.56654C13.1014 7.68181 13.1696 7.83761 13.1696 8C13.1696 8.16239 13.1014 8.31819 12.9799 8.43346L9.73558 11.5104C9.67509 11.5679 9.60314 11.6136 9.52386 11.6449C9.44458 11.6762 9.35951 11.6925 9.27354 11.6928C9.18756 11.6931 9.10237 11.6775 9.02282 11.6468C8.94328 11.6161 8.87095 11.5709 8.80998 11.5138Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetCards;
