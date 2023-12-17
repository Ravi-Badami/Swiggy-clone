import { useState } from "react";
import { useSelector } from "react-redux";

const CuisinesSection = () => {
  const [isChecked, setIsChecked] = useState({
    American: false,
    Indian: false,
  });
  const result = useSelector((store) => store.restaurant.restaurantFilterData);
  const handleOnChange = (checkBoxName, country) => {
    console.log(country);
    setIsChecked({
      ...isChecked,
      [checkBoxName]: !isChecked[checkBoxName],
    });
  };

  return (
    <div className="">
      <p>FILTER BY</p>
      <form action="" onSubmit={(e) => e.preventDefault} className="">
        <div className=" w-24 border border-black">
          {result.map((res) => (
            <div className="" key={res.info.id}>
              <input
                type="checkbox"
                name="cuisine"
                value={!isChecked.American && res.info.cuisines[0]}
                checked={isChecked.American}
                onChange={(e) => handleOnChange("American", e.target.value)}
              />
              <span>{res.info.cuisines[0]}</span>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default CuisinesSection;
