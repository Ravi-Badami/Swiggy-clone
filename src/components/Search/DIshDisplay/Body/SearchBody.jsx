import { useSelector } from "react-redux";
import DishesBody from "./DIshesBody/DishesBody";
import RestaurantBody from "./RestaurantBody/RestaurantBody";

const SearchBody = () => {
  const category = useSelector((store) => store.search.displayCategory);

  return (
    <div>
      <div className=" mt-12  border-black bg-white"></div>

      {category === "Restaurant" && <RestaurantBody />}
      {category === "Dish" && <DishesBody />}
    </div>
  );
};

export default SearchBody;
