import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBath, faCar, faRulerCombined } from '@fortawesome/free-solid-svg-icons';

const propertyList = [
  {
    price: '$3500/Mo',
    status: 'For Sale',
    details: { beds: 3, baths: 2, parking: 1, area: '1200sqft' },
  },
  
];

const PropertyList = () => {
  return (
    // w-[603px]
    <div className=" h-[225px]   flex-col items-start shrink-0">
      {propertyList.map((property, index) => (
        <div
          key={index}
          className=" grid grid-rows-3 " >
          <div className=" ">
            <span className="text-lg font-extrabold text-black">{property.price}</span>
          </div> 
          <div className=" grid grid-cols-4   text-gray-600  items-center gap-[5px]  ">
            <div className="   h-[52px] flex items-center  shrink-0 border p-1 border-[#0A0A0A66] cursor-pointer text-[#0A0A0A] font-normal ">
              <FontAwesomeIcon icon={faBed} className="text-[#34E0A1]"  />
              <span className="text-[#0A0A0A66] mx-1">|</span>
              <span className="text-gray-700">{property.details.beds} Beds</span>
              
            </div>
            <div className=" h-[52px]   flex items-center border p-1 border-[#0A0A0A66] cursor-pointer text-[#0A0A0A] font-normal">
              <FontAwesomeIcon icon={faBath} className="text-[#34E0A1]" />
              <span className="text-[#0A0A0A66] mx-1">|</span>
              <span className="text-gray-700">{property.details.baths} Baths</span>

            </div>
            <div className=" h-[52px]  flex items-center border p-1 border-[#0A0A0A66] cursor-pointer text-[#0A0A0A] font-normal overflow-hidden">
              <FontAwesomeIcon icon={faCar} className="text-[#34E0A1]" />
              <span className="text-[#0A0A0A66] mx-1">|</span>
              <span className="text-gray-700">{property.details.parking} Parking</span>

            </div>
            <div className=" h-[52px]  flex items-center border p-1 border-[#0A0A0A66] cursor-pointer text-[#0A0A0A] font-normal ">
              <FontAwesomeIcon icon={faRulerCombined} className="text-[#34E0A1]" />
              <span className="text-[#0A0A0A66] mx-1">|</span>
              <span className="text-gray-700">{property.details.area}</span>

            </div>
          
        </div>
          <span className="font-medium w-[90px] items-center justify-center flex text-white bg-[#34E0A1]  h-10 border-2  rounded-sm cursor-pointer mt-[34px]">
            {property.status}
          </span>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;




