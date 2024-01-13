import { useDispatch, useSelector } from "react-redux";
import EachCard from "./EachCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { addCheckboxMainArray } from "../../utils/redux/restaurantSlice";

const MenuCards = () => {
  const dispatch = useDispatch();
  const sortBy = useSelector((store) => store.filter.sort);
  const filterData = useSelector(
    (store) => store.restaurant.restaurantFilterData,
  );

  const mainCheckboxData = useSelector(
    (store) => store.restaurant.checkboxMainArray,
  );

  const [display, setDisplay] = useState();

  const checkBoxData = useSelector((store) => store.restaurant.checkboxData);
  const rating = useSelector((store) => store.filter.Rating);
  const current = useSelector((store) => store.filter.currentSort);

  useEffect(() => {
    setDisplay(mainCheckboxData);
    !mainCheckboxData && setDisplay(filterData);
    if (current === "Cuisine") {
      const arr = [];
      mainCheckboxData &&
        rating.map((m) => {
          if (m.checked) {
            const string = m.rate;
            const rateInNum = string.match(/(\d+(\.\d+)?)/)[0];
            const ratingFiltered = mainCheckboxData.filter(
              (f) => f.info.avgRatingString >= rateInNum,
            );

            setDisplay(ratingFiltered);
          } else if (!m.checked) {
            arr.push(1);
            if (arr.length == 3) {
              dispatch(addCheckboxMainArray(checkBoxData));
            }
          }
        });
    }
  }, [checkBoxData, mainCheckboxData, rating]);

  useEffect(() => {
    setDisplay(filterData);

    if (current === "Sort") {
      rating.map((m) => {
        if (m.checked) {
          const string = m.rate;
          const rateInNum = string.match(/(\d+(\.\d+)?)/)[0];
          const ratingFiltered = filterData.filter(
            (f) => f.info.avgRatingString >= rateInNum,
          );
          setDisplay(ratingFiltered);
        }
      });
    }
  }, [sortBy, filterData, rating]);

  if (filterData === null) return;

  if (display === null) return;

  return (
    <div>
      <div className=" flex w-full md:w-screen   ">
        <div className="hide-scrollbar flex select-none  flex-wrap justify-around gap-5 overflow-y-scroll rounded-lg py-5 md:mt-10 md:w-[90.5%] md:justify-start  md:gap-20 md:px-4 md:py-0 ">
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
