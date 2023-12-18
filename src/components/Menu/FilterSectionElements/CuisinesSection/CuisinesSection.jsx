import { useDispatch, useSelector } from "react-redux";
import { updateChecked } from "../../../../utils/redux/filterSlice";

const CuisinesSection = () => {
  const result = useSelector((store) => store.filter.cuisines);
  const dispatch = useDispatch();
  console.log(result);
  const handleOnChange = (clickedCuisine) => {
    // const updatedCuisines = result.map((cuisine) =>
    //   cuisine.id === clickedCuisine.id
    //     ? { ...cuisine, checked: !cuisine.checked }
    //     : cuisine,
    // );
    // console.log(updatedCuisines);
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
                onChange={(e) => handleOnChange(res.name, e.target.value)}
              />
              <span>{res.name}</span>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default CuisinesSection;
