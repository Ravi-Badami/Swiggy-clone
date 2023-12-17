// import { FaRegClock } from "react-icons/fa6";
// import { MdLocationOn } from "react-icons/md";
// import { IoCallSharp } from "react-icons/io5";

import { CALL_SVG, CLOCK_SVG, LOCATION_SVG } from "../../utils/svg/svg";

const HeroCards = () => {
  const heroCardsData = [
    {
      id: 1,
      content: "Mon-Fri 9am to 10pm",

      icon: (
        <img src={CLOCK_SVG} alt="" className=" h-[1.25rem]  md:h-[2.25rem] " />
      ),
    },
    {
      id: 2,
      content: "Zuari Nagar-Birla,Goa",
      icon: (
        <img
          src={LOCATION_SVG}
          alt=""
          className=" h-[1.25rem]  md:h-[2.25rem] "
        />
      ),
    },
    {
      id: 3,
      content: "9834828746",
      icon: (
        <img src={CALL_SVG} alt="" className=" h-[1.25rem]  md:h-[2.25rem] " />
      ),
    },
  ];
  return (
    <div>
      <div className="flex justify-end ">
        <div className="-mt-10 flex gap-5 px-4  md:w-1/2 md:pr-8">
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
