/* eslint-disable react/prop-types */

import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { loggedInUser } = useContext(UserContext);
  // eslint-disable-next-line react/prop-types
  const { resData } = props;
  // eslint-disable-next-line no-unsafe-optional-chaining
  const { name, areaName, avgRating } = resData?.info;

  return (
    <div
      data-testid="resCard"
      className=" w-56 h-64 border-black border-2 border-solid rounded-lg"
    >
      <img src="" alt="" />
      <h3 className="mt-10 font-black">{name}</h3>
      <h4>{areaName}</h4>
      <h4>{avgRating} stars</h4>
      <h4>38 minutes</h4>
      <h4>{loggedInUser}</h4>
    </div>
  );
};

export const PromotedCard = (RestaurantCard) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    return (
      <div>
        <label className=" border-2 border-black bg-black text-white rounded-sm absolute -translate-x-4">
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
