import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCheckboxMainArray } from "../redux/restaurantSlice";

const useSortCheckBox = () => {
  const dispatch = useDispatch();
  const checkboxArray = useSelector((store) => store.restaurant.checkboxData);
  const sortBy = useSelector((store) => store.filter.sort);
  const extractNumberOfPrice = (number) => {
    return number.info.costForTwo.match(/\d+/)[0];
  };
  // if (!checkboxArray) return;
  if (!checkboxArray || checkboxArray.length === 0) return;

  useEffect(() => {
    if (sortBy === "Relevance" && checkboxArray) {
      dispatch(addCheckboxMainArray(checkboxArray));
    }
    if (sortBy === "Rating" && checkboxArray) {
      console.log("rating");
      const arr = [...checkboxArray].sort((a, b) => {
        const A = a.info.avgRating;
        const B = b.info.avgRating;
        return B - A;
      });
      dispatch(addCheckboxMainArray(arr));
    }
    if (sortBy === "Cost:Low to High" && checkboxArray) {
      const arr = [...checkboxArray].sort((a, b) => {
        const A = extractNumberOfPrice(a);
        const B = extractNumberOfPrice(b);
        return A - B;
      });
      dispatch(addCheckboxMainArray(arr));
    }
    if (sortBy === "Cost:High to Low" && checkboxArray) {
      const arr = [...checkboxArray].sort((a, b) => {
        const A = extractNumberOfPrice(a);
        const B = extractNumberOfPrice(b);
        return B - A;
      });
      dispatch(addCheckboxMainArray(arr));
    }
  }, [sortBy]);
};
export default useSortCheckBox;
