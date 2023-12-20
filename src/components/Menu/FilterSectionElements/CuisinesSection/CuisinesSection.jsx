import { useDispatch, useSelector } from "react-redux";
import {
  updateChecked,
  updateCuisineClicked,
  updateCurrentSort,
} from "../../../../utils/redux/filterSlice";
import {
  addCheckboxFilterData,
  addCheckboxMainArray,
} from "../../../../utils/redux/restaurantSlice";
import { useEffect } from "react";
import useSortBy from "../../../../utils/Hooks/useSortBy";
import useSortCheckBox from "../../../../utils/Hooks/useSortCheckBox";

const CuisinesSection = () => {
  const dispatch = useDispatch();

  const result = useSelector((store) => store.filter.cuisines);

  const sortByCuisine = useSelector((store) => store.filter.cuisines);
  const filteredData = useSelector(
    (store) => store.restaurant.restaurantFilterData,
  );
  const sortBy = useSelector((store) => store.filter.sort);
  const rating = useSelector((store) => store.filter.Rating);

  const cusineArray = [];
  const arr = [];
  const extractNumberOfPrice = (number) => {
    return number.info.costForTwo.match(/\d+/)[0];
  };
  useEffect(() => {
    arr.length > 0 && dispatch(addCheckboxFilterData(arr));
    arr.length > 0 && dispatch(addCheckboxMainArray(arr));
    arr.length === 0 && dispatch(updateCurrentSort("Sort"));
    arr.length > 0 && dispatch(updateCurrentSort("Cuisine"));

    if (sortBy === "Relevance") {
      dispatch(addCheckboxMainArray(arr));
    }
    if (sortBy === "Rating" && arr) {
      // console.log("rating");
      const arrInside = [...arr].sort((a, b) => {
        const A = a.info.avgRating;
        const B = b.info.avgRating;
        return B - A;
      });

      dispatch(addCheckboxMainArray(arrInside));
    }
    if (sortBy === "Cost:Low to High" && arr) {
      const arrInside = [...arr].sort((a, b) => {
        const A = extractNumberOfPrice(a);
        const B = extractNumberOfPrice(b);
        return A - B;
      });
      dispatch(addCheckboxMainArray(arrInside));
    }
    if (sortBy === "Cost:High to Low" && arr) {
      const arrInside = [...arr].sort((a, b) => {
        const A = extractNumberOfPrice(a);
        const B = extractNumberOfPrice(b);
        return B - A;
      });
      dispatch(addCheckboxMainArray(arrInside));
    }
    arr.length === 0 && dispatch(addCheckboxFilterData(null));
    arr.length === 0 && dispatch(addCheckboxMainArray(null));
  }, [arr, rating]);

  sortByCuisine.map((r) => {
    r.checked && cusineArray.push(r.name);
  });

  cusineArray.forEach((c) => {
    filteredData.forEach((f) => {
      if (c === f.info.cuisines[0]) {
        arr.push(f);
      }
    });
  });
  const handleOnChange = (clickedCuisine) => {
    // console.log(clickedCuisine);
    dispatch(updateChecked(clickedCuisine));
    dispatch(updateCuisineClicked());
  };
  const handle = () => {};
  return (
    <div className="overflow-y-scroll scroll-smooth">
      <p className="fixed w-[30%] bg-white">FILTER BY</p>

      <div className=" hide-scrollbar mt-5 flex w-32  flex-col  ">
        <div className="flex h-40 flex-col">
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
                onChange={handle}
              />
              <span className="ml-2 cursor-pointer  select-none">
                {res.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CuisinesSection;
