import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSort } from "../../../../utils/redux/filterSlice";

const SortSection = () => {
  const dispatch = useDispatch();
  const result = useSelector((store) => store.filter.sort);
  const [selectedOption, setSelectedOption] = useState(result);

  const handleSelectedOption = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleSubmit = (m) => {
    setSelectedOption(m);
    dispatch(updateSort(selectedOption));
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
            onChange={handleSelectedOption}
          />
          <span className="ml-2 cursor-pointer  select-none">{m}</span>
        </div>
      ))}
      {/* <button onClick={handleButton}>submit</button> */}
    </div>
  );
};

export default SortSection;
