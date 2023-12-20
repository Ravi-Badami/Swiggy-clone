import { useEffect, useState } from "react";
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
  const [selectedOption, setSelectedOption] = useState(sortBy);

  const mainCheckboxArray = useSelector(
    (store) => store.restaurant.checkboxMainArray,
  );
  const checkboxArray = useSelector((store) => store.restaurant.checkboxData);
  // console.log(sortBy2);
  // console.log(sortBy);

  useEffect(() => {
    if (sortBy === "Relevance") {
      dispatch(addCheckboxMainArray(checkboxArray));
    }
  }, [sortBy]);
  useSortCheckBox();

  useSortBy("sort");
  const handleSelectedOption = (event) => {
    dispatch(updateSort(event.target.value));
    setSelectedOption(event.target.value);
  };
  const handleSubmit = (m) => {
    // console.log("clicked");
    dispatch(updateCuisineClicked());

    dispatch(updateSort(m));
    setSelectedOption(m);
    // console.log("clicked");
  };

  const dataArray = [
    "Relevance",
    "Rating",
    "Cost:Low to High",
    "Cost:High to Low",
  ];
  return (
    <div className="">
      <p> SORT BY</p>

      {dataArray.map((m) => (
        <div
          className="mt-2  flex w-[50.7%] cursor-pointer   "
          key={m}
          onClick={() => handleSubmit(m)}
        >
          <input
            type="radio"
            value={m}
            checked={selectedOption === m}
            name="filter"
            className="cursor-pointer"
            onChange={(e) => handleSelectedOption(e)}
          />
          <span className="ml-2 cursor-pointer  select-none">{m}</span>
        </div>
      ))}
      {/* <button onClick={handleButton}>submit</button> */}
    </div>
  );
};

export default SortSection;
