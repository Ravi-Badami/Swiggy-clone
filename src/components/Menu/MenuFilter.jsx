//Redux import
import { useDispatch, useSelector } from "react-redux";
import { addRestaurantFilterData } from "../../utils/redux/restaurantSlice";
import {
  updateChecked,
  updateDisplay,
  updateRating,
  updateSort,
} from "../../utils/redux/filterSlice";

//Component imports
import FilterButton from "./FilterButton";
import FilterSection from "./FilterSection";

// TODO clear filter not working for Pure veg, less than 300 and Rating 4.0+
const MenuFilter = () => {
  const dispatch = useDispatch();
  const result = useSelector((store) => store.restaurant.restaurantData);
  const cuisine = useSelector((store) => store.filter.cuisines);
  const rating = useSelector((store) => store.filter.Rating);
  const display = useSelector((store) => store.filter.display);

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
      //* Extract numeric value from the costForTwo string
      const match = res.info.costForTwo.match(/\d+/); //* This regex extracts all digits

      //* Check if there is a numeric value and if it is less than 300
      if (match) {
        const costForTwoNumeric = parseInt(match[0], 10); // *Use the first match
        return costForTwoNumeric <= 300;
      }
      // *If there is no numeric value, exclude it from the filtered result
      return false;
    });
    dispatch(addRestaurantFilterData(filteredData));
  };

  const handleUpdateDisplay = () => {
    dispatch(updateDisplay("block"));
  };

  const handleClearFilters = () => {
    dispatch(updateSort("Relevance"));
    cuisine.map((m) => {
      if (m.checked) {
        dispatch(updateChecked(m.name));
      }
    });
    rating.map((r) => r.checked && dispatch(updateRating(r.rate)));
  };
  // const handleShow = () => {
  //   if (show === "block") {
  //     setShow("hidden");
  //   }
  //   if (show === "hidden") {
  //     setShow("block");
  //   }
  // };

  const buttonObject = [
    {
      name: "Filter",
      button: handleUpdateDisplay,
    },

    {
      name: "Rating 4.0+",
      button: handleClickRating,
    },
    {
      name: "Less than Rs. 300",
      button: handleClickLessThan300,
    },
    {
      name: "Pure Veg",
      button: handleClickPureVeg,
    },

    {
      name: "Clear filters",
      button: handleClearFilters,
    },
  ];

  return (
    <>
      <div className="mt-2 flex select-none flex-wrap gap-2 md:mt-4 md:gap-4 ">
        {buttonObject.map((b) => (
          <div key={b.name} className="" onClick={b?.button}>
            <FilterButton button={b?.name} />
          </div>
        ))}
        {/* <div className="">
          <div className="">
            <FilterButton button={"Sort"} />
          </div>
          <div
            className={` br-4 absolute z-10 mt-3 rounded-lg border-b-[4px] border-r-[4px] border-red-500 bg-white p-4 shadow-lg drop-shadow-lg`}
          >
            <div className=" cursor-pointer  ">
              <img
                src={CLOSE_SVG}
                // onClick={() => setShow("hidden")}
                className=" ml-[85%]  h-6 "
                alt=""
              />
            </div>
          </div>
        </div> */}
      </div>
      <div
        className={` ${display} fixed bottom-0 left-0 right-0 top-0 z-50 flex    items-center justify-center bg-gray-900 bg-opacity-50`}
      >
        <div
          className="  z-10 h-[33%] w-[55%]   overflow-hidden rounded-2xl 
        bg-white md:h-[50%] "
        >
          <FilterSection />
        </div>
      </div>
    </>
  );
};

export default MenuFilter;
