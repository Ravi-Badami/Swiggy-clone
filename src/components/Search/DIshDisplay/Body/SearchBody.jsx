import { useSelector } from "react-redux";
import DishesBody from "./DIshesBody/DishesBody";
import RestaurantBody from "./RestaurantBody/RestaurantBody";

const SearchBody = () => {
  const currentBtn = useSelector((store) => store.search.currentButton);

  return (
    <div className="flex items-center justify-center">
      <div className="  borde  mt-7   scroll-smooth rounded-lg border-black  md:ml-0 md:mt-0 ">
        {currentBtn === "Restaurant" && <RestaurantBody />}
        {currentBtn === "Dish" && <DishesBody />}
      </div>
    </div>
  );
};

export default SearchBody;
