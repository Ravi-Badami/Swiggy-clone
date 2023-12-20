import { useDispatch, useSelector } from "react-redux";
import {
  addCheckboxFilterData,
  addCheckboxMainArray,
  addRestaurantFilterData,
} from "../redux/restaurantSlice";

const useSortBy = (sortBy) => {
  //   const sortBy = useSelector((store) => store.filter.sort);
  console.log(sortBy);
  const result = useSelector((store) => store.restaurant.restaurantData);
  const checkBox = useSelector((store) => store.restaurant.checkboxData);
  console.log(checkBox);
  const dispatch = useDispatch();

  const extractNumberOfPrice = (number) => {
    return number.info.costForTwo.match(/\d+/)[0];
  };

  if (sortBy === "Relevance") {
    // console.log("relevance");
    dispatch(addRestaurantFilterData(result));
    dispatch(addCheckboxMainArray(checkBox));
  }
  if (sortBy === "Rating") {
    const arr = [...result].sort((a, b) => {
      const A = a.info.avgRating;
      const B = b.info.avgRating;
      return B - A;
    });
    // console.log(arr);
    dispatch(addRestaurantFilterData(arr));
  }

  if (sortBy === "Cost:Low to High") {
    const arr = [...result].sort((a, b) => {
      const A = extractNumberOfPrice(a);
      const B = extractNumberOfPrice(b);
      return A - B;
    });
    //  console.log(arr);
    dispatch(addRestaurantFilterData(arr));
  }
  if (sortBy === "Cost:High to Low") {
    const arr = [...result].sort((a, b) => {
      const A = extractNumberOfPrice(a);
      const B = extractNumberOfPrice(b);
      return B - A;
    });
    //  console.log(arr);
    dispatch(addRestaurantFilterData(arr));
  }
};
export default useSortBy;
