import { useDispatch, useSelector } from "react-redux";
import { updateChecked } from "../../../../utils/redux/filterSlice";

const CuisinesSection = () => {
  const result = useSelector((store) => store.filter.cuisines);
  const dispatch = useDispatch();
  const handleOnChange = (clickedCuisine) => {
    dispatch(updateChecked(clickedCuisine));
  };

  return (
    <div className="">
      <p>FILTER BY</p>

      <div className=" w-32 ">
        {result.map((res) => (
          <div
            className="mt-2  flex w-[92%] cursor-pointer   "
            key={res.id}
            onClick={() => handleOnChange(res.name)}
          >
            <input
              type="checkbox"
              name="cuisine"
              checked={res.checked}
              className=" cursor-pointer"
              // onChange={() => handleOnChange(res.name)}
            />
            <span
              className="ml-2 cursor-pointer  select-none"
              // onClick={() => handleOnChange(res.name)}
            >
              {res.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CuisinesSection;
