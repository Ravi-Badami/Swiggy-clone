import { useDispatch, useSelector } from "react-redux";
import { addRestaurantFilterData } from "../redux/restaurantSlice";

const useSortBy = (section) => {
  const result = useSelector((store) => store.restaurant.restaurantData);
  const dispatch = useDispatch();
  const sortBy = useSelector((store) => store.filter.sort);

  const extractNumberOfPrice = (number) => {
    return number.info.costForTwo.match(/\d+/)[0];
  };
  //   if (section === "cusine") {
  //     console.log("cusine");
  //     console.log(result);
  //   }
  //   if (section === "sort") {
  //     console.log("sort");
  //   }
  //   section === "sort" && console.log("sort");
  if (sortBy === "Relevance") {
    // console.log("relevance");
    dispatch(addRestaurantFilterData(result));
    //   dispatch(addCheckboxMainArray(checkBox));
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
