import React from "react";
import { CAROUSEL_IMAGE } from "../../utils/constants";

const FoodItems = ({ image }) => {
  return (
    <div>
      <div className="   flex flex-col  items-center p-4 md:p-8  ">
        {/* <div className="">{name}</div> */}
        <div className=" ">
          <div className="   flex h-20  w-20 items-center  justify-center md:h-36 md:w-36  ">
            <img src={CAROUSEL_IMAGE + image} alt="" className="  " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItems;
