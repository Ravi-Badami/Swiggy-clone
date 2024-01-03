/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import DishesCardBottom from "./DIshesBodyCards/DishesCardBottom";
import DishesCardTop from "./DIshesBodyCards/DishesCardTop";

const DishesBodyCards = ({ data }) => {
  if (!data.card.card || data === undefined || !data?.card?.card?.info) return;

  const { name, ribbon, price, isVeg } = data?.card?.card?.info;
  const { areaName, avgRating, id } = data?.card?.card?.restaurant?.info;
  const bestSeller = ribbon;
  console.log(data);

  return (
    <div>
      <div className="    w-80 rounded-2xl  bg-[#F1EFEF] p-4 text-start shadow-md    shadow-gray-500 md:w-96">
        <DishesCardTop areaName={areaName} avgRating={avgRating} id={id} />
        {"------------------------"}
        <DishesCardBottom
          bestSeller={bestSeller.text}
          name={name}
          price={price}
          card={data.card}
          isVeg={isVeg}
        />
      </div>
    </div>
  );
};

export default DishesBodyCards;
