import HeroButton from "../Hero/HeroButton";

const AboutRight = () => {
  return (
    <div className=" flex w-1/2  flex-col items-start   justify-center  md:h-[80%]  md:w-1/2 md:gap-6 ">
      <div className="w-7/12   text-start">
        <span className=" text-xl   font-extrabold tracking-tight md:text-7xl">
          About us <span className=" tracking-tight text-red-600">TAJ</span>BITE
        </span>
      </div>
      <div className=" my-2 h-24 w-[85%] overflow-clip  text-start md:h-auto md:w-auto">
        <span className="text-base font-medium  tracking-tight md:text-2xl">
          At TajByte, indulge in a culinary journey where ancient Indian flavors
          meet modern delights -
          <span className="hidden font-medium md:block  ">
            A perfect fusion of Vedic cuisine, pizza, and sweet treats.
          </span>
        </span>
      </div>
      <div className="-ml-2 mt-2  ">
        <HeroButton button={"More"} />
      </div>
    </div>
  );
};

export default AboutRight;
