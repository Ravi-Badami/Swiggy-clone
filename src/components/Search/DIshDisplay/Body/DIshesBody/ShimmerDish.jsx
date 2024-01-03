import React from "react";
import HeroButtonShimmer from "../../../../Hero/Shimmer/HeroButtomShimmer";

const ShimmerDish = () => {
  return (
    <div>
      <div className="fixed right-[0.0000001%] w-screen ">
        <div className="  borde mx-auto flex w-[45%] flex-wrap items-center justify-around  gap-10 border-black">
          <HeroButtonShimmer h="44" w="56" />
          <HeroButtonShimmer h="44" w="56" />
          <HeroButtonShimmer h="44" w="56" />
          <HeroButtonShimmer h="44" w="56" />
        </div>
      </div>
    </div>
  );
};

export default ShimmerDish;
