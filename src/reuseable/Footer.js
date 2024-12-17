import React from 'react';
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
 
  return (
    <footer className="bg-black text-white p-8">
      <div className="container mx-auto grid grid-cols-5 md:grid-cols-4  lg:grid-cols-5 gap-6 mt-8 ">
        
        <div className='tracking-widest'>
          <h2 className="text-xl font-bold flex items-center gap-2">
            <span className="bg-[#34E0A1] text-black rounded-full p-2">Re</span> Real Estate
          </h2>
          <p className="mt-2">+1 (909) 280-0809</p>
          <p className="mt-1 text-gray-400">supportyourteam@gmail.com</p>
          <p className="mt-1 text-gray-400">
            8556 Corbin Extension Apt. 356, Lake Denesiborough, South Africa
          </p>
        </div>

       
        <div className=''>
          <h3 className="text-lg font-semibold mb-3">Our Services</h3>
          <ul className="space-y-4 text-gray-400 ">
            <li>› Web Development</li>
            <li>› Web Designing</li>
            <li>› SEO Marketing</li>
            <li>› Digital Marketing</li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-lg font-semibold mb-3">Our Blog</h3>
          <ul className="space-y-6 text-gray-400">
            <li>
              <p className="font-medium text-white">Freelance Design Tricks How</p>
              <p className="text-sm text-gray-500">Jan 02, 2023</p>
            </li>
            <li>
              <p className="font-medium text-white">Free Advertising For Your Online</p>
              <p className="text-sm text-gray-500">Jan 07, 2023</p>
            </li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-3">Links</h3>
          <ul className="space-y-4 text-gray-400">
            <li>About Us</li>
            <li>Services</li>
            <li>Blogs</li>
            <li>Help</li>
          </ul>
        </div>


        <div>
      
        <h3 className="text-lg font-semibold mt-6 mb-3">Subscribe Newsletter</h3>
          <p className="text-gray-400 text-sm mb-2">
            Subscribe to our newsletter for notifications about new updates.
          </p>

          
          <div className="flex  mt-7">
            <input
              type="email"
              placeholder="Enter your email..."
              className="p-2 rounded-l-md text-gray-800 outline-none w-full"
            />
            <button className="bg-[#34E0A1] p-2 rounded-r-md hover:bg-green-500">
              ➜
            </button>
          </div>


        </div>
      </div>

      
      <div className=" flex justify-between text-gray-400 text-sm border-t border-gray-700 mt-8 pt-4">
        <p>Copyright ©2023 All rights reserved | This is made with ❤️ by VirtuaNets</p>
        <div className=" gap-4 mt-2">
          <a href="www.linkedin.com/in/mqasimrajpoot" className="hover:text-white"><FaFacebook className="w-6 h-6" /> </a>
          <a href="www.linkedin.com/in/mqasimrajpoot" className="hover:text-white">🔗</a>
          <a href="www.linkedin.com/in/mqasimrajpoot" className="hover:text-white">🔗</a>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;
