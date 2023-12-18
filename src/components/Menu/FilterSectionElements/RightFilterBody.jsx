import { useSelector } from "react-redux";
import CuisinesSection from "./CuisinesSection/CuisinesSection";
import RatingSection from "./RatingsSection/RatingSection";
import SortSection from "./SortSection/SortSection";

const RightFilterBody = () => {
  const result = useSelector((store) => store.filter.cusineButton);
  if (!result) return;
  const ravi = result;

  return (
    <div className="w-9/12 border-t-2 p-4 pl-10">
      {ravi === "Sort" && <SortSection />}
      {ravi === "Cuisines" && <CuisinesSection />}
      {ravi === "Ratings" && <RatingSection />}
    </div>
  );
};

export default RightFilterBody;
