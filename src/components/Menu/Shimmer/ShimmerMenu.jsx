import HeroButtonShimmer from "../../Hero/Shimmer/HeroButtomShimmer";

const ShimmerMenu = () => {
  return (
    <>
      <div className=" mt-10 flex flex-col ">
        <HeroButtonShimmer h="10" w="56" mw="96" mh="20" />
        <div className="mt-4 flex gap-10">
          <HeroButtonShimmer h="10" w="20" />
          <HeroButtonShimmer h="10" w="20" />
          <HeroButtonShimmer h="10" w="20" />
          <HeroButtonShimmer h="10" w="20" />
        </div>
      </div>
    </>
  );
};

export default ShimmerMenu;
