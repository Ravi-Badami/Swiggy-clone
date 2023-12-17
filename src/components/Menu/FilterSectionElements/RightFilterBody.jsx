import CuisinesSection from "./CuisinesSection/CuisinesSection";
import RatingSection from "./RatingsSection/RatingSection";
import SortSection from "./SortSection/SortSection";

const RightFilterBody = () => {
  const ravi = "cuisines";

  // TODO: Change the value when clicked on the text also
  return (
    <div className="w-9/12 border-t-2 p-4 pl-10">
      {ravi === "sort" && <SortSection />}
      {ravi === "cuisines" && <CuisinesSection />}
      {ravi === "rating" && <RatingSection />}
    </div>
  );
};

export default RightFilterBody;
