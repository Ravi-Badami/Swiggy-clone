import { useDispatch, useSelector } from "react-redux";
import FilterButton from "./FilterButton";
import { addRestaurantFilterData } from "../../utils/redux/restaurantSlice";
import FilterSection from "./FilterSection";
const MenuFilter = () => {
  const dispatch = useDispatch();
  const result = useSelector((store) => store.restaurant.restaurantData);
  const handleClickRating = () => {
    const filteredData = result.filter((res) => res.info.avgRating > 4);
    // console.log(filteredData);
    dispatch(addRestaurantFilterData(filteredData));
  };
  const handleClickPureVeg = () => {
    const filteredData = result.filter((res) => res.info.veg === true);
    // console.log(filteredData);
    dispatch(addRestaurantFilterData(filteredData));
  };
  const handleClickAll = () => {
    dispatch(addRestaurantFilterData(result));
  };
  const handleClickLessThan300 = () => {
    const filteredData = result.filter((res) => {
      // Extract numeric value from the costForTwo string
      const match = res.info.costForTwo.match(/\d+/); // This regex extracts all digits

      // Check if there is a numeric value and if it is less than 300
      if (match) {
        const costForTwoNumeric = parseInt(match[0], 10); // Use the first match
        return costForTwoNumeric <= 300;
      }

      // If there is no numeric value, exclude it from the filtered result
      return false;
    });
    // console.log(filteredData);
    dispatch(addRestaurantFilterData(filteredData));
  };

  return (
    <div className="">
      <div className="mt-2 flex flex-wrap gap-2 md:mt-4 md:gap-4">
        <div className="" onClick={handleClickAll}>
          <FilterButton button={"All"} />
        </div>
        <FilterButton button={"Filter"} />
        <FilterButton button={"Sort"} />
        <div className="" onClick={handleClickRating}>
          <FilterButton button={"Rating 4.0+"} />
        </div>
        <div className="" onClick={handleClickPureVeg}>
          <FilterButton button={"Pure Veg"} />
        </div>
        <div className="" onClick={handleClickLessThan300}>
          <FilterButton button={"Less than Rs. 300"} />
        </div>
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
      <div className=" fixed bottom-0 left-0 right-0 top-0  z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="  z-10 h-[63%] w-[55%] rounded-2xl  bg-white">
          <FilterSection />
        </div>
      </div>
    </div>
  );
};

export default MenuFilter;
