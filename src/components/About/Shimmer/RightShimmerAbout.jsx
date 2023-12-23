import HeroButtonShimmer from "../../Hero/Shimmer/HeroButtomShimmer";

const RightShimmerAbout = () => {
  return (
    <div className=" flex w-1/2  flex-col items-start   justify-center  md:h-[80%]  md:w-1/2 md:gap-8 ">
      <div className=" flex flex-col gap-2">
        <HeroButtonShimmer mh="10" mw="60" h="10" w="20" />
        <HeroButtonShimmer mh="10" mw="60" h="10" w="20" />
      </div>
      <div className=" ">
        <span className="text-base font-medium  md:text-2xl">
          <HeroButtonShimmer mh="10" mw="96" h="10" w="36" />

          <span className="hidden font-medium md:block  ">
            <HeroButtonShimmer h="10" w="96" />
          </span>
        </span>
      </div>
      <div className=" ">
        <HeroButtonShimmer h="10" w="20" />
      </div>
    </div>
  );
};

export default RightShimmerAbout;
