import HeroButton from "../HeroButton";
import HeroButtonShimmer from "./HeroButtomShimmer";

const ShimmerHero = () => {
  return (
    <>
      <div className=" md:-mb- mt-20  flex  h-[30vh] w-screen select-none justify-around border-b border-gray-400  px-1 py-[7%]  md:mt-52 md:h-[100vh] md:items-start md:px-28 md:py-0 ">
        {/** Left */}
        <div className=" borde   w-[50%] border-black pl-5 text-start md:h-[70%]">
          <div className="h-[12%] md:h-[7%]">
            <p className=" shimmer-icon mb-4  "></p>
            <p className=" shimmer-icon mb-4  "></p>
            <p className=" shimmer-icon mb-4  "></p>
            <p className=" shimmer-icon mb-4  "></p>
          </div>

          <div className="mt-32   w-[220%] md:mt-56 ">
            <HeroButtonShimmer h="10" w="20" />
            <HeroButtonShimmer h="10" w="20" />
          </div>
        </div>
        {/** Right */}

        <div className="md w-[38%] overflow-hidden rounded-[67px] object-cover md:-mt-24 md:h-[58%] ">
          <div className="  shimmer-icon   overflow-hidden rounded-full "></div>
        </div>
      </div>
    </>
  );
};

export default ShimmerHero;
