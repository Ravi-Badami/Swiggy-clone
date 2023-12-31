import DishesCardBottom from "./DIshesBodyCards/DishesCardBottom";
import DishesCardTop from "./DIshesBodyCards/DishesCardTop";

const DishesBodyCards = ({ data }) => {
  if (!data.card.card || data === undefined) return;
  const { name, ribbon, price } = data?.card?.card?.info;
  const { areaName, avgRating, id } = data?.card?.card?.restaurant?.info;
  const bestSeller = ribbon;

  return (
    <div>
      <div className="   w-96 rounded-2xl border border-black p-4 text-start">
        <DishesCardTop areaName={areaName} avgRating={avgRating} id={id} />
        {"----------------------------------------------"}
        <DishesCardBottom
          bestSeller={bestSeller.text}
          name={name}
          price={price}
        />
      </div>
    </div>
  );
};

export default DishesBodyCards;
