import HeroButtonShimmer from "../../Hero/Shimmer/HeroButtomShimmer";

const ShimmerSearchDisplayResults = () => {
  return (
    <div className=" h-screen w-full md:w-2/3">
      <div className="fixed -mt-[1.8rem] h-[60%] w-full  md:w-2/3">
        <div className="flex flex-col items-start">
          <div>
            <HeroButtonShimmer h="10" w="20" />
            <HeroButtonShimmer h="10" w="20" />
          </div>
          <div className="bg  mt-10 flex w-full flex-wrap items-center justify-around gap-20 pl-[4%]">
            <HeroButtonShimmer h="44" w="56" />
            <HeroButtonShimmer h="44" w="56" />
            <HeroButtonShimmer h="44" w="56" />
            <HeroButtonShimmer h="44" w="56" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerSearchDisplayResults;
