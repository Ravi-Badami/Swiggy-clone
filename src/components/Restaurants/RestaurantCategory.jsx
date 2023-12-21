/* eslint-disable react/prop-types */
import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showList, setShowList }) => {
  const handleClick = () => {
    setShowList();
  };

  return (
    <div className=" m-2 mx-auto w-6/12 cursor-pointer border-b-4  p-2 px-3 shadow-2xl ">
      <div
        className={` flex justify-between  hover:shadow-sm hover:shadow-gray-600 hover:drop-shadow-md ${
          showList
            ? "  bg-[#F04949] font-medium text-white shadow-sm shadow-gray-600 drop-shadow-md"
            : " hover:bg-white hover:text-black"
        }   rounded-full  p-2 px-4 hover:bg-[#F04949] hover:font-medium `}
        onClick={handleClick}
      >
        <div className="flex">
          <div className=" select-none">{data?.title}</div>
          <div className="  select-none">({data.itemCards.length})</div>
        </div>
        <div className=" select-none">{showList ? "☝️" : "👇"}</div>
      </div>
      {showList && <ItemList data={data.itemCards} />}
    </div>
  );
};
export default RestaurantCategory;
