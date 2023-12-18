import { useDispatch, useSelector } from "react-redux";
import { updateRating } from "../../../../utils/redux/filterSlice";

const RatingSection = () => {
  const dispatch = useDispatch();
  const ratings = useSelector((store) => store.filter.Rating);

  const handleOnChange = (rate) => {
    dispatch(updateRating(rate.rate));
  };
  return (
    <div>
      <p> FILTER BY</p>
      <div className="">
        {ratings.map((rate) => (
          <div
            className="mt-2  flex w-[24%] cursor-pointer  "
            key={rate.rate}
            onClick={() => handleOnChange(rate)}
          >
            <input
              type="checkbox"
              name="checkbox"
              className="cursor-pointer"
              checked={rate.checked}
            />
            <h1 className="ml-2 cursor-pointer select-none  ">{rate.rate}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingSection;
