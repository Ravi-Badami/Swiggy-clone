import HeroButton from "../Hero/HeroButton";

const AboutRight = () => {
  return (
    <div className=" flex w-1/2  flex-col items-start   justify-center  md:h-[80%]  md:w-1/2 md:gap-8 ">
      <div className="w-7/12   text-start">
        <span className=" text-base font-bold md:text-7xl">
          About us <span className=" text-red-600">TAJ</span>BITE
        </span>
      </div>
      <div className=" h-24 w-[90%] overflow-clip  text-start md:h-auto md:w-auto">
        <span className="text-[0.60rem] font-semibold   md:text-2xl">
          At TajByte, indulge in a culinary journey where ancient Indian flavors
          meet modern delights -
          <span className="hidden md:block">
            A perfect fusion of Vedic cuisine, pizza, and sweet treats.
          </span>
        </span>
      </div>
      <div className="-ml-1 -mt-8 md:-ml-0 md:-mt-0">
        <HeroButton button={"More"} />
      </div>
    </div>
  );
};

export default AboutRight;
