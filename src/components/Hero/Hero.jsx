import { HERO_IMAGE } from "../../utils/constants";
import HeroButton from "./HeroButton";

const Hero = () => {
  return (
    <>
      <div className=" mt-20 flex h-[42vh] w-screen  select-none justify-around border-b border-gray-400 px-1 py-[7%]  md:mt-10 md:h-[110vh]  md:items-center md:px-28 md:py-0 ">
        {/** Left part of Hero section*/}
        <div className=" borde   w-[50%] border-black pl-5 text-start md:h-[70%]">
          <p className="text-2xl font-extrabold tracking-tight md:text-7xl">
            Culinary artistry in every bite – welcome to TAJBITE
          </p>
          <div className="mt-4  w-[220%]  md:mt-8 ">
            <HeroButton button={"Search"} />
            {/* <HeroButton button={"Book A Table"} /> */}
          </div>
        </div>

        {/** Right part of hero section */}
        <div className="md w-[48%] overflow-hidden rounded-[67px] object-cover drop-shadow-lg md:h-[78%]">
          <div className="  w-[90%] overflow-hidden  rounded-[67px] ">
            <img
              className="  w-full rounded-[67px] object-cover  md:h-full "
              src={HERO_IMAGE}
              alt="hero image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
