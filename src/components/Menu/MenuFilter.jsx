import FilterButton from "./FilterButton";
const MenuFilter = () => {
  return (
    <div>
      <div className="mt-2 flex flex-wrap gap-2 md:mt-4 md:gap-4">
        <FilterButton button={"Filter"} />
        <FilterButton button={"Sort"} />
        <FilterButton button={"Rating 4.0+"} />
        <FilterButton button={"Pure Veg"} />
        <FilterButton button={"Less than Rs. 300"} />
        {/* <div className="">
          <button className="  rounded-full  bg-[#F04949] px-6 py-2 font-medium text-white drop-shadow-xl">
            Filter
          </button>
        </div>
        <div className="">
          <button className="  rounded-full  bg-[#F04949] px-6 py-2 font-medium text-white drop-shadow-xl">
            Sort
          </button>
        </div>
        <div className="">
          <button className="  rounded-full  bg-[#F04949] px-6 py-2 font-medium text-white drop-shadow-xl">
            Rating 4.0+
          </button>
        </div>
        <div className="">
          <button className="  rounded-full  bg-[#F04949] px-6 py-2 font-medium text-white drop-shadow-xl">
            Pure Veg
          </button>
        </div>
        <div className="">
          <button className="  rounded-full  bg-[#F04949] px-6 py-2 font-medium text-white drop-shadow-xl">
            Less than Rs. 300
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default MenuFilter;
