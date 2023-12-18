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
      <form action="" onSubmit={(e) => e.preventDefault} className="">
        <div className=" w-32 border border-black">
          {result.map((res) => (
            <div className="" key={res.id}>
              <input
                type="checkbox"
                name="cuisine"
                // value={!res.cuisine.checked && res}
                checked={res.checked}
                className=""
                onChange={() => handleOnChange(res.name)}
              />
              <span
                className="cursor-pointer select-none"
                onClick={() => handleOnChange(res.name)}
              >
                {res.name}
              </span>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default CuisinesSection;
