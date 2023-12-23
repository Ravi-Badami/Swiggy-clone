import HeroButtonShimmer from "../Hero/Shimmer/HeroButtomShimmer";

const CarouselShimmer = () => {
  return (
    <div>
      <div className="   mt-14  px-4 md:p-8">
        <div className="  flex justify-between text-start md:mb-1">
          <div className="">
            <p className=" ">
              <HeroButtonShimmer h="10" w="96" />
            </p>
          </div>
        </div>
        <div className="hide-scrollbar flex overflow-x-scroll">
          <div className="mt-5 flex w-full select-none  justify-between md:mt-12">
            <HeroButtonShimmer h="20" w="20" />
            <HeroButtonShimmer h="20" w="20" />
            <HeroButtonShimmer h="20" w="20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselShimmer;
