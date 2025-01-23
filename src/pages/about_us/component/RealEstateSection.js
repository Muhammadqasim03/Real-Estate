import React from "react";

const RealEstateSection = () => {
  return (
    <div className="bg-white  container mx-auto px-4 mt-20">
    
      <section className="container lg:py-6 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5  items-center">
      
          <div className="w-full h-full">
            <img
              src="../../../../Images/imagehome.jpg"
              alt="House"
              className="rounded-lg shadow-md w-full  h-full"
            />
          </div>
        
          <div className="h-full w-full flex  justify-center items-center ">
            <div className="">

            <h2 className="text-[#0A0A0A] font-inter text-[45px] font-semibold leading-normal">
              Learn More About Who We Are in Real Estate
            </h2>
            <p className="text-[rgba(10,10,10,0.40)] font-inter text-[20px] font-normal leading-[23.7px]">
              Distinctively re-engineer revolutionary meta-services and premium.
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores.
            </p>
            </div>
            
          </div>
        </div>
      </section>

    
      <section className="container py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
         
          <div className="">
            <h2 className="text-[#0A0A0A] font-inter text-[45px] font-semibold leading-normal ">
              We're reinventing the space
            </h2>
            <p className="text-[rgba(10,10,10,0.40)] font-inter text-[20px] font-normal leading-[23.7px]">
              Distinctively re-engineer revolutionary meta-services and premium.
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores.
            </p>
            <div className="pt-10">
              <h3 className="text-[#0A0A0A] font-inter text-[45px] font-semibold leading-normal">Full Services</h3>
              <p className="text-[rgba(10,10,10,0.40)] font-inter text-[20px] font-normal leading-[23.7px]">
                Interactively procrastinate high-payoff content without
                backward-compatible data.
              </p>
            </div>
            <div className="pt-10">
              <h3 className="text-[#0A0A0A] font-inter text-[45px] font-semibold leading-normal">Safe Investments</h3>
              <p className="text-[rgba(10,10,10,0.40)] font-inter text-[20px] font-normal leading-[23.7px]">
                Interactively procrastinate high-payoff content without
                backward-compatible data.
              </p>
            </div>
          </div>

          
          <div className="relative w-full h-full">
            <img
              src="../../../../Images/Image.jpg"
              alt="Video"
              className="rounded-lg shadow-md w-full  h-full"
            />
            <button className="absolute inset-0 flex items-center justify-center mt-4 mr-10">
              <div className="bg-[#34E0A1] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
               
                <svg
                  xmlns="../../../../Images/Vector.svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.752 11.168l-5.596-3.248A1 1 0 008 8.752v6.496a1 1 0 001.156.968l5.596-3.248a1 1 0 000-1.8z"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealEstateSection;
