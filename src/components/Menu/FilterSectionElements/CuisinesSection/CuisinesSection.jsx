import { useDispatch, useSelector } from "react-redux";
import { updateChecked } from "../../../../utils/redux/filterSlice";
import { addCheckboxFilterData } from "../../../../utils/redux/restaurantSlice";
import { useEffect } from "react";

const CuisinesSection = () => {
  const result = useSelector((store) => store.filter.cuisines);
  const dispatch = useDispatch();
  const sortBy = useSelector((store) => store.filter.sort);

  const sortByCuisine = useSelector((store) => store.filter.cuisines);
  const filteredData = useSelector(
    (store) => store.restaurant.restaurantFilterData,
  );
  // console.log(sortBy);
  const cusineArray = [];
  const arr = [];
  useEffect(() => {
    arr.length > 0 && dispatch(addCheckboxFilterData(arr));

    arr.length === 0 && dispatch(addCheckboxFilterData(null));
  }, [arr]);

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
  // console.log(arr);

  // const extractNumberOfPrice = (number) => {
  //   return number.info.costForTwo.match(/\d+/)[0];
  // };

  // if (sortBy === "Relevance") {
  //   console.log("relevance");
  //   dispatch(addCheckboxFilterData(arr));
  // }
  // if (sortBy === "Rating") {
  //   console.log("raiting");
  //   const arr2 = [...arr].sort((a, b) => {
  //     const A = a.info.avgRating;
  //     const B = b.info.avgRating;

  //     return B - A;
  //   });
  //   // console.log(arr);
  //   dispatch(addCheckboxFilterData(arr2));
  // }

  // if (sortBy === "Cost:Low to High") {
  //   const arr2 = [...arr].sort((a, b) => {
  //     const A = extractNumberOfPrice(a);
  //     const B = extractNumberOfPrice(b);
  //     return A - B;
  //   });
  //   //  console.log(arr);
  //   dispatch(addCheckboxFilterData(arr2));
  // }
  // if (sortBy === "Cost:High to Low") {
  //   const arr2 = [...arr].sort((a, b) => {
  //     const A = extractNumberOfPrice(a);
  //     const B = extractNumberOfPrice(b);
  //     return B - A;
  //   });
  //   //  console.log(arr);
  //   dispatch(addCheckboxFilterData(arr2));
  // }

  // console.log(arr);

  // Dispatch the action with the array using the spread operator

  const handleOnChange = (clickedCuisine) => {
    dispatch(updateChecked(clickedCuisine));
  };
  const handle = () => {};

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
              onChange={handle}
            />
            <span className="ml-2 cursor-pointer  select-none">{res.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CuisinesSection;
