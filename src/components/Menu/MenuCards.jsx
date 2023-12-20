import { useSelector } from "react-redux";
import EachCard from "./EachCard";
import { Link } from "react-router-dom";

const MenuCards = () => {
  const filterData = useSelector(
    (store) => store.restaurant.restaurantFilterData,
  );
  const checkBoxData = useSelector(
    (store) => store.restaurant.checkboxMainArray,
  );
  // if (checkBoxData === null) return;
  if (filterData === null) return;

  return (
    <div>
      <div className=" flex w-full    md:w-screen   ">
        <div className="hide-scrollbar flex flex-wrap  justify-start  gap-5 overflow-y-scroll rounded-lg py-5 md:mt-10 md:w-[90.5%]  md:gap-20 md:px-4 md:py-10 ">
          {checkBoxData
            ? checkBoxData.map((card) => (
                <Link key={card.info.id} to={"/restaurants/" + card.info.id}>
                  <EachCard
                    areaName={card.info.areaName}
                    avgRating={card.info.avgRating}
                    image={card.info.cloudinaryImageId}
                    cuisine={card.info.cuisines}
                  />
                </Link>
              ))
            : filterData.map((card) => (
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
