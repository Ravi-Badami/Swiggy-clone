import { useSelector } from "react-redux";
import EachCard from "./EachCard";
import { Link } from "react-router-dom";

const MenuCards = () => {
  const result = useSelector((store) => store.restaurant.restaurantFilterData);
  if (result === null) return;
  console.log(result);

  return (
    <div>
      <div className=" flex w-full    md:w-screen   ">
        <div className="hide-scrollbar flex flex-wrap  justify-start  gap-5 overflow-y-scroll rounded-lg py-5 md:mt-10 md:w-[90.5%]  md:gap-20 md:px-4 md:py-10 ">
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
