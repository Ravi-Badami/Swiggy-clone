import { Link } from "react-router-dom";
import { STAR_BLACK, STAR_YELLOW } from "../../../../../../utils/svg/svg";

const DishesCardTop = ({ areaName, avgRating, id }) => {
  return (
    <div className="flex justify-between">
      <div className="w-[45%] md:w-auto">
        <h6 className=" font-medium">By TAJBITE {areaName}</h6>
        <span className="flex gap-1">
          <img className="w-4" src={STAR_BLACK} alt="" />
          <span>{avgRating} </span>
        </span>
      </div>
      <div>
        <button>
          <Link to={"/restaurants/" + id}>
            <span>
              <img
                src="https://www.svgrepo.com/show/521969/arrow-right-circle.svg"
                className="h-6"
                alt=""
              />
            </span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default DishesCardTop;
