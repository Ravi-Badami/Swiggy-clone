import { STAR_BLACK } from "../../../../../../utils/svg/svg";

/* eslint-disable react/prop-types */
const CardOfRestaurant = ({ data }) => {
  if (!data || !data.info) return null;
  const { areaName, avgRating, cuisines } = data?.info;

  return (
    <>
      <div className=" flex w-72 gap-3  rounded-xl border-t-4 border-red-500 p-4 shadow-lg shadow-gray-400 md:w-96">
        <div className="md:w-1/3">
          <img
            src=""
            alt="food img "
            className="h-20 w-20 rounded-lg border border-black md:w-20"
          />
        </div>
        <div className="flex flex-col  gap-2   text-start ">
          <p className="text-md font-semibold">TAJBITE {areaName}</p>
          <p className="flex gap-1">
            <img src={STAR_BLACK} className="w-4" alt="" />
            <span>{avgRating}</span>
          </p>
          <div className="borde flex    flex-wrap gap-x-2  border-black text-sm md:h-10 md:w-64   ">
            {cuisines.map((card) => (
              <p key={card}>{card}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardOfRestaurant;
