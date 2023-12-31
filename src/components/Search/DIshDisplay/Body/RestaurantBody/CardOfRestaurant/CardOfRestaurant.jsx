/* eslint-disable react/prop-types */
const CardOfRestaurant = ({ data }) => {
  if (!data || !data.info) return null;
  const { areaName, avgRating, cuisines } = data?.info;

  return (
    <div>
      <div className="flex w-96 rounded-xl border border-black p-4">
        <div className=" w-1/3">
          <img src="" alt="food img" />
        </div>
        <div className="w-2/3 border border-red-300 text-start">
          <p>TAJBITE{areaName}</p>
          <p>{avgRating}stars</p>
          <div className="flex gap-2 overflow-hidden">
            {cuisines.map((card) => (
              <p key={card}>{card}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardOfRestaurant;
