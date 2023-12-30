import DishesCardBottom from "./DIshesBodyCards/DishesCardBottom";
import DishesCardTop from "./DIshesBodyCards/DishesCardTop";

const DishesBodyCards = () => {
  return (
    <div>
      <div className="   w-96 rounded-2xl border border-black p-4 text-start">
        <DishesCardTop />
        {"----------------------------------------------"}
        <DishesCardBottom />
      </div>
    </div>
  );
};

export default DishesBodyCards;
