import React from "react";
import { FaRegClock } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";

const HeroCards = () => {
  const heroCardsData = [
    {
      id: 1,
      content: "Mon-Fri 9am to 10pm",
      icon: <FaRegClock className="text-4xl" />,
    },
    {
      id: 2,
      content: "Zuari Nagar-Birla,Goa",
      icon: <MdLocationOn className="text-4xl" />,
    },
    {
      id: 3,
      content: "9834828746",
      icon: <IoCallSharp className="text-4xl" />,
    },
  ];
  return (
    <div>
      <div className="flex justify-end">
        <div className="-mt-10 flex w-1/2 gap-5 pr-8">
          {heroCardsData.map((card) => (
            <div
              key={card.id}
              className="flex  w-1/3 flex-col   justify-center rounded-3xl  border-t-4 border-red-400 bg-white  py-5 shadow-xl  drop-shadow-lg"
            >
              <div className=" mx-auto  mb-4  ">{card.icon}</div>
              <span className=" font-bold">{card.content}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCards;
