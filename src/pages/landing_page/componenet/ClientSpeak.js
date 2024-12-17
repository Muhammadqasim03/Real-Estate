


import React, { useState } from "react";

const ClientSpeak = () => {
  const [activePage, setActivePage] = useState(1);

  const cardData = [
    [
      {
        title: "Professional Partner",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor non sit sed magna pharetra in amet porta enim.",
        img: "../../../../Images/Avatar 1.png",
        name: "Lorri Warf",
        role: "UX Designer",
      },
      {
        title: "Great Collaboration",
        text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
        img: "../../../../Images/Profile (1).png",
        name: "John Doe",
        role: "Project Manager",
      },
      {
        title: "Excellent Support",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        img: "../../../../Images/profile.png",
        name: "Jane Smith",
        role: "Product Owner",
      },
    ],
    [
      {
        title: "Innovative Ideas",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        img: "../../../../Images/Avatar 1.png",
        name: "Alice Brown",
        role: "Software Engineer",
      },
      {
        title: "Timely Delivery",
        text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        img: "../../../../Images/Profile (1).png",
        name: "Bob White",
        role: "Team Lead",
      },
      {
        title: "Great Outcome",
        text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.",
        img: "../../../../Images/profile.png",
        name: "Charlie Green",
        role: "Marketing Specialist",
      },
    ],
  ];

  return (
    <div className="container p-4">
      <div className="w-[700px] ml-96 mt-12">
        <div className="text-center">
          <h2 className="font-sans font-medium text-2xl">
            Our Client<span className="text-[#34E0A1]"> Speak</span>
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

      <div className="grid grid-cols-3 mt-12 p-4 ml-24">
        {cardData[activePage - 1].map((card, index) => (
          <div
            key={index}
            className="inner-div relative w-80 p-6 bg-white rounded-lg text-center"
          >
            <div className="card-data border-2 shadow-2xl">
              <div className="text-4xl text-teal-300">
                <b>“</b>
              </div>
              <h2 className="text-lg font-bold text-black mb-2">{card.title}</h2>
              <p className="text-sm text-gray-500 mb-4">{card.text}</p>
            </div>
            <div className="absolute left-[147px] top-[168px] transform -translate-x-1/2 w-5 h-5 bg-white shadow-lg rotate-45"></div>
            <img
              src={card.img}
              alt="Profile"
              className="w-16 h-16 rounded-full shadow-md mt-6 ml-[93px]"
            />
            <h3 className="text-sm font-semibold text-black mt-1 mr-3">
              {card.name}
            </h3>
            <p className="text-xs text-gray-400 mr-3">{card.role}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        {[1, 2].map((page) => (
          <div
            key={page}
            onClick={() => setActivePage(page)}
            className={`w-3 h-3 mx-2 rounded-full cursor-pointer ${
              activePage === page ? "bg-green-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ClientSpeak;
