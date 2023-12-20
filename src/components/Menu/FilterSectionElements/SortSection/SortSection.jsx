import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSort } from "../../../../utils/redux/filterSlice";
import useSortBy from "../../../../utils/Hooks/useSortBy";

const SortSection = () => {
  const dispatch = useDispatch();
  const result = useSelector((store) => store.filter.sort);
  const [selectedOption, setSelectedOption] = useState(result);
  const sortBy = useSelector((store) => store.filter.sort);
  // const sort = sortBy;
  useSortBy("sort");
  const handleSelectedOption = (event) => {
    dispatch(updateSort(event.target.value));

    setSelectedOption(event.target.value);
  };
  const handleSubmit = (m) => {
    dispatch(updateSort(m));
    setSelectedOption(m);
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
