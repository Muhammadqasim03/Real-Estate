import React, { useState } from "react";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    console.log("Subscribed with Email :", email);
  };

  return (
    <div
      className="relative  bg-contain  h-[554px]  flex    "
      style={{ backgroundImage: `url('/Images/Group.png')` }}
    >
      <div className="text-white container  borde-2 mx-auto px-4 gap-4     flex flex-col justify-center justify-items-center ">
        <h2 className="text-white font-inter text-4xl font-semibold tracking-[1.04px] capitalize ">
          Don’t Miss A Thing!
        </h2>
        <p className="text-white font-inter text-base font-medium leading-[42px] tracking-normal">
          Subscribe with Email and loads of interesting news will be sent to you
          on a daily basis.
        </p>

        <div className="flex ">
          {/* <input
            type="email"
            placeholder="Your Email Here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" flex w-[552px] p-[21.333px]  px-[32px] items-center gap-[10.667px] rounded-[10.667px_0px_0px_10.667px] border-[1.333px] border-solid border-white bg-white shadow-[0px_1.333px_2.667px_0px_rgba(16,24,40,0.05)]"
          /> */}
          <input
            type="email"
            placeholder="Your Email Here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full max-w-[552px] p-[21.333px] px-[32px] items-center gap-[10.667px]
             rounded-[10.667px_0px_0px_10.667px] border-[1.333px] border-solid border-white
             bg-white shadow-[0px_1.333px_2.667px_0px_rgba(16,24,40,0.05)]"
          />

          <button
            onClick={handleSubscribe}
            className=" flex xl:w-[240px] lg:w-[230px]  md:w-[150px]    px-[6.667px] justify-center items-center gap-[10.667px] rounded-[0px_10.667px_10.667px_0px] bg-[#34E0A1] shadow-[0px_1.5px_2.25px_0px_rgba(35,31,32,0.06)]"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
