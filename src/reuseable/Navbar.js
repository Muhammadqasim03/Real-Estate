  // import React, { useState } from "react";
  // import { useNavigate } from "react-router-dom";

  // const Navbar = () => {
  //   const navigate = useNavigate();
  //   const [isOpen, setIsOpen] = useState(false); // State to handle mobile menu toggle

  //   const homeRouter = () => {
  //     navigate("/");
  //     setIsOpen(true)
  //   };
  //   const aboutRouter = () => {
  //     navigate("/about");
  //   };

  //   const propertyRouter = () => {
  //     navigate("/property");
  //   };

  //   const SinglePropertyRoute = () => {
  //     navigate("/SingleProperty");
  //   };

  //   const MeetOurAgentsRoute = () => {
  //     navigate("/MeetOurAgents");
  //   };
  //   const SingleAgentRoute = () => {
  //     navigate("/SingleAgentDetail");
  //   };
  //   const BlogsRoute = () => {
  //     navigate("/Blogs");
  //   };

  //   return (
  //     <div className="container mx-auto  ">
  //       <nav className="flex items-center justify-between bg-transparent px-6 py-4">
  //         {/* Logo and Brand */}
  //         <div className="flex items-center justify-start">
  //           <img
  //             src="/Images/pngwing 1.png"
  //             alt="Real Estate Logo"
  //             className="h-8 w-8"
  //           />
  //           <span className="text-lg font-bold ml-2 text-white ">
  //             Real Estate
  //           </span>
  //         </div>

  //         {/* Navbar Links for Desktop */}
  //         <div className="flex justify-end items-center gap-4">
  //           <div className=" hidden lg:flex items-center space-x-14 text-white font-medium">
  //             <ul className="flex space-x-14">
  //               <li
  //                 className="hover:text-[#34E0A1] cursor-pointer hover:scale-110"
  //                 onClick={homeRouter}
  //               >
  //                 Home
  //               </li>
  //               <li
  //                 className="hover:text-[#34E0A1] cursor-pointer hover:scale-110"
  //                 onClick={aboutRouter}
  //               >
  //                 About
  //               </li>
  //               <li
  //                 className="hover:text-[#34E0A1] cursor-pointer hover:scale-110"
  //                 onClick={propertyRouter}
  //               >
  //                 Property
  //               </li>
  //               <li
  //                 className="hover:text-[#34E0A1] cursor-pointer hover:scale-110"
  //                 onClick={SinglePropertyRoute}
  //               >
  //                 SingleProperty
  //               </li>
  //               <li
  //                 className="hover:text-[#34E0A1] cursor-pointer hover:scale-110"
  //                 onClick={MeetOurAgentsRoute}
  //               >
  //                 MeetOurAgents
  //               </li>
  //             </ul>
  //           </div>

  //           <div className="hidden md:flex items-center space-x-4">
  //             <button className="border border-white text-white px-4 py-2 rounded hover:bg-[#34E0A1] hover:text-white transition">
  //               Sign In
  //             </button>
  //             <button className="bg-[#34E0A1] text-white px-4 py-2 rounded hover:bg-[#34e079] transition">
  //               Get Started
  //             </button>

  //             <div className="relative right-0 lg:hidden flex items-center">
  //               <div className="">
  //                 <button
  //                   onClick={() => setIsOpen(!isOpen)}
  //                   className="text-white"
  //                 >
  //                   <svg
  //                     xmlns="http://www.w3.org/2000/svg"
  //                     className="h-6 w-6"
  //                     fill="none"
  //                     viewBox="0 0 24 24"
  //                     stroke="currentColor"
  //                   >
  //                     <path
  //                       strokeLinecap="round"
  //                       strokeLinejoin="round"
  //                       strokeWidth="2"
  //                       d="M4 6h16M4 12h16M4 18h16"
  //                     />
  //                   </svg>
  //                 </button>
  //               </div>
  //             </div>
  //           </div>
  //         </div>

  //         {/* Hamburger Menu (Mobile) */}
  //       </nav>

  //       {/* Mobile Menu */}
  //       {isOpen && (
  //         <div className="lg:hidden bg-black text-white ">
  //           <ul className="flex flex-col sm:items-start absolute right-0 top-0 h-full z-10 px-12 bg-black rounded-s-2xl py-6 font-extrabold font-mono text-2xl text-green-300 ">
  //             <button onClick={() => setIsOpen(!isOpen)} className="text-white">
  //               {
  //                 <svg
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   className="h-6 w-6"
  //                   fill="none"
  //                   viewBox="0 0 24 24"
  //                   stroke="currentColor"
  //                 >
  //                   <path
  //                     strokeLinecap="round"
  //                     strokeLinejoin="round"
  //                     strokeWidth="2"
  //                     d="M6 18L18 6M6 6l12 12"
  //                   />
  //                 </svg>
  //               }
  //             </button>
  //             <li
  //               className="hover:text-[#34E0A1] cursor-pointer py-4 pt-10   "
  //               onClick={homeRouter}
  //             >
  //               Home
  //             </li>
  //             <li
  //               className="hover:text-[#34E0A1] cursor-pointer py-4  "
  //               onClick={aboutRouter}
  //             >
  //               About Us{" "}
  //             </li>
  //             <li
  //               className="hover:text-[#34E0A1] cursor-pointer py-4  "
  //               onClick={propertyRouter}
  //             >
  //               Property
  //             </li>
  //             <li
  //               className="hover:text-[#34E0A1] cursor-pointer py-4  "
  //               onClick={SinglePropertyRoute}
  //             >
  //               SingleProperty
  //             </li>

  //             <li
  //               className="hover:text-[#34E0A1] cursor-pointer py-4 "
  //               onClick={MeetOurAgentsRoute}
  //             >
  //               MeetOurAgents
  //             </li>
  //             <li
  //               className="hover:text-[#34E0A1] cursor-pointer py-4  "
  //               onClick={SingleAgentRoute}
  //             >
  //               SingleAgentDetail
  //             </li>
  //             <li
  //               className="hover:text-[#34E0A1] cursor-pointer py-4 "
  //               onClick={BlogsRoute}
  //             >
  //               Our Blogs
  //             </li>
  //             {/* <li className="hover:text-[#34E0A1] cursor-pointer py-4 " onClick={}>Contact</li> */}
  //             <li className="py-2">
  //               <button className="rounded transition sm:border-0 md:border-0 ">
  //                 Sign In
  //               </button>
  //             </li>
  //             <li className="py-2">
  //               <button className="rounded transition sm:bg-opacity-0 text-green-300 ">
  //                 Get Started
  //               </button>
  //             </li>
  //           </ul>
  //         </div>
  //       )}
  //     </div>
  //   );
  // };

  // export default Navbar;


  import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to handle mobile menu toggle

  return (
    <div className="container mx-auto px-4">
      <nav className="flex relative  items-center justify-between bg-transparent h-[40px] top-4 font-inter  ">
        {/* Logo and Brand */}
        <div className="flex items-center justify-start">
          <img
            src="/Images/pngwing 1.png"
            alt="Real Estate Logo"
            className="h-8 w-8"
          />
          <span className="text-lg font-bold ml-2 text-[#FFFFFF]">Real Estate</span>
        </div>

        {/* Navbar Links for Desktop */}
        <div className="flex justify-end items-center gap-4 ">
          <div className="hidden   lg:flex items-center  text-white font-medium text-[18px] leading-6">
            <div className="flex gap-[42px] ">
              <Link
                to="/"
                className="hover:text-[#34E0A1] cursor-pointer hover:scale-110"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="hover:text-[#34E0A1] cursor-pointer hover:scale-110"
              >
                About
              </Link>
              <Link
                to="/property"
                className="hover:text-[#34E0A1] cursor-pointer hover:scale-110"
              >
                Property
              </Link>
              <Link
                to="/Blog"
                className="hover:text-[#34E0A1] cursor-pointer hover:scale-110"
              >
                Blog
              </Link>
              <Link
                to="/Contect"
                className="hover:text-[#34E0A1] cursor-pointer hover:scale-110"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="border border-white text-white w-[92px] h-[35px] rounded-md hover:bg-[#34E0A1] hover:text-white transition">
              Sign In
            </button>
            <button className="bg-[#34E0A1] text-white w-[129px] h-[35px] rounded-md hover:bg-[#34e079] ">
              Get Started
            </button>

            <div className="relative right-0 lg:hidden flex items-center">
              <div>
                <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden    bg-black text-white">
          <div className="flex flex-col sm:items-start absolute right-0 top-0 h-full z-10 px-12 bg-black rounded-s-2xl py-6 font-extrabold font-mono text-2xl text-green-300">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <Link
              to="/"
              className="hover:text-[#34E0A1] cursor-pointer py-4 pt-10"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-[#34E0A1] cursor-pointer py-4"
            >
              About Us
            </Link>
            <Link
              to="/property"
              className="hover:text-[#34E0A1] cursor-pointer py-4"
            >
              Property
            </Link>
            <Link
              to="/SingleProperty"
              className="hover:text-[#34E0A1] cursor-pointer py-4"
            >
              SingleProperty
            </Link>

            <Link
              to="/MeetOurAgents"
              className="hover:text-[#34E0A1] cursor-pointer py-4"
            >
              MeetOurAgents
            </Link>
            <Link
              to="/SingleAgentDetail"
              className="hover:text-[#34E0A1] cursor-pointer py-4"
            >
              SingleAgentDetail
            </Link>
            <Link
              to="/Blogs"
              className="hover:text-[#34E0A1] cursor-pointer py-4"
            >
              Our Blogs
            </Link>
            {/* <Link className="hover:text-[#34E0A1] cursor-pointer py-4" to="/contact">Contact</Link> */}
            <div className="py-2">
              <button className="rounded transition sm:border-0 md:border-0">
                Sign In
              </button>
            </div>
            <div className="py-2">
              <button className="rounded transition sm:bg-opacity-0 text-green-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
