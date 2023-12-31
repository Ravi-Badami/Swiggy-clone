import { useSelector } from "react-redux";
import CuisinesSection from "./CuisinesSection/CuisinesSection";
import RatingSection from "./RatingsSection/RatingSection";
import SortSection from "./SortSection/SortSection";
import { useEffect, useState } from "react";
// import useSortBy from "../../../utils/Hooks/useSortBy";

const RightFilterBody = () => {
  const result = useSelector((store) => store.filter.cusineButton);
  // const [a, handleButton] = useState(0);
  // const sortBy = useSelector((store) => store.filter.sort);
  // const sort = useSortBy();
  // const sortData = sortBy;

  if (!result) return;
  const ravi = result;

  // const submit = (e) => {
  //   e.preventDefault();
  //   handleButton((prev) => prev + 1);
  //   sort(sortData);
  // };

  return (
    <div className="w-8/12  border-t-2 p-3  md:p-4">
      {/* <form action="" onSubmit={submit}> */}
      {ravi === "Sort" && <SortSection />}
      {ravi === "Cuisines" && <CuisinesSection />}
      {ravi === "Ratings" && <RatingSection />}
      {/* </form>
      <button onClick={submit}>submit</button> */}
    </div>
  );
};

export default RightFilterBody;
