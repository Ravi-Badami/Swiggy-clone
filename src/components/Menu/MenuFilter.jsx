const MenuFilter = () => {
  return (
    <div>
      <div className="mt-4 flex gap-4">
        <div className="">
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
        </div>
      </div>
    </div>
  );
};

export default MenuFilter;
