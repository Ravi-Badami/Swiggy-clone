import React from "react";

const DishesCardBottom = ({ bestSeller, name, price }) => {
  return (
    <div className="flex justify-between">
      <div className=" flex w-3/5 flex-col border">
        <span>{bestSeller}</span>
        <span>{name}</span>
        <span>{price / 100}</span>
      </div>
      <div className="">
        <img src="" alt="food img" />
      </div>
    </div>
  );
};

export default DishesCardBottom;
