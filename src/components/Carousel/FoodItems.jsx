import React from "react";
import { CAROUSEL_IMAGE } from "../../utils/constants";

const FoodItems = ({ name, image }) => {
  return (
    <div>
      <div className="   flex    flex-col items-center p-8  ">
        {/* <div className="">{name}</div> */}
        <div className=" ">
          <div className="   flex h-36  w-36 items-center justify-center  ">
            <img src={CAROUSEL_IMAGE + image} alt="" className="  " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItems;
