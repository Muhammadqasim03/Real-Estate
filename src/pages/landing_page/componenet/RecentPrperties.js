import React, { useState } from "react";

const RecentPrperties = () => {
  const [showFullText, setShowFullText] = useState(false);
  const [showText, setShowText] = useState(false);
  const [readMore, setReadMore] = useState(false);

  const toggleRead = () => {
    setReadMore(true); // Once clicked, set the state to true
  };
  const toggleReadMore = () => {
    setShowFullText(!showFullText);
  };
  const toggleText = () => {
    setShowText(!showText);
  };

  return (
    <div className="relative container mx-auto px-4 pt-16 ">
      <div className="relative container mx-auto px-4  ">
        
         

        <div className="grid grid-cols-12  pt-5 ">
          <div className="col-span- "></div>

          <div className=" col-span-12  sm:col-span-12 md:col-span-10 lg:col-span-12 xl:col-span-10  ">
            <h2 className="text-center md:text-5xl text-4xl font-semibold leading-normal tracking-wide text-[#0A0A0A] font-inter">
              Recent{" "}
              <span className="text-[#34E0A1] md:text-5xl  text-4xl font-semibold leading-normal tracking-wide capitalize font-inter">
                Properties
              </span>
            </h2>
            <p className="text-[rgba(10,10,10,0.40)] text-center text-[20px] font-normal leading-normal font-inter font-feature-off  pt-5">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>

          <div className="col-span-2"></div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-2 gap-6   pt-12">
        <div className="shadow-lg rounded-lg ">
          <img
            src="../../../../Images/Image 6 (2).png"
            alt="property 1"
            className=" rounded-lg w-full h-full object-cover "
          />
        </div>

        <div className=" rounded-lg p-4 shadow-lg  ">
          <h3 className="text-lg sm:text-xl font-semibold text-[#34E0A1]">
            Interior Design
          </h3>
          <p className="text-[rgba(10,10,10,0.40)] text-base font-normal leading-[34px] tracking-[3px] font-inter font-feature-off">
            {showFullText
              ? "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet..."
              : "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."}
          </p>
          <button
            onClick={toggleReadMore}
            className="text-[#34E0A1]  hover:underline text-base font-normal leading-[34px] tracking-[3px] font-inter font-feature-off"
          >
            {showFullText ? "" : "Read more"}
          </button>
          <div className="mt-32">
            <p className="text-black font-bold text-2xl">$ 20,000/ Month</p>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-2 gap-6 ">
        <div className="  p-4  rounded-md border border-[#0A0A0A] border-opacity-10 bg-white shadow-lg">
          <h3 className="text-lg sm:text-xl font-semibold text-[#34E0A1]">
            Interior Design
          </h3>
          <p className="text-[rgba(10,10,10,0.40)] text-base font-normal leading-[34px] tracking-[3px] font-inter font-feature-off">
            {showText
              ? "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet..."
              : "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."}
          </p>
          <button
            onClick={toggleText}
            className=" hover:underline text-[#34E0A1]  text-base font-normal leading-[34px] tracking-[3px] font-inter font-feature-off"
          >
            {showText ? "" : "Read more"}
          </button>
          <div className="mt-32">
            <p className="text-black font-bold text-2xl">$ 26,000/ Month</p>
          </div>
        </div>

        {/* Property 2 Image */}
        <div className="shadow-lg rounded-lg">
          <img
            src="../../../../Images/Image 7 (1).png"
            alt="property 2"
            className=" rounded-lg w-full h-full object-cover"
          />
        </div>
      </div>

      {/* View More Button */}
      {!readMore && (
        <div className="flex justify-center  p-16">
          <button
            onClick={toggleRead}
            className="bg-[#34E0A1] rounded-lg p-3 w-40  hover:bg-[#34e090da] transition text-white font-inter text-base font-medium leading-8"
          >
            View more
          </button>
        </div>
      )}

      {/* More Properties (Shown when 'View More' is clicked) */}
      {readMore && (
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Property 1 */}
          <div className="shadow-lg rounded-lg">
            <img
              src="../../../../Images/Image 6 (2).png"
              alt="property 1"
              className="shadow-lg rounded-lg w-full"
            />
          </div>
          {/* Property 1 Details */}
          <div className="border-2 border-gray-200 rounded-lg p-4 shadow-lg">
            <h3 className="text-lg sm:text-xl font-semibold text-[#34E0A1]">
              Interior Design
            </h3>
            <p className="text-gray-500 text-sm sm:text-base mt-6 leading-loose mb-6">
              {showFullText
                ? "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet..."
                : "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."}
            </p>
            <button
              onClick={toggleReadMore}
              className="text-[#34E0A1] font-semibold hover:underline"
            >
              {showFullText ? "" : "Read more"}
            </button>
            <div className="mt-12">
              <p className="text-black font-bold text-2xl">$ 20,000/ Month</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentPrperties;
