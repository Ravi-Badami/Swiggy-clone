/* eslint-disable react/prop-types */

import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showList, setShowList }) => {
  // console.log(data);
  const handleClick = () => {
    setShowList();
  };

  return (
    <div className=" m-2 mx-auto w-[75%] cursor-pointer border-b-4 p-1  px-3 shadow-2xl md:w-6/12 ">
      <div
        className={` flex h-full  justify-between hover:shadow-sm hover:shadow-gray-600 hover:drop-shadow-md ${
          showList
            ? "  bg-[#F04949] font-medium text-white shadow-sm shadow-gray-600 drop-shadow-md"
            : " hover:bg-white hover:text-black"
        }   rounded-full  p-2 px-4 hover:bg-[#F04949] hover:font-medium `}
        onClick={handleClick}
      >
        <div className="flex items-center">
          <div className=" select-none text-[0.72rem] md:text-base ">
            {data?.title}
          </div>
          <div className="  select-none text-[0.72rem] md:text-base">
            ({data.itemCards.length})
          </div>
        </div>
        <div className=" select-none text-[0.72rem] md:text-base">
          {showList ? "☝️" : "👇"}
        </div>
      </div>
      {showList && <ItemList data={data.itemCards} />}
    </div>
  );
};
export default RestaurantCategory;
