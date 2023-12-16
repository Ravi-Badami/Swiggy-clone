import { FaRegClock } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";

const HeroCards = () => {
  const heroCardsData = [
    {
      id: 1,
      content: "Mon-Fri 9am to 10pm",
      icon: <FaRegClock className=" text-xl  md:text-4xl" />,
    },
    {
      id: 2,
      content: "Zuari Nagar-Birla,Goa",
      icon: <MdLocationOn className=" text-xl  md:text-4xl" />,
    },
    {
      id: 3,
      content: "9834828746",
      icon: <IoCallSharp className=" -mt-3 text-xl  md:-mt-0 md:text-4xl" />,
    },
  ];
  return (
    <div>
      <div className="flex justify-end ">
        <div className="-mt-10 flex gap-5 pr-8 md:w-1/2 md:pr-8">
          {heroCardsData.map((card) => (
            <div
              key={card.id}
              className="flex  flex-col justify-center   rounded-3xl   border-t-4 border-red-400 bg-white  px-3 py-3  shadow-xl drop-shadow-lg  md:w-1/3 md:px-0 md:py-7"
            >
              <div className=" mx-auto  mb-2 md:mb-4">{card.icon}</div>
              <span className=" text-[0.7rem] font-bold  md:text-base">
                {card.content}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCards;
