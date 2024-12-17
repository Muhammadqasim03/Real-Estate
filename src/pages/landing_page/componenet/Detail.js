import React from "react";

const Detail = () => {
  return (
    <div className="relative  top-60 h-40 w-[83%] left-28  backdrop-blur-[1px]  p-5  bg-[rgba(255,255,255,0.10)] rounded-lg">
      <label className="text-white text-xl relative top-3  left-9 ">Find Your Home </label>

      <div className="flex flex-col md:flex-row gap-6  items-center mt-9 ml-8">
        <select className="w-64 p-3 border border-gray-300 rounded-md bg-white text-black focus:outline-none">
          <option value="">Location</option>
          <option value="Lahore">Lahore</option>
          <option value="karachi">karachi</option>
          <option value="Multan">Multan</option>
        </select>

        <select className="w-64 p-3 border border-gray-300 rounded-md bg-white text-black focus:outline-none">
          <option value="">Category</option>
          <option value="sale">For Sale</option>
          <option value="rent">For Rent</option>
        </select>

        <select className="w-64 p-3 border border-gray-300 rounded-md bg-white text-black focus:outline-none">
          <option value="">Property Type</option>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="villa">Villa</option>
        </select>

        <button className="w-64 p-3 bg-[#34E0A1] drop-shadow-[#7F57F10D] text-white rounded-md">
          Search
        </button>
      </div>
    </div>
  );
};

export default Detail;
