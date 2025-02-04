import React from "react";
import { Arrow, SearchIcon } from "../reuseable/Icons";

const Detail = () => {
  return (
    <div className="  container mx-auto px-4 xl:pt-64  lg:pt-16  md:pt-28  sm:pt-[90px]  pt-[100px]  ">
      <div className=" backdrop-blur-[4px] md:bg-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.10)] shadow rounded-[10px]   py-6  items-start  ">
        <label className=" w-62   flex md:ps-10 ps-4 py-3 text-white text-2xl  font-medium    relative bottom-3    sm:items-center  sm:bg-transparent lg:block lg:flex    ">
          Find Your Home{" "}
          <span className="ml-4 ">
            <SearchIcon></SearchIcon>
          </span>
        </label>
        <hr className="md:hidden mb-4 mx-4" />

        <div className=" grid  md:px-10 px-4 lg:grid-cols-4 md:grid-cols- grid-cols-1  gap-5   relative ">
          <div className="relative  ">
            <div className="absolute left-52 top-2">
              <Arrow />
            </div>
            <select className="appearance-none  pr-10  bg-transparent border-none text-gray-600  xl:w-64 lg:w-52  w-full p-3 focus:outline-none sm:mb-4 md:mb-0 rounded-[8px] border-[1.333px] border-[#D0D5DD] bg-white shadow-[0px_1.333px_2.667px_0px_rgba(16,24,40,0.05)]">
              <option value="" className="">
                 Location
              </option>
              <option value="Lahore">Lahore</option>
              <option value="Karachi">Karachi</option>
              <option value="Multan">Multan</option>
            </select>
          </div>

          <div className="relative">
            <div className="absolute left-52 top-2">
              <Arrow />
            </div>
            <select className="w-full appearance-none  xl:w-64 lg:w-52  p-3  text-gray-600 rounded-md  focus:outline-none sm:mb-4 md:mb-0  border-[1.333px] border-[#D0D5DD] bg-white shadow-[0px_1.333px_2.667px_0px_rgba(16,24,40,0.05)]">
              <option value="" className="text-gray-500">
                Category
              </option>
              <option value="sale" className="text-black">
                For Sale
              </option>
              <option value="rent" className="text-black">
                For Rent
              </option>
            </select>
          </div>
          
          <div className="relative">
          <div className="absolute left-52 top-2">
              <Arrow />
            </div>
          <select className=" appearance-none  xl:w-64 lg:w-52  w-full p-3 border border-gray-300 rounded-md bg-white text-gray-600 focus:outline-none sm:mb-4 md:mb-0">
            <option value="">Property Type</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="villa">Villa</option>
          </select>

          </div>

          <button className=" xl:w-64 lg:w-52  w-full p-3 bg-[#34E0A1] drop-shadow-[#7F57F10D] text-white rounded-md  ">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
