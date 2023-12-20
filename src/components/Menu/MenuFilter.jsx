import { useDispatch, useSelector } from "react-redux";
import { lazy, useState } from "react";
import FilterButton from "./FilterButton";
import { addRestaurantFilterData } from "../../utils/redux/restaurantSlice";
const FilterSection = lazy(() => import("./FilterSection"));
import { updateDisplay } from "../../utils/redux/filterSlice";
import SortSection from "./FilterSectionElements/SortSection/SortSection";
import { CLOSE_SVG } from "../../utils/svg/svg";

const MenuFilter = () => {
  const dispatch = useDispatch();
  const result = useSelector((store) => store.restaurant.restaurantData);
  const display = useSelector((store) => store.filter.display);
  const [show, setShow] = useState("hidden");

  const handleClickRating = () => {
    const filteredData = result.filter((res) => res.info.avgRating > 4);

    dispatch(addRestaurantFilterData(filteredData));
  };
  const handleClickPureVeg = () => {
    const filteredData = result.filter((res) => res.info.veg === true);

    dispatch(addRestaurantFilterData(filteredData));
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

  const handleUpdateDisplay = () => {
    dispatch(updateDisplay("block"));
  };

  const handleShow = () => {
    if (show === "block") {
      setShow("hidden");
    }
    if (show === "hidden") {
      setShow("block");
    }
  };

  return (
    <div className="">
      <div className="mt-2 flex flex-wrap gap-2 md:mt-4 md:gap-4">
        <div className="" onClick={handleUpdateDisplay}>
          <FilterButton button={"Filter"} />
        </div>
        <div className="">
          <div className="" onClick={handleShow}>
            <FilterButton button={"Sort"} />
          </div>
          <div
            className={` absolute z-10 mt-3 ${show} br-4 rounded-lg border-b-[4px] border-r-[4px] border-red-500 bg-white p-4 shadow-lg drop-shadow-lg`}
          >
            <div className=" cursor-pointer  ">
              <img
                src={CLOSE_SVG}
                onClick={() => setShow("hidden")}
                className=" ml-[85%]  h-6 "
                alt=""
              />
            </div>

            <SortSection />
          </div>
        </div>
        <div className="" onClick={handleClickRating}>
          <FilterButton button={"Rating 4.0+"} />
        </div>
        <div className="" onClick={handleClickPureVeg}>
          <FilterButton button={"Pure Veg"} />
        </div>
        <div className="" onClick={handleClickLessThan300}>
          <FilterButton button={"Less than Rs. 300"} />
        </div>
      </div>
      <div
        className={` ${display} fixed bottom-0 left-0 right-0 top-0 z-50 flex    items-center justify-center bg-gray-900 bg-opacity-50`}
      >
        <div className="  z-10 h-[63%] w-[55%] rounded-2xl  bg-white">
          <FilterSection />
        </div>
      </div>
    </div>
  );
};

export default MenuFilter;
