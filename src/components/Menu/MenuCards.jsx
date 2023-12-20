import { useDispatch, useSelector } from "react-redux";
import EachCard from "./EachCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { addCheckboxMainArray } from "../../utils/redux/restaurantSlice";

const MenuCards = () => {
  const sortBy = useSelector((store) => store.filter.sort);
  const cusineClick = useSelector((store) => store.filter.cuisineClicked);
  const dispatch = useDispatch();
  const filterData = useSelector(
    (store) => store.restaurant.restaurantFilterData,
  );
  const mainCheckboxData = useSelector(
    (store) => store.restaurant.checkboxMainArray,
  );
  const [display, setDisplay] = useState();

  // console.log(mainCheckboxData);
  const checkBoxData = useSelector((store) => store.restaurant.checkboxData);
  // console.log(checkBoxData);
  // dispatch(addCheckboxMainArray(checkBoxData));

  useEffect(() => {
    setDisplay(mainCheckboxData);
    !mainCheckboxData && setDisplay(filterData);
  }, [checkBoxData, mainCheckboxData]);

  useEffect(() => {
    setDisplay(filterData);
    // console.log("filter:", filterData);
  }, [sortBy, filterData]);

  if (filterData === null) return;

  if (display === null) return;

  return (
    <div>
      <div className=" flex w-full    md:w-screen   ">
        <div className="hide-scrollbar flex flex-wrap  justify-start  gap-5 overflow-y-scroll rounded-lg py-5 md:mt-10 md:w-[90.5%]  md:gap-20 md:px-4 md:py-10 ">
          {!display
            ? filterData.map((card) => (
                <Link key={card.info.id} to={"/restaurants/" + card.info.id}>
                  <EachCard
                    areaName={card.info.areaName}
                    avgRating={card.info.avgRating}
                    image={card.info.cloudinaryImageId}
                    cuisine={card.info.cuisines}
                  />
                </Link>
              ))
            : display.map((card) => (
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
