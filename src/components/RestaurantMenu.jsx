// import useOnlineStatus from "../utils/useOnlineStatus";
import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [showList, setShowList] = useState(null);
  // console.log(setShowList);
  // if (showList !== null) {
  //   setShowList(null);
  // }
  const handleToggle = (index) => {
    setShowList(showList === index ? null : index);
  };

  //extracts the resId from url
  const { resId } = useParams();

  //get the data from the API (API call is made in the useRestaurantMenu file which is a custom hook) and resId is pass to it.
  const resMenu = useRestaurantMenu(resId);
  if (resMenu.resMenu === null) return <Shimmer />;
  console.log(resMenu.resMenu.cards);

  const categories =
    resMenu.resMenu.cards[5].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);
  console.log(resMenu?.resMenu);
  const { name, cuisines, costForTwoMessage, id } =
    resMenu?.resMenu?.cards[2]?.card?.card?.info;

  //if resMenu is undefined than shimmer ui will be shown or else menu will be shown
  return (
    <div className=" text-center">
      <h1 className="font-extrabold">{name}</h1>
      <p className="font-extrabold">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/**show each catagory  */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.title}
          showList={index === showList ? true : false}
          data={category.card.card}
          setShowList={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
