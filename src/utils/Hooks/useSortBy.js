import { useDispatch, useSelector } from "react-redux";
import { addRestaurantFilterData } from "../redux/restaurantSlice";

const useSortBy = () => {
  const dispatch = useDispatch();
  const result = useSelector((store) => store.restaurant.restaurantData);
  const sortBy = useSelector((store) => store.filter.sort);
  const current = useSelector((store) => store.filter.currentSort);

  const extractNumberOfPrice = (number) => {
    return number.info.costForTwo.match(/\d+/)[0];
  };
  if (current === "Sort") {
    if (sortBy === "Relevance" && result) {
      dispatch(addRestaurantFilterData(result));
    }
    if (sortBy === "Rating" && result) {
      const arr = [...result].sort((a, b) => {
        const A = a.info.avgRating;
        const B = b.info.avgRating;
        return B - A;
      });
      dispatch(addRestaurantFilterData(arr));
    }
    if (sortBy === "Cost:Low to High" && result) {
      const arr = [...result].sort((a, b) => {
        const A = extractNumberOfPrice(a);
        const B = extractNumberOfPrice(b);
        return A - B;
      });
      dispatch(addRestaurantFilterData(arr));
    }
    if (sortBy === "Cost:High to Low" && result) {
      const arr = [...result].sort((a, b) => {
        const A = extractNumberOfPrice(a);
        const B = extractNumberOfPrice(b);
        return B - A;
      });
      dispatch(addRestaurantFilterData(arr));
    }
  }
};
export default useSortBy;
