import { useEffect, useState } from "react";
import PopFilterButton from "./PopFilterButton";
import { useDispatch, useSelector } from "react-redux";
import { updateButton } from "../../../utils/redux/filterSlice";

const FilterBodyLeft = () => {
  const result = useSelector((store) => store.filter.cusineButton);
  const [selectedButton, setSelectedButton] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    setSelectedButton(result);
  }, []);
  console.log(selectedButton);
  const handleButtonClick = (button) => {
    dispatch(updateButton(button));
    setSelectedButton(button);
    // Add your logic for handling the button click here
  };
  return (
    <div className="LEFT   w-4/12 border-t-2 ">
      <div className=" flex  flex-col items-start gap-2 border-r p-2 ">
        <PopFilterButton
          button={"Sort"}
          isSelected={selectedButton === "Sort"}
          onClick={() => handleButtonClick("Sort")}
        />

        <PopFilterButton
          button="Cuisines"
          isSelected={selectedButton === "Cuisines"}
          onClick={() => handleButtonClick("Cuisines")}
        />
        <PopFilterButton
          button="Ratings"
          isSelected={selectedButton === "Ratings"}
          onClick={() => handleButtonClick("Ratings")}
        />
      </div>
    </div>
  );
};

export default FilterBodyLeft;
