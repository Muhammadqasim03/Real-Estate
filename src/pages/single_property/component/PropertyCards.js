import React from "react";
import { useNavigate } from "react-router-dom";
import PropertyList from "../../../reuseable/PropertyList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


const PropertyCards = () => {
        const navigate=useNavigate()

        const SingleAgentDetails =()=>{
            navigate('/SingleAgentDetail')
        }
  return (
    <div className=" bg-white  ">
      <div className=" container mx-auto px-4  pt-12  mb-20">
        <div className="  grid  lg:grid-cols-2  xl:grid-cols-2    items-start gap-24">
          <div className="flex  flex-col items-start gap-[23px] shrink-0  overflow-hidden ">
            <p className="text-[rgba(10,10,10,0.4)] font-inter text-[20px] font-normal leading-[118.5%] ">
            <FontAwesomeIcon icon={faLocationDot} style={{color: "#38bc6b",}} /> 709 West Drive Chicago, IL 60606
            </p>
            <h1 className="text-[var(--Real-Estate-Dark,#0A0A0A)] font-inter text-[45px] font-bold leading-[118.5%] ">
              Modern Loft in Land River
            </h1>
            <p className="text-[rgba(10,10,10,0.4)] font-inter text-[20px] font-normal leading-[118.5%] ">
              Efficiently unleash cross-media information without cross-media
              value. Quickly maximize timely deliverables for real-time schemas.
              Dramatically.
              
            
            </p>
            
          </div>
          <PropertyList></PropertyList>
         
        </div>
      
      
        <hr className="pt-6 mt-6 border-black border-1 "></hr>
       

        <div className="  flex lg:flex-row  gap-20   md:flex-col sm:flex-col flex-col ">
          <div className=" flex flex-col items-start gap-12   ">
            <div className="flex flex-col  items-start gap-[15px]   ">
              <h2 className="text-[#0A0A0A] font-inter text-3xl font-bold leading-[118.5%]  ">
                About the property
              </h2>
              <p className="  text-[rgba(10,10,10,0.40)] font-['Inter'] text-[20px] font-normal leading-[1.185]">
                Laminate flooring is a more affordable option in place of
                hardwood flooring that can cost almost ten times the cost of
                laminate flooring. Laminate flooring is light, durable and can
                be made to resemble.<br></br>
                <p className="mt-4">
                  Appropriately empower dynamic leadership skills after business
                  portals. Globally my cardinate interactive supply chains with
                  distinctive{" "}
                  <span className="text-[#34E0A1] font-extrabold">
                    {" "}
                    quality vectors global sources services.
                  </span>{" "}
                  Uniquely matrix economically sound value through cooperative
                  technology. Competently parallel task fully researched data
                  and enterprise process improvements.
                </p>
              </p>
              <ul className="list-disc pl-6 text-[rgba(10,10,10,0.40)] font-['Inter'] text-[20px] font-normal leading-[2]">
                <li className="">
                  Dynamically target high-payoff intellectual capital for
                  customized
                </li>
                <li className="">
                  Interactively procrastinate high-payoff content
                </li>
                <li className="">
                  Credibly reintermediate backend ideas for cross-platform
                  models
                </li>
              </ul>
              <p className=" text-[rgba(10,10,10,0.40)] font-['Inter'] text-[20px] font-normal leading-[1.185]">
                Uniquely matrix economically sound value through cooperative
                technology. Competently parallel task fully researched data and
                enterprise process improvements. Collaboratively expedite
                quality manufactured products via client-focused results quickly
                communicate enabled technology and turnkey leadership skills.
                Uniquely enable accurate supply chains rather than friction
                technology.
              </p>
            </div>

            <div className="  flex  lg:p-[50px_100px]  justify-center items-start gap-[10px] rounded-[8px] bg-[var(--Real-Estate-White,#FFF)] shadow-[0_0_54px_5px_rgba(20,20,20,0.1)]  ">
              <h3 className="   flex items-center text-[rgba(10,10,10,0.40)] text-center font-['Source_Sans_3'] text-[30px] italic font-normal leading-[1.3]">
                “Democracy must be built through open societies that share
                information. When there is information, there is enlightenment.
                When there is no sharing of power, no rule of law, no
                accountability, there is abuse, corruption and indignation.”
              </h3>
            </div>

            <div className="flex flex-col  items-start gap-[15px]  ">
              <h2 className="text-[#0A0A0A] font-inter text-3xl font-bold leading-[118.5%] ">
                Make real time a build services
              </h2>
              <p className="  text-[rgba(10,10,10,0.40)] font-['Inter'] text-[20px] font-normal leading-[1.185]">
                Collaboratively administrate empowered markets via plug-and-play
                networks. Dynamically procrastinate B2C users after installed
                base benefits . Dramatically visualize customer directed
                convergence without revolutionary ROI.
              </p>
              <ol className="list-decimal pl-6 text-[rgba(10,10,10,0.40)] font-['Inter'] text-[20px] font-normal leading-[2]">
                <li className="">
                  Dynamically target high-payoff intellectual capital for
                  customized
                </li>
                <li className="">
                  Interactively procrastinate high-payoff content
                </li>
                <li className="">
                  Credibly reintermediate backend ideas for cross-platform
                  models
                </li>
              </ol>
              <p className=" text-[rgba(10,10,10,0.40)] font-['Inter'] text-[20px] font-normal leading-[1.185]">
                It is a long established fact that a reader will be distracted
                by the readable content page when looking at its layout. The
                point of using Lorem Ipsum is that it more-or-less normal
                distribution of letters, as felt opposed to using 'Content here
                making it look like readable.
              </p>
            </div>
          </div>

          <div className=" ">
         
            <div className="flex p-[35px_42px] items-start gap-[10px] mx-auto rounded-[5px] bg-white shadow-[0px_0px_54px_5px_rgba(20,20,20,0.10)] " onClick={SingleAgentDetails}>
              <div className="flex flex-col items-start gap-[25px]  ">
                <h3 className="text-[#0A0A0A] font-inter text-[25px] font-medium leading-[118.5%]">
                  About Agent
                </h3>
                <p className="text-[rgba(10,10,10,0.40)] font-inter text-[18px] font-normal leading-[118.5%]">
                  A perfect property finder and seller with great knowledge in
                  the real estate field. Talented in searching for a property
                  within the customer's needed areas.
                </p>
                <div className="flex items-center my-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full">
                    <img
                      src="../../../../Images/profilesingleproperty.png"
                      alt="Agent"
                    />
                  </div>
                  <div className="ml-4">
                    <p className="text-[#0A0A0A] font-inter text-[20px] font-medium leading-[118.5%]">
                      Anne Hathaway
                    </p>
                    <p className="text-sm text-gray-500">Land Seller</p>
                  </div>
                </div>
                <p className="text-sm">
                  <a
                    href="mailto:anne-hathaway@gmail.com"
                    className="text-[rgba(10,10,10,0.40)] font-inter text-[18px] font-normal leading-[176.5%]"
                  >
                    anne-hathaway@gmail.com
                  </a>
                </p>
                <p className="text-[rgba(10,10,10,0.40)] font-inter text-[18px] font-normal leading-[176.5%]">
                  +1 719-504-1984
                </p>
              </div>
            </div>

            <div className="flex p-[35px_45px] items-start mt-16 rounded-[5px] bg-white shadow-[0px_0px_54px_5px_rgba(20,20,20,0.10)]  mx-auto h-auto">
              <form className="flex flex-col gap-[20px] w-full">
                <input
                  id="name"
                  type="text"
                  className=" h-[70px] rounded-[8px] border border-[rgba(10,10,10,0.40)] px-4"
                  placeholder="Your name"
                />
                <input
                  id="email"
                  type="email"
                  className=" h-[70px] rounded-[8px] border border-[rgba(10,10,10,0.40)] px-4"
                  placeholder="Your email"
                />
                <input
                  id="phone"
                  type="text"
                  className=" h-[70px] rounded-[8px] border border-[rgba(10,10,10,0.40)] px-4"
                  placeholder="Your phone"
                />
                <textarea
                  id="message"
                  rows="4"
                  className=" h-[150px] rounded-[8px] border border-[rgba(10,10,10,0.40)] px-4"
                  placeholder="Your message"
                ></textarea>
                <button
                  type="submit"
                  className="bg-[#34E0A1]   rounded-xl flex p-[13px_45px] justify-center items-center gap-[10px] w-32"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCards;






