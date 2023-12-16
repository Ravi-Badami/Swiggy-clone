import { useSelector } from "react-redux";
import EachCard from "./EachCard";
import { Link } from "react-router-dom";

const MenuCards = () => {
  const result = useSelector((store) => store.restaurant.restaurantFilterData);
  if (result === null) return;
  console.log(result);

  return (
    <div>
      <div className=" borde flex w-screen   border-black   ">
        <div className="hide-scrollbar mt-10 flex   w-[90.5%] flex-wrap  justify-start gap-20  overflow-y-scroll rounded-lg   px-4 py-10 ">
          {result.map((card) => (
            <Link key={card.info.id} to={"/restaurants/" + card.info.id}>
              <EachCard
                areaName={card.info.areaName}
                avgRating={card.info.avgRating}
                image={card.info.cloudinaryImageId}
                cuisine={card.info.cuisines}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuCards;
