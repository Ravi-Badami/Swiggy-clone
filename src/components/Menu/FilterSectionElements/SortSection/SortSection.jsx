import { useState } from "react";

const SortSection = () => {
  const [selectedOption, setSelectedOption] = useState("Relevance");

  const handleSelectedOption = (event) => {
    // console.log(event.target.value);
    setSelectedOption(event.target.value);
  };
  const handleSubmit = () => {
    // console.log(selectedOption);
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
      <form action="" onSubmit={(e) => e.preventDefault()}>
        {dataArray.map((m) => (
          <div className="" key={m}>
            <input
              type="radio"
              value={m}
              checked={selectedOption === m}
              name="filter"
              onChange={handleSelectedOption}
            />
            <span className="">{m}</span>
          </div>
        ))}
        <button onClick={handleSubmit}>submit</button>
      </form>
    </div>
  );
};

export default SortSection;
