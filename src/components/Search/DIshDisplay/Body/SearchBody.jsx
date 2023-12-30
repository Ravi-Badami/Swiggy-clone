import { useSelector } from "react-redux";
import DishesBody from "./DIshesBody/DishesBody";
import RestaurantBody from "./RestaurantBody/RestaurantBody";

const SearchBody = () => {
  const currentBtn = useSelector((store) => store.search.currentButton);

  return (
    <div>
      <div className=" mt-12  border-black bg-white"></div>

      {currentBtn === "Restaurant" && <RestaurantBody />}
      {currentBtn === "Dish" && <DishesBody />}
    </div>
  );
};

export default SearchBody;
