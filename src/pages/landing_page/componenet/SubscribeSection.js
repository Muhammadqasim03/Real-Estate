import React, { useState } from 'react';

const SubscribeSection = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
   
    console.log('Subscribed with Email :', email);
  };

  return (
    <div className="relative bg-black h-[300px]  px-4 md:px-6 flex ">
     
      <div className="absolute top-6 right-48 border-2 border-gray-400 w-32 h-28"></div>
      <div className="absolute bottom-20  right-[385px] border-2 border-gray-400 w-10 h-7"></div>
      <div className="absolute bottom-6 right-96 border-2 border-gray-400 w-20 h-12"></div>

     
      <div className="text-white ml-24 mt-20  z-10">
        <h2 className="text-3xl font-bold mb-3">Don’t Miss A Thing!</h2>
        <p className="text-sm mb-6">
          Subscribe with Email and loads of interesting news will be sent to you on a daily basis.
        </p>

        
        <div className="">
          <input
            type="email"
            placeholder="Your Email Here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 w-72 rounded-l-md text-gray-800 outline-none"
          />
          <button
            onClick={handleSubscribe}
            className="bg-[#34E0A1] text-white p-3 rounded-r-md font-semibold hover:bg-green-400"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
