import { useSelector } from "react-redux";
import FoodItems from "./FoodItems";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const heading = useSelector((store) => store.foodCatagory.name);
  const foodName = useSelector((store) => store.foodCatagory.foodItems);

  return (
    heading && (
      <div>
        <div className=" px-4  md:p-8 ">
          <div className=" bg mb-1 flex justify-between text-start">
            <div className="">
              <p className="text-2xl font-extrabold md:text-4xl">{heading}</p>
            </div>
          </div>
          <div className="hide-scrollbar flex overflow-x-scroll">
            <div className="flex">
              {foodName.map((card) => (
                <FoodItems key={card.id} image={card.imageId} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Carousel;
