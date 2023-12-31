import DishesBodyCards from "../DIshesBody/DishesBodyCards";
import { useSelector } from "react-redux";

const RestaurantBody = () => {
  const data = useSelector((store) => store.search.restaurantData);
  data && console.log(data);

  return (
    <div>
      <div className="min-h-screen">
        <div className="flex   flex-wrap gap-10 border p-4">
          {data?.cards &&
            data?.cards.map((card, index) => <DishesBodyCards key={index} />)}
        </div>
      </div>
    </div>
  );
};

export default RestaurantBody;
