import React from "react";
import HeroButtonShimmer from "../../../../Hero/Shimmer/HeroButtomShimmer";

const NoDishFound = () => {
  return (
    <div>
      <div className="fixed right-[0.0000001%] w-screen ">
        <div className="  borde mx-auto flex w-[45%] flex-wrap items-center justify-around  gap-10 border-black">
          no dish
        </div>
      </div>
    </div>
  );
};

export default NoDishFound;
