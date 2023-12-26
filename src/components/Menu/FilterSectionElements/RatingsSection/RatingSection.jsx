import { useDispatch, useSelector } from "react-redux";
import { updateRating } from "../../../../utils/redux/filterSlice";
import { useEffect } from "react";
import { addCheckboxMainArray } from "../../../../utils/redux/restaurantSlice";

const RatingSection = () => {
  const dispatch = useDispatch();
  const rating = useSelector((store) => store.filter.Rating);
  const current = useSelector((store) => store.filter.currentSort);
  const mainCheckboxData = useSelector(
    (store) => store.restaurant.checkboxData,
  );

  useEffect(() => {
    if (current === "Cuisine") {
      mainCheckboxData &&
        rating.map((m) => {
          if (m.checked) {
            const string = m.rate;
            const rateInNum = string.match(/(\d+(\.\d+)?)/)[0];
            const ratingFiltered = mainCheckboxData.filter(
              (f) => f.info.avgRatingString >= rateInNum,
            );
            dispatch(addCheckboxMainArray(ratingFiltered));
          }
        });
    }
  }, [rating]);

  const handleOnChange = (rate) => {
    dispatch(updateRating(rate.rate));
  };
  const handle = () => {};
  return (
    <div>
      <p className="font-bold md:text-base md:font-normal"> FILTER BY</p>
      <div className="">
        {rating.map((rate) => (
          <div
            className="mt-2  flex  cursor-pointer   "
            key={rate.rate}
            onClick={() => handleOnChange(rate)}
          >
            <input
              type="checkbox"
              name="checkbox"
              className="cursor-pointer"
              checked={rate.checked}
              onChange={handle}
            />
            <h1 className="ml-2  cursor-pointer select-none text-sm   md:text-base">
              {rate.rate}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingSection;
