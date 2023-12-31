import { useSelector } from "react-redux";
import RestaurantBodyCard from "../RestaurantBody/RestaurantBody";
import CardOfRestaurant from "./CardOfRestaurant/CardOfRestaurant";

const RestaurantBody = () => {
  const data = useSelector((store) => store.search.restaurantData);
  if (data === null || data === undefined) return <>loading</>;
  const displayCards = data.cards;
  // displayCards && console.log(displayCards);
  // if (!data.cards) return;

  return (
    <div>
      <div className="min-h-screen">
        <div className="flex   flex-wrap gap-10 border p-4">
          {displayCards &&
            displayCards.map((card) => (
              <h1 key={card?.card?.card?.info?.id}>
                <CardOfRestaurant data={card.card.card} />
              </h1>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantBody;
