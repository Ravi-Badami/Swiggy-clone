const DishesCardTop = ({ areaName, avgRating }) => {
  return (
    <div className="flex justify-between">
      <div className="">
        <h6>By TAJBITE {areaName}</h6>
        <span>{avgRating} stars</span>
      </div>
      <div>{"->"}</div>
    </div>
  );
};

export default DishesCardTop;
