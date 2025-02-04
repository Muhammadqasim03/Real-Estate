import React from "react";



import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8  ">
      <div className="container  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5   mt-8 ">
        {/* Contact Information */}
        <div className="tracking-widest">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <span className="bg-[#34E0A1] text-black rounded-full p-2">Re</span>{" "}
            Real Estate
          </h2>
          <p className="mt-2 text-sm">+1 (909) 280-0809</p>
          <p className="mt-2 text-white font-normal text-sm">supportyourteam@gmail.com</p>
          <p className="mt-2 text-white  ">
            8556 Corbin Extension Apt. 356, Lake Denesiborough, South Africa
          </p>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Our Services</h3>
          <ul className="space-y-6 text-white">
            <li>› Web Development</li>
            <li>› Web Designing</li>
            <li>› SEO Marketing</li>
            <li>› Digital Marketing</li>
          </ul>
        </div>

        {/* Our Blog */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Our Blog</h3>
          <ul className="space-y-6 text-white">
            <li>
              <p className="font-medium text-white">
                Freelance Design Tricks How
              </p>
              <p className="text-sm text-gray-500">Jan 02, 2023</p>
            </li>
            <li>
              <p className="font-medium text-white">
                Free Advertising For Your Online
              </p>
              <p className="text-sm text-gray-500">Jan 07, 2023</p>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="">
          <h3 className="text-lg font-semibold mb-3">Links</h3>
          <ul className="space-y-4 text-white">
            <li>› About Us</li>

            <li>› Services</li>
            <li> › Blogs</li>
            <li>› Help</li>
          </ul>
        </div>

        {/* Subscribe Newsletter */}
        <div>
          <h3 className="text-lg font-semibold ">Subscribe Newsletter</h3>
          <p className="text-white text-sm  font-inter pt-4">
            Subscribe to our newsletter for notifications about new updates.
          </p>

          <div className="h-[51px] w-[298px] shrink-0 rounded-lg  flex items-center mt-4    ">
            <input
              type="email"
              placeholder="Enter your email..."
              className="w-full h-full rounded-lg outline-none pl-3 text-sm   "
            />
            <div className="flex w-[40px] h-[40px] rounded-lg justify-center p-[10px_10px_10px_11px] items-start shrink-0 relative right-12 bg-[#34E0A1]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M16.251 0.598213C16.4474 0.741071 16.5278 0.931547 16.4921 1.16964L14.2063 14.8839C14.1766 15.0565 14.0813 15.1905 13.9206 15.2857C13.8373 15.3333 13.745 15.3571 13.6438 15.3571C13.5784 15.3571 13.5069 15.3423 13.4296 15.3125L9.38492 13.6607L7.22421 16.2946C7.11706 16.4315 6.97123 16.5 6.78671 16.5C6.70933 16.5 6.64385 16.4881 6.59028 16.4643C6.47718 16.4226 6.38641 16.3527 6.31796 16.2545C6.2495 16.1562 6.21528 16.0476 6.21528 15.9286V12.8125L13.9296 3.35714L4.38492 11.6161L0.858135 10.1696C0.637897 10.0863 0.518849 9.92262 0.500992 9.67857C0.489087 9.44048 0.584325 9.26488 0.786706 9.15179L15.6438 0.580357C15.7331 0.526785 15.8284 0.5 15.9296 0.5C16.0486 0.5 16.1558 0.532738 16.251 0.598213Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row justify-between text-white text-sm border-t border-gray-700 mt-8 pt-4">
        <p className="text-center lg:text-left">
          Copyright ©2023 All rights reserved | This is made with ❤️ by
          VirtuaNets
        </p>

        <div className="flex justify-center lg:justify-end gap-6 mt-2">
          <a
            href="https://www.linkedin.com/in/mqasimrajpoot"
            className="hover:text-[#34E0A1]"
          >
            <FaFacebook className="w-6 h-6 transition-colors duration-200" />
          </a>
          <a
            href="https://www.linkedin.com/in/mqasimrajpoot"
            className="hover:text-[#34E0A1]"
          >
            <FaTwitter className="w-6 h-6 transition-colors duration-200" />
          </a>
          <a
            href="https://www.instagram.com/mqasimrajpoot"
            className="hover:text-[#34E0A1]"
          >
            <FaInstagram className="w-6 h-6 transition-colors duration-200" />
          </a>
          <a
            href="https://www.linkedin.com/in/mqasimrajpoot"
            className="hover:text-[#34E0A1]"
          >
            <FaLinkedin className="w-6 h-6 transition-colors duration-200" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
