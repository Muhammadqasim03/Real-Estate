import React from "react";
import Navbar from "../../../reuseable/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
const HeroSection = ({ title, backgroundImage , className }) => {
  const contactInfo = [
    { label: "Email", value: "dwilliam@mail.com", icon: faEnvelope },
    { label: "Phone", value: "+716 - 560 - 1920", icon: faPhone },
  ];
  return (
   
     <div
      className="bg-cover bg-center  relative h-[764px]"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0  container mx-auto  ">
        <div className="grid grid-cols-1 lg:grid-cols-2  inset-0  h-full z-10   ">
          <div className=" relative md:pt-60  lg:pt-60 pt-48 lg:pl-20 md:pl-20 pl-10 xl:space-y-7 lg:space-y-3 space-y-5">
            <h1 className="text-white font-inter text-[55.218px] font-semibold leading-[118.5%]">
              Elena Gilberts
            </h1>

            <p className=" text-white font-inter lg:text-[23.361px] text-base font-normal leading-snug">
              Distinctively re-engineer revolutionary meta-services and premium.
              Distinctively re-engineer revolutionary meta-services and premium
              At vero eos et accusamus et iusto{" "}
            </p>
            <p className="text-white font-inter lg:text-[23.361px] text-base  font-normal leading-snug ">
              Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores et quas molestias excepturi.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            {/* <div className="border-2 border-red-400">
              <p>
                <span>Email:</span> dwilliam@mail.com
              </p>
              <p>
                <span>Phone:</span> +716 - 560 - 1920
              </p>  
            </div> */}
            <div className="">
              {contactInfo.map((info, index) => (
                <p
                  key={index}
                  className="flex items-center  gap-2 lg:pt-3 text-white"
                >
                  <FontAwesomeIcon
                    icon={info.icon}
                    className="text-[#34E0A1]"
                  />
                  <span className="font-bold text-white   "></span> {info.value}
                </p>
              ))}
            </div>
          </div>
          <div className="xl:w-[550.73px] xl:h-[650px] lg:w-[350px] lg:h-[450px]   w-[320.73px] h-[470px]      xl:top-[250px] lg:top-[250px] md:top-8   top-14 flex items-center justify-center rounded-[10px] bg-white/20 shadow-[14px_-14px_29px_rgba(187,187,187,0.25)] relative xl:left-28  md:left-20 xxs:left-5  ">
            <div className="relative  ">
              {/* // w-[464px] h-[566px]  */}
              <img
                src="../../../../Images/SingleProfileAgent.png"
                alt="Hero Section Illustration"
                className="  object-cover  rounded-[10px] xl:w-[500.73px] xl:h-[600px] lg:w-[300px] lg:h-[400px] h-[420px] w-[270px]  "
              />
            </div>
          </div>

          <div className="lg:flex lg:flex-row md:flex md:flex-row sm:flex sm:flex-row  flex flex-col  lg:gap-[40px] md:gap-[40px] gap-[20px] relative  justify-center   xl:top-24  lg:top-[50px]  md:top-10  top-20   xl:left-16 lg:left-20   XL:justify-center  sm:justify-center lg:justify-between   ">
            <div className="text-center text-[rgba(10,10,10,1)] font-semibold">
              <h2>6,180</h2>
              <p className=" whitespace-nowrap font-inter text-[20px] font-normal leading-[24.2px] text-center  underline-offset-[from-font] decoration-skip-ink-none text-[rgba(10,10,10,0.4)]">
                In property sales
              </p>
            </div>
            <div className="text-center text-[rgba(10,10,10,1)] font-semibold">
              <h2>99%</h2>
              <p className=" whitespace-nowrap font-inter text-[20px] font-normal leading-[24.2px] text-center  underline-offset-[from-font] decoration-skip-ink-none text-[rgba(10,10,10,0.4)]">
                Customer satisfaction
              </p>
            </div>
            <div className="text-center text-[rgba(10,10,10,1)] font-semibold">
              <h2>25k+</h2>
              <p className="  whitespace-nowrap  font-inter text-[20px] font-normal leading-[24.2px] text-center  underline-offset-[from-font] decoration-skip-ink-none text-[rgba(10,10,10,0.4)]">
                Property Transactions
              </p>
            </div>
          </div>
        </div>
      </div>

      <Navbar />
    </div>
   
  );
};

export default HeroSection;
