/* eslint-disable react/prop-types */

import { RESTUARATANT_IMAGE } from "../../utils/constants";

// import { useContext } from "react";
// import UserContext from "../utils/UserContext";

const EachCard = ({ areaName, avgRating, image, cuisine }) => {
  //   const { loggedInUser } = useContext(UserContext);

  // eslint-disable-next-line react/prop-types

  // eslint-disable-next-line no-unsafe-optional-chaining

  return (
    <div
      data-testid="resCard"
      className=" h-72 w-60 cursor-pointer rounded-lg border-2 shadow-md  shadow-gray-300 drop-shadow-xl transition-all hover:-translate-y-1 hover:bg-gray-100 "
    >
      <img
        className="h-[60%] w-full rounded-lg"
        src={RESTUARATANT_IMAGE + image}
        alt=""
      />
      <div className="  px-2 py-5">
        <h3 className=" font-black">
          <span className=" text-red-600">TAJ</span>BITE-{areaName}
        </h3>
        <h3 className=" font-semibold">Cuisine - {cuisine[0]}</h3>

        <h4 className="">{avgRating} stars</h4>
      </div>
    </div>
  );
};

export const PromotedCard = (EachCard) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    return (
      <div>
        <label className=" absolute -translate-x-4 rounded-sm border-2 border-black bg-black text-white">
          Open
        </label>
        <EachCard {...props} />
      </div>
    );
  };
};
export default EachCard;
