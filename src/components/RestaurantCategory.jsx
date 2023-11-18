import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showList, setShowList }) => {
  const handleClick = () => {
    setShowList(null);
  };

  return (
    <div
      className=" m-2 p-4 w-6/12 mx-auto   cursor-pointer shadow-2xl"
      onClick={handleClick}
    >
      <div className="flex justify-between">
        <div className="flex">
          <div className="">{data.title}</div>
          <div className="">({data.itemCards.length})</div>
        </div>
        <div className="">{showList ? "☝️" : "👇"}</div>
      </div>
      {showList && <ItemList data={data.itemCards} />}
    </div>
  );
};
export default RestaurantCategory;
