/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import DishesCardBottom from "./DIshesBodyCards/DishesCardBottom";
import DishesCardTop from "./DIshesBodyCards/DishesCardTop";

const DishesBodyCards = ({ data }) => {
  if (!data.card.card || data === undefined || !data?.card?.card?.info) return;

  const { name, ribbon, price } = data?.card?.card?.info;
  const { areaName, avgRating, id } = data?.card?.card?.restaurant?.info;
  const bestSeller = ribbon;

  return (
    <div>
      <div className="   rounded-2xl border border-black p-4 text-start md:w-96">
        <DishesCardTop areaName={areaName} avgRating={avgRating} id={id} />
        {"----------------------------------------------"}
        <DishesCardBottom
          bestSeller={bestSeller.text}
          name={name}
          price={price}
          card={data.card}
        />
      </div>
    </div>
  );
};

export default DishesBodyCards;
