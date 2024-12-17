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
  //  const toggleReadMoreText = () => {
  //   setReadMore(!readMore);
  
  // };
  return (
    // start main div
    <div className="container p-4 ">
      <div className=" w-[700px]  ml-96  ">
        <div className=" text-center">
          <h2 className="font-sans font-medium text-2xl">
            Recent <span className="text-[#34E0A1]  ">Properties</span>
          </h2>
        </div>
        <div className="text-[#0A0A0A66]">
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat{" "}
            <span className="ml-20">
              duis enim velit mollit.Exercitation veniam consequat sunt nostrud
              amet.
            </span>
          </p>
        </div>
      </div>
      <div className="  w-[1235px] ml-24 mt-10 ">
        <div className="grid grid-cols-2 w-[1235px] gap-6  ">
          <div className=" shadow-lg rounded-lg  ">
            <img
              src="../../../../Images/Image 6 (2).png"
              alt="property 1"
              className="shadow-lg rounded-lg"
            ></img>
          </div>

          <div className="border-2 border-gray-200 rounded-lg p-4  shadow-lg">
            <h3 className="text-lg font-semibold text-[#34E0A1]">
              Interior Design
            </h3>
            <p className="text-gray-500 text-sm mt-6 leading-loose mb-6">
              {showFullText
                ? "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
                : "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duExercitation veniam consequat sunt nostrud amet..."}
            </p>
            <button
              onClick={toggleReadMore}
              className="text-[#34E0A1] font-semibold  hover:underline"
            >
              {showFullText ? "" : "Read more"}
            </button>
            <div className="mt-12">
              <p className="text-black font-bold text-2xl">$ 20,000/ Month</p>
            </div>
          </div>
        </div>
        <div className=" mt-4">
          <div className="grid grid-cols-2 w-[1235px] gap-6  ">
            <div className="border-2 border-gray-200 rounded-lg p-4  shadow-lg">
              <h3 className="text-lg font-semibold text-[#34E0A1]">
                Interior Design
              </h3>
              <p className="text-gray-500 text-sm mt-6 leading-loose mb-6">
                {showText
                  ? "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
                  : "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duExercitation veniam consequat sunt nostrud amet..."}
              </p>
              <button
                onClick={toggleText}
                className="text-[#34E0A1] font-semibold  hover:underline"
              >
                {showText ? "" : "Read more"}
              </button>
              <div className="mt-12">
                <p className="text-black font-bold text-2xl">$ 26,000/ Month</p>
              </div>
            </div>
            <div className=" shadow-lg rounded-lg  ">
              <img
                src="../../../../Images/Image 7 (1).png"
                alt="property 1"
                className="shadow-lg rounded-lg"
              ></img>
            </div>
          </div>
        </div>
      </div>
    





      {!readMore && (
        <button
          onClick={toggleRead}
          className=" bg-[#34E0A1] rounded-lg p-3 relative top-6 left-[650px] w-40 border-2 hover:bg-[#34e09eaa] transition"
        >
          View More
        </button>
      )}





        {/* <button className=" bg-[#34E0A1] rounded-lg p-3 relative top-6 left-[650px] w-40 border-2" onClick={toggleReadMoreText}>View More  */}
          {/* {
                readMore
                 ? " "
                  : " "
          } */}
        {/* </button> */}
        {
          readMore && (
            <div className="  w-[1235px] ml-24 mt-10 ">
            <div className="grid grid-cols-2 w-[1235px] gap-6  ">
              <div className=" shadow-lg rounded-lg  ">
                <img
                  src="../../../../Images/Image 6 (2).png"
                  alt="property 1"
                  className="shadow-lg rounded-lg"
                ></img>
              </div>
    
              <div className="border-2 border-gray-200 rounded-lg p-4  shadow-lg">
                <h3 className="text-lg font-semibold text-[#34E0A1]">
                  Interior Design
                </h3>
                <p className="text-gray-500 text-sm mt-6 leading-loose mb-6">
                  {showFullText
                    ? "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
                    : "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duExercitation veniam consequat sunt nostrud amet..."}
                </p>
                <button
                  onClick={toggleReadMore}
                  className="text-[#34E0A1] font-semibold  hover:underline"
                >
                  {showFullText ? "" : "Read more"}
                </button>
                <div className="mt-12">
                  <p className="text-black font-bold text-2xl">$ 20,000/ Month</p>
                </div>
              </div>
            </div>
            <div className=" mt-4">
              <div className="grid grid-cols-2 w-[1235px] gap-6  ">
                <div className="border-2 border-gray-200 rounded-lg p-4  shadow-lg">
                  <h3 className="text-lg font-semibold text-[#34E0A1]">
                    Interior Design
                  </h3>
                  <p className="text-gray-500 text-sm mt-6 leading-loose mb-6">
                    {showText
                      ? "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
                      : "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duExercitation veniam consequat sunt nostrud amet..."}
                  </p>
                  <button
                    onClick={toggleText}
                    className="text-[#34E0A1] font-semibold  hover:underline"
                  >
                    {showText ? "" : "Read more"}
                  </button>
                  <div className="mt-12">
                    <p className="text-black font-bold text-2xl">$ 26,000/ Month</p>
                  </div>
                </div>
                <div className=" shadow-lg rounded-lg  ">
                  <img
                    src="../../../../Images/Image 7 (1).png"
                    alt="property 1"
                    className="shadow-lg rounded-lg"
                  ></img>
                </div>
              </div>
            </div>
          </div> 
          
          )
        }

    </div>
  );
};

export default RecentPrperties;
