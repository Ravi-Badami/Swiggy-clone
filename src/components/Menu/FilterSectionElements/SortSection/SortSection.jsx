//React import
import { useEffect } from "react";

//Redux imports
import { useDispatch, useSelector } from "react-redux";
import {
  updateCuisineClicked,
  updateSort,
} from "../../../../utils/redux/filterSlice";
import useSortBy from "../../../../utils/Hooks/useSortBy";
import { addCheckboxMainArray } from "../../../../utils/redux/restaurantSlice";
import useSortCheckBox from "../../../../utils/Hooks/useSortCheckBox";

const SortSection = () => {
  const dispatch = useDispatch();
  const sortBy = useSelector((store) => store.filter.sort);
  const mainCheckboxArray = useSelector(
    (store) => store.restaurant.checkboxMainArray,
  );
  const checkboxArray = useSelector((store) => store.restaurant.checkboxData);

  useEffect(() => {
    if (sortBy === "Relevance") {
      dispatch(addCheckboxMainArray(checkboxArray));
    }
  }, [sortBy, mainCheckboxArray]);

  useSortCheckBox();
  useSortBy();

  const handleSelectedOption = (event) => {
    dispatch(updateSort(event.target.value));
  };

  const handleSubmit = (m) => {
    dispatch(updateCuisineClicked());
    dispatch(updateSort(m));
  };

  const dataArray = [
    "Relevance",
    "Rating",
    "Cost:Low to High",
    "Cost:High to Low",
  ];

  return (
    <div className="">
      <p className="  font-bold md:text-base md:font-normal">SORT BY</p>
      {dataArray.map((m) => (
        <div
          className="mt-2  flex cursor-pointer md:w-[50.7%]   "
          key={m}
          onClick={() => handleSubmit(m)}
        >
          <input
            type="radio"
            value={m}
            checked={sortBy === m}
            name="filter"
            className="h-4 cursor-pointer md:h-auto"
            onChange={(e) => handleSelectedOption(e)}
          />
          <span
            className=" ml-1 cursor-pointer select-none  text-sm md:ml-2 md:text-base
          "
          >
            {m}
          </span>
        </div>
      ))}
      {/* <button onClick={handleButton}>submit</button> */}
    </div>
  );
};

export default SortSection;
