import { useSelector } from "react-redux";
import DishesBody from "./DIshesBody/DishesBody";
import RestaurantBody from "./RestaurantBody/RestaurantBody";

const SearchBody = () => {
  const category = useSelector((store) => store.search.displayCategory);

  return (
    <div>
      <div className="mt-10 border border-black"></div>

      {category === "restaurants" && <RestaurantBody />}
      {category === "dishes" && <DishesBody />}
    </div>
  );
};

export default SearchBody;
