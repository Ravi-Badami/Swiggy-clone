import { Link } from "react-router-dom";

const DishesCardTop = ({ areaName, avgRating, id }) => {
  return (
    <div className="flex justify-between">
      <div className="">
        <h6>By TAJBITE {areaName}</h6>
        <span>{avgRating} stars</span>
      </div>
      <div>
        <button>
          <Link to={"/restaurants/" + id}>
            <span>{"->"}</span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default DishesCardTop;
