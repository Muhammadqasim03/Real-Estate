import React from 'react';

const PropertySection = () => {
  return (
    <div className=" container mx-auto px-4  pt-12  ">
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2  md:grid-cols-2   '>
    <div className="">
        <img
          src="../../../../Images/Photo.jpg" 
          alt="Modern Interior Staircase"
          className=" w-full h-full object-cover" />
      </div>

     
      <div className=" bg-white  xl:pt-20 xl:pl-10 lg:pl-8 lg:pt-20  md:pl-8 md:pt-20 pt-20 pl-8">
        <h2 className="text-5xl xl:font-bold lg:text-4xl lg:font-bold  md:text-3xl md:font-normal text-[#0A0A0A] font-inter text-[45px] font-semibold leading-normal   ">
          Buying & Selling Property In An Easy Way
        </h2>
        <p className=" text-[rgba(10,10,10,0.40)] pt-7 md:pt-5">
          Distinctively re-engineer revolutionary meta-services and premium At vero eos et
          accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
          atque corrupti quos dolores et quas molestias excepturi.
        </p>

       
        <div className="mb-6 flex items-start xl:pt-20 lg:pt-10 md:pt-10  pt-8">
          <div className="mr-4 text-blue-500">
            
            <span className="text-4xl">
              <img src="../../../../Images/Vector.svg" alt='reloading' className=' h-24 w-24'></img>
            </span>
          </div>
          <div className='h-[136px] w-[572px]  ' >
            <h3 className="text-xl font-semibold mb-2 text-[#0A0A0A]">Our Vision</h3>
            <p className="text-[rgba(10,10,10,0.40)] h-[96px] ">
              Distinctively re-engineer revolutionary meta-services and premium At vero eos et accusamus
              et iusto odio dignissimos ducimus qui blanditiis.
            </p>
          </div>
        </div>

       
        <div className="flex items-start relative md:right-1  h-[136px] xl:mt-20 ">
          <div className=" mr-4 text-[#34E0A1]  ">
           
            <span className="text-4xl ">
              <img src='../../../../Images/Icon.svg' alt='reloading' className='h-24 w-24 '></img>
            </span>
          </div>
          <div className='h-[136px] w-[572px]  '>
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-[#0A0A0A66]  h-[96px]">
              Distinctively re-engineer revolutionary meta-services and premium At vero eos et accusamus
              et iusto odio dignissimos ducimus qui blanditiis.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PropertySection;
