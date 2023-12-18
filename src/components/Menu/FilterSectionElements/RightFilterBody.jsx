import { useSelector } from "react-redux";
import CuisinesSection from "./CuisinesSection/CuisinesSection";
import RatingSection from "./RatingsSection/RatingSection";
import SortSection from "./SortSection/SortSection";
import { useState } from "react";

const RightFilterBody = () => {
  const result = useSelector((store) => store.filter.cusineButton);
  const [a, handleButton] = useState(0);
  if (!result) return;
  const ravi = result;

  const submit = (e) => {
    e.preventDefault();
    handleButton((prev) => prev + 1);
  };

  return (
    <div className="w-9/12 border-t-2 p-4 pl-10">
      <form action="" onSubmit={submit}>
        {ravi === "Sort" && <SortSection a={a} />}
        {ravi === "Cuisines" && <CuisinesSection a={a} />}
        {ravi === "Ratings" && <RatingSection a={a} />}
      </form>
      <button onClick={submit}>submit</button>
    </div>
  );
};

export default RightFilterBody;
